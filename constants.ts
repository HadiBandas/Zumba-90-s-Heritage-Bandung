
import { 
  Music, 
  Users, 
  Heart, 
  Clock, 
  Gift, 
  MapPin, 
  Instagram, 
  Smile, 
  TrendingUp, 
  Video,
  Mic,
  Coffee,
  Trophy,
  Ticket,
  ShoppingBag,
  Star,
  Briefcase,
  Shield,
  Utensils,
  Camera,
  Palette,
  Wrench
} from 'lucide-react';
import { RundownItem, Sponsor, KPIMetric, SponsorshipDetailItem, PrizeDistributionItem, CommitteeDivision, MCAdLibItem, RACIRow } from './types';

export const EVENT_DETAILS = {
  title: "BACK TO THE BEAT: 90'S ZUMBA PARTY",
  date: "Minggu, 30 November 2025",
  location: "Heritage Lifestyle Hub – Area Parkir",
  organizers: ["Heritage", "Anytime Fitness", "Santap Saji"],
  contact: {
    name: "Mahasin Hadiyatulloh",
    phone: "+62 812-2417-8271"
  }
};

export const RUNDOWN_DATA: RundownItem[] = [
  {
    time: "06:00 – 06:50",
    title: "REGISTRASI",
    details: [
      "Peserta datang & check-in",
      "Pembagian goodie bag (50 peserta pertama)",
      "Pengecekan kostum 90s"
    ],
    icon: Users
  },
  {
    time: "06:50 – 07:00",
    title: "PEMBUKAAN & BRIEFING MC",
    details: [
      "Sambutan MC",
      "Perkenalan penyelenggara & sponsor",
      "Briefing keamanan"
    ],
    icon:  Video
  },
  {
    time: "07:00 – 08:00",
    title: "SESI ZUMBA 90s",
    details: [
      "Dipandu 3 ZIN: Intan, Shinta, Wangi",
      "Playlist hits 90-an (Spice Girls, BSB, etc.)",
      "Energetic warm-up → Main choreo → Cool down"
    ],
    icon: Music
  },
  {
    time: "08:00 – 08:10",
    title: "REFRESHMENT BREAK",
    details: [
      "Bubur kacang hijau & singkong goreng",
      "Peserta istirahat sejenak"
    ],
    icon: Coffee
  },
  {
    time: "08:10 – 08:20",
    title: "GAMES SESI 1: TEBAK GERAKAN",
    details: [
      "Interactive Games dipandu MC",
      "Hadiah: Payung Optik Melawai & Goodie Bag"
    ],
    icon: Smile
  },
  {
    time: "08:20 – 08:30",
    title: "SPEECH: TAMI DENTAL CARE",
    details: [
      "Edukasi kesehatan gigi",
      "Info promo & voucher scaling gratis"
    ],
    icon: Mic
  },
  {
    time: "08:30 – 08:40",
    title: "GAMES SESI 2: POSE CHALLENGE",
    details: [
      "Tantangan pose foto gaya 90an",
      "Hadiah: Goodie Bag Tami Dental"
    ],
    icon: Smile
  },
  {
    time: "08:40 – 08:45",
    title: "SPEECH: SARIAYU",
    details: [
      "Tips kecantikan & perawatan kulit",
      "Demo produk singkat"
    ],
    icon: Mic
  },
  {
    time: "08:45 – 08:50",
    title: "AWARDING: BEST COSTUME",
    details: [
      "Pengumuman pemenang kostum terbaik",
      "Penyerahan hadiah spesial"
    ],
    icon: Trophy
  },
  {
    time: "08:50 – 09:00",
    title: "DOORPRIZE UTAMA",
    details: [
      "1x Kompor Portable Modena",
      "1x Voucher Harris & POP! Hotel",
      "1x Sunglasses Optik Melawai"
    ],
    icon: Gift
  },
  {
    time: "09:00 – 09:15",
    title: "PENUTUP",
    details: [
      "Trial membership Anytime Fitness",
      "Foto bersama",
      "Clear Area (Max 09:30)"
    ],
    icon: Clock
  }
];

export const SPONSORS: Sponsor[] = [
  { name: "Heritage", tier: "Organizer", color: "#991B1B", textColor: "#FFFFFF" }, // Dark Red
  { name: "Anytime Fitness", tier: "Organizer", color: "#4C1D95", textColor: "#FFFFFF" }, // Brand Purple
  { name: "Santap Saji", tier: "Organizer", color: "#F59E0B", textColor: "#000000" }, // Amber
  { name: "Modena", tier: "Sponsor", color: "#171717", textColor: "#FFFFFF" }, // Black
  { name: "Sariayu", tier: "Sponsor", color: "#65A30D", textColor: "#000000" }, // Nature Green - Changed to Black Text
  { name: "Tami Dental Care", tier: "Sponsor", color: "#2563EB", textColor: "#FFFFFF" }, // Medical Blue
  { name: "Optik Melawai", tier: "Sponsor", color: "#FCD34D", textColor: "#000000" }, // Yellow
  { name: "Harris & POP! Hotel", tier: "Sponsor", color: "#F97316", textColor: "#000000" }, // Harris Orange - Changed to Black Text
  { name: "Alexa", tier: "Sponsor", color: "#06B6D4", textColor: "#000000" }, // Cyan
  { name: "Youvit", tier: "Sponsor", color: "#EC4899", textColor: "#000000" }, // Berry Pink - Changed to Black Text
  { name: "Youtee", tier: "Sponsor", color: "#6366f1", textColor: "#FFFFFF" }, // Indigo
];

export const SPONSORSHIP_DETAILS: SponsorshipDetailItem[] = [
  {
    name: "Santap Saji",
    role: "Co-Organizer & Support",
    color: "#F59E0B",
    textColor: "#000000",
    support: [
      "Akomodasi Instructor ZIN Intan (dicover tim SS)",
      "Bantuan pengadaan peserta max 100 (database SS)",
      "Konsumsi Nasi Box untuk 3 ZIN",
      "Compliment Kupon (tukar 08:00-09:30)",
      "Refreshment bubur kacang hijau untuk semua peserta",
      "Compliment snack (singkong goreng) di area resto",
      "3 Set Meja & Kursi Outdoor (Doorprize, Sponsor, Registrasi)"
    ],
    benefits: [
      "Open Booth menu sarapan serba 20K & Fresh Juice",
      "Campaign Menu Sarapan 20K (06:00 - 09:30)",
      "Collaborate di social media",
      "Adlibs MC terkait promo Santap Saji",
      "Database seluruh peserta",
      "Dokumentasi photo/video event"
    ]
  },
  {
    name: "PT. Marta Tilaar (Sari Ayu)",
    role: "Sponsor Utama",
    color: "#65A30D",
    textColor: "#000000", // Changed to Black Text
    support: [
      "50 Goodie Bag (untuk 50 pendaftar pertama)",
      "Total value @65,000 x 50 = Rp 3,250,000",
      "Demo / info product knowledge",
      "3 Goodie bag product untuk hadiah games"
    ],
    benefits: [
      "Logo di e-flyer",
      "Promote social media (tag)",
      "Flyering",
      "Open Booth (Meja + 1 Roll Banner)"
    ]
  },
  {
    name: "Optik Melawai",
    role: "Sponsor",
    color: "#FCD34D",
    textColor: "#000000",
    support: [
      "1 Hadiah doorprize sunglass (value 899,000)",
      "2 Payung Optik Melawai untuk games",
      "200 Voucher diskon Optik Melawai"
    ],
    benefits: [
      "Logo di e-flyer",
      "Promote social media (tag)",
      "Bannering"
    ]
  },
  {
    name: "PT. Modena Indonesia",
    role: "Sponsor",
    color: "#171717",
    textColor: "#FFFFFF",
    support: [
      "1 Hadiah doorprize kompor portable 2 tungku (value Rp 2,147,500)"
    ],
    benefits: [
      "Logo di e-flyer",
      "Promote social media (tag)",
      "Bannering"
    ]
  },
  {
    name: "Alexa Water Indonesia",
    role: "Sponsor",
    color: "#06B6D4",
    textColor: "#000000",
    support: [
      "200 pc product ukuran 220ml",
      "Gallon untuk isi ulang peserta",
      "Total value Rp 500,000"
    ],
    benefits: [
      "Logo di e-flyer",
      "Promote social media (tag)",
      "Booth portable",
      "Bannering"
    ]
  },
  {
    name: "Tami Dental Care",
    role: "Sponsor",
    color: "#2563EB",
    textColor: "#FFFFFF",
    support: [
      "200 Voucher scaling untuk seluruh peserta",
      "5 Goodie bag hadiah games (value 500K)"
    ],
    benefits: [
      "Booth untuk konsultasi (meja dan kursi saja)"
    ]
  },
  {
    name: "Harris & POP! Hotel Festival Citylink",
    role: "Sponsor",
    color: "#F97316",
    textColor: "#000000", // Changed to Black Text
    support: [
      "1 Voucher menginap untuk Grand Doorprize"
    ],
    benefits: [
      "Logo di e-flyer",
      "Promote social media (tag)",
      "Bannering"
    ]
  },
  {
    name: "Youtee",
    role: "Sponsor",
    color: "#6366f1", textColor: "#FFFFFF",
    support: [
      "10 pcs Goodie Bag",
      "30 pcs Seragam Staff",
      "Goodiebag tambahan (Tentative)"
    ],
    benefits: [
      "Logo di e-flyer",
      "Promote social media (tag)",
      "Bannering"
    ]
  },
  {
    name: "Youvit",
    role: "Sponsor",
    color: "#EC4899",
    textColor: "#000000", // Changed to Black Text
    support: [
      "Product untuk seluruh peserta",
      "Value: Rp 12,300 per pax"
    ],
    benefits: [
      "Logo di e-flyer",
      "Promote social media (tag)",
      "Bannering"
    ]
  }
];

export const PRIZE_DISTRIBUTION_DATA: PrizeDistributionItem[] = [
  {
    category: "GRAND DOORPRIZE",
    mechanism: "Diundi di akhir acara menggunakan nomor kupon/registrasi peserta yang hadir.",
    icon: Gift,
    color: "bg-retro-pink",
    items: [
      { name: "Kompor Portable", quantity: "1 Unit", sponsor: "Modena", pic: "Vina" },
      { name: "Voucher Menginap", quantity: "1 Pax", sponsor: "Harris & POP! Hotel", pic: "Chandra" },
      { name: "Sunglasses", quantity: "1 Pcs", sponsor: "Optik Melawai", pic: "Hadi" }
    ]
  },
  {
    category: "COMPETITION & GAMES",
    mechanism: "Diberikan oleh MC/Juri untuk peserta teraktif, pemenang games tebak gerakan, dan kostum terbaik.",
    icon: Trophy,
    color: "bg-retro-yellow",
    items: [
      { name: "Paket Kostum Terbaik", quantity: "1 Paket", sponsor: "Sariayu, Youvit & Youtee", pic: "Rani" },
      { name: "Payung Eksklusif", quantity: "2 Pcs", sponsor: "Optik Melawai", pic: "MC" },
      { name: "Dental Care Kit", quantity: "5 Paket", sponsor: "Tami Dental", pic: "Tami" },
      { name: "Beauty Product", quantity: "3 Paket", sponsor: "Sariayu", pic: "Sari Ayu" },
      { name: "Merchandise", quantity: "10 Pcs", sponsor: "Youtee", pic: "Yourtee" }
    ]
  },
  {
    category: "REGISTRATION & ALL",
    mechanism: "Diberikan langsung saat registrasi (Goodie Bag) atau dibagikan ke semua peserta.",
    icon: ShoppingBag,
    color: "bg-retro-lime",
    items: [
      { name: "Goodie Bag Beauty", quantity: "50 Pertama", sponsor: "Sariayu" },
      { name: "Voucher Scaling", quantity: "All Participants", sponsor: "Tami Dental" },
      { name: "Voucher Diskon", quantity: "All Participants", sponsor: "Optik Melawai" },
      { name: "Vitamint Gummy", quantity: "All Participants", sponsor: "Youvit" },
      { name: "Air Mineral", quantity: "Free Refill", sponsor: "Alexa" }
    ]
  }
];

export const MC_ADLIB_DATA: MCAdLibItem[] = [
  {
    sponsor: "Opening: Heritage (Venue)",
    tone: "Welcoming & Energetic",
    color: "bg-red-800 text-white",
    instagram: "@heritagefactoryoutlet.bdg | @heritagelifestylehub",
    talkingPoints: [
      "Selamat datang di Heritage Lifestyle Hub, icon gaya hidup paling hits di Bandung!",
      "Jangan lewatkan BOOTH CLEARANCE SALE Heritage Factory Outlet! Baju branded mulai dari Rp 30.000 saja!",
      "Terima kasih Heritage sudah memfasilitasi venue Zumba Party terkeren hari ini!"
    ]
  },
  {
    sponsor: "Anytime Fitness (Organizer)",
    tone: "High Energy, Persuasive & Motivational",
    color: "bg-retro-purple text-white",
    instagram: "@anytimefitnessindonesia", 
    talkingPoints: [
      "Mau olahraga bebas jam berapapun? Anytime Fitness jawabannya! Gym 24 jam dengan fasilitas premium.",
      "NEW JOIN MEMBER: Promo spesial hanya hari ini! Dapatkan diskon khusus & free admin fee bagi yang daftar di tempat.",
      "Ayo mulai hidup sehat sekarang! Kunjungi booth kami untuk Free Consultation & Body Check.",
    ]
  },
  {
    sponsor: "Santap Saji (Official Food Partner)",
    tone: "Appetizing & Friendly",
    color: "bg-retro-yellow",
    instagram: "@santapsaji_bdg",
    talkingPoints: [
      "Lapar habis Zumba? Mampir ke booth Santap Saji!",
      "Promo Spesial Sarapan Sehat serba Rp 20.000 hari ini saja.",
      "Nikmati bubur kacang hijau gratis & fresh juice untuk recharge energi.",
      "Lokasi booth ada di area F&B, jangan sampai kehabisan."
    ]
  },
  {
    sponsor: "Sariayu (Martha Tilaar)",
    tone: "Beauty & Inspiring",
    color: "bg-retro-lime",
    instagram: "@sariayu_mt",
    talkingPoints: [
      "Cantik sehat alami bersama Sariayu Martha Tilaar.",
      "Terima kasih untuk 50 Goodie Bag eksklusif bagi pendatang pertama.",
      "Kunjungi booth Sariayu untuk cek kondisi kulit & demo makeup.",
      "Produk lokal kebanggaan Indonesia, cocok untuk kulit tropis."
    ]
  },
  {
    sponsor: "Optik Melawai",
    tone: "Smart & Stylish",
    color: "bg-retro-cyan",
    instagram: "@optik_melawai",
    talkingPoints: [
      "Terima kasih Optik Melawai untuk Grand Prize Sunglasses keren senilai hampir 1 Juta!",
      "Ada voucher diskon spesial untuk SEMUA peserta hari ini.",
      "Ingat, mata sehat itu investasi. Cek koleksi kacamata trendi di Optik Melawai terdekat."
    ]
  },
  {
    sponsor: "Modena",
    tone: "Premium & Modern",
    color: "bg-gray-800 text-white",
    instagram: "@mhc_jabar",
    talkingPoints: [
      "Grand Doorprize paling ditunggu: Kompor Portable Premium dari Modena!",
      "Modena, solusi perlengkapan rumah tangga modern & elegan.",
      "Siapa yang mau masak jadi lebih semangat? Pastikan kupon undian kalian aman!"
    ]
  },
  {
    sponsor: "Tami Dental Care",
    tone: "Educational & Caring",
    color: "bg-blue-600 text-white",
    instagram: "@tamidentalcare",
    talkingPoints: [
      "Senyum cerah berawal dari gigi sehat. Thanks to Tami Dental Care!",
      "Spesial hari ini: Voucher Scaling GRATIS untuk peserta.",
      "Jangan takut ke dokter gigi, Tami Dental Care super nyaman & ramah."
    ]
  },
  {
    sponsor: "Harris & POP! Hotel",
    tone: "Relaxing & Fun",
    color: "bg-orange-500 text-black", // Changed to Black Text
    instagram: "@harriscitylinkbandung",
    talkingPoints: [
      "Mau staycation gratis? Ada voucher menginap dari Harris & POP! Hotel Festival Citylink.",
      "Lokasi strategis, akses langsung ke mall, cocok untuk liburan keluarga.",
      "Siapa yang butuh liburan gratis? Angkat tangannya!"
    ]
  },
  {
    sponsor: "Support Partners",
    tone: "Grateful & Informative",
    color: "bg-retro-pink",
    instagram: "@alexawaterid | @youvit_id | @id_yourtee",
    talkingPoints: [
      "Stay hydrated dengan Alexa Water (@alexawaterid), gratis refill sepuasnya!",
      "Jaga imun tubuh dengan Youvit Gummy (@youvit_id), enak & sehat!",
      "Terima kasih Yourtee (@id_yourtee) untuk support kaos panitia & merchandise keren.",
      "Pastikan mampir ke semua booth sponsor kita ya!"
    ]
  }
];

export const COMMITTEE_DATA: CommitteeDivision[] = [
  {
    division: "STEERING COMMITTEE",
    color: "bg-retro-purple",
    icon: Briefcase,
    members: [
      { 
        role: "Project Director", 
        name: "Mahasin Hadiyatulloh", 
        organization: "Heritage",
        jobDescription: [
            "Penanggung jawab utama seluruh rangkaian acara",
            "Pengambil keputusan final jika ada kendala major",
            "Menjaga hubungan baik dengan semua pihak sponsor"
        ]
      },
      { 
        role: "Community Lead", 
        name: "Chandra", 
        organization: "Anytime Fitness",
        jobDescription: [
            "Koordinasi partisipasi member Anytime Fitness",
            "Memimpin aktivasi on-ground tim AF",
            "Support flow registrasi member baru di booth"
        ]
      },
      { 
        role: "F&B Director", 
        name: "Vina Ayu", 
        organization: "Santap Saji",
        jobDescription: [
            "Mengatur logistik konsumsi peserta & VIP",
            "Quality control refreshment (bubur/snack)",
            "Koordinasi operasional booth Santap Saji"
        ]
      }
    ]
  },
  {
    division: "EVENT & TALENT",
    color: "bg-retro-pink",
    icon: Music,
    members: [
      { 
        role: "Master of Ceremony", 
        name: "Syifa", 
        organization: "Heritage (Mkt)",
        jobDescription: [
            "Pandu acara dengan energi tinggi & engage audiens",
            "Bacakan ad-libs sponsor & aturan Doorprize dengan jelas",
            "Jaga durasi segmen (Time-keeper) agar rundown on-track"
        ]
      },
      { 
        role: "Star Instructors", 
        name: "ZIN Intan, Shinta, Wangi", 
        organization: "Professional",
        jobDescription: [
            "Pimpin sesi Zumba 60 menit dengan koreo energik",
            "Interaksi aktif dengan peserta (turun panggung)",
            "Pastikan playlist 90-an siap & transisi lagu mulus"
        ]
      },
      { 
        role: "Stage Manager", 
        name: "Satria", 
        organization: "Heritage",
        jobDescription: [
            "Mengatur alur keluar-masuk pengisi acara (MC, ZIN, Sponsor)",
            "Time Keeper utama (memegang stopwatch) memberi kode ke MC",
            "Memastikan panggung & properti games siap sebelum sesi dimulai"
        ]
      }
    ]
  },
  {
    division: "CREATIVE & MEDIA",
    color: "bg-retro-cyan",
    icon: Camera,
    members: [
      { 
        role: "Visual Designer", 
        name: "Inuy", 
        organization: "Heritage",
        jobDescription: [
            "Pastikan signage lokasi & branding sponsor terpasang",
            "Cetak nomor undian doorprize sebelum acara",
            "Desain visual/mockup hadiah doorprize agar terlihat menarik saat penyerahan"
        ]
      },
      { 
        role: "Videographer", 
        name: "Alvan", 
        organization: "Heritage",
        jobDescription: [
            "Ambil footage highlight (Crowd, Sponsor, ZIN)",
            "Produksi Reels singkat on-the-spot untuk IG Heritage",
            "Rekam testimoni sponsor & peserta happy"
        ]
      },
      { 
        role: "Photographer", 
        name: "Dodot", 
        organization: "Heritage",
        jobDescription: [
            "Dokumentasi tiap booth sponsor (Wajib ada crowd)",
            "Foto momen penyerahan hadiah doorprize & kostum",
            "Ambil foto wide-angle atmosfer crowd untuk portfolio"
        ]
      }
    ]
  },
  {
    division: "OPERATIONAL SUPPORT",
    color: "bg-retro-lime",
    icon: Wrench,
    members: [
      { 
        role: "Area Manager", 
        name: "Ibu Rani", 
        organization: "Heritage",
        jobDescription: [
            "Tanggung jawab penuh area fisik, parkir, & alur peserta",
            "Briefing tim Security & Cleaning sebelum acara",
            "Point of contact utama untuk kendala fasilitas"
        ]
      },
      { 
        role: "Sponsor & Registrasi Lead", 
        name: "Keyla", 
        organization: "Heritage (Mkt)",
        jobDescription: [
            "Pastikan kebutuhan booth sponsor terpenuhi (listrik/meja)",
            "Supervisi alur registrasi & pembagian goodie bag",
            "Standby Kotak P3K & obat-obatan ringan di meja registrasi",
            "Handle Social Media Activation & update konten IG Stories real-time"
        ]
      },
      { 
        role: "Finance & Prize Logistics", 
        name: "Yayu", 
        organization: "Heritage",
        jobDescription: [
            "Bantu flow registrasi di meja depan (06:30-07:30)",
            "Kelola logistik hadiah: Siapkan di panggung saat segmen games",
            "Selesaikan administrasi pembayaran vendor/ZIN"
        ]
      },
      { 
        role: "General Affair (GA) & Logistics", 
        name: "Bpk. Jamal", 
        organization: "Heritage",
        jobDescription: [
            "Mobilisasi barang, loading/unloading perlengkapan event",
            "Atur tata letak parkir kendaraan peserta agar rapi",
            "Jaga kebersihan area event (cek trash bag)",
            "Pastikan keamanan aset sponsor & sound system"
        ]
      },
      { 
        role: "Technician", 
        name: "Nila", 
        organization: "Heritage",
        jobDescription: [
            "Instalasi jalur listrik aman untuk sound & booth",
            "Standby teknis antisipasi gangguan (genset/kabel)",
            "Bantu vendor panggung saat setup & bongkaran"
        ]
      },
      { 
        role: "Music & Sound Operator", 
        name: "Windy", 
        organization: "Heritage",
        jobDescription: [
            "Mengatur playlist lagu Zumba & Backsound Games",
            "Standby cue musik untuk MC & Awarding",
            "Menjaga output audio sound system tetap stabil"
        ]
      },
      { 
        role: "Service Team", 
        name: "Tim Santap Saji", 
        organization: "Santap Saji",
        jobDescription: [
            "Layani penukaran kupon refreshment dengan ramah",
            "Pastikan stok bubur & snack terjaga suhunya",
            "Lakukan clear-up sampah alat makan secara berkala"
        ]
      },
    ]
  }
];

export const RACI_DATA: RACIRow[] = [
  {
    task: "Keputusan Final / Budget",
    roles: { director: "A", event: "C", ops: "I", mkt: "C", creative: "I" }
  },
  {
    task: "Konsep Acara & Rundown",
    roles: { director: "C", event: "R", ops: "C", mkt: "I", creative: "I" }
  },
  {
    task: "Talent (MC & ZIN)",
    roles: { director: "A", event: "R", ops: "I", mkt: "I", creative: "I" }
  },
  {
    task: "Sponsorship Deal",
    roles: { director: "R", event: "I", ops: "I", mkt: "C", creative: "I" }
  },
  {
    task: "Visual Design & Cetak",
    roles: { director: "A", event: "C", ops: "I", mkt: "C", creative: "R" }
  },
  {
    task: "Promosi Social Media",
    roles: { director: "I", event: "C", ops: "I", mkt: "R", creative: "C" }
  },
  {
    task: "Registrasi Peserta",
    roles: { director: "I", event: "I", ops: "C", mkt: "R", creative: "I" }
  },
  {
    task: "Venue, Izin & Parkir",
    roles: { director: "A", event: "C", ops: "R", mkt: "I", creative: "I" }
  },
  {
    task: "Sound & Listrik",
    roles: { director: "I", event: "C", ops: "R", mkt: "I", creative: "I" }
  },
  {
    task: "Konsumsi & Kebersihan",
    roles: { director: "C", event: "I", ops: "R", mkt: "I", creative: "I" }
  },
  {
    task: "Hadiah & Doorprize",
    roles: { director: "C", event: "C", ops: "I", mkt: "R", creative: "I" }
  },
  {
    task: "Dokumentasi",
    roles: { director: "I", event: "I", ops: "I", mkt: "C", creative: "R" }
  }
];

export const KPIS: KPIMetric[] = [
  { value: "150", label: "Total Peserta", icon: Users, color: "bg-retro-pink" },
  { value: "5,000+", label: "Jangkauan Instagram", icon: Instagram, color: "bg-retro-cyan" },
  { value: "80%+", label: "Tingkat Kepuasan", icon: Smile, color: "bg-retro-yellow" },
  { value: "20+", label: "Prospek Baru", icon: TrendingUp, color: "bg-retro-lime" },
];
