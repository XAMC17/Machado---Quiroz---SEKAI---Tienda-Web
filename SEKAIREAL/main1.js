const planeta = document.querySelector(".logo-planeta");
if (planeta) {
  planeta.addEventListener("click", () => {
    document.body.classList.toggle("modo-noche");
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');

  if (!cursor) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
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

/*MÚSICA DE FONDO*/

   document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');

    if (music) {
        let musicStarted = false;

        function unmuteAndPlayMusic() {
            if (musicStarted) return; 

            music.muted = false;
            music.volume = 1.0; 

            music.play()
                .then(() => {
                    console.log("Música iniciada y activada por interacción del usuario.");
                    musicStarted = true;
                })
                .catch(error => {
                    console.error("No se pudo iniciar la reproducción del audio:", error);
                });

            document.removeEventListener('click', unmuteAndPlayMusic);
            document.removeEventListener('keydown', unmuteAndPlayMusic);
        }

        document.addEventListener('click', unmuteAndPlayMusic);
        document.addEventListener('keydown', unmuteAndPlayMusic);
    }
});
