# Ghifarel.dev — Portfolio Website

Portfolio pribadi **Muhammad Haykal Ghifarel** — Web Developer & SEO Specialist. Menampilkan proyek-proyek yang sudah dikembangkan, dikelola, dan dioptimasi, lengkap dengan filter kategori, pencarian, dan dukungan dua bahasa (Indonesia/English).

🔗 **Live site:** [https://ghifarel.github.io/portofolio/](https://ghifarel.github.io/portofolio/)

---

## ✨ Fitur

- 🌐 Dukungan Bahasa Indonesia & English (bisa diganti langsung di navbar)
- 🔍 Pencarian & filter proyek berdasarkan kategori
- 📱 Tampilan responsif — nyaman diakses dari HP maupun desktop
- 🗂️ Modal detail untuk tiap proyek
- ⚡ 100% statis — cepat, ringan, tanpa backend

## 🛠️ Dibangun Dengan

`HTML` · `CSS` · `JavaScript`

## 📁 Struktur Proyek

```
├── index.html          # Halaman utama
├── style.css            # Semua styling
├── script.js             # Logic (bahasa, filter, modal, dll)
├── robots.txt            # Crawl rules untuk search engine
├── sitemap.xml           # Sitemap untuk SEO
├── data/
│   └── projects.json     # Data proyek — edit di sini untuk update portofolio
└── assets/
    ├── favicon.svg
    └── CV-Muhammad-Haykal-Ghifarel.pdf
```

## ✏️ Update Data Proyek

Tidak perlu sentuh kode sama sekali — cukup edit `data/projects.json`, tambahkan objek baru dengan format:

```json
{
  "id": 9,
  "name": "Nama Proyek",
  "category": "Information System",
  "subcategory": "Web Application",
  "description": "Deskripsi singkat proyeknya.",
  "role": "Peran kamu di proyek ini",
  "year": "2024 — Present",
  "tech": ["PHP", "MySQL"],
  "challenge": "Masalah apa yang dipecahkan proyek ini.",
  "solution": "Bagaimana kamu membangun solusinya.",
  "result": "Hasil atau dampak dari proyek ini.",
  "url": "https://link-proyek.com",
  "github": "",
  "image": "",
  "status": "Active",
  "featured": false,
  "links": []
}
```

`challenge`, `solution`, `result`, `tech`, dan `links` bersifat opsional — modal detail proyek hanya menampilkan section yang datanya tersedia. `links` (array `{ "name": "...", "url": "..." }`) dipakai untuk proyek payung seperti "University Website Ecosystem" yang punya banyak situs turunan; modal akan menampilkan direktori situs yang bisa di-expand.

## 📬 Kontak

- **Email:** haykalghifarel08@gmail.com
- **LinkedIn:** [linkedin.com/in/muhammad-ghifarel](https://www.linkedin.com/in/muhammad-ghifarel)

---

<p align="center">© 2026 Muhammad Haykal Ghifarel</p>
