document.addEventListener('DOMContentLoaded', () => {
    const mainAttraction = document.getElementById('main-attraction');
    
    const mainAttractionImages = [
        'images/main-attraction1.jpg',
        'images/main-attraction2.jpg',
        'images/main-attraction3.jpg'
    ];
    
    let currentIndex = 0;

    function changeMainAttractionBackground() {
        mainAttraction.style.backgroundImage = `url('${mainAttractionImages[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % mainAttractionImages.length;
    }

    changeMainAttractionBackground(); // Initial background

    setInterval(changeMainAttractionBackground, 3000); // Change background every 3 seconds
});
