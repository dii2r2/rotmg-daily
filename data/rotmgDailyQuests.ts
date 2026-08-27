export type QuestItem = { file: string; amount: number };
export type Quest = { title: string; needed: QuestItem[]; rewards: QuestItem[] };
export type QuestCategory = { title: string; quests: Quest[] };

/**
 * @link https://www.realmeye.com/wiki/the-tinkerer
 */
export const rotmgDailyQuests = [
  {
    title: "Scout Quests",
    quests: [
      {
        title: "Scout the Theatre",
        needed: [
          {
            file: "/images/puppet_theatre.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/attack.png",
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Sewers",
        needed: [
          {
            file: "/images/toxic_sewers.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/defense.png",
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Pit",
        needed: [
          {
            file: "/images/snake_pit.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/speed.png",
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Sprites",
        needed: [
          {
            file: "/images/sprite_world.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/dexterity.png",
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Abyss",
        needed: [
          {
            file: "/images/abyss_of_demons.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/vitality.png",
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Lair",
        needed: [
          {
            file: "/images/undead_lair.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/wisdom.png",
            amount: 2,
          },
        ],
      },
      {
        title: "Scout the Woods",
        needed: [
          {
            file: "/images/magic_woods.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/speed.png",
            amount: 1,
          },
          {
            file: "/images/dexterity.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Scout the Library",
        needed: [
          {
            file: "/images/cursed_library.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/vitality.png",
            amount: 1,
          },
          {
            file: "/images/wisdom.png",
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
            file: "/images/snake_pit.png",
            amount: 8,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Sprite Goddess",
        needed: [
          {
            file: "/images/sprite_world.png",
            amount: 8,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Archdemon",
        needed: [
          {
            file: "/images/abyss_of_demons.png",
            amount: 8,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Ghost God",
        needed: [
          {
            file: "/images/undead_lair.png",
            amount: 8,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "To the Mountains!",
        needed: [
          {
            file: "/images/undead_lair.png",
            amount: 1,
          },
          {
            file: "/images/sprite_world.png",
            amount: 1,
          },
          {
            file: "/images/toxic_sewers.png",
            amount: 1,
          },
          {
            file: "/images/abyss_of_demons.png",
            amount: 1,
          },
          {
            file: "/images/mad_lab.png",
            amount: 1,
          },
          {
            file: "/images/puppet_theatre.png",
            amount: 1,
          },
          {
            file: "/images/haunted_cemetery.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Puppet Master",
        needed: [
          {
            file: "/images/puppet_theatre.png",
            amount: 6,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Slime God",
        needed: [
          {
            file: "/images/toxic_sewers.png",
            amount: 6,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Titan",
        needed: [
          {
            file: "/images/ancient_ruins.png",
            amount: 6,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "As Above, So Below",
        needed: [
          {
            file: "/images/sprite_world.png",
            amount: 3,
          },
          {
            file: "/images/toxic_sewers.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Dimensional Foes",
        needed: [
          {
            file: "/images/sprite_world.png",
            amount: 4,
          },
          {
            file: "/images/third_dimension.png",
            amount: 2,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
          {
            file: "/images/cubic_jelly.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Smite the Undead!",
        needed: [
          {
            file: "/images/undead_lair.png",
            amount: 2,
          },
          {
            file: "/images/haunted_cemetery.png",
            amount: 2,
          },
          {
            file: "/images/manor.png",
            amount: 2,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Blessings and Curses",
        needed: [
          {
            file: "/images/magic_woods.png",
            amount: 3,
          },
          {
            file: "/images/cursed_library.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Fountain Spirit",
        needed: [
          {
            file: "/images/magic_woods.png",
            amount: 5,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Archivist",
        needed: [
          {
            file: "/images/cursed_library.png",
            amount: 5,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Demonhunter",
        needed: [
          {
            file: "/images/abyss_of_demons.png",
            amount: 3,
          },
          {
            file: "/images/mountain_temple.png",
            amount: 2,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Vampire Lord",
        needed: [
          {
            file: "/images/manor.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Mad Scientist",
        needed: [
          {
            file: "/images/mad_lab.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Cost of Wisdom",
        needed: [
          {
            file: "/images/mad_lab.png",
            amount: 2,
          },
          {
            file: "/images/cursed_library.png",
            amount: 2,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "That's the Spirit",
        needed: [
          {
            file: "/images/sprite_world.png",
            amount: 1,
          },
          {
            file: "/images/undead_lair.png",
            amount: 1,
          },
          {
            file: "/images/magic_woods.png",
            amount: 1,
          },
          {
            file: "/images/haunted_cemetery.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Rainbow Road",
        needed: [
          {
            file: "/images/sprite_world.png",
            amount: 1,
          },
          {
            file: "/images/undead_lair.png",
            amount: 1,
          },
          {
            file: "/images/toxic_sewers.png",
            amount: 1,
          },
          {
            file: "/images/abyss_of_demons.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Apparition",
        needed: [
          {
            file: "/images/haunted_cemetery.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/standard_chest.png",
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
            file: "/images/deadwater_docks.png",
            amount: 2,
          },
          {
            file: "/images/crawling_depths.png",
            amount: 2,
          },
          {
            file: "/images/woodland_labyrinth.png",
            amount: 2,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Double Trouble",
        needed: [
          {
            file: "/images/oryx.png",
            amount: 3,
          },
          {
            file: "/images/janus.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Exterminate!",
        needed: [
          {
            file: "/images/crawling_depths.png",
            amount: 2,
          },
          {
            file: "/images/woodland_labyrinth.png",
            amount: 2,
          },
          {
            file: "/images/nest.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Mad God",
        needed: [
          {
            file: "/images/oryx.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Doorwarden",
        needed: [
          {
            file: "/images/janus.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Prodigal Son",
        needed: [
          {
            file: "/images/crawling_depths.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Megamoth",
        needed: [
          {
            file: "/images/woodland_labyrinth.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The New King",
        needed: [
          {
            file: "/images/deadwater_docks.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Mermaid Goddess",
        needed: [
          {
            file: "/images/ocean_trench.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Nightmare",
        needed: [
          {
            file: "/images/parasite_chambers.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Ghost Pirate",
        needed: [
          {
            file: "/images/davy_jones_locker.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Elemental Wyvern",
        needed: [
          {
            file: "/images/lair_of_draconis.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Fallen",
        needed: [
          {
            file: "/images/mountain_temple.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Unwilling",
        needed: [
          {
            file: "/images/ice_cave.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Ancients",
        needed: [
          {
            file: "/images/tomb_of_the_ancients.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Goddess",
        needed: [
          {
            file: "/images/third_dimension.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Long Forgotten",
        needed: [
          {
            file: "/images/ice_cave.png",
            amount: 2,
          },
          {
            file: "/images/tomb_of_the_ancients.png",
            amount: 2,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Thar be Pirates!",
        needed: [
          {
            file: "/images/deadwater_docks.png",
            amount: 2,
          },
          {
            file: "/images/davy_jones_locker.png",
            amount: 2,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Ocean Man",
        needed: [
          {
            file: "/images/ocean_trench.png",
            amount: 2,
          },
          {
            file: "/images/davy_jones_locker.png",
            amount: 1,
          },
          {
            file: "/images/deadwater_docks.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Unsettling Foes",
        needed: [
          {
            file: "/images/parasite_chambers.png",
            amount: 2,
          },
          {
            file: "/images/ice_cave.png",
            amount: 1,
          },
          {
            file: "/images/davy_jones_locker.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Lost and Found",
        needed: [
          {
            file: "/images/parasite_chambers.png",
            amount: 1,
          },
          {
            file: "/images/lair_of_draconis.png",
            amount: 1,
          },
          {
            file: "/images/davy_jones_locker.png",
            amount: 1,
          },
          {
            file: "/images/tomb_of_the_ancients.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Cursed Heart",
        needed: [
          {
            file: "/images/heart_of_the_wetlands.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Pub Crawl",
        needed: [
          {
            file: "/images/tavern.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Arboreal Adventure",
        needed: [
          {
            file: "/images/heart_of_the_wetlands.png",
            amount: 1,
          },
          {
            file: "/images/magic_woods.png",
            amount: 1,
          },
          {
            file: "/images/woodland_labyrinth.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
          {
            file: "/images/speed_sprout.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Effigy",
        needed: [
          {
            file: "/images/effigy.png",
            amount: 1,
          },
        ],
        rewards: [
          {
            file: "/images/mighty_chest.png",
            amount: 1,
          },
          {
            file: "/images/loot_drop_potion.png",
            amount: 1,
          },
          {
            file: "/images/loot_tier_potion.png",
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
            file: "/images/lost_halls.png",
            amount: 2,
          },
          {
            file: "/images/cultist_hideout.png",
            amount: 2,
          },
        ],
        rewards: [
          {
            file: "/images/voided_epic_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Colossus",
        needed: [
          {
            file: "/images/lost_halls.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/marble_epic_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Cultist",
        needed: [
          {
            file: "/images/cultist_hideout.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/cultish_epic_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The End",
        needed: [
          {
            file: "/images/void.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/voided_epic_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The King",
        needed: [
          {
            file: "/images/shatters.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/royal_epic_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Crystal",
        needed: [
          {
            file: "/images/crystal_cavern.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/crystallized_epic_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Killer Queen",
        needed: [
          {
            file: "/images/nest.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/honeyed_epic_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Advanced Nest",
        needed: [
          {
            file: "/images/advanced_nest.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/honeyed_epic_chest.png",
            amount: 2,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Kogboldian Treasure",
        needed: [
          {
            file: "/images/kogbold_steamworks.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/kogbold_steamworks_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Advanced Kogbold Steamworks",
        needed: [
          {
            file: "/images/advanced_kogbold_steamworks.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/kogbold_steamworks_chest.png",
            amount: 2,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Plagued Nest",
        needed: [
          {
            file: "/images/plagued_nest.png",
            amount: 4,
          },
        ],
        rewards: [
          {
            file: "/images/honeyed_epic_chest.png",
            amount: 2,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "The Warden",
        needed: [
          {
            file: "/images/spectral_penitentiary.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/spectral_epic_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
      {
        title: "Moonlight Festival",
        needed: [
          {
            file: "/images/moonlight_village.png",
            amount: 3,
          },
        ],
        rewards: [
          {
            file: "/images/moonlight_village_chest.png",
            amount: 1,
          },
          {
            file: "/images/lucky_clover.png",
            amount: 1,
          },
        ],
      },
    ],
  },
];



export const quests = rotmgDailyQuests;
