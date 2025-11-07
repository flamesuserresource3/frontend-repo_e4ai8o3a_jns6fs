import ProductCard from "./ProductCard";

export default function TopProducts() {
  const products = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: `Хит №${i + 1}: свежая выпечка`,
    price: (49 + i * 3).toFixed(0),
  }));

  return (
    <section id="top" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Топ-50 товаров</h2>
        <a href="#" className="text-rose-600 hover:text-rose-700 text-sm font-medium">Смотреть все</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
