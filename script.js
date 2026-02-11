const card = document.getElementById("card");
const noBtn = document.getElementById("noBtn");
const finalCard = document.getElementById("finalCard");

// Voltear carta
card.addEventListener("click", () => {
    card.classList.toggle("flipped");
});

// Botón no
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 150 - 75;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// boton si
function sayYes() {
    card.style.display = "none";
    finalCard.style.display = "block";
}
