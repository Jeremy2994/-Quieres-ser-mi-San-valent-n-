const card = document.getElementById("card");
const noBtn = document.getElementById("noBtn");
const finalCard = document.getElementById("finalCard");

let openedOnce = false; // controla el primer giro

// Voltear carta SOLO la primera vez al hacer clic
card.addEventListener("click", (e) => {
    if (openedOnce) return;

    card.classList.add("flipped");
    openedOnce = true;
});

// Botón NO → NO hace nada con la carta
noBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // 🚫 evita que el clic llegue a la carta
    noBtn.style.display = "none"; // desaparece
});

// Botón SÍ → voltea y muestra la carta final
function sayYes() {
    card.classList.add("flipped"); // se asegura del giro
    setTimeout(() => {
        card.style.display = "none";
        finalCard.style.display = "block";
    }, 600); // tiempo acorde a la animación
}
