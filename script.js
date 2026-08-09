// Initialize Lucide Icons
lucide.createIcons();

// Dynamically generate extra floating fairy dust sparkles
const container = document.getElementById('fairy-flight-container');

for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'butterfly';
    sparkle.innerText = '✨';
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.fontSize = `${Math.random() * 10 + 10}px`;
    sparkle.style.animationDuration = `${Math.random() * 6 + 6}s`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(sparkle);
}
