/**
 * KONFIGURASI PERUSAHAAN BARIBA TAO
 * ---------------------------------
 * Ganti nilai bertanda PLACEHOLDER dengan data resmi sebelum go-live.
 * Nomor WhatsApp: format internasional tanpa +, contoh "6281234567890"
 */

export const company = {
  name: 'Bariba Tao',
  tagline: 'Pengiriman Barang Lebih Mudah, Aman, dan Terpercaya.',
  description:
    'Bariba Tao adalah layanan jasa pengiriman barang yang membantu masyarakat dan pelaku usaha mengirim barang dengan komunikasi yang jelas serta pelayanan yang mengutamakan kepercayaan.',

  /** PLACEHOLDER — ganti dengan nomor WhatsApp resmi (format: 62XXXXXXXXXXX) */
  whatsappNumber: '',
  /** PLACEHOLDER — ganti dengan nomor telepon resmi jika tersedia */
  phone: '',
  /** PLACEHOLDER — ganti dengan email resmi jika tersedia */
  email: '',
  /** PLACEHOLDER — ganti dengan alamat lengkap jika tersedia */
  address: 'Alamat usaha akan segera diperbarui.',
  /** PLACEHOLDER — ganti dengan jam operasional resmi */
  operatingHours: 'Jam operasional akan segera diperbarui.',
  /** PLACEHOLDER — isi koordinat peta jika alamat sudah dikonfirmasi (contoh: "-6.2,106.8") */
  mapEmbedUrl: '',

  social: {
    /** PLACEHOLDER — tautan media sosial resmi */
    instagram: '',
    facebook: '',
    tiktok: '',
  },

  nav: [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'wilayah', label: 'Wilayah Pengiriman' },
    { id: 'faq', label: 'FAQ' },
    { id: 'kontak', label: 'Kontak' },
  ],
} as const

export const aboutContent = {
  intro:
    'Bariba Tao hadir untuk memudahkan kebutuhan pengiriman barang, baik untuk keperluan pribadi maupun usaha. Kami berfokus pada pelayanan yang mudah dihubungi, informasi yang jelas, dan penanganan barang yang bertanggung jawab.',
  vision:
    'Menjadi mitra pengiriman yang dipercaya masyarakat dan pelaku usaha melalui pelayanan yang transparan dan profesional.',
  mission: [
    'Memberikan layanan pengiriman yang mudah diakses dan dipahami.',
    'Menjaga komunikasi yang jelas sejak awal hingga pengiriman selesai.',
    'Menangani barang dengan sikap tanggung jawab dan kehati-hatian.',
    'Membangun hubungan jangka panjang berdasarkan kepercayaan.',
  ],
  values: [
    {
      title: 'Kepercayaan',
      description: 'Setiap layanan dibangun atas kejujuran informasi dan komitmen terhadap kesepakatan.',
    },
    {
      title: 'Tanggung Jawab',
      description: 'Barang ditangani dengan perhatian agar proses pengiriman berjalan tertib.',
    },
    {
      title: 'Komunikasi',
      description: 'Kami mengutamakan kejelasan agar pelanggan memahami status dan ketentuan layanan.',
    },
    {
      title: 'Ketepatan',
      description: 'Proses disusun agar pelanggan mendapat kepastian sebelum pengiriman dilanjutkan.',
    },
  ],
}

export type ServiceItem = {
  id: string
  title: string
  description: string
  whatsappMessage: string
}

/** Kategori layanan bersifat contoh dan dapat disesuaikan dengan layanan aktual. */
export const services: ServiceItem[] = [
  {
    id: 'pengiriman-barang',
    title: 'Pengiriman Barang',
    description:
      'Layanan pengiriman untuk kebutuhan umum. Detail ketersediaan dan biaya dikonfirmasikan sesuai tujuan serta jenis barang.',
    whatsappMessage:
      'Halo Bariba Tao, saya ingin menanyakan layanan Pengiriman Barang. Mohon informasinya.',
  },
  {
    id: 'pengiriman-paket',
    title: 'Pengiriman Paket',
    description:
      'Opsi untuk pengiriman paket dengan ukuran yang lebih ringkas. Sesuaikan detail paket saat menghubungi kami.',
    whatsappMessage:
      'Halo Bariba Tao, saya ingin menanyakan layanan Pengiriman Paket. Mohon informasinya.',
  },
  {
    id: 'pengiriman-usaha',
    title: 'Pengiriman Barang Usaha',
    description:
      'Dukungan pengiriman untuk kebutuhan operasional usaha. Rincian layanan dapat dibahas sesuai frekuensi dan volume.',
    whatsappMessage:
      'Halo Bariba Tao, saya ingin menanyakan layanan Pengiriman Barang Usaha. Mohon informasinya.',
  },
  {
    id: 'pengiriman-besar',
    title: 'Pengiriman dalam Jumlah Besar',
    description:
      'Untuk pengiriman dengan volume lebih besar. Ketersediaan layanan dikonfirmasikan setelah detail barang disampaikan.',
    whatsappMessage:
      'Halo Bariba Tao, saya ingin menanyakan layanan Pengiriman dalam Jumlah Besar. Mohon informasinya.',
  },
  {
    id: 'antarlokasi',
    title: 'Pengiriman Antarlokasi',
    description:
      'Layanan pengiriman antar lokasi sesuai cakupan wilayah yang tersedia. Tanyakan dulu ketersediaan ke tujuan Anda.',
    whatsappMessage:
      'Halo Bariba Tao, saya ingin menanyakan layanan Pengiriman Antarlokasi. Mohon informasinya.',
  },
]

export const whyUs = [
  {
    title: 'Komunikasi yang Mudah',
    description: 'Anda dapat menghubungi kami langsung untuk menanyakan kebutuhan pengiriman.',
  },
  {
    title: 'Informasi yang Jelas',
    description: 'Detail layanan, ketersediaan, dan biaya dibahas secara transparan sebelum pengiriman.',
  },
  {
    title: 'Pelayanan yang Ramah',
    description: 'Kami melayani dengan sikap profesional dan mudah diajak berdiskusi.',
  },
  {
    title: 'Penanganan yang Bertanggung Jawab',
    description: 'Barang ditangani dengan kehati-hatian sesuai kesepakatan layanan.',
  },
  {
    title: 'Mudah Dihubungi',
    description: 'Saluran WhatsApp memudahkan calon pelanggan bertanya atau memesan layanan.',
  },
]

/**
 * PLACEHOLDER wilayah — ganti dengan daftar wilayah layanan yang sudah dikonfirmasi.
 * Biarkan array kosong jika belum ada data resmi.
 */
export const coverageAreas: { name: string; note?: string }[] = []

export const howItWorks = [
  {
    step: 1,
    title: 'Hubungi Bariba Tao',
    description: 'Sampaikan kebutuhan pengiriman melalui WhatsApp atau saluran kontak yang tersedia.',
  },
  {
    step: 2,
    title: 'Sampaikan Detail Barang',
    description: 'Berikan informasi jenis barang, ukuran/berat jika diketahui, serta tujuan pengiriman.',
  },
  {
    step: 3,
    title: 'Konfirmasi Layanan & Biaya',
    description: 'Kami mengonfirmasikan ketersediaan layanan beserta perkiraan biaya sesuai detail yang diberikan.',
  },
  {
    step: 4,
    title: 'Lanjutkan Pengiriman',
    description: 'Setelah kesepakatan dicapai, proses pengiriman dilanjutkan sesuai ketentuan yang disepakati.',
  },
]

export const infoArticles = [
  {
    title: 'Informasi layanan terbaru',
    description:
      'Pembaruan layanan dan cakupan wilayah akan ditampilkan di sini. Hubungi kami untuk menanyakan ketersediaan terkini.',
    tag: 'Informasi',
  },
  {
    title: 'Tips mengemas barang',
    description:
      'Gunakan kemasan yang kuat, tutup dengan rapat, dan beri pelindung ekstra pada barang yang mudah rusak sebelum diserahkan untuk dikirim.',
    tag: 'Tips',
  },
  {
    title: 'Hal yang perlu diketahui sebelum mengirim',
    description:
      'Siapkan detail barang dan tujuan, tanyakan ketersediaan wilayah, serta konfirmasikan biaya sebelum memulai pengiriman.',
    tag: 'Panduan',
  },
  {
    title: 'Pengumuman operasional',
    description:
      'Belum ada pengumuman operasional aktif. Perubahan jam layanan atau ketentuan khusus akan diinformasikan di bagian ini.',
    tag: 'Pengumuman',
  },
]

export const faqs = [
  {
    question: 'Bagaimana cara menggunakan layanan Bariba Tao?',
    answer:
      'Hubungi kami melalui WhatsApp, sampaikan detail barang dan tujuan pengiriman, lalu tunggu konfirmasi ketersediaan serta biaya sebelum melanjutkan.',
  },
  {
    question: 'Wilayah mana saja yang dilayani?',
    answer:
      'Cakupan wilayah dapat berubah sesuai operasional. Silakan tanyakan destinasi Anda melalui WhatsApp agar kami dapat mengonfirmasikan ketersediaan layanan.',
  },
  {
    question: 'Bagaimana cara mengetahui biaya pengiriman?',
    answer:
      'Biaya ditentukan setelah detail barang, ukuran/berat, dan tujuan diketahui. Hubungi kami untuk mendapatkan informasi biaya yang sesuai.',
  },
  {
    question: 'Barang apa saja yang bisa dikirim?',
    answer:
      'Jenis barang yang dapat dikirim menyesuaikan ketentuan operasional. Sampaikan jenis barang Anda saat menghubungi kami agar kami dapat mengonfirmasikan kelayakannya.',
  },
  {
    question: 'Bagaimana cara menghubungi Bariba Tao?',
    answer:
      'Gunakan tombol WhatsApp di website ini, atau lihat bagian Kontak untuk saluran komunikasi yang tersedia setelah dikonfigurasi.',
  },
  {
    question: 'Apakah pengiriman perlu dijadwalkan terlebih dahulu?',
    answer:
      'Untuk kepastian layanan, sebaiknya menghubungi kami terlebih dahulu. Jadwal dan ketersediaan akan dikonfirmasikan sesuai kapasitas operasional.',
  },
]

export const heroImage = {
  src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
  alt: 'Gudang logistik dengan tumpukan paket siap dikirim',
}

export const aboutImage = {
  src: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80',
  alt: 'Petugas logistik memeriksa paket di area penanganan barang',
}
