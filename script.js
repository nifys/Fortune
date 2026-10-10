const input = document.getElementById("question");
const btn = document.getElementById("askBtn");
const ball = document.getElementById("ball");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

const answers = [
  "Да",
  "Нет",
  "50/50",
  "Скоро",
  "Точно да",
  "Пока нет",
  "Верь в себя",
  "Сначала подумай"
];

function randomAnswer() {
  const index = Math.floor(Math.random() * answers.length);
  return answers[index];
}

function animateBall() {
  const lane = document.querySelector(".lane");
  const laneWidth = lane.clientWidth;
  const ballWidth = ball.offsetWidth;
  const endX = laneWidth - ballWidth - 120;

  ball.classList.add("is-moving");

  ball.animate(
    [
      { left: "0px", transform: "translateY(-50%) scale(1)" },
      { left: `${endX}px`, transform: "translateY(-50%) scale(1.08)" },
      { left: `${endX}px`, transform: "translateY(-50%) scale(1)" }
    ],
    {
      duration: 2200,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards"
    }
  );
}

btn.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) {
    input.focus();
    input.placeholder = "Напиши вопрос...";
    return;
  }

  resultText.textContent = randomAnswer();
  resultBox.classList.remove("visible");

  setTimeout(() => {
    animateBall();
  }, 150);

  setTimeout(() => {
    resultBox.classList.add("visible");
  }, 1900);
});
