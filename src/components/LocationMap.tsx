import { MapPin } from 'lucide-react';

const LocationMap = () => {
  const address =
    'Depan jembatan timbang, RT.08/RW.02, Rw. 1, Lebuawu, Kec. Pecangaan, Kabupaten Jepara, Jawa Tengah 59462';

  // Open Google Maps with this location when clicked
  const openGoogleMaps = () => {
    window.open(
      `https://maps.google.com/maps?q=${encodeURIComponent(address)}`,
      '_blank'
    );
  };

  return (
    <section className="py-16 bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lokasi <span className="text-[#FF5A00]">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Temukan kami di lokasi strategis untuk memudahkan jangkauan layanan
          </p>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="h-5 w-5 text-[#FF5A00]" />
            <span className="text-gray-700">{address}</span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.529878627134!2d110.71067392362818!3d-6.704992243290636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70dfb76a82e1eb%3A0x70f793b8420dda3!2sjeka%20jasa%20towing%20jepara%20kudus!5e0!3m2!1sen!2sid!4v1758821250452!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jeka Towing Service Location"
          />
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={openGoogleMaps}
            className="bg-[#FF5A00] hover:bg-[#E54A00] text-white px-6 py-3 rounded-lg shadow-md font-semibold flex items-center space-x-2 mx-auto"
          >
            <MapPin className="h-5 w-5" />
            <span>Buka di Google Maps</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
