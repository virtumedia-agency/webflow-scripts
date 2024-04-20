<!-- Dodanie YouTube Iframe API -->
<script src="https://www.youtube.com/iframe_api"></script>

<script>
// Definicja globalnej zmiennej do przechowywania instancji odtwarzacza
var player;

// Funkcja wywoływana przez YouTube API po załadowaniu
function onYouTubeIframeAPIReady() {
    console.log('YouTube Iframe API is ready.');
    var iframe = document.querySelector('.iframe-fluid'); // Znajdź iframe z wideo

    if (iframe) {
        console.log('Found iframe:', iframe);
        player = new YT.Player(iframe, {
            events: {
                'onReady': onPlayerReady
            }
        });
    } else {
        console.error('Iframe not found.');
    }
}

// Funkcja wywoływana, gdy odtwarzacz jest gotowy
function onPlayerReady(event) {
    console.log('YouTube player is ready.');
    var closeButton = document.querySelector('.link_close'); // Znajdź przycisk zamknięcia

    if (closeButton) {
        console.log('Found close button:', closeButton);
        closeButton.addEventListener('click', function() {
            console.log('Close button clicked');
            if (player && player.stopVideo) {
                player.stopVideo(); // Zatrzymaj wideo przy kliknięciu
                console.log('Video stopped.');
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
