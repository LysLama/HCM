import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/* Các mục nội dung tương ứng với các card */}
        <section id="dat-van-de" className="content-section">
          <h2>Đặt Vấn Đề</h2>
          {/* Nội dung cho phần này */}
        </section>
        <section id="ly-thuyet-nen-tang" className="content-section">
          <h2>Lý Thuyết Nền Tảng</h2>
          {/* Nội dung cho phần này */}
        </section>
        <section id="vai-tro-lich-su" className="content-section">
          <h2>Vai Trò Lịch Sử</h2>
          {/* Nội dung cho phần này */}
        </section>
        <section id="xa-hoi-tuong-lai" className="content-section">
          <h2>Xã Hội Tương Lai</h2>
          {/* Nội dung cho phần này */}
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App
