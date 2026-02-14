export default function RoomsSection() {
  return (
    <section className="mb-10">

      <h2 className="text-xl font-semibold mb-4">Rooms</h2>

      <div className="grid md:grid-cols-3 gap-6">

        {[1,2,3].map((room) => (
          <div key={room} className="border rounded-xl overflow-hidden">

            <img
              src="/destination-hotel/room1.jpg"
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-medium">Deluxe Mountain View</h3>

              <p className="text-sm text-gray-600 mt-2">
                King Bed • Free Wifi • Breakfast Included
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-orange-600">
                  ₹ 9,500
                </span>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">
                  Select Room
