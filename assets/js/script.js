document.addEventListener("DOMContentLoaded", async () => {
    const appContent = document.getElementById("app-content");
    if (!appContent) return;

    // INI DIA JURUS SAPU BERSIHNYA SAYANG, BIAR NGGAK DOUBLE! ✨
    appContent.innerHTML = "";

    // Pastikan nama file ini BENAR-BENAR ADA di folder html/section/
    const sections = ["home", "about", "skills", "experience", "certifications", "portofolio", "articles", "contact", "footer"];

    for (const section of sections) {
        try {
            // UBAH BARIS INI:
            const response = await fetch(`html/section/${section}.html`);
            if (response.ok) {
                const html = await response.text();
                const sectionEl = document.createElement("div");
                sectionEl.innerHTML = html;
                appContent.appendChild(sectionEl);
            }
        } catch (error) {
            console.error(`Gagal muat ${section}`, error);
        }
    }

    // Typing Effect - Updated for Fullstack & JTC
    setTimeout(() => {
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            const words = [
                "Senior Software Engineer",
                "Fullstack Engineer",
                "Frontend Specialist",
                "Tech Writer Japan Tech Career",
            ];
            let wordIndex = 0;

            const textLoad = () => {
                // Set teks berdasarkan index saat ini
                typingText.textContent = words[wordIndex];

                // Pindah ke index berikutnya (reset ke 0 jika sudah di akhir)
                wordIndex = (wordIndex + 1) % words.length;
            }

            // Jalankan fungsi pertama kali
            textLoad();

            // Atur interval pergantian kata (misal setiap 3 detik)
            setInterval(textLoad, 3000);
        }
    }, 1000);

    // Inisialisasi Animasi Scroll
    setTimeout(() => {
        if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });
    }, 1000);

    // Inisialisasi Swiper buat Artikel
    setTimeout(() => {
        if (typeof Swiper !== 'undefined') {
            new Swiper(".article-swiper", {
                slidesPerView: 1,
                spaceBetween: 30,

                loop: true,
                loopedSlides: 4,

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        }
    }, 1500);

    // Inisialisasi Swiper buat Sertifikasi (3D Coverflow Modern)
    setTimeout(() => {
        if (typeof Swiper !== 'undefined') {
            new Swiper(".cert-swiper", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",

                // INI KUNCI BIAR MUTER TERUS TANPA MENTOK:
                loop: true,
                /* (Baris loopedSlides udah aku buang ke laut biar nggak nge-glitch lagi!) */

                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                },
                pagination: {
                    el: ".cert-swiper .swiper-pagination",
                    clickable: true,
                },
            });
        }
    }, 1500);
});