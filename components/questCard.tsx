"use client"

import Image from "next/image"
import { Quest, QuestCategory } from "../data/rotmgDailyQuests"
import { CheckIcon } from "./icons"
import { DailyQuests, normalizeSelection } from "../lib/dailyQuests"

export function QuestCard({
  category,
  quest,
  isSelected,
  quests,
  updateQuests,
}: {
  category: QuestCategory
  quest: Quest
  isSelected: boolean
  quests: DailyQuests
  updateQuests: (quests: DailyQuests) => void
}) {
  const handleSelect = () => {
    updateQuests(normalizeSelection(category.title, quest.title, quests))
  }

  return (
    <div
      key={quest.title}
      onClick={handleSelect}
      className={`${isSelected ? "bg-accent text-accent-content" : "bg-primary text-primary-content"} relative rounded-lg shadow-sm px-5 py-4 cursor-pointer flex focus:outline-none my-2`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="w-full">
          <div className="text-sm">
            <p className={`font-semibold`}>
              {quest.title}
            </p>
            <span className={`inline`}>
              <div className="py-2 w-full items-center">
                <div className="flex gap-0.5 float-left">
                  {quest.needed.flatMap((item) =>
                    Array.from({ length: item.amount }, (_, idx) => (
                      <Image key={`need-${quest.title}-${item.file}-${idx}`} height={28} width={28} src={item.file} alt="" />
                    )),
                  )}
                </div>
                <div className="flex gap-0.5 float-right">
                  {quest.rewards.flatMap((item) =>
                    Array.from({ length: item.amount }, (_, idx) => (
                      <Image key={`reward-${quest.title}-${item.file}-${idx}`} height={28} width={28} src={item.file} alt="" />
                    )),
                  )}
                  {isSelected && (
                    <div className="text-white float-right ml-1">
                      <CheckIcon className="w-7 h-7" />
                    </div>
                  )}
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}