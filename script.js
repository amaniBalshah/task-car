let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // إزالة الصورة النشطة الحالية
    document.querySelector('.slide.active')?.classList.remove('active');
    // إضافة الصورة الجديدة
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// تغيير الصورة كل 5 ثوانٍ
setInterval(nextSlide, 5000);