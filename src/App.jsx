import Header from './components/Header';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import TopProducts from './components/TopProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryList />
        <section id="delivery" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-amber-50 to-rose-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900">Доставка и оплата</h2>
            <p className="mt-2 text-gray-700">Курьерская доставка по городу в день заказа. Самовывоз из пекарни. Оплата картой онлайн или при получении.</p>
            <ul className="mt-4 grid md:grid-cols-3 gap-3 text-sm text-gray-700">
              <li className="bg-white rounded-xl p-4 border border-gray-100">Бесплатно от 800₴</li>
              <li className="bg-white rounded-xl p-4 border border-gray-100">Доставка за 60–90 минут</li>
              <li className="bg-white rounded-xl p-4 border border-gray-100">Трекинг статуса заказа</li>
            </ul>
          </div>
        </section>
        <TopProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
