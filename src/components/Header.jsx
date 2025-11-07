import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-800">Bulochka</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#categories" className="hover:text-gray-900 transition-colors">Категории</a>
          <a href="#top" className="hover:text-gray-900 transition-colors">Топ-50</a>
          <a href="#delivery" className="hover:text-gray-900 transition-colors">Доставка</a>
          <a href="#contacts" className="hover:text-gray-900 transition-colors">Контакты</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Cart">
            <ShoppingCart className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-rose-500 text-white rounded-full px-1.5 py-0.5">3</span>
          </button>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-2 text-gray-700">
            <a href="#categories" className="py-2">Категории</a>
            <a href="#top" className="py-2">Топ-50</a>
            <a href="#delivery" className="py-2">Доставка</a>
            <a href="#contacts" className="py-2">Контакты</a>
          </nav>
        </div>
      )}
    </header>
  );
}
