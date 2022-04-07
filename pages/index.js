import { useState, Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.scss";
import { Menu } from "@headlessui/react";
import { Tab } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
const rotmgDailyQuests = [
  {
    title: "Scout Quests",
    quests: [
      {
        title: "Scout the Pit",
        needed: [
          {
            file: ["snake_pit.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["speed.png"],
            amount: [2],
          },
        ],
      },
      {
        title: "Scout the Sewers",
        needed: [
          {
            file: ["toxic_sewers.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["defense.png"],
            amount: [2],
          },
        ],
      },
      {
        title: "Scout the Abyss",
        needed: [
          {
            file: ["abyss_of_demons.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["vitality.png"],
            amount: [2],
          },
        ],
      },
      {
        title: "Scout the Sprites",
        needed: [
          {
            file: ["sprite_world.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["dexterity.png"],
            amount: [2],
          },
        ],
      },
      {
        title: "Scout the Lair",
        needed: [
          {
            file: ["undead_lair.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["wisdom.png"],
            amount: [2],
          },
        ],
      },
      {
        title: "Scout the Theatre",
        needed: [
          {
            file: ["puppet_theatre.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["attack.png"],
            amount: [2],
          },
        ],
      },
      {
        title: "Scout the Woods",
        needed: [
          {
            file: ["magic_woods.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["speed.png"],
            amount: [1],
          },
          {
            file: ["dexterity.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Scout the Library",
        needed: [
          {
            file: ["cursed_library.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["vitality.png"],
            amount: [1],
          },
          {
            file: ["wisdom.png"],
            amount: [1],
          },
        ],
      },
    ],
  },
  {
    title: "Beginner Quests",
    quests: [
      {
        title: "The Pirate King",
        needed: [
          {
            file: ["pirate_cave.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["beginner_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Mama",
        needed: [
          {
            file: ["forest_maze.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["beginner_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Spider Queen",
        needed: [
          {
            file: ["spider_den.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["beginner_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Masked God",
        needed: [
          {
            file: ["forbidden_jungle.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["beginner_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Queen Bee",
        needed: [
          {
            file: ["hive.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["beginner_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Run the Table",
        needed: [
          {
            file: ["pirate_cave.png"],
            amount: [1],
          },
          {
            file: ["forest_maze.png"],
            amount: [1],
          },
          {
            file: ["spider_den.png"],
            amount: [1],
          },
          {
            file: ["forbidden_jungle.png"],
            amount: [1],
          },
          {
            file: ["hive.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["beginner_chest.png"],
            amount: [1],
          },
          {
            file: ["treasure_map.png"],
            amount: [1],
          },
        ],
      },
    ],
  },
  {
    title: "Standard Quests",
    quests: [
      {
        title: "The Snake Queen",
        needed: [
          {
            file: ["snake_pit.png"],
            amount: [8],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Sprite Goddess",
        needed: [
          {
            file: ["sprite_world.png"],
            amount: [8],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Titan",
        needed: [
          {
            file: ["ancient_ruins.png"],
            amount: [6],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Ghost God",
        needed: [
          {
            file: ["undead_lair.png"],
            amount: [8],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Archdemon",
        needed: [
          {
            file: ["abyss_of_demons.png"],
            amount: [8],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Slime God",
        needed: [
          {
            file: ["toxic_sewers.png"],
            amount: [6],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Puppet Master",
        needed: [
          {
            file: ["puppet_theatre.png"],
            amount: [6],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Fountain Spirit",
        needed: [
          {
            file: ["magic_woods.png"],
            amount: [5],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Archivist",
        needed: [
          {
            file: ["cursed_library.png"],
            amount: [5],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Apparition",
        needed: [
          {
            file: ["haunted_cemetery.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Vampire Lord",
        needed: [
          {
            file: ["manor.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Mad Scientist",
        needed: [
          {
            file: ["mad_lab.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "To the Mountains!",
        needed: [
          {
            file: ["undead_lair.png"],
            amount: [1],
          },
          {
            file: ["sprite_world.png"],
            amount: [1],
          },
          {
            file: ["toxic_sewers.png"],
            amount: [1],
          },
          {
            file: ["abyss_of_demons.png"],
            amount: [1],
          },
          {
            file: ["mad_lab.png"],
            amount: [1],
          },
          {
            file: ["puppet_theatre.png"],
            amount: [1],
          },
          {
            file: ["haunted_cemetery.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Smite the Undead!",
        needed: [
          {
            file: ["undead_lair.png"],
            amount: [2],
          },
          {
            file: ["haunted_cemetery.png"],
            amount: [2],
          },
          {
            file: ["manor.png"],
            amount: [2],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "As Above, So Below",
        needed: [
          {
            file: ["sprite_world.png"],
            amount: [3],
          },
          {
            file: ["toxic_sewers.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Blessings and Curses",
        needed: [
          {
            file: ["magic_woods.png"],
            amount: [3],
          },
          {
            file: ["cursed_library.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Demonhunter",
        needed: [
          {
            file: ["abyss_of_demons.png"],
            amount: [3],
          },
          {
            file: ["mountain_temple.png"],
            amount: [2],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "That's the Spirit",
        needed: [
          {
            file: ["sprite_world.png"],
            amount: [1],
          },
          {
            file: ["undead_lair.png"],
            amount: [1],
          },
          {
            file: ["magic_woods.png"],
            amount: [1],
          },
          {
            file: ["haunted_cemetery.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Rainbow Road",
        needed: [
          {
            file: ["sprite_world.png"],
            amount: [1],
          },
          {
            file: ["undead_lair.png"],
            amount: [1],
          },
          {
            file: ["toxic_sewers.png"],
            amount: [1],
          },
          {
            file: ["abyss_of_demons.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Cost of Wisdom",
        needed: [
          {
            file: ["mad_lab.png"],
            amount: [2],
          },
          {
            file: ["cursed_library.png"],
            amount: [2],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Dimensional Foes",
        needed: [
          {
            file: ["sprite_world.png"],
            amount: [4],
          },
          {
            file: ["third_dimension.png"],
            amount: [2],
          },
        ],
        rewards: [
          {
            file: ["standard_chest.png"],
            amount: [1],
          },
          {
            file: ["cubic_jelly.png"],
            amount: [1],
          },
        ],
      },
    ],
  },
  {
    title: "Mighty Quest",
    quests: [
      {
        title: "The Effigy",
        needed: [
          {
            file: ["effigy.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
          {
            file: ["loot_drop_potion.png"],
            amount: [1],
          },
          {
            file: ["loot_tier_potion.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The New King",
        needed: [
          {
            file: ["deadwater_docks.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Megamoth",
        needed: [
          {
            file: ["woodland_labyrinth.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Prodigal Son",
        needed: [
          {
            file: ["crawling_depths.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Mermaid Goddess",
        needed: [
          {
            file: ["ocean_trench.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Nightmare",
        needed: [
          {
            file: ["parasite_chambers.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Ghost Pirate",
        needed: [
          {
            file: ["davy_jones_locker.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Elemental Wyvern",
        needed: [
          {
            file: ["lair_of_draconis.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Fallen",
        needed: [
          {
            file: ["mountain_temple.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Unwilling",
        needed: [
          {
            file: ["ice_cave.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Ancients",
        needed: [
          {
            file: ["tomb_of_the_ancients.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Goddess",
        needed: [
          {
            file: ["third_dimension.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Mad God",
        needed: [
          {
            file: ["oryx.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Doorwarden",
        needed: [
          {
            file: ["janus.png"],
            amount: [4],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Double Trouble",
        needed: [
          {
            file: ["oryx.png"],
            amount: [3],
          },
          {
            file: ["janus.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Epic Showdown",
        needed: [
          {
            file: ["deadwater_docks.png"],
            amount: [2],
          },
          {
            file: ["crawling_depths.png"],
            amount: [2],
          },
          {
            file: ["woodland_labyrinth.png"],
            amount: [2],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Exterminate!",
        needed: [
          {
            file: ["crawling_depths.png"],
            amount: [2],
          },
          {
            file: ["woodland_labyrinth.png"],
            amount: [2],
          },
          {
            file: ["nest.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Unsettling Foes",
        needed: [
          {
            file: ["parasite_chambers.png"],
            amount: [2],
          },
          {
            file: ["ice_cave.png"],
            amount: [1],
          },
          {
            file: ["davy_jones_locker.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Long Forgotten",
        needed: [
          {
            file: ["ice_cave.png"],
            amount: [2],
          },
          {
            file: ["tomb_of_the_ancients.png"],
            amount: [2],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Thar be Pirates!",
        needed: [
          {
            file: ["deadwater_docks.png"],
            amount: [2],
          },
          {
            file: ["davy_jones_locker.png"],
            amount: [2],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Lost and Found",
        needed: [
          {
            file: ["parasite_chambers.png"],
            amount: [1],
          },
          {
            file: ["lair_of_draconis.png"],
            amount: [1],
          },
          {
            file: ["davy_jones_locker.png"],
            amount: [1],
          },
          {
            file: ["tomb_of_the_ancients.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Ocean Man",
        needed: [
          {
            file: ["ocean_trench.png"],
            amount: [2],
          },
          {
            file: ["davy_jones_locker.png"],
            amount: [1],
          },
          {
            file: ["deadwater_docks.png"],
            amount: [1],
          },
        ],
        rewards: [
          {
            file: ["mighty_chest.png"],
            amount: [1],
          },
        ],
      },
    ],
  },
  {
    title: "Epic Quests",
    quests: [
      {
        title: "The Killer Queen",
        needed: [
          {
            file: ["nest.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["honeyed_epic_chest.png"],
            amount: [1],
          },
          {
            file: ["lucky_clover.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The King",
        needed: [
          {
            file: ["shatters.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["royal_epic_chest.png"],
            amount: [1],
          },
          {
            file: ["lucky_clover.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Colossus",
        needed: [
          {
            file: ["lost_halls.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["marble_epic_chest.png"],
            amount: [1],
          },
          {
            file: ["lucky_clover.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Cultist",
        needed: [
          {
            file: ["cultist_hideout.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["cultish_epic_chest.png"],
            amount: [1],
          },
          {
            file: ["lucky_clover.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The End",
        needed: [
          {
            file: ["void.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["voided_epic_chest.png"],
            amount: [1],
          },
          {
            file: ["lucky_clover.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "The Crystal",
        needed: [
          {
            file: ["crystal_cavern.png"],
            amount: [3],
          },
        ],
        rewards: [
          {
            file: ["crystallized_epic_chest.png"],
            amount: [1],
          },
          {
            file: ["lucky_clover.png"],
            amount: [1],
          },
        ],
      },
      {
        title: "Havoc in the Halls",
        needed: [
          {
            file: ["lost_halls.png"],
            amount: [2],
          },
          {
            file: ["cultist_hideout.png"],
            amount: [2],
          },
        ],
        rewards: [
          {
            file: ["voided_epic_chest.png"],
            amount: [1],
          },
          {
            file: ["lucky_clover.png"],
            amount: [1],
          },
        ],
      },
    ],
  },
];
const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];
export default function Home() {
  const [selected, setSelected] = useState(rotmgDailyQuests[0].quests[0]);

  return (
    <div className="grid grid-cols-1 h-screen bg-light_misty_blue place-content-start">
      <div className="flex">
        <div className="w-4 h-4 bg-light_misty_blue"></div>
        <div className="w-4 h-4 bg-misty_blue"></div>
        <div className="w-4 h-4 bg-cornflower"></div>
        <div className="w-4 h-4 bg-blue_gray"></div>
        <div className="w-4 h-4 bg-charcoal"></div>
      </div>
      <nav className="p-6 bg-charcoal text-light_misty_blue">
        <div className="float-left">Daily ROTMG Tracker</div>
        <div className="float-right">Settings</div>
      </nav>
      <Tab.Group>
        <Tab.List className="flex flex-row">
          <Tab as={Fragment}>
            {({ selected }) => (
              <div className="basis-1/3 cursor-pointer">
                <p
                  className={
                    (selected
                      ? "bg-charcoal text-misty_blue"
                      : "bg-blue_gray text-misty_blue") + " text-center py-4"
                  }
                >
                  Tab 1
                </p>
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div className="basis-1/3 cursor-pointer">
                <p
                  className={
                    (selected
                      ? "bg-charcoal text-misty_blue"
                      : "bg-blue_gray text-misty_blue") + " text-center py-4"
                  }
                >
                  Tab 2
                </p>
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div className="basis-1/3 cursor-pointer">
                <p
                  className={
                    (selected
                      ? "bg-charcoal text-misty_blue"
                      : "bg-blue_gray text-misty_blue") + " text-center py-4"
                  }
                >
                  Tab 3
                </p>
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="h-max">
          <Tab.Panel>
            <div className="w-full px-4 py-16">
              <div className="w-full max-w-md mx-auto">
                <RadioGroup value={selected} onChange={setSelected}>
                  <RadioGroup.Label className="sr-only">
                    Server size
                  </RadioGroup.Label>
                  <div className="space-y-2">
                    {rotmgDailyQuests[0].quests.map((q) => (
                      <RadioGroup.Option
                        key={q.title}
                        value={q}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                              : ""
                          }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? "text-white" : "text-gray-900"
                                    }`}
                                  >
                                    {q.title}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className={`inline ${
                                      checked ? "text-sky-100" : "text-gray-500"
                                    }`}
                                  >
                                    {q.needed.map((n) => {
                                      return [...Array(n.amount[0])].map(
                                        (e, i) => {
                                          return (
                                            <Image
                                              key={i}
                                              height={20}
                                              width={20}
                                              src={
                                                "/../public/images/" + n.file
                                              }
                                              alt=""
                                            />
                                          );
                                        }
                                      );
                                    })}
                                    {q.rewards.map((n) => {
                                      return [...Array(n.amount[0])].map(
                                        (e, i) => {
                                          return (
                                            <Image
                                              key={i}
                                              height={20}
                                              width={20}
                                              src={
                                                "/../public/images/" + n.file
                                              }
                                              alt=""
                                            />
                                          );
                                        }
                                      );
                                    })}
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              {checked && (
                                <div className="flex-shrink-0 text-white">
                                  <CheckIcon className="w-6 h-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
