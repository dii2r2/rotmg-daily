"use client"

import { useState, useEffect, Fragment } from "react"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import { rotmgDailyQuests } from "../data/rotmgDailyQuests"
import { QuestCard } from "./questCard"
import { GithubIcon } from "./icons"
import { DailyQuests, loadDailyQuests, saveDailyQuests } from "../lib/dailyQuests"

export default function Tracker() {
  const [quests, setQuests] = useState<DailyQuests>({})

  useEffect(() => {
    setQuests(loadDailyQuests())
  }, [])

  const updateQuests = (updated: DailyQuests) => {
    setQuests(updated)
    saveDailyQuests(updated)
  }

  return (
    <div className="grid grid-cols-1 h-screen place-content-start">
      <nav className="p-6 flex flex-wrap items-center justify-between gap-3 bg-primary">
        <h1 className="text-2xl font-semibold">Daily RotMG Tracker</h1>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/dii2r2/rotmg-daily"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full gap-2 bg-secondary p-1 transition-colors hover:bg-accent"
          >
            <GithubIcon className="size-8" />
          </a>
        </div>
      </nav>
      <TabGroup>
        <TabList className="flex flex-row gap-2 shadow-lg z-50 bg-primary">
          <Tab as={Fragment}>
            {({ selected }: { selected: boolean }) => (
              <button type="button" className="basis-1/2 cursor-pointer outline-none">
                <h2
                  className={`${selected && "bg-accent text-accent-content"} text-center py-3 text-2xl`}
                >
                  Quest List
                </h2>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }: { selected: boolean }) => (
              <button type='button' className="basis-1/2 cursor-pointer outline-none">
                <h2
                  className={`${selected && "bg-accent text-accent-content"} text-center py-3 text-2xl`}
                >
                  Active Quests
                </h2>
              </button>
            )}
          </Tab>
        </TabList>
        <TabPanels className="flex flex-col h-max bg-light_misty_blue">
          <TabPanel className="flex gap-2">
            {rotmgDailyQuests.map((category) => (
              <div className="basis-1/4" key={category.title}>
                <div className="bg-secondary text-secondary-content mb-2 rounded-b-md shadow-sm py-1.5">
                  <h2 className="text-xl text-center">
                    {category.title}
                  </h2>
                </div>
                <div>
                  {category.quests.map((quest) => {
                    const isSelected = quests[category.title]?.includes(quest.title) ?? false
                    return (
                      <QuestCard
                        category={category}
                        isSelected={isSelected}
                        quest={quest}
                        quests={quests}
                        updateQuests={updateQuests}
                        key={quest.title}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </TabPanel>
          <TabPanel className="flex gap-2">
            {rotmgDailyQuests.map((category) =>
              quests[category.title] && (
                <div className="basis-1/4" key={category.title}>
                  <div className="bg-secondary text-secondary-content mb-2 rounded-b-md shadow-sm py-1.5">
                    <h2 className="text-xl text-center">
                      {category.title}
                    </h2>
                  </div>
                  <div>
                    {category.quests.map((quest) =>
                      quests[category.title]?.includes(quest.title) && (
                        <QuestCard
                          category={category}
                          isSelected={true}
                          quest={quest}
                          quests={quests}
                          updateQuests={updateQuests}
                          key={quest.title}
                        />
                      ),
                    )}
                  </div>
                </div>
              )
            )}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}