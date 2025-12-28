const targetDate = new Date(2026, 5, 4, 0, 0, 0);
const countdownEl = document.getElementById("countdownTimer");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdownEl.textContent = "It is time.";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownEl.textContent =
        `${String(days).padStart(2,'0')} Days ` +
        `${String(hours).padStart(2,'0')} Hours ` +
        `${String(minutes).padStart(2,'0')} Minutes ` +
        `${String(seconds).padStart(2,'0')} Seconds `;
}
setInterval(updateCountdown, 1000);
updateCountdown();
