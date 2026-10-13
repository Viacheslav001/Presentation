document.addEventListener('DOMContentLoaded', () => {
    const totalSlides = 17;
    
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1) || 'index1.html';
    
    const match = filename.match(/index(\d+)\.html/);
    let currentSlide = match ? parseInt(match[1]) : 1;

    const slideCounter = document.getElementById('slideCounter');
    if (slideCounter) {
        slideCounter.textContent = `${currentSlide} / ${totalSlides}`;
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function goToNext() {
        if (currentSlide < totalSlides) {
            window.location.href = `index${currentSlide + 1}.html`;
        } else {
            window.location.href = `index1.html`;
        }
    }

    function goToPrev() {
        if (currentSlide > 1) {
            window.location.href = `index${currentSlide - 1}.html`;
        } else {
            window.location.href = `index${totalSlides}.html`;
        }
    }

    if (nextBtn) nextBtn.addEventListener('click', goToNext);
    if (prevBtn) prevBtn.addEventListener('click', goToPrev);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            goToNext();
        } else if (e.key === 'ArrowLeft') {
            goToPrev();
        }
    });
});