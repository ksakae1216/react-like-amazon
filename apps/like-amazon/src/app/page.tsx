import './global.css';

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
          {/* ここに商品のグリッドを追加 */}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Like-Amazon. All rights reserved.</p>
      </footer>
    </div>
  );
}
