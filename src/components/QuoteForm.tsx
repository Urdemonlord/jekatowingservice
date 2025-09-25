import React, { useState } from 'react';
import { Send, MapPin, Car, User, Phone } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: '',
    fromLocation: '',
    toLocation: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const vehicleTypes = [
    'Mobil Sedan',
    'Mobil SUV/MPV',
    'Mobil Pick-up',
    'Sepeda Motor',
    'Mobil Box/Truck',
    'Lainnya',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format WhatsApp message
      const message = `*PERMINTAAN TOWING SERVICE*

🔸 *Nama:* ${formData.name}
🔸 *No. WhatsApp:* ${formData.phone}
🔸 *Jenis Kendaraan:* ${formData.vehicleType}
🔸 *Dari Lokasi:* ${formData.fromLocation}
🔸 *Ke Lokasi:* ${formData.toLocation}
🔸 *Keterangan:* ${formData.description || 'Tidak ada keterangan tambahan'}

Mohon segera diproses. Terima kasih!`;

      // Send to WhatsApp
      const whatsappUrl = `https://wa.me/6287890152199?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        vehicleType: '',
        fromLocation: '',
        toLocation: '',
        description: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Minta Penawaran Towing
          </h2>
          <p className="text-xl text-gray-600">
            Isi form di bawah ini untuk mendapatkan penawaran terbaik sesuai kebutuhan Anda
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4" />
                  <span>Nama Lengkap</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>No. WhatsApp</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Contoh: 0812-3456-7890"
                />
              </div>
            </div>

            <div>
              <label htmlFor="vehicleType" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <Car className="h-4 w-4" />
                <span>Jenis Kendaraan</span>
              </label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Pilih jenis kendaraan</option>
                {vehicleTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fromLocation" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Lokasi Asal</span>
                </label>
                <input
                  type="text"
                  id="fromLocation"
                  name="fromLocation"
                  value={formData.fromLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Dari mana kendaraan akan di-towing?"
                />
              </div>

              <div>
                <label htmlFor="toLocation" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Lokasi Tujuan</span>
                </label>
                <input
                  type="text"
                  id="toLocation"
                  name="toLocation"
                  value={formData.toLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ke mana kendaraan akan dibawa?"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2 block">
                Keterangan Tambahan (Opsional)
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Jelaskan kondisi kendaraan atau permintaan khusus..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                Form berhasil dikirim! Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                Terjadi kesalahan. Silakan coba lagi atau hubungi langsung melalui WhatsApp.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-900 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Mengirim...</span>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Kirim Permintaan via WhatsApp</span>
                </>
              )}
            </button>

            <p className="text-sm text-gray-600 text-center">
              Dengan mengirim form ini, Anda akan diarahkan ke WhatsApp untuk mendapatkan respon langsung dari tim kami.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;