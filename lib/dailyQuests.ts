import { QuestCategory } from "../data/rotmgDailyQuests";

export type DailyQuests = Record<string, string[]>;

const STORAGE_KEY = "dailyQuests";

type StoredPayload = {
  date: string; // UTC date string, e.g. "2026-08-27"
  quests: DailyQuests;
};

/**
 * Get todays UTC date as a "YYYY-MM-DD" string.
 */
function getUtcDateString(date: Date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function loadDailyQuests(): DailyQuests {
  if (typeof window === "undefined") return {};

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw) as StoredPayload;
    if (parsed.date !== getUtcDateString()) {
      // previous day reset
      window.localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return parsed.quests ?? {};
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }
}

export function saveDailyQuests(quests: DailyQuests) {
  if (typeof window === "undefined") return;

  // tag the current selection with todays UTC date
  const payload: StoredPayload = { date: getUtcDateString(), quests };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

/**
 * Return a new selection state with the given quest toggled on/off for a category.
 * "Standard" and "Mighty" allow up to 2 active selections
 */
export function normalizeSelection(
  category: string,
  questTitle: string,
  dailyQuests: DailyQuests,
): DailyQuests {
  const maxSelected = category === "Standard Quests" || category === "Mighty Quests" ? 2 : 1;
  const existing = dailyQuests[category] ?? [];
  const isSelected = existing.includes(questTitle);

  const next = isSelected
    ? existing.filter((title) => title !== questTitle)
    : [...existing.slice(existing.length >= maxSelected ? 1 : 0), questTitle];

  return { ...dailyQuests, [category]: next };
}

export type { QuestCategory };