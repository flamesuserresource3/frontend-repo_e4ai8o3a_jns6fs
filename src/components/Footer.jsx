export default function Footer() {
  return (
    <footer id="contacts" className="mt-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <div className="text-lg font-semibold text-gray-900">Bulochka</div>
          <p className="mt-2">Свежая выпечка каждый день. Заказы по телефону и онлайн.</p>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Контакты</div>
          <ul className="mt-2 space-y-1">
            <li>+380 (00) 123-45-67</li>
            <li>support@bulochka.ua</li>
            <li>Киев, ул. Вкусная, 1</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Доставка</div>
          <p className="mt-2">Курьером по городу и самовывоз. Ежедневно с 9:00 до 21:00.</p>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500">© 2025 Bulochka. Все права защищены.</div>
    </footer>
  );
}
