// VARIABLES
const card = document.getElementById("card");
const front = document.querySelector(".front");
const noBtn = document.getElementById("noBtn");
const finalCard = document.getElementById("finalCard");
const leftFlower = document.querySelector('.flower-css.left');
const rightFlower = document.querySelector('.flower-css.right');

let openedOnce = false;
let finished = false;

// =========================
// FLORES RESPONSIVE
// =========================
function positionFlowers() {
    const cardRect = card.getBoundingClientRect();
    const offset = 20;

    // izquierda
    leftFlower.style.left = `${Math.max(cardRect.left - leftFlower.offsetWidth - offset, 10)}px`;
    // derecha
    rightFlower.style.left = `${Math.min(cardRect.right + offset, window.innerWidth - rightFlower.offsetWidth - 10)}px`;

    // vertical centrado
    const cardCenterY = cardRect.top + cardRect.height / 2;
    leftFlower.style.top = `${cardCenterY - leftFlower.offsetHeight / 2}px`;
    rightFlower.style.top = `${cardCenterY - rightFlower.offsetHeight / 2}px`;
}

window.addEventListener('load', positionFlowers);
window.addEventListener('resize', positionFlowers);

// =========================
// CARTA Y BOTONES
// =========================

// 1️⃣ Giro inicial al tocar el frente
front.addEventListener("click", () => {
    if (!openedOnce) {
        card.classList.add("flipped");
        openedOnce = true;
    }
});

// 2️⃣ Botón NO → desaparece, no gira carta
noBtn.addEventListener("click", (e) => {
    e.stopPropagation();  // 🔑 evita que el clic llegue a la carta
    noBtn.style.display = "none";
});

// 3️⃣ Botón SÍ → segunda vuelta
const yesBtn = document.querySelector(".yes");
yesBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // 🔑 evita que el clic afecte la carta
    if (openedOnce && !finished) {
        card.classList.add("final-flip");
        finished = true;

        setTimeout(() => {
            card.style.display = "none";
            finalCard.style.display = "block";
        }, 600);
    }
});
