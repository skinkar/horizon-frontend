import { themes, ThemeType } from "@/lib/theme";

export default function Footer({ theme = "default" }: { theme?: ThemeType }) {
  const currentTheme = themes[theme];

  return (
    <footer className={`${currentTheme.footerBg} text-gray-800`}>
      {/* Top Links Section */}
      <div className="bg-white pt-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-16 gap-x-8 gap-y-12 font-gilroy-medium">
            {/* Row 1 */}
            <div>
              <h4 className="font-gilroy-semibold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Home</li>
                <li>Destinations</li>
                <li>Offers</li>
                <li>Support</li>
                <li>About Us</li>
                <li>Blogs</li>
                <li>Review & Ratings</li>
                <li>Feedback</li>
              </ul>
            </div>

            <div>
              <h4 className="font-gilroy-semibold mb-4">SERVICES</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Packages</li>
                <li>Hotels</li>
                <li>Luxury Hotels</li>
                <li>Cruise</li>
                <li>Solo Female Travel</li>
                <li>Trekking</li>
                <li>Community Trips</li>
                <li>Activities</li>
              </ul>
            </div>

            <div>
              <h4 className="font-gilroy-semibold mb-4">TRANSPORT</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Cabs</li>
                <li>Train</li>
                <li>Bus</li>
                <li>Flights</li>
              </ul>
            </div>

            <div>
              <h4 className="font-gilroy-semibold mb-4">OFFERS</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Summer Sale</li>
                <li>Diwali Sale</li>
                <li>Phoenix Fly Rewards</li>
                <li>Refer & Earn Rewards</li>
                <li>Tag & Earn Rewards</li>
                <li>16th Night Rewards</li>
                <li>Group Booking Rewards</li>
                <li>Cruise Vouchers</li>
              </ul>
            </div>

            {/* Row 2 */}
            <div>
              <h4 className="font-gilroy-semibold mb-4">PACKAGES</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>India</li>
                <li>International</li>
                <li>All</li>
              </ul>
            </div>

            <div>
              <h4 className="font-gilroy-semibold mb-4">DESTINATION WEDDING</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Overview</li>
                <li>Decor</li>
                <li>Mehendi</li>
                <li>Invites & Favours</li>
                <li>Catering</li>
                <li>End-to-End Planning</li>
                <li>Entertainment</li>
                <li>Venue</li>
                <li>Pre-Wedding</li>
              </ul>
            </div>

            <div>
              <h4 className="font-gilroy-semibold mb-4">CELEBRATIONS</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Anniversary</li>
                <li>Ceremony</li>
                <li>Receptions</li>
                <li>Post-Wedding Celebrations</li>
                <li>Photography & Cinematography</li>
                <li>Accommodation</li>
                <li>Travel & Transportations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-gilroy-semibold mb-4">GROUP BOOKINGS</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Overview</li>
                <li>Seminars</li>
                <li>Business Meetings</li>
                <li>Group Travel</li>
                <li>Product Launch</li>
                <li>Planning</li>
                <li>Receptions</li>
                <li>Accommodations</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-10"></div>

          {/* Brand Section */}
          <div className="text-center py-10 flex flex-col items-center">
            <img src="/about/logos/logo.svg" alt="" />
            <p className="text-sm mt-2 font-gilroy-semibold">
              For The Dreamers, Explorers, And Memory-Makers — Your Journey
              Starts Here.
            </p>
          </div>

          {/* Contact Section */}
          <div className="pb-10 flex flex-col md:flex-row justify-between gap-10 text-sm font-gilroy-medium">
            {/* Contact */}
            <div className="flex flex-col items-center">
              <h4 className="font-gilroy-semibold mb-3 uppercase text-sm">
                Contact Us
              </h4>
              <p className="text-gray-600">phoenixflytravel@gmail.com</p>
              <p className="text-gray-600 mt-2">+91-8861524428</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center">
              <h4 className="font-gilroy-semibold mb-3 uppercase text-sm">
                Address
              </h4>
              <p className="text-gray-600">
                3rd Floor, Above United Medicals, Ramdev Galli, Belagavi –
                590010
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center">
              <h4 className="font-gilroy-semibold mb-3 uppercase text-sm ">
                Follow Us
              </h4>
              <div className="flex gap-4 text-orange-500 text-lg">
                <span>FB</span>
                <span>IG</span>
                <span>WA</span>
                <span>TW</span>
                <span>YT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${currentTheme.footerBottom} py-4 text-center text-sm font-gilroy-semibold text-white`}
      >
        © 2025 Phoenix Fly | All Rights Reserved
      </div>
    </footer>
  );
}
