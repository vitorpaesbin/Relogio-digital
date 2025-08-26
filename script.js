function updateClock() {
    let now = new Date();
    document.getElementById("hours").textContent = now.getHours().toString().padStart(2, "0");
    document.getElementById("minutes").textContent = now.getMinutes().toString().padStart(2, "0");
    document.getElementById("seconds").textContent = now.getSeconds().toString().padStart(2, "0");
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock();
