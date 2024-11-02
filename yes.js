document.getElementById('yesButton').addEventListener('click', function() {
    // Ganti 'halaman-lain.html' dengan halaman yang ingin dituju
    window.location.href = 'halaman-lain.html';
});

const noButton = document.getElementById('noButton');
const rocket = document.getElementById('rocket');

noButton.addEventListener('mouseenter', function() {
    moveButton();
});

function moveButton() {
    const box = document.querySelector('.box');
    const boxRect = box.getBoundingClientRect();
    
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Menghitung posisi acak dalam box
    const randomX = Math.random() * (boxRect.width - buttonWidth);
    const randomY = Math.random() * (boxRect.height - buttonHeight);

    noButton.style.position = 'absolute';
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Tampilkan dan animasikan roket
    rocket.style.display = 'block';
    rocket.style.animation = 'rocketAnimation 1s forwards';
    
    // Sembunyikan roket setelah animasi selesai
    setTimeout(() => {
        rocket.style.display = 'none';
    }, 1000); // Waktu yang sama dengan durasi animasi
}
