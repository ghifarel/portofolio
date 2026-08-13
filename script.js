(function () {
  'use strict';

  /* ==========================================================================
     I18N — translation dictionary + helpers
     ========================================================================== */
  const I18N = {
    en: {
      skip: 'Skip to content',
      pageTitle: 'Muhammad Haykal Ghifarel — Web Developer & SEO Specialist | Ghifarel.dev',
      metaDescription: 'Web Developer / Programmer & SEO Specialist with 4+ years of experience building web applications and information systems, and optimizing WordPress websites for technical SEO and performance.',
      ogTitle: 'Muhammad Haykal Ghifarel — Web Developer & SEO Specialist',
      ogDescription: 'I build and optimize websites, web applications, and digital platforms with a focus on performance, SEO, user experience, and reliable digital solutions.',

      'nav.home': 'Home', 'nav.about': 'About', 'nav.expertise': 'Expertise',
      'nav.projects': 'Projects', 'nav.seo': 'SEO', 'nav.experience': 'Experience',
      'nav.contact': 'Contact', 'nav.downloadCv': 'Download CV',

      'hero.headline': 'Building reliable <span class="accent">web systems</span> — and making sure they get <span class="accent-blue">found</span>.',
      'hero.role': 'Web Developer <span class="plus">+</span> SEO Specialist',
      'hero.sub': 'I build and optimize websites, web applications, and digital platforms with a focus on performance, SEO, user experience, and reliable digital solutions.',
      'hero.ctaView': 'View My Work',
      'hero.ctaDownload': 'Download CV',
      'hero.social.linkedin': 'LinkedIn ↗', 'hero.social.github': 'GitHub ↗', 'hero.social.email': 'Email ↗',

      'idcard.dev.label': 'Web Development',
      'idcard.seo.label': 'SEO & Optimization',
      'idcard.foot.left': 'Build → Optimize → Analyze',
      'idcard.foot.right': '4+ yrs',

      'orgstrip.label': 'Currently building for',
      'orgstrip.chip2': 'Faculties & Study Programs',
      'orgstrip.chip3': 'University Information Systems',

      'stats.years': 'Years Experience',
      'stats.webdevNumber': 'Web Development', 'stats.webdevLabel': 'Build & Maintain',
      'stats.wpNumber': 'WordPress', 'stats.wpLabel': 'Develop & Manage',
      'stats.seoNumber': 'Web & SEO', 'stats.seoLabel': 'Develop, Audit & Optimize',
      'stats.webAppsLabel': 'Web Applications', 'stats.wpWebsitesLabel': 'WordPress Websites',

      'about.eyebrow': 'About',
      'about.title': 'A developer who owns the SEO side too.',
      'about.p1': "I'm a Web Developer / Programmer and SEO Specialist with over four years of experience in web application development, information systems, and WordPress website management for a university with 20+ active sites.",
      'about.p2': 'Day to day, that means writing backend logic in PHP and CodeIgniter 3, managing MySQL databases, keeping WordPress sites secure and fast, and then closing the loop with technical SEO audits, on-page structure, and traffic analysis in Google Analytics and Search Console.',
      'about.p3': 'I care about the same thing on both sides of that work: whether the thing actually works for the people using it — and whether they can find it in the first place.',
      'about.eyebrow2': 'Core Strengths',
      'about.step1.title': 'Build', 'about.step1.desc': 'Develop web applications and websites — from backend logic to WordPress structure.',
      'about.step2.title': 'Optimize', 'about.step2.desc': 'Improve technical performance, on-page SEO, and user experience.',
      'about.step3.title': 'Analyze', 'about.step3.desc': 'Monitor traffic, search performance, and website behavior — then feed it back into the build.',

      'expertise.eyebrow': 'What I Do',
      'expertise.title': 'Two disciplines, one working process.',
      'expertise.card1.title': 'Web Development',
      'expertise.card1.desc': 'Developing web applications and information systems using PHP, CodeIgniter 3, MySQL, JavaScript, and modern web technologies.',
      'expertise.card2.title': 'WordPress Development',
      'expertise.card2.desc': 'Developing, managing, and maintaining WordPress websites — structure, content, performance, security, and optimization.',
      'expertise.card2.tag2': 'CMS', 'expertise.card2.tag3': 'Website Management', 'expertise.card2.tag4': 'Performance',
      'expertise.card3.title': 'SEO & Web Optimization',
      'expertise.card3.desc': 'Improving website visibility, technical health, search performance, and user experience through technical and on-page SEO.',
      'expertise.card4.title': 'Analytics & Performance',
      'expertise.card4.desc': 'Monitoring website traffic, user behavior, search performance, and website health using analytics and webmaster tools.',
      'expertise.card4.tag4': 'SEO Reporting',

      'pillarDev.eyebrow': 'Pillar 01',
      'pillarDev.title': 'Web Development',
      'pillarDev.sub': 'Building practical web applications and information systems designed to solve real-world operational needs.',
      'pillarDev.list.1': 'Web Application Development', 'pillarDev.list.2': 'Information Systems',
      'pillarDev.list.3': 'Backend Development', 'pillarDev.list.4': 'Database Management',
      'pillarDev.list.5': 'API / System Integration', 'pillarDev.list.6': 'System Maintenance',
      'pillarDev.relatedProjects': 'Related Projects',

      'pillarSeo.eyebrow': 'Pillar 02',
      'pillarSeo.title': 'SEO & Web Optimization',
      'pillarSeo.sub': 'Improving website visibility, technical health, performance, and search experience through data-driven optimization.',
      'pillarSeo.panel1.title': 'Technical SEO',
      'pillarSeo.panel1.desc': 'Crawl analysis, HTTP status codes, meta titles & descriptions, heading structure, internal linking, broken links.',
      'pillarSeo.panel2.title': 'Search Performance',
      'pillarSeo.panel2.desc': 'Monitoring search queries, clicks, impressions, CTR, and average position.',
      'pillarSeo.panel3.title': 'Website Analytics',
      'pillarSeo.panel3.desc': 'Traffic monitoring, traffic sources, user behavior, and website performance analysis.',
      'pillarSeo.panel4.title': 'Performance Optimization',
      'pillarSeo.panel4.desc': 'Core Web Vitals, page speed, and mobile optimization.',
      'pillarSeo.sitesManage': 'Sites I Manage & Optimize',

      'selectedWork.eyebrow': 'Selected Work',
      'selectedWork.title': "A closer look at a few of the systems I've built.",
      'selectedWork.lead': 'Featured projects, split by discipline. Click any card for the full detail.',
      'selectedWork.groupDev': 'Web Development', 'selectedWork.groupSeo': 'WordPress & SEO',
      'selectedWork.cta': 'View Case Study ↗',
      'selectedWork.empty': 'No featured projects yet — set "featured": true on an item in data/projects.json to show it here.',

      'projects.eyebrow': 'All Projects',
      'projects.title': "Websites and systems I've developed, managed, and maintained.",
      'projects.filterAll': 'All',
      'projects.searchPlaceholder': 'Search projects…',
      'projects.empty': 'No projects match your search or filter.',
      'projects.reset': 'Reset filters',
      'projects.errorText': "Portfolio data couldn't be loaded right now.",
      'projects.retry': 'Try again',
      'projects.loading': 'Loading projects…',
      'projects.noMatching': 'No matching projects yet.',
      'projects.countSuffix': 'project',
      'projects.countSuffixPlural': 'projects',

      'seoApproach.eyebrow': 'SEO Approach',
      'seoApproach.title': 'Making sure the work is actually found and used.',
      'seoApproach.lead': "I play an active role in the SEO of the university's WordPress websites — crawling and auditing them with Screaming Frog SEO Spider to catch technical issues, monitoring search and traffic performance in Search Console and GA4, and reporting the results to stakeholders.",
      'seoApproach.step1.title': 'Audit', 'seoApproach.step1.desc': 'Crawl the site with Screaming Frog to surface technical issues — broken links, status codes, missing meta.',
      'seoApproach.step2.title': 'Optimize', 'seoApproach.step2.desc': 'Fix on-page structure: titles, meta descriptions, headings, internal linking, and page speed.',
      'seoApproach.step3.title': 'Monitor', 'seoApproach.step3.desc': 'Track queries, clicks, impressions, and average position in Google Search Console.',
      'seoApproach.step4.title': 'Evaluate', 'seoApproach.step4.desc': 'Review traffic and behavior in GA4, then feed findings back into the next round of changes.',

      'experience.eyebrow': 'Experience',
      'experience.title': "Where I've put this to work.",

      'job1.title': 'Programmer', 'job1.date': 'May 2022 — Present',
      'job1.bullet1': '<strong>Manage 20+ WordPress websites</strong> across the university, faculties, and study programs — development, uptime, and content structure.',
      'job1.bullet2': '<strong>Built 7+ web-based information systems</strong> with PHP & CodeIgniter 3, including SIMKER (Cooperation Information System) and SIMLITABMAS (Research & Community Service System).',
      'job1.bullet3': 'Own SEO end-to-end — URL structure, meta tags, keyword placement — and monitor traffic and content performance with Google Analytics.',
      'job1.bullet4': "Administer the digital correspondence and library information systems, and manage the university's electronic journal (OJS), including detecting and cleaning up spam/illegal-content injections.",
      'job1.bullet5': 'Run technical training and knowledge-transfer sessions for administrative and academic staff, plus author user manuals and technical documentation.',

      'job2.title': 'Junior Programmer',
      'job2.bullet1': 'Developed and integrated a pension-fund calculation module for ADELE (Automatic Distribution and Equalization Engine).',
      'job2.bullet2': "Improved ADELE's front-end for better functionality and usability.",
      'job2.bullet3': 'Identified and fixed bugs on the PVC2 web application to keep the service running reliably.',

      'job3.title': 'Junior Programmer',
      'job3.bullet1': 'Diagnosed and resolved bugs on the CAMP 404 platform to keep the system stable.',
      'job3.bullet2': 'Ran comprehensive QA testing after fixes to keep performance on target.',
      'job3.bullet3': 'Refreshed the UI and improved responsive design across devices and screen sizes.',

      'job4.title': 'Student Intern',
      'job4.bullet1': 'Planned, produced, and edited educational videos for YouTube and Instagram.',
      'job4.bullet2': 'Designed structured learning material using visuals, graphics, and diagrams.',

      'education.gpa': 'GPA 3.48',

      'techstack.eyebrow': 'Technology Stack',
      'techstack.title': 'Tools I use to keep things running.',
      'techstack.group1': 'Development', 'techstack.group2': 'Database', 'techstack.group3': 'CMS',
      'techstack.group4': 'Web & SEO', 'techstack.group5': 'Tools & Platform',
      'techstack.group5.tag3': 'Hosting Management',

      'contact.eyebrow': 'Contact',
      'contact.title': "Let's Build and Optimize Something Great",
      'contact.lead': "I'm open to opportunities and collaborations in web development, WordPress, SEO, and website optimization.",
      'contact.role': 'Web Developer & SEO Specialist',
      'contact.whatsapp': 'Chat via WhatsApp',
      'contact.emailLabel': 'Email', 'contact.linkedinLabel': 'LinkedIn',

      'footer.role': 'Web Developer & SEO Specialist',
      'footer.copyright': '© {year} Muhammad Haykal Ghifarel. All rights reserved.',

      'modal.overview': 'Overview', 'modal.role': 'My Role', 'modal.status': 'Status',
      'modal.visit': 'Visit Website ↗', 'modal.close': 'Close',
      'modal.noDescription': 'No description available.',
      'modal.statusDefault': 'Active',
      'modal.problem': 'Problem', 'modal.solution': 'Approach & Solution',
      'modal.technology': 'Technology', 'modal.result': 'Result',
      'modal.sites': 'Sites in This Ecosystem', 'modal.sitesToggle': 'View all {count} sites ↓',
      'modal.sitesToggleClose': 'Hide site list ↑'
    },

    id: {
      skip: 'Langsung ke konten',
      pageTitle: 'Muhammad Haykal Ghifarel — Web Developer & SEO Specialist | Ghifarel.dev',
      metaDescription: 'Web Developer / Programmer & SEO Specialist dengan pengalaman 4+ tahun membangun aplikasi web, sistem informasi, dan mengoptimalkan website WordPress untuk SEO teknis serta performa.',
      ogTitle: 'Muhammad Haykal Ghifarel — Web Developer & SEO Specialist',
      ogDescription: 'Saya membangun dan mengoptimalkan website, aplikasi web, dan platform digital dengan fokus pada performa, SEO, pengalaman pengguna, dan solusi digital yang andal.',

      'nav.home': 'Beranda', 'nav.about': 'Tentang', 'nav.expertise': 'Keahlian',
      'nav.projects': 'Proyek', 'nav.seo': 'SEO', 'nav.experience': 'Pengalaman',
      'nav.contact': 'Kontak', 'nav.downloadCv': 'Unduh CV',

      'hero.headline': 'Membangun <span class="accent">sistem web</span> yang andal — dan memastikan sistem itu <span class="accent-blue">ditemukan</span>.',
      'hero.role': 'Pengembang Web <span class="plus">+</span> Spesialis SEO',
      'hero.sub': 'Saya membangun dan mengoptimalkan website, aplikasi web, dan platform digital dengan fokus pada performa, SEO, pengalaman pengguna, dan solusi digital yang andal.',
      'hero.ctaView': 'Lihat Karya Saya',
      'hero.ctaDownload': 'Unduh CV',
      'hero.social.linkedin': 'LinkedIn ↗', 'hero.social.github': 'GitHub ↗', 'hero.social.email': 'Email ↗',

      'idcard.dev.label': 'Pengembangan Web',
      'idcard.seo.label': 'SEO & Optimasi',
      'idcard.foot.left': 'Bangun → Optimasi → Analisis',
      'idcard.foot.right': '4+ thn',

      'orgstrip.label': 'Saat ini membangun untuk',
      'orgstrip.chip2': 'Fakultas & Program Studi',
      'orgstrip.chip3': 'Sistem Informasi Universitas',

      'stats.years': 'Tahun Pengalaman',
      'stats.webdevNumber': 'Pengembangan Web', 'stats.webdevLabel': 'Bangun & Kelola',
      'stats.wpNumber': 'WordPress', 'stats.wpLabel': 'Kembangkan & Kelola',
      'stats.seoNumber': 'SEO & Analitik', 'stats.seoLabel': 'Audit & Optimasi',
      'stats.webAppsLabel': 'Aplikasi Web', 'stats.wpWebsitesLabel': 'Website WordPress',

      'about.eyebrow': 'Tentang',
      'about.title': 'Developer yang juga menangani sisi SEO.',
      'about.p1': 'Saya adalah Web Developer / Programmer dan SEO Specialist dengan pengalaman lebih dari empat tahun dalam pengembangan aplikasi web, sistem informasi, dan pengelolaan website WordPress untuk universitas dengan 20+ situs aktif.',
      'about.p2': 'Dalam keseharian, itu berarti menulis logika backend dengan PHP dan CodeIgniter 3, mengelola database MySQL, menjaga website WordPress tetap aman dan cepat, lalu menutup siklusnya dengan audit SEO teknis, struktur on-page, dan analisis traffic di Google Analytics dan Search Console.',
      'about.p3': 'Saya peduli pada hal yang sama di kedua sisi pekerjaan ini: apakah sistem tersebut benar-benar berfungsi bagi penggunanya — dan apakah mereka bisa menemukannya sejak awal.',
      'about.eyebrow2': 'Kekuatan Utama',
      'about.step1.title': 'Bangun', 'about.step1.desc': 'Mengembangkan aplikasi web dan website — dari logika backend hingga struktur WordPress.',
      'about.step2.title': 'Optimasi', 'about.step2.desc': 'Meningkatkan performa teknis, SEO on-page, dan pengalaman pengguna.',
      'about.step3.title': 'Analisis', 'about.step3.desc': 'Memantau traffic, performa pencarian, dan perilaku website — lalu menjadikannya masukan untuk pengembangan berikutnya.',

      'expertise.eyebrow': 'Yang Saya Kerjakan',
      'expertise.title': 'Dua disiplin ilmu, satu proses kerja.',
      'expertise.card1.title': 'Pengembangan Web',
      'expertise.card1.desc': 'Mengembangkan aplikasi web dan sistem informasi menggunakan PHP, CodeIgniter 3, MySQL, JavaScript, dan teknologi web modern.',
      'expertise.card2.title': 'Pengembangan WordPress',
      'expertise.card2.desc': 'Mengembangkan, mengelola, dan memelihara website WordPress — struktur, konten, performa, keamanan, dan optimasi.',
      'expertise.card2.tag2': 'CMS', 'expertise.card2.tag3': 'Manajemen Website', 'expertise.card2.tag4': 'Performa',
      'expertise.card3.title': 'SEO & Optimasi Web',
      'expertise.card3.desc': 'Meningkatkan visibilitas website, kesehatan teknis, performa pencarian, dan pengalaman pengguna melalui SEO teknis dan on-page.',
      'expertise.card4.title': 'Analitik & Performa',
      'expertise.card4.desc': 'Memantau traffic website, perilaku pengguna, performa pencarian, dan kesehatan website menggunakan tools analitik dan webmaster.',
      'expertise.card4.tag4': 'Laporan SEO',

      'pillarDev.eyebrow': 'Pilar 01',
      'pillarDev.title': 'Pengembangan Web',
      'pillarDev.sub': 'Membangun aplikasi web dan sistem informasi praktis yang dirancang untuk menjawab kebutuhan operasional nyata.',
      'pillarDev.list.1': 'Pengembangan Aplikasi Web', 'pillarDev.list.2': 'Sistem Informasi',
      'pillarDev.list.3': 'Pengembangan Backend', 'pillarDev.list.4': 'Manajemen Database',
      'pillarDev.list.5': 'Integrasi API / Sistem', 'pillarDev.list.6': 'Pemeliharaan Sistem',
      'pillarDev.relatedProjects': 'Proyek Terkait',

      'pillarSeo.eyebrow': 'Pilar 02',
      'pillarSeo.title': 'SEO & Optimasi Web',
      'pillarSeo.sub': 'Meningkatkan visibilitas website, kesehatan teknis, performa, dan pengalaman pencarian melalui optimasi berbasis data.',
      'pillarSeo.panel1.title': 'SEO Teknis',
      'pillarSeo.panel1.desc': 'Analisis crawl, kode status HTTP, meta title & description, struktur heading, internal linking, broken link.',
      'pillarSeo.panel2.title': 'Performa Pencarian',
      'pillarSeo.panel2.desc': 'Memantau kata kunci pencarian, klik, impresi, CTR, dan posisi rata-rata.',
      'pillarSeo.panel3.title': 'Analitik Website',
      'pillarSeo.panel3.desc': 'Pemantauan traffic, sumber traffic, perilaku pengguna, dan analisis performa website.',
      'pillarSeo.panel4.title': 'Optimasi Performa',
      'pillarSeo.panel4.desc': 'Core Web Vitals, kecepatan halaman, dan optimasi mobile.',
      'pillarSeo.sitesManage': 'Situs yang Saya Kelola & Optimasi',

      'selectedWork.eyebrow': 'Karya Pilihan',
      'selectedWork.title': 'Sekilas beberapa sistem yang telah saya bangun.',
      'selectedWork.lead': 'Proyek unggulan, dikelompokkan berdasarkan disiplin. Klik kartu mana pun untuk detail lengkap.',
      'selectedWork.groupDev': 'Pengembangan Web', 'selectedWork.groupSeo': 'WordPress & SEO',
      'selectedWork.cta': 'Lihat Studi Kasus ↗',
      'selectedWork.empty': 'Belum ada proyek unggulan — set "featured": true pada salah satu item di data/projects.json untuk menampilkannya di sini.',

      'projects.eyebrow': 'Semua Proyek',
      'projects.title': 'Website dan sistem yang telah saya kembangkan, kelola, dan pelihara.',
      'projects.filterAll': 'Semua',
      'projects.searchPlaceholder': 'Cari proyek…',
      'projects.empty': 'Tidak ada proyek yang cocok dengan pencarian atau filter Anda.',
      'projects.reset': 'Reset filter',
      'projects.errorText': 'Data portofolio tidak dapat dimuat saat ini.',
      'projects.retry': 'Coba lagi',
      'projects.loading': 'Memuat proyek…',
      'projects.noMatching': 'Belum ada proyek yang cocok.',
      'projects.countSuffix': 'proyek',
      'projects.countSuffixPlural': 'proyek',

      'seoApproach.eyebrow': 'Pendekatan SEO',
      'seoApproach.title': 'Memastikan hasil kerja benar-benar ditemukan dan digunakan.',
      'seoApproach.lead': 'Saya berperan aktif dalam SEO website WordPress universitas — melakukan crawling dan audit menggunakan Screaming Frog SEO Spider untuk menemukan masalah teknis, memantau performa pencarian dan traffic di Search Console dan GA4, serta melaporkan hasilnya kepada pemangku kepentingan.',
      'seoApproach.step1.title': 'Audit', 'seoApproach.step1.desc': 'Crawl website dengan Screaming Frog untuk menemukan masalah teknis — broken link, kode status, meta yang hilang.',
      'seoApproach.step2.title': 'Optimasi', 'seoApproach.step2.desc': 'Memperbaiki struktur on-page: title, meta description, heading, internal linking, dan kecepatan halaman.',
      'seoApproach.step3.title': 'Pantau', 'seoApproach.step3.desc': 'Melacak kata kunci, klik, impresi, dan posisi rata-rata di Google Search Console.',
      'seoApproach.step4.title': 'Evaluasi', 'seoApproach.step4.desc': 'Meninjau traffic dan perilaku pengguna di GA4, lalu menjadikan temuannya sebagai masukan untuk perubahan berikutnya.',

      'experience.eyebrow': 'Pengalaman',
      'experience.title': 'Tempat saya menerapkan semua ini.',

      'job1.title': 'Programmer', 'job1.date': 'Mei 2022 — Sekarang',
      'job1.bullet1': '<strong>Mengelola 20+ website WordPress</strong> di seluruh universitas, fakultas, dan program studi — pengembangan, uptime, dan struktur konten.',
      'job1.bullet2': '<strong>Membangun 7+ sistem informasi berbasis web</strong> dengan PHP & CodeIgniter 3, termasuk SIMKER (Sistem Informasi Kerja Sama) dan SIMLITABMAS (Sistem Penelitian & Pengabdian Masyarakat).',
      'job1.bullet3': 'Menangani SEO secara menyeluruh — struktur URL, meta tag, penempatan kata kunci — serta memantau traffic dan performa konten dengan Google Analytics.',
      'job1.bullet4': 'Mengelola sistem persuratan digital dan sistem informasi perpustakaan, serta mengelola jurnal elektronik universitas (OJS), termasuk mendeteksi dan membersihkan injeksi spam/konten ilegal.',
      'job1.bullet5': 'Menjalankan pelatihan teknis dan transfer pengetahuan bagi staf administratif dan akademik, serta menyusun manual pengguna dan dokumentasi teknis.',

      'job2.title': 'Junior Programmer',
      'job2.bullet1': 'Mengembangkan dan mengintegrasikan modul perhitungan dana pensiun untuk ADELE (Automatic Distribution and Equalization Engine).',
      'job2.bullet2': 'Meningkatkan front-end ADELE untuk fungsionalitas dan usability yang lebih baik.',
      'job2.bullet3': 'Mengidentifikasi dan memperbaiki bug pada aplikasi web PVC2 agar layanan tetap berjalan dengan andal.',

      'job3.title': 'Junior Programmer',
      'job3.bullet1': 'Mendiagnosis dan menyelesaikan bug pada platform CAMP 404 agar sistem tetap stabil.',
      'job3.bullet2': 'Menjalankan pengujian QA menyeluruh setelah perbaikan untuk menjaga performa sesuai target.',
      'job3.bullet3': 'Memperbarui UI dan meningkatkan responsive design di berbagai perangkat dan ukuran layar.',

      'job4.title': 'Student Intern',
      'job4.bullet1': 'Merencanakan, memproduksi, dan mengedit video edukasi untuk YouTube dan Instagram.',
      'job4.bullet2': 'Merancang materi pembelajaran terstruktur menggunakan visual, grafis, dan diagram.',

      'education.gpa': 'IPK 3.48',

      'techstack.eyebrow': 'Tumpukan Teknologi',
      'techstack.title': 'Tools yang saya gunakan untuk menjaga semuanya tetap berjalan.',
      'techstack.group1': 'Pengembangan', 'techstack.group2': 'Database', 'techstack.group3': 'CMS',
      'techstack.group4': 'SEO & Analitik', 'techstack.group5': 'Tools & Platform',
      'techstack.group5.tag3': 'Manajemen Hosting',

      'contact.eyebrow': 'Kontak',
      'contact.title': 'Ayo Bangun dan Optimalkan Sesuatu yang Hebat',
      'contact.lead': 'Saya terbuka untuk peluang dan kolaborasi di bidang pengembangan web, WordPress, SEO, dan optimasi website.',
      'contact.role': 'Pengembang Web & Spesialis SEO',
      'contact.whatsapp': 'Chat via WhatsApp',
      'contact.emailLabel': 'Email', 'contact.linkedinLabel': 'LinkedIn',

      'footer.role': 'Pengembang Web & Spesialis SEO',
      'footer.copyright': '© {year} Muhammad Haykal Ghifarel. Hak cipta dilindungi.',

      'modal.overview': 'Ringkasan', 'modal.role': 'Peran Saya', 'modal.status': 'Status',
      'modal.visit': 'Kunjungi Website ↗', 'modal.close': 'Tutup',
      'modal.noDescription': 'Deskripsi tidak tersedia.',
      'modal.statusDefault': 'Aktif',
      'modal.problem': 'Permasalahan', 'modal.solution': 'Pendekatan & Solusi',
      'modal.technology': 'Teknologi', 'modal.result': 'Hasil',
      'modal.sites': 'Situs dalam Ekosistem Ini', 'modal.sitesToggle': 'Lihat semua {count} situs ↓',
      'modal.sitesToggleClose': 'Sembunyikan daftar situs ↑'
    }
  };

  const STORAGE_KEY = 'ghifarel_dev_lang';
  let currentLang = 'en';

  function t(key) {
    const dict = I18N[currentLang] || I18N.en;
    return (dict && dict[key] !== undefined) ? dict[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
  }

  function detectInitialLang() {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'id' || saved === 'en') return saved;
    } catch (e) { /* localStorage unavailable — fall through */ }
    return 'en';
  }

  function applyLanguage(lang) {
    currentLang = (lang === 'id') ? 'id' : 'en';

    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });

    const pageTitleEl = document.getElementById('pageTitle');
    if (pageTitleEl) pageTitleEl.textContent = t('pageTitle');
    const metaDesc = document.getElementById('metaDescription');
    if (metaDesc) metaDesc.setAttribute('content', t('metaDescription'));
    const ogTitle = document.getElementById('ogTitle');
    if (ogTitle) ogTitle.setAttribute('content', t('ogTitle'));
    const ogDescription = document.getElementById('ogDescription');
    if (ogDescription) ogDescription.setAttribute('content', t('ogDescription'));
    const twitterTitle = document.getElementById('twitterTitle');
    if (twitterTitle) twitterTitle.setAttribute('content', t('ogTitle'));

    updateLangToggleUI();
    updateFooterYear();

    if (state.loaded) {
      renderQuickStats(lastCategoriesResponse || {});
      renderPortfolio();
      renderPillarProjects();
      renderSelectedWork();
    } else {
      document.querySelectorAll('.pillar-project__empty').forEach(function (el) {
        el.textContent = t('projects.loading');
      });
    }

    try { window.localStorage.setItem(STORAGE_KEY, currentLang); } catch (e) { /* ignore */ }
  }

  function updateLangToggleUI() {
    document.querySelectorAll('.lang-toggle__opt').forEach(function (btn) {
      const isActive = btn.getAttribute('data-lang') === currentLang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function initLangToggle() {
    document.querySelectorAll('.lang-toggle').forEach(function (group) {
      group.addEventListener('click', function (e) {
        const btn = e.target.closest('.lang-toggle__opt');
        if (!btn) return;
        const lang = btn.getAttribute('data-lang');
        if (lang && lang !== currentLang) applyLanguage(lang);
      });
    });
  }

  /* ==========================================================================
     STATE
     ========================================================================== */
  const state = {
    allItems: [],
    featuredItems: [],
    categories: [],
    activeFilter: 'All',
    searchQuery: '',
    loaded: false
  };
  let lastCategoriesResponse = {};

  const DEV_KEYWORDS = [
    'web application', 'information system', 'system integration', 'backend', 'web dev',
    'aplikasi web', 'sistem informasi', 'integrasi sistem', 'pengembangan web'
  ];
  const SEO_KEYWORDS = [
    'wordpress', 'seo', 'optimization', 'web optimization', 'optimasi'
  ];

  function classify(category) {
    const c = (category || '').toLowerCase();
    if (DEV_KEYWORDS.some(function (k) { return c.indexOf(k) !== -1; })) return 'dev';
    if (SEO_KEYWORDS.some(function (k) { return c.indexOf(k) !== -1; })) return 'seo';
    return 'other';
  }

  /* ==========================================================================
     NAVBAR
     ========================================================================== */
  function initNavbar() {
    const toggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (toggle && mobileNav) {
      toggle.addEventListener('click', function () {
        const isOpen = mobileNav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      });

      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Open menu');
        });
      });
    }
  }

  function initScrollShadow() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', debounce(function () {
      navbar.style.boxShadow = window.scrollY > 8 ? '0 4px 20px rgba(20,18,15,0.06)' : 'none';
    }, 50));
  }

  function initActiveNavIndicator() {
    const links = Array.prototype.slice.call(document.querySelectorAll('[data-nav-link]'));
    const sections = links
      .map(function (link) {
        const id = link.getAttribute('href').replace('#', '');
        return { id: id, el: document.getElementById(id), link: link };
      })
      .filter(function (s) { return s.el; });

    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const match = sections.find(function (s) { return s.el === entry.target; });
        if (!match) return;
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('is-active'); });
          match.link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(function (s) { observer.observe(s.el); });
  }

  /* ==========================================================================
     REVEAL ON SCROLL
     ========================================================================== */
  function initRevealOnScroll() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll(
      '.stat-card, .expertise-card, .pillar-panel, .approach-step, .timeline__item, .featured-card, .project-card'
    );
    if (!targets.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('reveal', 'is-visible'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  /* ==========================================================================
     HERO — subtle animated grid canvas
     ========================================================================== */
  function initHeroGrid() {
    const canvas = document.getElementById('heroGrid');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width, height, dpr;
    let nodes = [];
    const spacing = 64;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    }

    function buildNodes() {
      nodes = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          nodes.push({ baseX: x * spacing, baseY: y * spacing, phase: Math.random() * Math.PI * 2 });
        }
      }
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      const t = time * 0.0004;

      ctx.strokeStyle = 'rgba(20, 18, 15, 0.045)';
      ctx.fillStyle = 'rgba(200, 30, 58, 0.22)';
      ctx.lineWidth = 1;

      nodes.forEach(function (n) {
        const dy = Math.sin(t + n.phase) * 4;
        const dx = Math.cos(t + n.phase) * 4;
        const x = n.baseX + dx;
        const y = n.baseY + dy;

        ctx.beginPath();
        ctx.moveTo(x - spacing / 2, y);
        ctx.lineTo(x + spacing / 2, y);
        ctx.stroke();

        if ((n.baseX / spacing + n.baseY / spacing) % 7 === 0) {
          ctx.beginPath();
          ctx.arc(x, y, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (!prefersReducedMotion) requestAnimationFrame(draw);
    }

    window.addEventListener('resize', debounce(resize, 200));
    resize();
    requestAnimationFrame(draw);
    if (prefersReducedMotion) draw(0);
  }

  function debounce(fn, wait) {
    let t;
    return function () {
      clearTimeout(t);
      const args = arguments;
      t = setTimeout(function () { fn.apply(null, args); }, wait);
    };
  }

  /* ==========================================================================
     DATA LOADING — static JSON file (data/projects.json)
     Replaces the original google.script.run / Google Sheets call.
     To add or edit projects, just edit data/projects.json — no backend needed.
     ========================================================================== */
  function loadPortfolio() {
    showSkeletons(true);
    showError(false);

    fetch('data/projects.json', { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (items) {
        onPortfolioLoaded(buildResponse(items));
      })
      .catch(onPortfolioError);
  }

  // Mirrors the shape of the old Apps Script getPortfolioData() response,
  // computed client-side from the flat JSON array.
  function buildResponse(items) {
    const list = Array.isArray(items) ? items : [];
    const categories = {};
    list.forEach(function (item) {
      const key = item.category || 'Other';
      categories[key] = (categories[key] || 0) + 1;
    });
    return { success: true, items: list, total: list.length, categories: categories };
  }

  function onPortfolioLoaded(response) {
    showSkeletons(false);

    if (!response || !response.success) {
      onPortfolioError(new Error((response && response.error) || 'Unknown error'));
      return;
    }

    state.allItems = response.items || [];
    state.featuredItems = state.allItems.filter(function (item) { return item.featured; });
    state.categories = Object.keys(response.categories || {});
    state.loaded = true;
    lastCategoriesResponse = response.categories || {};

    renderQuickStats(lastCategoriesResponse);
    renderFilterButtons();
    renderPortfolio();
    renderPillarProjects();
    renderSelectedWork();
  }

  function onPortfolioError(err) {
    showSkeletons(false);
    showError(true);
    console.error('Failed to load portfolio:', err);
  }

  function showSkeletons(show) {
    const el = document.getElementById('portfolioSkeletons');
    if (el) el.style.display = show ? 'contents' : 'none';
  }

  function showError(show) {
    const el = document.getElementById('errorState');
    if (el) el.hidden = !show;
  }

  /* ==========================================================================
     QUICK STATS
     ========================================================================== */
  function renderQuickStats(categories) {
    const webAppCount = Object.keys(categories).reduce(function (sum, key) {
      return classify(key) === 'dev' ? sum + categories[key] : sum;
    }, 0);
    const wpCount = Object.keys(categories).reduce(function (sum, key) {
      return classify(key) === 'seo' ? sum + categories[key] : sum;
    }, 0);

    const webAppEl = document.getElementById('statWebApps');
    const wpEl = document.getElementById('statWordPress');

    if (webAppEl && webAppCount > 0) {
      webAppEl.querySelector('.stat-card__number').textContent = webAppCount + '+';
      webAppEl.querySelector('.stat-card__label').textContent = t('stats.webAppsLabel');
    }
    if (wpEl && wpCount > 0) {
      wpEl.querySelector('.stat-card__number').textContent = wpCount + '+';
      wpEl.querySelector('.stat-card__label').textContent = t('stats.wpWebsitesLabel');
    }
  }

  /* ==========================================================================
     ALL PROJECTS — dynamic filter buttons
     ========================================================================== */
  function renderFilterButtons() {
    const group = document.getElementById('filterGroup');
    if (!group || !state.categories.length) return;

    Array.prototype.slice.call(group.querySelectorAll('.filter-btn:not([data-filter="All"])')).forEach(function (el) { el.remove(); });

    state.categories.forEach(function (cat) {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.type = 'button';
      btn.dataset.filter = cat;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', 'false');
      btn.textContent = cat;
      group.appendChild(btn);
    });
  }

  function getFilteredItems() {
    const q = state.searchQuery.trim().toLowerCase();
    const filter = state.activeFilter;

    return state.allItems.filter(function (item) {
      const matchesFilter = filter === 'All' || (item.category || '').toLowerCase() === filter.toLowerCase();
      const matchesQuery = !q ||
        (item.name || '').toLowerCase().indexOf(q) !== -1 ||
        (item.category || '').toLowerCase().indexOf(q) !== -1 ||
        (item.subcategory || '').toLowerCase().indexOf(q) !== -1 ||
        (item.description || '').toLowerCase().indexOf(q) !== -1;
      return matchesFilter && matchesQuery;
    });
  }

  function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    const countEl = document.getElementById('portfolioCount');
    const emptyState = document.getElementById('emptyState');
    if (!grid) return;

    const items = getFilteredItems();

    Array.prototype.slice.call(grid.querySelectorAll('.project-card')).forEach(function (el) { el.remove(); });

    if (countEl) {
      countEl.textContent = state.loaded
        ? items.length + ' ' + (items.length === 1 ? t('projects.countSuffix') : t('projects.countSuffixPlural'))
        : '';
    }

    if (state.loaded && items.length === 0) {
      if (emptyState) emptyState.hidden = false;
      return;
    }
    if (emptyState) emptyState.hidden = true;

    const fragment = document.createDocumentFragment();
    items.forEach(function (item, i) { fragment.appendChild(buildProjectCard(item, i)); });
    grid.appendChild(fragment);
  }

  var TECH_ICONS = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 6 2 12 8 18"></polyline><polyline points="16 6 22 12 16 18"></polyline></svg>',
    db: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"></path><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"></path></svg>',
    wp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"></circle><path d="M4 10l3.5 8L10 11l2.5 7L16 8"></path></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10"></path><path d="M12 20V4"></path><path d="M20 20v-7"></path></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>',
    crawl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"></circle><path d="M12 7v6"></path><path d="M6 20l3-7 3 3 3-3 3 7"></path></svg>',
    speed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="M12 12l4-4"></path></svg>',
    git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.2"></circle><circle cx="6" cy="18" r="2.2"></circle><circle cx="18" cy="9" r="2.2"></circle><path d="M6 8.2V15.8"></path><path d="M6 8.2c0 3 3 4 6 4h2.2"></path></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="1.5"></rect><rect x="3" y="13" width="18" height="7" rx="1.5"></rect><circle cx="7" cy="7.5" r=".8" fill="currentColor" stroke="none"></circle><circle cx="7" cy="16.5" r=".8" fill="currentColor" stroke="none"></circle></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>'
  };
  var TECH_ICON_MAP = {
    php: 'code', 'codeigniter 3': 'code', codeigniter: 'code', javascript: 'code', html: 'code', css: 'code', bootstrap: 'layout',
    mysql: 'db', sql: 'db', wordpress: 'wp',
    'google analytics 4': 'chart', ga4: 'chart', 'google analytics': 'chart', analytics: 'chart',
    'search console': 'search', 'google search console': 'search',
    'screaming frog': 'crawl', 'screaming frog seo spider': 'crawl',
    lighthouse: 'speed', git: 'git', 'hosting management': 'server', elementor: 'layout',
    'technical seo': 'search', 'on-page seo': 'search', 'google apps script': 'code'
  };
  function techIconEl(techName) {
    var span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    var key = (techName || '').toLowerCase().trim();
    var iconKey = TECH_ICON_MAP[key];
    if (iconKey && TECH_ICONS[iconKey]) { span.innerHTML = TECH_ICONS[iconKey]; }
    return span;
  }

  var CATEGORY_GLYPH = {
    'Information System': '</>',
    'WordPress': '\u25E7',
    'Analytics & Web Optimization': '\u25A4',
    'SEO': '\u2197'
  };

  function isSeoCategory(category) {
    return /seo|analytics|optimization/i.test(category || '');
  }

  function buildProjectCard(item, index) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.style.animationDelay = Math.min(index * 30, 300) + 'ms';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View details for ' + (item.name || 'project'));

    const seo = isSeoCategory(item.category);
    const art = document.createElement('div');
    art.className = 'project-card__art' + (seo ? ' project-card__art--seo' : '');
    const mark = document.createElement('span');
    mark.className = 'project-card__art-mark';
    mark.setAttribute('aria-hidden', 'true');
    mark.textContent = CATEGORY_GLYPH[item.category] || (item.name ? item.name.charAt(0).toUpperCase() : '?');
    const artCat = document.createElement('span');
    artCat.className = 'project-card__art-cat';
    artCat.textContent = item.category || '';
    art.appendChild(mark);
    art.appendChild(artCat);
    card.appendChild(art);

    const body = document.createElement('div');
    body.className = 'project-card__body';

    const head = document.createElement('div');
    head.className = 'project-card__head';

    const name = document.createElement('h3');
    name.className = 'project-card__name';
    name.textContent = item.name || 'Untitled Project';
    head.appendChild(name);

    if (item.status) {
      const status = document.createElement('span');
      status.className = 'project-card__status';
      status.textContent = item.status;
      head.appendChild(status);
    }
    body.appendChild(head);

    const category = document.createElement('p');
    category.className = 'project-card__category';
    category.textContent = [item.category, item.subcategory].filter(Boolean).join(' · ');
    body.appendChild(category);

    const desc = document.createElement('p');
    desc.className = 'project-card__desc';
    desc.textContent = item.description || '';
    body.appendChild(desc);

    if (item.role) {
      const role = document.createElement('p');
      role.className = 'project-card__role';
      role.textContent = item.role;
      body.appendChild(role);
    }

    if (Array.isArray(item.tech) && item.tech.length) {
      const techRow = document.createElement('div');
      techRow.className = 'tag-row project-card__tags';
      item.tech.slice(0, 5).forEach(function (techName) {
        const chip = document.createElement('span');
        chip.className = 'tag';
        chip.appendChild(techIconEl(techName));
        chip.appendChild(document.createTextNode(techName));
        techRow.appendChild(chip);
      });
      body.appendChild(techRow);
    }

    if (item.url) {
      const link = document.createElement('a');
      link.className = 'project-card__link';
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = t('modal.visit');
      link.addEventListener('click', function (e) { e.stopPropagation(); });
      body.appendChild(link);
    }

    card.appendChild(body);

    card.addEventListener('click', function () { openProjectModal(item); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModal(item); }
    });

    return card;
  }

  function initPortfolioControls() {
    const filterGroup = document.getElementById('filterGroup');
    const searchInput = document.getElementById('portfolioSearch');
    const resetBtn = document.getElementById('resetFilters');
    const retryBtn = document.getElementById('retryLoad');

    if (filterGroup) {
      filterGroup.addEventListener('click', function (e) {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        filterGroup.querySelectorAll('.filter-btn').forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        state.activeFilter = btn.dataset.filter;
        renderPortfolio();
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', debounce(function (e) {
        state.searchQuery = e.target.value;
        renderPortfolio();
      }, 200));
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        state.activeFilter = 'All';
        state.searchQuery = '';
        if (searchInput) searchInput.value = '';
        if (filterGroup) {
          filterGroup.querySelectorAll('.filter-btn').forEach(function (b, i) {
            b.classList.toggle('is-active', i === 0);
            b.setAttribute('aria-selected', String(i === 0));
          });
        }
        renderPortfolio();
      });
    }

    if (retryBtn) retryBtn.addEventListener('click', loadPortfolio);
  }

  /* ==========================================================================
     WEB DEVELOPMENT / SEO PILLAR PROJECT LISTS
     ========================================================================== */
  function renderPillarProjects() {
    const devGrid = document.getElementById('devProjectGrid');
    const seoGrid = document.getElementById('seoProjectGrid');
    if (!devGrid && !seoGrid) return;

    const devItems = state.allItems.filter(function (i) { return classify(i.category) === 'dev'; }).slice(0, 4);
    const seoItems = state.allItems.filter(function (i) { return classify(i.category) === 'seo'; }).slice(0, 4);

    if (devGrid) fillPillarGrid(devGrid, devItems);
    if (seoGrid) fillPillarGrid(seoGrid, seoItems);
  }

  function fillPillarGrid(grid, items) {
    grid.innerHTML = '';
    if (!items.length) {
      const empty = document.createElement('p');
      empty.className = 'pillar-project__empty';
      empty.textContent = t('projects.noMatching');
      grid.appendChild(empty);
      return;
    }
    items.forEach(function (item) {
      const card = document.createElement('div');
      card.className = 'pillar-project';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');

      const name = document.createElement('p');
      name.className = 'pillar-project__name';
      name.textContent = item.name;
      card.appendChild(name);

      const desc = document.createElement('p');
      desc.className = 'pillar-project__desc';
      desc.textContent = item.description || item.subcategory || '';
      card.appendChild(desc);

      card.addEventListener('click', function () { openProjectModal(item); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModal(item); }
      });

      grid.appendChild(card);
    });
  }

  /* ==========================================================================
     SELECTED WORK — featured projects, split into the two pillars
     ========================================================================== */
  function renderSelectedWork() {
    const container = document.getElementById('selectedWorkGroups');
    if (!container) return;

    container.innerHTML = '';

    if (!state.featuredItems.length) {
      const empty = document.createElement('p');
      empty.className = 'featured-empty';
      empty.textContent = t('selectedWork.empty');
      container.appendChild(empty);
      return;
    }

    const groups = [
      { key: 'dev', title: t('selectedWork.groupDev'), chipClass: 'badge-chip' },
      { key: 'seo', title: t('selectedWork.groupSeo'), chipClass: 'badge-chip badge-chip--seo' }
    ];

    groups.forEach(function (group) {
      const items = state.featuredItems.filter(function (i) { return classify(i.category) === group.key; });
      if (!items.length) return;

      const wrap = document.createElement('div');
      wrap.className = 'selected-group selected-group--' + group.key;

      const head = document.createElement('div');
      head.className = 'selected-group__head';
      head.innerHTML = '<span class="selected-group__dot" aria-hidden="true"></span><h3>' + group.title + '</h3>';
      wrap.appendChild(head);

      const grid = document.createElement('div');
      grid.className = 'editorial-grid';

      items.forEach(function (item, i) {
        grid.appendChild(buildFeaturedCard(item, i, group.chipClass));
      });

      wrap.appendChild(grid);
      container.appendChild(wrap);
    });
  }

  function buildFeaturedCard(item, index, chipClass) {
    const card = document.createElement('article');
    card.className = 'featured-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View details for ' + (item.name || 'project'));

    const art = document.createElement('div');
    art.className = 'featured-card__art';
    art.innerHTML =
      '<span class="featured-card__index">' + String(index + 1).padStart(2, '0') + '</span>' +
      '<span class="featured-card__mark" aria-hidden="true">' + (item.name ? item.name.charAt(0).toUpperCase() : '?') + '</span>';
    card.appendChild(art);

    const body = document.createElement('div');
    body.className = 'featured-card__body';

    const name = document.createElement('h3');
    name.className = 'featured-card__name';
    name.textContent = item.name || 'Untitled Project';
    body.appendChild(name);

    const desc = document.createElement('p');
    desc.className = 'featured-card__desc';
    desc.textContent = item.description || '';
    body.appendChild(desc);

    const chips = document.createElement('div');
    chips.className = 'badge-chips';
    [item.category, item.subcategory].filter(Boolean).forEach(function (label) {
      const chip = document.createElement('span');
      chip.className = chipClass;
      chip.textContent = label;
      chips.appendChild(chip);
    });
    body.appendChild(chips);

    const cta = document.createElement('span');
    cta.className = 'featured-card__cta';
    cta.textContent = t('selectedWork.cta');
    body.appendChild(cta);

    card.appendChild(body);

    card.addEventListener('click', function () { openProjectModal(item); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModal(item); }
    });

    return card;
  }

  /* ==========================================================================
     PROJECT DETAIL MODAL
     ========================================================================== */
  let lastFocusedEl = null;

  function buildModalSection(labelText, valueEl) {
    const section = document.createElement('div');
    section.className = 'modal-section';
    const label = document.createElement('p');
    label.className = 'modal-section__label';
    label.textContent = labelText;
    section.appendChild(label);
    section.appendChild(valueEl);
    return section;
  }

  function buildModalTextSection(labelText, text) {
    const value = document.createElement('p');
    value.className = 'modal-section__value';
    value.textContent = text;
    return buildModalSection(labelText, value);
  }

  function buildModalTechSection(labelText, techList) {
    const value = document.createElement('div');
    value.className = 'tag-row';
    techList.forEach(function (techName) {
      const chip = document.createElement('span');
      chip.className = 'tag';
      chip.textContent = techName;
      value.appendChild(chip);
    });
    return buildModalSection(labelText, value);
  }

  function buildModalSitesSection(labelText, links) {
    const wrapper = document.createElement('div');
    wrapper.className = 'modal-sites';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'modal-sites__toggle link-btn';
    toggle.textContent = t('modal.sitesToggle').replace('{count}', String(links.length));

    const list = document.createElement('ul');
    list.className = 'modal-sites__list';
    list.hidden = true;
    links.forEach(function (site) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = site.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = site.name;
      li.appendChild(a);
      list.appendChild(li);
    });

    toggle.addEventListener('click', function () {
      const isHidden = list.hidden;
      list.hidden = !isHidden;
      toggle.textContent = isHidden
        ? t('modal.sitesToggleClose')
        : t('modal.sitesToggle').replace('{count}', String(links.length));
    });

    wrapper.appendChild(toggle);
    wrapper.appendChild(list);
    return buildModalSection(labelText, wrapper);
  }

  function openProjectModal(item) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    lastFocusedEl = document.activeElement;

    document.getElementById('modalTitle').textContent = item.name || 'Untitled Project';
    document.getElementById('modalCategory').textContent = [item.category, item.subcategory].filter(Boolean).join(' · ');
    document.getElementById('modalDescription').textContent = item.description || t('modal.noDescription');

    const roleWrap = document.getElementById('modalRoleWrap');
    if (item.role) {
      roleWrap.hidden = false;
      document.getElementById('modalRole').textContent = item.role;
    } else {
      roleWrap.hidden = true;
    }

    document.getElementById('modalStatus').textContent = item.status || t('modal.statusDefault');

    // Dynamic case-study sections: challenge / solution / tech / result / site directory
    const dynamicWrap = document.getElementById('modalDynamicSections');
    if (dynamicWrap) {
      dynamicWrap.innerHTML = '';
      if (item.challenge) dynamicWrap.appendChild(buildModalTextSection(t('modal.problem'), item.challenge));
      if (item.solution) dynamicWrap.appendChild(buildModalTextSection(t('modal.solution'), item.solution));
      if (Array.isArray(item.tech) && item.tech.length) dynamicWrap.appendChild(buildModalTechSection(t('modal.technology'), item.tech));
      if (item.result) dynamicWrap.appendChild(buildModalTextSection(t('modal.result'), item.result));
      if (Array.isArray(item.links) && item.links.length) dynamicWrap.appendChild(buildModalSitesSection(t('modal.sites'), item.links));
    }

    const linkEl = document.getElementById('modalLink');
    if (item.url) {
      linkEl.href = item.url;
      linkEl.style.display = 'inline-flex';
    } else {
      linkEl.style.display = 'none';
    }

    modal.hidden = false;
    requestAnimationFrame(function () { modal.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) closeBtn.focus();
  }

  function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    modal.classList.remove('is-open');
    document.body.style.overflow = '';

    setTimeout(function () { modal.hidden = true; }, 250);

    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
  }

  function getFocusableEls(container) {
    const selector = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.prototype.slice.call(container.querySelectorAll(selector))
      .filter(function (el) { return el.offsetParent !== null; });
  }

  function initModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    const panel = modal.querySelector('.modal-panel');
    const closeBtn = document.getElementById('modalClose');
    const closeBtnSecondary = document.getElementById('modalCloseSecondary');

    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (closeBtnSecondary) closeBtnSecondary.addEventListener('click', closeProjectModal);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeProjectModal();
    });

    // Focus trap: keep Tab/Shift+Tab cycling within the modal while it's open
    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;

      if (e.key === 'Escape') {
        closeProjectModal();
        return;
      }

      if (e.key === 'Tab' && panel) {
        const focusable = getFocusableEls(panel);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ==========================================================================
     FOOTER YEAR
     ========================================================================== */
  function updateFooterYear() {
    const el = document.getElementById('footerYear');
    if (!el) return;
    const year = new Date().getFullYear();
    el.textContent = t('footer.copyright').replace('{year}', String(year));
  }

  /* ==========================================================================
     INIT
     ========================================================================== */
  var STACK_GROUPS = [
    ['PHP', 'CodeIgniter 3', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    ['MySQL', 'SQL'],
    ['WordPress'],
    ['Google Analytics 4', 'Search Console', 'Screaming Frog', 'Lighthouse'],
    ['Git', 'Hosting Management']
  ];

  function initStackIcons() {
    var rows = document.querySelectorAll('#stackGrid [data-icon-row]');
    rows.forEach(function (row, i) {
      var techs = STACK_GROUPS[i] || [];
      techs.forEach(function (techName) {
        var chip = document.createElement('span');
        chip.className = 'tag';
        chip.appendChild(techIconEl(techName));
        chip.appendChild(document.createTextNode(techName));
        row.appendChild(chip);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initScrollShadow();
    initActiveNavIndicator();
    initHeroGrid();
    initPortfolioControls();
    initModal();
    initRevealOnScroll();
    initLangToggle();
    initStackIcons();

    applyLanguage(detectInitialLang());
    loadPortfolio();
  });
})();
