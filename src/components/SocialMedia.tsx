import { Instagram, MessageCircle, Phone } from 'lucide-react';

const SocialMedia = () => {
  return (
    <section className="py-16 bg-gray-50" id="social-media">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Temukan Kami di <span className="text-[#FF5A00]">Social Media</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti kami untuk mendapatkan update terbaru, tips, dan promo menarik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Instagram */}
          <a
            href="https://instagram.com/jeka_towingservice"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="bg-white rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center shadow-md">
              <Instagram className="h-8 w-8 text-[#ee2a7b]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-white/90">@jeka_towingservice</p>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@jekatowingservice"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="bg-white rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center shadow-md">
              <img src="/public/tiktok.svg" alt="TikTok" className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">TikTok</h3>
            <p className="text-white/90">@jekatowingservice</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6287890152199?text=Halo, saya butuh bantuan towing service"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="bg-white rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center shadow-md">
              <MessageCircle className="h-8 w-8 text-[#25D366]" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-white/90">0878-9015-2199</p>
          </a>

          {/* Call */}
          <a
            href="tel:+6287890152199"
            className="bg-[#FF5A00] text-white rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="bg-white rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center shadow-md">
              <Phone className="h-8 w-8 text-[#FF5A00]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-white/90">0878-9015-2199</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
