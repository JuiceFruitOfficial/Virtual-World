
var items= {
    stone: {
        class: "stone",
        damage: 20,
        actions: ["place","break","throw", "make a campfire"],
        loot: "stone",
        range: 400,
        damage: 5,
        durability: 5,
        space: 1
    },
    campfire: {
        class: "campfire",
        damage: 15,
        actions: ["place","break"],
        loot: "stone:9",
        range: 200,
        durability: 25,
        space: 5
    },
    iron_pickaxe: {
        //5,"ironpickaxe", 10, 500, 200,"break,slice"
        class: "ironpickaxe",
        damage: 10,
        actions: ["break","slice"],
        loot: "stone:1,wood:1",
        range: 200,
        durability: 500,
        space: 5
    },
    wood: {
        //5,"ironpickaxe", 10, 500, 200,"break,slice"
        class: "wood",
        damage: 10,
        actions: ["break","place"],
        loot: "wood:1",
        range: 200,
        durability: 50,
        space: 5
    }
}
