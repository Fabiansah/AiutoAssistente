// Ganti dengan nomor WhatsApp bisnis Anda (gunakan format 62 tanpa spasi atau strip)
const DEFAULT_PHONE_NUMBER = "6285755663606"; 

/**
 * Membuat link WhatsApp otomatis dengan template pesan ter-encode
 * @param {string} message - Pesan awal yang akan dikirim
 * @param {string} [phone] - Nomor WA opsional jika ingin beda nomor
 * @returns {string} URL WhatsApp siap pakai
 */
export const createWhatsAppUrl = (message, phone = DEFAULT_PHONE_NUMBER) => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};

/**
 * Generator pesan dinamis berdasarkan aksi user
 */
export const waTemplates = {
  // Dari floating button atau header umum
  generalInquiry: () => 
    "Halo, saya ingin bertanya lebih lanjut mengenai layanan yang tersedia.",

  // Ketika klik tombol di salah satu kartu layanan
  serviceOrder: (serviceTitle) => 
    `Halo, saya tertarik dengan layanan *${serviceTitle}*. Bisa tolong jelaskan detail dan estimasi biayanya?`,

  // Ketika klik tombol konsultasi proyek serupa di portofolio
  portfolioInquiry: (projectTitle) => 
    `Halo, saya melihat portofolio proyek *${projectTitle}*. Saya berencana membuat proyek serupa, apakah bisa konsultasi?`,

  // Template hasil input dari form kontak
  contactForm: ({ name, email, service, message }) => {
    return [
      `*Pesan Baru dari Formulir Website*`,
      `----------------------------------`,
      `• *Nama:* ${name}`,
      `• *Email:* ${email || "-"}`,
      `• *Layanan:* ${service || "Umum"}`,
      `• *Pesan:* ${message}`,
      `----------------------------------`,
      `Mohon informasinya lebih lanjut. Terima kasih!`
    ].join('\n');
  }
};