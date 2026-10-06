// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.



// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

// 2. Create the two state variables: heat and swords made.

// 3. Write getForgeStatus(heatValue). Return the correct status string.

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

// 5. Write resetForge(). Restore the state, message, and display.

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

// 7. Write makeSword(). Handle both success and insufficient heat.

// 8. Call resetForge() once to start the game.

// Use the tests in ASSIGNMENT.md to check your work.

const forge = document.getElementById("forge");
const heatDisplay = document.getElementById("heat-value");
const swordCountDisplay = document.getElementById("sword-count");
const statusDisplay = document.getElementById("forge-status");
const forgeImage = document.getElementById("forge-image");
const messageDisplay = document.getElementById("action-message");

let heat = 20;
let swordsMade = 0;

function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Too cold";
  } else if (heatValue < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}

function updateForge() {
  heatDisplay.textContent = heat;
  swordCountDisplay.textContent = swordsMade;
  const status = getForgeStatus(heat);
  statusDisplay.textContent = status;
  if (status === "Too cold") {
    forge.classList.add("is-cold");
    forge.classList.remove("is-ready", "is-roaring");
    forgeImage.src = "assets/forge-cold.svg";
    forgeImage.alt = "A stone forge with dark coals and no flames";
  } else if (status === "Ready to forge") {
    forge.classList.add("is-ready");
    forge.classList.remove("is-cold", "is-roaring");
    forgeImage.src = "assets/forge-ready.svg";
    forgeImage.alt = "A stone forge with a small orange fire";
  } else {
    forge.classList.add("is-roaring");
    forge.classList.remove("is-cold", "is-ready");
    forgeImage.src = "assets/forge-roaring.svg";
    forgeImage.alt = "A stone forge with tall bright flames and sparks";
  }
}

function resetForge() {
  heat = 20;
  swordsMade = 0;
  messageDisplay.textContent = "Welcome to the forge. Add heat to begin.";
  updateForge();
}

function heatForge(amount) {
  heat += amount;
  if (heat > 100) {
    heat = 100;
  }
  updateForge();
}

function makeSword() {
  if (heat >= 30) {
    heat -= 30;
    swordsMade++;
    messageDisplay.textContent = "You forged a sword!";
  } else {
    messageDisplay.textContent = "More heat needed to forge a sword.";
  }
    updateForge();
}

resetForge();