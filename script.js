// =========================
// VARIABLES PRINCIPALES
// =========================
const card = document.getElementById("card");
const front = document.querySelector(".front");
const noBtn = document.getElementById("noBtn");
const finalCard = document.getElementById("finalCard");
const leftFlower = document.querySelector('.flower-css.left');
const rightFlower = document.querySelector('.flower-css.right');

let openedOnce = false; // controla primer giro de la carta
let finished = false;   // controla segunda vuelta

// =========================
// FUNCIONES CARTA
// =========================

// 1️⃣ Primer giro: solo cuando toca el frente
front.addEventListener("click", () => {
    if (!openedOnce) {
        card.classList.add("flipped");
        openedOnce = true;
    }
});

// 2️⃣ Botón NO → desaparece y no afecta la carta
noBtn.addEventListener("click", (e) => {
    e.stopPropagation();   // evita que el clic suba a la carta
    noBtn.style.display = "none";
});

// 3️⃣ Botón SÍ → segunda vuelta de la carta
function sayYes(event) {
    event.stopPropagation();
    if (openedOnce && !finished) {
        card.classList.add("final-flip");
        finished = true;

        // mostrar carta final después de animación
        setTimeout(() => {
            card.style.display = "none";
            finalCard.style.display = "block";
        }, 600); // tiempo acorde a la animación
    }
}

// =========================
// FUNCIONES FLORES RESPONSIVE
// =========================

function positionFlowers() {
    const cardRect = card.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardLeft = cardRect.left;
    const cardRight = cardRect.right;

    const offset = 20; // separación lateral mínima desde la carta

    // izquierda
    leftFlower.style.left = `${Math.max(cardLeft - leftFlower.offsetWidth - offset, 10)}px`;
    // derecha
    rightFlower.style.left = `${Math.min(cardRight + offset, window.innerWidth - rightFlower.offsetWidth - 10)}px`;

    // centrado vertical respecto a la carta
    const cardCenterY = cardRect.top + cardRect.height / 2;
    leftFlower.style.top = `${cardCenterY - leftFlower.offsetHeight / 2}px`;
    rightFlower.style.top = `${cardCenterY - rightFlower.offsetHeight / 2}px`;
}

// Ejecutar al cargar
window.addEventListener('load', positionFlowers);

// Ejecutar cuando cambia tamaño de pantalla
window.addEventListener('resize', positionFlowers);
