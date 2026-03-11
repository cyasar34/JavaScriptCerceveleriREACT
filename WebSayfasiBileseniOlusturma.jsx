import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Bir web sayfasını bileşenlere ayırma

// ─── Header Bileşeni ───
function Header() {
  return (
    <header>
      <h1>Benim Sitem</h1>
      <nav>
        <a href="">Ana Sayfa</a> |{" "}
        <a href="">Hakkımda</a> |{" "}
        <a href="">İletişim</a>
      </nav>
    </header>
  );
}

// Main Bileşeni
function Main() {
  return (
    <main>
      <h2>Hoş Geldiniz!</h2>
      <p>Bu benim React ile yaptığım ilk çok bileşenli sayfa.</p>
      <KartAlani />
    </main>
  );
}

// Kart Alanı — Main'in alt bileşeni ─
function KartAlani() {
  return (
    <div className="kart-alani">
      <Kart baslik="HTML" aciklama="Yapıyı oluşturur" />
      <Kart baslik="CSS" aciklama="Görünümü belirler" />
      <Kart baslik="JavaScript" aciklama="Etkileşimi ekler" />
    </div>
  );
}

// Tekrar kullanılabilir Kart bileşeni 
function Kart(props) {
  return (
    <div className="kart">
      <h3>{props.baslik}</h3>
      <p>{props.aciklama}</p>
    </div>
  );
}

// Footer Bileşeni
function Footer() {
  return (
    <footer>
      <p>2026 - İstanbul Gelişim Üniversitesi - Tüm Hakları Saklıdır</p>
    </footer>
  );
}

// App — Tüm bileşenleri bir araya getirir 
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
