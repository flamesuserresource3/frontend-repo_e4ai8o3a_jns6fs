export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Сладкие решения для вашего бизнеса и дома
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Ассортимент свежей выпечки, десертов и хлеба. Быстрая доставка, удобный самовывоз и лучшие цены.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#top" className="inline-flex items-center px-5 py-3 rounded-lg bg-rose-600 text-white font-medium shadow hover:bg-rose-700 transition-colors">Смотреть хиты</a>
              <a href="#delivery" className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 font-medium">Как доставляем</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-white shadow-xl border border-amber-100 p-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-amber-50" />
              <div className="rounded-xl bg-rose-50" />
              <div className="rounded-xl bg-pink-50" />
              <div className="rounded-xl bg-orange-50" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow rounded-xl px-3 py-2 text-sm">
              3000+ довольных клиентов
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
