document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan class untuk animasi body
    document.body.classList.add('content-visible');
    
    // Menu navigation
    document.getElementById('menu-branda').addEventListener('click', function(e) {
        e.preventDefault();
        setActiveMenu('branda');
    });
    document.getElementById('menu-info').addEventListener('click', function(e) {
        e.preventDefault();
        setActiveMenu('info');
    });    function setActiveMenu(menu) {
        document.getElementById('menu-branda').classList.remove('active');
        document.getElementById('menu-info').classList.remove('active');
        
        const mainContent = document.getElementById('main-content');
        mainContent.classList.add('fade-out');

        setTimeout(function() {
            if(menu === 'branda') {
                document.getElementById('menu-branda').classList.add('active');
                document.querySelector('.katalog-list-wrapper').style.display = '';
                document.querySelector('.lokasi-info').style.display = 'none';
            } else {
                document.getElementById('menu-info').classList.add('active');
                document.querySelector('.katalog-list-wrapper').style.display = 'none';
                document.querySelector('.lokasi-info').style.display = '';
            }
            mainContent.classList.remove('fade-out');
            mainContent.classList.add('fade-in');
            setTimeout(() => mainContent.classList.remove('fade-in'), 400);
        }, 400);
    }

    // WhatsApp button generator
    document.querySelectorAll('.katalog-item').forEach(function(item) {
        const nama = item.querySelector('.katalog-nama').innerText.trim();
        const harga = item.querySelector('.katalog-harga').innerText.trim();
        const img = item.querySelector('img').getAttribute('src');
        const imgUrl = location.origin + location.pathname.replace(/\/[^\/]*$/, '/') + img;
        const pesan = encodeURIComponent(
            `Halo kak, saya mau pesan ${nama} dengan harga ${harga}.\nGambar: ${imgUrl}\nkak ini harga nya bisa di kurangin gk kak ?`
        );
        const waUrl = `https://wa.me/6283851559401?text=${pesan}`;
        if (!item.querySelector('.btn-wa')) {
            const btn = document.createElement('a');
            btn.href = waUrl;
            btn.target = '_blank';
            btn.className = 'btn-wa';
            btn.style = "margin-left:auto;display:inline-flex;align-items:center;gap:4px;padding:6px 12px;background:#25d366;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;";
            btn.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" style="width:18px;height:18px;"> Pesan`;
            item.querySelector('.katalog-info').appendChild(btn);
        }
    }); // Perbaikan: Menambahkan kurung tutup yang benar

    // Animasi ngetik judul (5 detik)
    const title = "HEPPINEESS BUCKET";
    const el = document.querySelector('.splash-title');
    el.textContent = "";
    let i = 0;
    function type() {
        if (i < title.length) {
            el.textContent += title[i];
            i++;
            setTimeout(type, 5000 / title.length); // total 5 detik
        }
    }
    type();

    // Splash screen hilang otomatis setelah 7 detik
    setTimeout(function() {
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.classList.add('hide');
        
        // Tambahkan efek blur saat transisi
        document.body.style.filter = 'blur(10px)';
        setTimeout(() => {
            document.body.style.filter = 'blur(0)';
            document.body.style.transition = 'filter 0.8s ease-out';
        }, 100);
    }, 7000); // Perbaikan: Menghapus titik koma yang tidak perlu
});
