let playerName = prompt("Enter your name:");
let health = 100;
let gold = 50;
let inventory = ["sword"];
let activeEffects = [];

function battleMonster() {
  let monsters = ["KingKong", "NanaAddo", "Skeleton", "Zombie"];
  let monster = monsters[Math.floor(Math.random() * monsters.length)];
  let monsterHealth = Math.floor(Math.random() * 21) + 20;

  alert(`A wild ${monster} appears!`);

  while (monsterHealth > 0 && health > 0) {
    let action = prompt("Do you want to [attack] or [run]?");

    if (action === "attack") {
      let damage = Math.floor(Math.random() * 11) + 5;
      if (activeEffects.includes("amulet")) {
        damage += 5;
        activeEffects.splice(activeEffects.indexOf("amulet"), 1);
        alert("The amulet glows and adds +5 damage!");
      }

      monsterHealth -= damage;
      alert(`You hit the ${monster} for ${damage} damage. Monster health: ${monsterHealth}`);

      if (monsterHealth > 0) {
        let monsterDamage = Math.floor(Math.random() * 8) + 5;
        if (activeEffects.includes("shield")) {
          monsterDamage = Math.floor(monsterDamage / 2);
          activeEffects.splice(activeEffects.indexOf("shield"), 1);
          alert("Your shield absorbed half the damage!");
        }

        health -= monsterDamage;
        alert(`The ${monster} hits you for ${monsterDamage}. Your health: ${health}`);
      }

    } else if (action === "run") {
      alert("You ran away!");
      return;
    } else {
      alert("Invalid choice!");
    }
  }

  if (health <= 0) {
    alert("Game Over!");
    health = 0;
  } else {
    let reward = Math.floor(Math.random() * 21) + 10;
    gold += reward;
    alert(`You defeated the ${monster}! You gain ${reward} gold.`);
  }
}

function openChest() {
  let items = ["potion", "shield", "amulet"];
  let reward = items[Math.floor(Math.random() * items.length)];
  inventory.push(reward);
  alert(`You found a chest and got a ${reward}!`);
}

function useItem() {
  if (inventory.length === 0) {
    alert("No items in your inventory!");
    return;
  }

  let choice = prompt("Choose an item to use: " + inventory.join(", "));

  if (choice === "potion" && inventory.includes("potion")) {
    health += 20;
    inventory.splice(inventory.indexOf("potion"), 1);
    alert("You used a potion. Health +20!");
  } else if (choice === "shield" && inventory.includes("shield")) {
    activeEffects.push("shield");
    inventory.splice(inventory.indexOf("shield"), 1);
    alert("You equipped a shield. It will block the next attack!");
  } else if (choice === "amulet" && inventory.includes("amulet")) {
    activeEffects.push("amulet");
    inventory.splice(inventory.indexOf("amulet"), 1);
    alert("You activated the amulet. Next attack gets +5 damage!");
  } else {
    alert("You don’t have that item!");
  }
}

while (health > 0) {
  let events = ["monster", "chest", "nothing"];
  let event = events[Math.floor(Math.random() * events.length)];

  if (event === "monster") {
    battleMonster();
  } else if (event === "chest") {
    openChest();
  } else {
    alert("The room is empty.");
  }

  alert(
    `STATUS:\nHealth: ${health}\nGold: ${gold}\nInventory: ${inventory.join(", ")}\nEffects: ${activeEffects.join(", ")}`
  );

  let choice = prompt("Do you want to [continue], [use item], or [quit]?");

  if (choice === "use item") {
    useItem();
  } else if (choice === "quit") {
    alert(`You leave the dungeon with your loot: ${gold} gold!`);
    break;
  }
}

alert("Game Ended.");
