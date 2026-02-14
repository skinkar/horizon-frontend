export default function ReviewsSection() {
  return (
    <section className="mb-10 border-t pt-8">

      <h2 className="text-xl font-semibold mb-6">User Reviews</h2>

      <div className="space-y-6">

        {[1,2].map((r) => (
          <div key={r} className="border p-4 rounded-xl">

            <div className="flex justify-between mb-2">
              <span className="font-medium">Tarun Singh</span>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>

            <p className="text-sm text-gray-700">
              Amazing stay with beautiful views. Highly recommended
              for destination weddings and family functions.
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}
