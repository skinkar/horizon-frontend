export default function HotelGallery() {
  return (
    <section className="mb-8">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Main Big Image */}
        <div className="md:col-span-2">
          <img
            src="/destination-hotel/main.jpg"
            className="w-full h-[360px] object-cover rounded-xl"
          />
        </div>

        {/* Side Images */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <img
            src="/destination-hotel/room1.jpg"
            className="w-full h-[170px] object-cover rounded-xl"
          />
          <img
            src="/destination-hotel/room2.jpg"
            className="w-full h-[170px] object-cover rounded-xl"
          />
          <img
            src="/destination-hotel/room3.jpg"
            className="w-full h-[170px] object-cover rounded-xl"
          />
          <img
            src="/destination-hotel/room4.jpg"
