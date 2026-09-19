self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Membiarkan aplikasi mengambil data dari internet secara normal
    e.respondWith(fetch(e.request).catch(() => {
        return new Response('Tidak ada koneksi internet.');
    }));
});