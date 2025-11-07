export default function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square rounded-lg bg-amber-50 mb-3" />
      <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[3rem]">{product.title}</h3>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">{product.price}₴</span>
        <button className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-sm font-medium hover:bg-rose-700">В корзину</button>
      </div>
    </div>
  );
}
