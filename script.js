const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let offsetX = 0;
let offsetY = 0;

noBtn.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth / 3;
  const maxY = window.innerHeight / 4;

  const moveX = (Math.random() - 0.5) * maxX;
  const moveY = (Math.random() - 0.5) * maxY;

  offsetX += moveX;
  offsetY += moveY;

  noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
})


yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container">
      <h1>Best decision ever 😘💖</h1>
      <p>Surprise… we’re going to a concert 🎶🔥</p>

      <div class="tickets">
        <img src="images/ticket1.png" alt="Concert Ticket 1">
        <img src="images/ticket2.png" alt="Concert Ticket 2">
      </div>

      <p>Happy Valentine’s Day, Love you ❤️</p>
    </div>
  `;
});

;

