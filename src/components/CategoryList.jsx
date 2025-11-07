export default function CategoryList() {
  const categories = [
    { id: 1, name: "Хлеб", count: 24, color: "bg-amber-50", emoji: "🍞" },
    { id: 2, name: "Булочки", count: 18, color: "bg-rose-50", emoji: "🥯" },
    { id: 3, name: "Торты", count: 12, color: "bg-pink-50", emoji: "🍰" },
    { id: 4, name: "Пирожные", count: 30, color: "bg-orange-50", emoji: "🧁" },
  ];

  return (
    <section id="categories" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Категории</h2>
        <a href="#" className="text-rose-600 hover:text-rose-700 text-sm font-medium">Все категории</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c) => (
          <a key={c.id} href="#" className={`group rounded-xl border border-gray-100 p-4 ${c.color} hover:shadow transition-shadow` }>
            <div className="text-3xl">{c.emoji}</div>
            <div className="mt-3 font-semibold text-gray-900 group-hover:text-rose-700">{c.name}</div>
            <div className="text-sm text-gray-600">{c.count} товаров</div>
          </a>
        ))}
      </div>
    </section>
  );
}
