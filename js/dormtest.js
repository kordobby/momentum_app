const dormHat = ["Brave Gryffindor", "Ambitious Slytherin", "Loyal Hufflepuff", "Wise Ravenclaw"];

const dormTest = document.querySelector('#dorm-test');
const dormResult = document.querySelector('#dorm-result');

const HIDDEN_CLASSNAME_2 = "hidden";
const DORMCLASS_KEY = "dormClass";

function handleClassTest(dorm) {
  dormTest.classList.add(HIDDEN_CLASSNAME_2);
  const chosenDorm = dormHat[Math.floor(Math.random() * dormHat.length)];
  localStorage.setItem(DORMCLASS_KEY, chosenDorm);
  paintDorm(chosenDorm);
}

function paintDorm(chosenDorm) {
  dormResult.innerText = `${chosenDorm}`;
  dormResult.classList.remove(HIDDEN_CLASSNAME_2);
}

const savedDormInfo = localStorage.getItem(DORMCLASS_KEY);

if (savedDormInfo === null) {
  dormTest.classList.remove(HIDDEN_CLASSNAME_2);
  dormTest.addEventListener("click", handleClassTest);
} else {
  dormTest.classList.add(HIDDEN_CLASSNAME_2);
  paintDorm(savedDormInfo);
}