Karena halaman di-deploy melalui Cloudflare Pages (frontend), pastikan elemen-elemen HTML berikut ada di dalam tag <head>

A. Tag Canonical URL
Tambahkan tag canonical di setiap halaman untuk menegaskan bahwa domain utama Anda adalah versi non-www:

HTML
<link rel="canonical" href="https://ceslogic.com/" />
B. Meta Tag Esensial & Open Graph (Social Preview)
Pastikan tag meta judul, deskripsi, dan preview saat dibagikan di media sosial (WhatsApp/LinkedIn/Twitter) sudah lengkap:

HTML
<title>CES Logic - [Tagline / Deskripsi Singkat Layanan]</title>
<meta name="description" content="Deskripsi lengkap dan menarik mengenai layanan ceslogic (120-160 karakter)." />
<meta name="robots" content="index, follow" />

<!-- Open Graph / Facebook / WhatsApp -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://ceslogic.com/" />
<meta property="og:title" content="CES Logic - [Judul Utama]" />
<meta property="og:description" content="Deskripsi layanan ceslogic." />
<meta property="og:image" content="https://ceslogic.com/og-image.png" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="CES Logic - [Judul Utama]" />
<meta name="twitter:description" content="Deskripsi layanan ceslogic." />
<meta name="twitter:image" content="https://ceslogic.com/og-image.png" />
C. File robots.txt & sitemap.xml
Pastikan di direktori publik (/public) project Anda terdapat:

robots.txt:

Plaintext
User-agent: *
Allow: /

Sitemap: https://ceslogic.com/sitemap.xml
sitemap.xml: Berisi daftar link halaman aktif Anda agar Googlebot dapat mengindeks halaman secara menyeluruh.