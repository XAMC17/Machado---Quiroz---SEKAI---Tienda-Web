const planeta = document.querySelector(".logo-planeta");
planeta.addEventListener("click", () => {
  document.body.classList.toggle("modo-noche");
});

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');

  if (!cursor) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.style.background = "url('img/sekai_cursor2.png') no-repeat center/contain";
    cursor.style.transform = "translate(-50%, -50%) scale(0.95)";
  });

  document.addEventListener('mouseup', () => {
    cursor.style.background = "url('img/sekai_cursor1.png') no-repeat center/contain";
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

  const cards = document.querySelectorAll(".card");
const sparkleLayer = document.getElementById("sparkle-layer");


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      explodeSparkles(entry.target);
    }
  });
}, { threshold: 0.65 });

cards.forEach(c => observer.observe(c));

function explodeSparkles(card) {
  const pastelColors = ["#ffd6e8", "#d6e0ff", "#e8ffd6", "#fff3d6", "#ecd6ff"];

  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  for (let i = 0; i < 7; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    
    sparkle.style.setProperty("--sparkleColor",
      pastelColors[Math.floor(Math.random() * pastelColors.length)]
    );

    
    const angle = Math.random() * (2 * Math.PI);
    const startX = cx + Math.cos(angle) * (rect.width / 2);
    const startY = cy + Math.sin(angle) * (rect.height / 2);

    sparkle.style.left = startX + "px";
    sparkle.style.top = startY + "px";

    
    const dx = Math.cos(angle) * (rect.width * 0.35);
    const dy = Math.sin(angle) * (rect.height * 0.35);

    sparkle.style.setProperty("--dx", dx + "px");
    sparkle.style.setProperty("--dy", dy + "px");

    sparkleLayer.appendChild(sparkle);

   
    setTimeout(() => {
      sparkle.classList.add("pop");
    }, 20);

    
    setTimeout(() => sparkle.remove(), 900);
  }
}