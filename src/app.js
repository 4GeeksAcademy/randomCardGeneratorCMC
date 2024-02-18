/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const suitValues = ["♦", "♥", "♠", "♣"];

  let randomNumCard = Math.floor(Math.random() * 13);
  let randomNumSuit = Math.floor(Math.random() * 4);

  document.getElementById("num").textContent = cardValues[randomNumCard];

  const topSuitElement = document.getElementById("topSuit");
  const bottomSuitElement = document.getElementById("bottomSuit");

  topSuitElement.textContent = suitValues[randomNumSuit];
  bottomSuitElement.textContent = suitValues[randomNumSuit];

  if (suitValues[randomNumSuit] === "♦" || suitValues[randomNumSuit] === "♥") {
    topSuitElement.classList.add("reds");
    bottomSuitElement.classList.add("reds");
  } else {
    topSuitElement.classList.add("blacks");
    bottomSuitElement.classList.add("blacks");
  }
};
