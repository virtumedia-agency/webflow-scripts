<!-- Dodanie YouTube Iframe API -->
<script src="https://www.youtube.com/iframe_api"></script>
console.log('Hello');
<script>
// Definicja globalnej zmiennej do przechowywania instancji odtwarzacza
var player;

// Funkcja wywoływana przez YouTube API po załadowaniu
function onYouTubeIframeAPIReady() {
    var iframe = document.querySelector('.iframe-fluid'); // Znajdź iframe z wideo

    if (iframe && !player) {
        player = new YT.Player(iframe, {
            events: {
                'onReady': onPlayerReady
            }
        });
    }
}

// Funkcja wywoływana, gdy odtwarzacz jest gotowy
function onPlayerReady(event) {
    console.log('YouTube player is ready.');

    var closeButton = document.querySelector('.link_close'); // Znajdź przycisk zamknięcia

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            console.log('Close button clicked');
            if (player && player.stopVideo) {
                player.stopVideo(); // Zatrzymaj wideo przy kliknięciu
            } else {
                console.error('Player not initialized or stopVideo not available.');
            }
        });
    } else {
        console.error('Close button not found.');
    }
}

// Ustawienie globalnej funkcji 'onYouTubeIframeAPIReady'
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
</script>
