import { MapPin } from 'lucide-react';

const LocationMap = () => {
  const address =
    'Depan jembatan timbang, RT.08/RW.02, Rw. 1, Lebuawu, Kec. Pecangaan, Kabupaten Jepara, Jawa Tengah 59462';

  // Open Google Maps with the exact location provided
  const openGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/place/Jasa+Towing+Mobil+Motor+24+Jam+Jepara+Kudus+%7C+Jeka+Towing/@-6.7051598,110.7132963,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70dfcbf517706b:0xbc6431fddc996dd2!8m2!3d-6.7051598!4d110.7132963!16s%2Fg%2F11mrqgbfz_!17m2!4m1!1e3!18m1!1e1?hl=id',
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left mb-8">
            <MapPin className="h-5 w-5 text-[#FF5A00]" />
            <span className="text-gray-700 text-sm sm:text-base max-w-2xl">
              {address}
            </span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3809574832503!2d110.7108504!3d-6.7051598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70dfcbf517706b%3A0xbc6431fddc996dd2!2sJasa%20Towing%20Mobil%20Motor%2024%20Jam%20Jepara%20Kudus%20%7C%20Jeka%20Towing!5e0!3m2!1sid!2sid!4v1732194000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jeka Towing Service Location - Jepara Kudus"
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
