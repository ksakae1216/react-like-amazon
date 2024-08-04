import ProductCard from './components/ProductCard';
import './global.css';

const products = [
  { id: 1, name: '商品1', price: 1000, image: 'https://m.media-amazon.com/images/I/613+pDQxfXL._AC_SL1000_.jpg' },
  { id: 2, name: '商品2', price: 2000, image: 'https://m.media-amazon.com/images/I/81xN+3usCKL._AC_SL1500_.jpg' },
  { id: 3, name: '商品3', price: 3000, image: 'https://m.media-amazon.com/images/I/61I66N7SE6L._AC_SL1500_.jpg' },
  { id: 4, name: '商品4', price: 4000, image: 'https://m.media-amazon.com/images/I/51eAd8gGMvL._AC_SL1500_.jpg' },
];

export default function Index() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">Amazon</div>
        <input type="text" className="searchBar" placeholder="検索" />
        <div className="headerRight">
          <div className="account">アカウント</div>
          <div className="cart">カート</div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li>カテゴリー1</li>
          <li>カテゴリー2</li>
          <li>カテゴリー3</li>
        </ul>
      </nav>
      <main className="main">
        <div className="banner">
          <h2>大セール実施中！</h2>
        </div>
        <div className="productGrid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Like-Amazon. All rights reserved.</p>
      </footer>
    </div>
  );
}
