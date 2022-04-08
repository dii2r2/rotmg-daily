import { useState, Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.scss";
import { Tab } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import Cookies from "js-cookie";
import cookie from "cookie";
/**Images */
import snake_pit from "../public/images/snake_pit.png";
import toxic_sewers from "../public/images/toxic_sewers.png";
import abyss_of_demons from "../public/images/abyss_of_demons.png";
import sprite_world from "../public/images/sprite_world.png";
import undead_lair from "../public/images/undead_lair.png";
import puppet_theatre from "../public/images/puppet_theatre.png";
import magic_woods from "../public/images/magic_woods.png";
import cursed_library from "../public/images/cursed_library.png";
import speed from "../public/images/speed.png";
import defense from "../public/images/defense.png";
import vitality from "../public/images/vitality.png";
import dexterity from "../public/images/dexterity.png";
import wisdom from "../public/images/wisdom.png";
import attack from "../public/images/attack.png";
import standard_chest from "../public/images/standard_chest.png";
import ancient_ruins from "../public/images/ancient_ruins.png";
import haunted_cemetery from "../public/images/haunted_cemetery.png";
import manor from "../public/images/manor.png";
import mad_lab from "../public/images/mad_lab.png";
import mountain_temple from "../public/images/mountain_temple.png";
import third_dimension from "../public/images/third_dimension.png";
import cubic_jelly from "../public/images/cubic_jelly.png";
import effigy from "../public/images/effigy.png";
import mighty_chest from "../public/images/mighty_chest.png";
import loot_drop_potion from "../public/images/loot_drop_potion.png";
import loot_tier_potion from "../public/images/loot_tier_potion.png";
import deadwater_docks from "../public/images/deadwater_docks.png";
import woodland_labyrinth from "../public/images/woodland_labyrinth.png";
import crawling_depths from "../public/images/crawling_depths.png";
import ocean_trench from "../public/images/ocean_trench.png";
import parasite_chambers from "../public/images/parasite_chambers.png";
import davy_jones_locker from "../public/images/davy_jones_locker.png";
import lair_of_draconis from "../public/images/lair_of_draconis.png";
import ice_cave from "../public/images/ice_cave.png";
import tomb_of_the_ancients from "../public/images/tomb_of_the_ancients.png";
import oryx from "../public/images/oryx.png";
import janus from "../public/images/janus.png";
import nest from "../public/images/nest.png";
import honeyed_epic_chest from "../public/images/honeyed_epic_chest.png";
import lucky_clover from "../public/images/lucky_clover.png";
import shatters from "../public/images/shatters.png";
import royal_epic_chest from "../public/images/royal_epic_chest.png";
import lost_halls from "../public/images/lost_halls.png";
import marble_epic_chest from "../public/images/marble_epic_chest.png";
import cultist_hideout from "../public/images/cultist_hideout.png";
import cultish_epic_chest from "../public/images/cultish_epic_chest.png";
import voidd from "../public/images/void.png";
import voided_epic_chest from "../public/images/voided_epic_chest.png";
import crystal_cavern from "../public/images/crystal_cavern.png";
import crystallized_epic_chest from "../public/images/crystallized_epic_chest.png";

const rotmgDailyQuests = [
  {
    title: "Scout Quests",
    quests: [
      {
        title: "Scout the Theatre",
        needed: [
          {
            file: puppet_theatre,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: attack,
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Sewers",
        needed: [
          {
            file: toxic_sewers,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: defense,
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Pit",
        needed: [
          {
            file: snake_pit,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: speed,
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Sprites",
        needed: [
          {
            file: sprite_world,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: dexterity,
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Abyss",
        needed: [
          {
            file: abyss_of_demons,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: vitality,
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Lair",
        needed: [
          {
            file: undead_lair,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: wisdom,
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Woods",
        needed: [
          {
            file: magic_woods,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: speed,
            amount: 1,
          },
          {
            file: dexterity,
            amount: 1,
          },
        ],
      },
      {
        title: "Scout the Library",
        needed: [
          {
            file: cursed_library,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: vitality,
            amount: 1,
          },
          {
            file: wisdom,
            amount: 1,
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
            file: snake_pit,
            amount: 8,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Sprite Goddess",
        needed: [
          {
            file: sprite_world,
            amount: 8,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Archdemon",
        needed: [
          {
            file: abyss_of_demons,
            amount: 8,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Ghost God",
        needed: [
          {
            file: undead_lair,
            amount: 8,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "To the Mountains!",
        needed: [
          {
            file: undead_lair,
            amount: 1,
          },
          {
            file: sprite_world,
            amount: 1,
          },
          {
            file: toxic_sewers,
            amount: 1,
          },
          {
            file: abyss_of_demons,
            amount: 1,
          },
          {
            file: mad_lab,
            amount: 1,
          },
          {
            file: puppet_theatre,
            amount: 1,
          },
          {
            file: haunted_cemetery,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Puppet Master",
        needed: [
          {
            file: puppet_theatre,
            amount: 6,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Slime God",
        needed: [
          {
            file: toxic_sewers,
            amount: 6,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Titan",
        needed: [
          {
            file: ancient_ruins,
            amount: 6,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "As Above, So Below",
        needed: [
          {
            file: sprite_world,
            amount: 3,
          },
          {
            file: toxic_sewers,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Dimensional Foes",
        needed: [
          {
            file: sprite_world,
            amount: 4,
          },
          {
            file: third_dimension,
            amount: 2,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
          {
            file: cubic_jelly,
            amount: 1,
          },
        ],
      },
      {
        title: "Smite the Undead!",
        needed: [
          {
            file: undead_lair,
            amount: 2,
          },
          {
            file: haunted_cemetery,
            amount: 2,
          },
          {
            file: manor,
            amount: 2,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Blessings and Curses",
        needed: [
          {
            file: magic_woods,
            amount: 3,
          },
          {
            file: cursed_library,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Fountain Spirit",
        needed: [
          {
            file: magic_woods,
            amount: 5,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Archivist",
        needed: [
          {
            file: cursed_library,
            amount: 5,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Demonhunter",
        needed: [
          {
            file: abyss_of_demons,
            amount: 3,
          },
          {
            file: mountain_temple,
            amount: 2,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Vampire Lord",
        needed: [
          {
            file: manor,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Mad Scientist",
        needed: [
          {
            file: mad_lab,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Cost of Wisdom",
        needed: [
          {
            file: mad_lab,
            amount: 2,
          },
          {
            file: cursed_library,
            amount: 2,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "That's the Spirit",
        needed: [
          {
            file: sprite_world,
            amount: 1,
          },
          {
            file: undead_lair,
            amount: 1,
          },
          {
            file: magic_woods,
            amount: 1,
          },
          {
            file: haunted_cemetery,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Rainbow Road",
        needed: [
          {
            file: sprite_world,
            amount: 1,
          },
          {
            file: undead_lair,
            amount: 1,
          },
          {
            file: toxic_sewers,
            amount: 1,
          },
          {
            file: abyss_of_demons,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Apparition",
        needed: [
          {
            file: haunted_cemetery,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: standard_chest,
            amount: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Mighty Quests",
    quests: [
      {
        title: "Epic Showdown",
        needed: [
          {
            file: deadwater_docks,
            amount: 2,
          },
          {
            file: crawling_depths,
            amount: 2,
          },
          {
            file: woodland_labyrinth,
            amount: 2,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Double Trouble",
        needed: [
          {
            file: oryx,
            amount: 3,
          },
          {
            file: janus,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Exterminate!",
        needed: [
          {
            file: crawling_depths,
            amount: 2,
          },
          {
            file: woodland_labyrinth,
            amount: 2,
          },
          {
            file: nest,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Mad God",
        needed: [
          {
            file: oryx,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Doorwarden",
        needed: [
          {
            file: janus,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Prodigal Son",
        needed: [
          {
            file: crawling_depths,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Megamoth",
        needed: [
          {
            file: woodland_labyrinth,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The New King",
        needed: [
          {
            file: deadwater_docks,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Mermaid Goddess",
        needed: [
          {
            file: ocean_trench,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Nightmare",
        needed: [
          {
            file: parasite_chambers,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Ghost Pirate",
        needed: [
          {
            file: davy_jones_locker,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Elemental Wyvern",
        needed: [
          {
            file: lair_of_draconis,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Fallen",
        needed: [
          {
            file: mountain_temple,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Unwilling",
        needed: [
          {
            file: ice_cave,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Ancients",
        needed: [
          {
            file: tomb_of_the_ancients,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Goddess",
        needed: [
          {
            file: third_dimension,
            amount: 4,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Long Forgotten",
        needed: [
          {
            file: ice_cave,
            amount: 2,
          },
          {
            file: tomb_of_the_ancients,
            amount: 2,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Thar be Pirates!",
        needed: [
          {
            file: deadwater_docks,
            amount: 2,
          },
          {
            file: davy_jones_locker,
            amount: 2,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Ocean Man",
        needed: [
          {
            file: ocean_trench,
            amount: 2,
          },
          {
            file: davy_jones_locker,
            amount: 1,
          },
          {
            file: deadwater_docks,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Unsettling Foes",
        needed: [
          {
            file: parasite_chambers,
            amount: 2,
          },
          {
            file: ice_cave,
            amount: 1,
          },
          {
            file: davy_jones_locker,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "Lost and Found",
        needed: [
          {
            file: parasite_chambers,
            amount: 1,
          },
          {
            file: lair_of_draconis,
            amount: 1,
          },
          {
            file: davy_jones_locker,
            amount: 1,
          },
          {
            file: tomb_of_the_ancients,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
        ],
      },
      {
        title: "The Effigy",
        needed: [
          {
            file: effigy,
            amount: 1,
          },
        ],
        rewards: [
          {
            file: mighty_chest,
            amount: 1,
          },
          {
            file: loot_drop_potion,
            amount: 1,
          },
          {
            file: loot_tier_potion,
            amount: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Epic Quests",
    quests: [
      {
        title: "Havoc in the Halls",
        needed: [
          {
            file: lost_halls,
            amount: 2,
          },
          {
            file: cultist_hideout,
            amount: 2,
          },
        ],
        rewards: [
          {
            file: voided_epic_chest,
            amount: 1,
          },
          {
            file: lucky_clover,
            amount: 1,
          },
        ],
      },
      {
        title: "The Colossus",
        needed: [
          {
            file: lost_halls,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: marble_epic_chest,
            amount: 1,
          },
          {
            file: lucky_clover,
            amount: 1,
          },
        ],
      },
      {
        title: "The Cultist",
        needed: [
          {
            file: cultist_hideout,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: cultish_epic_chest,
            amount: 1,
          },
          {
            file: lucky_clover,
            amount: 1,
          },
        ],
      },
      {
        title: "The End",
        needed: [
          {
            file: voidd,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: voided_epic_chest,
            amount: 1,
          },
          {
            file: lucky_clover,
            amount: 1,
          },
        ],
      },
      {
        title: "The King",
        needed: [
          {
            file: shatters,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: royal_epic_chest,
            amount: 1,
          },
          {
            file: lucky_clover,
            amount: 1,
          },
        ],
      },
      {
        title: "The Crystal",
        needed: [
          {
            file: crystal_cavern,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: crystallized_epic_chest,
            amount: 1,
          },
          {
            file: lucky_clover,
            amount: 1,
          },
        ],
      },
      {
        title: "The Killer Queen",
        needed: [
          {
            file: nest,
            amount: 3,
          },
        ],
        rewards: [
          {
            file: honeyed_epic_chest,
            amount: 1,
          },
          {
            file: lucky_clover,
            amount: 1,
          },
        ],
      },
    ],
  },
];

export default function Home(props) {
  let c = props.cookies.dailyQuests || "{}";
  c = JSON.parse(c);
  const [quests, setQuests] = useState(c);

  return (
    <div className="grid grid-cols-1 h-screen place-content-start bg-light_misty_blue">
      <Head>
        <title>RotMG Tracker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="p-6 bg-charcoal text-light_misty_blue">
        <div className="float-left text-2xl text-light_misty_blue">
          Daily RotMG Tracker
        </div>
        <div className="float-right"></div>
      </nav>
      <Tab.Group>
        <Tab.List className="flex flex-row shadow-lg z-50">
          <Tab as={Fragment}>
            {({ selected }) => (
              <div className="basis-1/2 cursor-pointer">
                <p
                  className={
                    (selected
                      ? "bg-charcoal text-misty_blue"
                      : "bg-cornflower text-misty_blue") +
                    " text-center py-4 text-2xl"
                  }
                >
                  Quest List
                </p>
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div className="basis-1/2 cursor-pointer">
                <h1
                  className={
                    (selected
                      ? "bg-charcoal text-misty_blue"
                      : "bg-cornflower text-misty_blue") +
                    " text-center py-4 text-2xl"
                  }
                >
                  Active Quests
                </h1>
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="flex flex-col h-max bg-light_misty_blue">
          <Tab.Panel className="flex">
            {rotmgDailyQuests.map((d, i) => (
              <div
                className={`${i === 3 ? "mx-2" : "ml-2"} basis-1/4`}
                key={d.title}
              >
                <div>
                  <h2 className="text-xl text-center py-2 bg-blue_gray text-light_misty_blue mb-2 shadow-lg rounded-b-md">
                    {d.title}
                  </h2>
                </div>
                <RadioGroup
                  onChange={(e) => {
                    setCookieQuest(e, Cookies, d.title, setQuests);
                  }}
                >
                  {d.quests.map((q) => (
                    <RadioGroup.Option
                      key={q.title}
                      value={q}
                      className={`${
                        quests[d.title]?.includes(q.title)
                          ? "bg-sky-900 bg-opacity-75 text-white"
                          : ""
                      }
                          relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none my-2`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="w-full">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                quests[d.title]?.includes(q.title)
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {q.title}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                quests[d.title]?.includes(q.title)
                                  ? "text-sky-100"
                                  : "text-gray-500"
                              }`}
                            >
                              <div className="py-2 w-full items-center">
                                <div className="float-left">
                                  {q.needed.map((n) => {
                                    return [...Array(n.amount)].map((e, i) => {
                                      return (
                                        <Image
                                          key={i}
                                          height={28}
                                          width={28}
                                          src={n.file}
                                          alt=""
                                        />
                                      );
                                    });
                                  })}
                                </div>
                                <div className="float-right">
                                  {q.rewards.map((n) => {
                                    return [...Array(n.amount)].map((e, i) => {
                                      return (
                                        <Image
                                          key={i}
                                          height={28}
                                          width={28}
                                          src={n.file}
                                          alt=""
                                        />
                                      );
                                    });
                                  })}
                                  {quests[d.title]?.includes(q.title) && (
                                    <div className="text-white float-right ml-2">
                                      <CheckIcon className="w-7 h-7" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </RadioGroup.Description>
                          </div>
                        </div>
                      </div>
                    </RadioGroup.Option>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className="flex">
          {rotmgDailyQuests.map((d, i) => (
            ( quests[d.title]!==undefined && (
              <div
                key={d.title}
                className={`${i === 3 ? "mx-2" : "ml-2"} basis-1/4`}
              >
                <div>
                  <h2 className="text-xl text-center py-2 bg-blue_gray text-light_misty_blue mb-2 shadow-lg rounded-b-md">
                    {d.title}
                  </h2>
                </div>
                <div>
                  {d.quests.map((q) => (
                    quests[d.title]?.includes(q.title) && (
                      <div
                        key={q.title}
                        className={`${
                          quests[d.title]?.includes(q.title)
                            ? "bg-sky-900 bg-opacity-75 text-white"
                            : ""
                        }
                            relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none my-2`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="w-full">
                            <div className="text-sm">
                              <p
                                as="p"
                                className={`font-medium  ${
                                  quests[d.title]?.includes(q.title)
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {q.title}
                              </p>
                              <span
                                as="span"
                                className={`inline ${
                                  quests[d.title]?.includes(q.title)
                                    ? "text-sky-100"
                                    : "text-gray-500"
                                }`}
                              >
                                <div className="py-2 w-full items-center">
                                  <div className="float-left">
                                    {q.needed.map((n) => {
                                      return [...Array(n.amount)].map((e, i) => {
                                        return (
                                          <Image
                                            key={i}
                                            height={28}
                                            width={28}
                                            src={n.file}
                                            alt=""
                                          />
                                        );
                                      });
                                    })}
                                  </div>
                                  <div className="float-right">
                                    {q.rewards.map((n) => {
                                      return [...Array(n.amount)].map((e, i) => {
                                        return (
                                          <Image
                                            key={i}
                                            height={28}
                                            width={28}
                                            src={n.file}
                                            alt=""
                                          />
                                        );
                                      });
                                    })}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            ))
            ))}
          </Tab.Panel>
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

function timeRemaining() {
  let now = new Date();
  let hours = now.getUTCHours();
  let minutes = now.getUTCMinutes();
  let seconds = now.getUTCSeconds();
  let remainingSeconds = hours * 60 * 60 + minutes * 60 + seconds;
  let frac = (86400 - remainingSeconds) / 86400;
  return frac;
}

function setCookieQuest(e, cookies, title, setQuests) {
  let frac = timeRemaining();
  let dailyQuests = cookies.get("dailyQuests");
  if (dailyQuests === undefined) {
    dailyQuests = {};
    dailyQuests[title] = [e.title];
    cookies.set("dailyQuests", JSON.stringify(dailyQuests), { expires: frac });
    setQuests(dailyQuests);
  } else {
    dailyQuests = JSON.parse(dailyQuests);
    switch (title) {
      case "Scout Quests":
        if(dailyQuests[title]?.includes(e.title)) {
          dailyQuests[title] = []
        } else {
          dailyQuests[title] = [e.title];
        }
        cookies.set("dailyQuests", JSON.stringify(dailyQuests), {
          expires: frac,
        });
        setQuests(dailyQuests);
        break;
      case "Standard Quests":
        if (dailyQuests[title] === undefined) {
          dailyQuests[title] = [e.title];
          cookies.set("dailyQuests", JSON.stringify(dailyQuests), {
            expires: frac,
          });
          setQuests(dailyQuests);
        } else if (dailyQuests[title].length <= 2) {
          for (let i = 0; i < dailyQuests[title].length; i++) {
            if (dailyQuests[title][i] === e.title) {
              dailyQuests[title].splice(i, 1);
              cookies.set("dailyQuests", JSON.stringify(dailyQuests), {
                expires: frac,
              });
              setQuests(dailyQuests);
              return;
            }
          }
          if (dailyQuests[title].length === 2) {
            dailyQuests[title].shift();
          }
          dailyQuests[title].push(e.title);
          cookies.set("dailyQuests", JSON.stringify(dailyQuests), {
            expires: frac,
          });
          setQuests(dailyQuests);
          return;
        }
        break;
      case "Mighty Quests":
        if (dailyQuests[title] === undefined) {
          dailyQuests[title] = [e.title];
          cookies.set("dailyQuests", JSON.stringify(dailyQuests), {
            expires: frac,
          });
          setQuests(dailyQuests);
        } else if (dailyQuests[title].length <= 2) {
          for (let i = 0; i < dailyQuests[title].length; i++) {
            if (dailyQuests[title][i] === e.title) {
              dailyQuests[title].splice(i, 1);
              cookies.set("dailyQuests", JSON.stringify(dailyQuests), {
                expires: frac,
              });
              setQuests(dailyQuests);
              return;
            }
          }
          if (dailyQuests[title].length === 2) {
            dailyQuests[title].shift();
          }
          dailyQuests[title].push(e.title);
          cookies.set("dailyQuests", JSON.stringify(dailyQuests), {
            expires: frac,
          });
          setQuests(dailyQuests);
          return;
        }
        break;
      case "Epic Quests":
        if(dailyQuests[title]?.includes(e.title)) {
          dailyQuests[title] = []
        } else {
          dailyQuests[title] = [e.title];
        }
        cookies.set("dailyQuests", JSON.stringify(dailyQuests), {
          expires: frac,
        });
        setQuests(dailyQuests);
        break;
    }
  }
}

export function getServerSideProps({ req, res }) {
  let cookies = cookie.parse(req.headers.cookie || "");
  return {
    props: {
      cookies,
    },
  };
}
