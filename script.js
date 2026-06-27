/* ================================================================ */
/* نمایش صفحات و ناوبری                                           */
/* ================================================================ */
function showPage(pageId) {
    // مخفی کردن همه صفحات
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    // نمایش صفحه مورد نظر
    var targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // به‌روزرسانی کلاس active در منوی ناوبری
    var navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes("'" + pageId + "'")) {
            link.classList.add('active');
        }
    });

    // اسکرول به بالا
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ================================================================ */
/* مودال اطلاعات تماس                                             */
/* ================================================================ */
var modal = document.getElementById('contactModal');
var modalInfo = document.getElementById('modalInfo');

function openModal(type) {
    var info = '';
    if (type === 'whatsapp') {
        info = '<i class="fab fa-whatsapp"></i> ۰۹۱۲-XXX-XXXX (واتساپ)';
    } else if (type === 'telegram') {
        info = '<i class="fab fa-telegram"></i> @YourID (تلگرام)';
    } else if (type === 'bale') {
        info = '<i class="fas fa-comment-dots"></i> @YourID (بله)';
    } else if (type === 'phone') {
        info = '<i class="fas fa-phone"></i> ۰۲۱-XXXX-XXXX (تلفن)';
    }
    modalInfo.innerHTML = info;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// بستن با کلیک بیرون
window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// بستن با کلید ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

/* ================================================================ */
/* فعال‌سازی پیش‌فرض (خانه)                                      */
/* ================================================================ */
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});

console.log('✅ سایت با موفقیت بارگذاری شد!');
console.log('📞 اطلاعات تماس خود را در فایل HTML ویرایش کنید.');

// ===== پیام خوش‌آمدگویی =====
function closeWelcome() {
    var banner = document.getElementById('welcomeBanner');
    banner.classList.add('hide');
}

// بعد از ۵ ثانیه خودکار محو بشه (اگه بخوای)
setTimeout(function() {
    var banner = document.getElementById('welcomeBanner');
    if (banner) {
        banner.classList.add('hide');
    }
}, 5000);