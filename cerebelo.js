// Lista de canciones
const songs = ["SRC/MSC/mainMusic.mp3", "SRC/MSC/indian-song.mp3"];
let currentSongIndex = 0;
let isPlaying = true; // Variable para controlar si la música está en reproducción
let intervalId;
const gifs = ["SRC/IMG/happy.gif", "SRC/IMG/dancecat.gif"];

function explodeConfetti() {
    // Configuración básica del confeti
    confetti({
        particleCount: 400,    // Cantidad de partículas de confeti
        spread: 400,            // Rango de dispersión
        origin: { y: 0.5 },    // Lugar desde donde aparece el confeti
        scalar: 5,
    });
}

function removeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    explodeConfetti();
    playMusic();
    startChangingImages();
}

function playMusic() {
    const audioElement = document.getElementById('myAudio');
    audioElement.src = songs[currentSongIndex];
    audioElement.play();
    isPlaying = true;

    audioElement.onended = function() {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0;
        }
        playMusic();
    };
}

// Función para pausar o reanudar la música
function togglePlayPause() {
    const audioElement = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('music-ctr');

    if (isPlaying) {
        audioElement.pause();
        playPauseBtn.src = 'SRC/IMG/music-ico.png';
    } else {
        audioElement.play();
        playPauseBtn.src = 'SRC/IMG/music-off.png';
    }

    isPlaying = !isPlaying; // Alternar el estado de reproducción
}

// Función para cambiar el volumen
function changeVolume(volume) {
    const audioElement = document.getElementById('myAudio');
    audioElement.volume = volume;
}

function startChangingImages() {
    if (!intervalId) {
        intervalId = setInterval(changeImagesRandomly, 3000);
    }
}

function changeImagesRandomly() {
    // Seleccionar solo las imágenes de inv0 a inv9
    const imageIds = ['inv0', 'inv1', 'inv2', 'inv3', 'inv4', 'inv5', 'inv6', 'inv7', 'inv8', 'inv9'];
    
    // Escoger un id aleatorio de entre los inv0 - inv9
    const randomId = imageIds[Math.floor(Math.random() * imageIds.length)];
    const imageElement = document.querySelector(`#${randomId} img`);

    // Guardar la imagen original
    const originalSrc = imageElement.getAttribute('src');
    
    // Cambiar a un GIF aleatorio
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    imageElement.setAttribute('src', randomGif);

    // Volver a la imagen original después de 3 segundos
    setTimeout(() => {
        imageElement.setAttribute('src', originalSrc);
    }, 3000);
}

function seefin() {
    // Aplicar la clase 'hidden' para ocultar el overlay
    document.getElementById('fin').classList.remove('hidden');
}
function seeend1() {
    // Aplicar la clase 'hidden' para ocultar el overlay
    document.getElementById('end1').classList.remove('hidden');
}
function seeend2() {
    // Aplicar la clase 'hidden' para ocultar el overlay
    document.getElementById('end2').classList.remove('hidden');
}