const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".card");

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container">
      <h1>Best decision ever 😘💖</h1>
      <p>Surprise… we’re going to a concert 🎶🔥</p>

      <div class="tickets">
        <img src="images/ticket1.png" alt="Concert Ticket 1">
        <img src="images/ticket2.png" alt="Concert Ticket 2">
      </div>

      <p>Happy Valentine’s Day ❤️</p>
    </div>
  `;
});

