document.addEventListener("DOMContentLoaded", function() {
    // Znajdź wszystkie przyciski "toggleButton" i dodaj im nasłuchiwanie zdarzeń
    document.querySelectorAll('.togglebutton').forEach(button => {
        button.addEventListener('click', function() {
            // Znajdź nadrzędny element i ikonę do obrócenia
            const icon = this.closest('.items_item').querySelector('.icon-orange-square');

            // Sprawdź aktualny kąt rotacji i oblicz nowy kąt
            const currentRotation = icon.style.transform.match(/rotate\((-?\d+)deg\)/);
            const currentAngle = currentRotation ? parseInt(currentRotation[1]) : 0;
            const newAngle = (currentAngle + 90) % 360; // Dodaj 90 stopni i oblicz moduł z 360

            // Zastosuj nową rotację
            icon.style.transform = `rotate(${newAngle}deg)`;
        });
    });
});
