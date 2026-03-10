import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Header 
function Header(){
    return(
    <header>
      <h1>Benim Sitem</h1>
      <nav>
        <a href="#">AnaSayfa</a>
        <a href="#">Hakkımda</a>
        <a href="#">İletişim</a>
      </nav>
    </header>
  );
}

//main
function Main(){
  return(
    <main>
      <h2>Hoş Geldiniz</h2>
      <p>Bu benim React ile oluşturduğum ilk çok bileşenli sayfa</p>
      <KartAlani/>
    </main>
  );
}

//Kart Alanı - Main Alt Bileşeni
function KartAlani(){
  return(
    <div className='kart-alani'>
      <Kart baslik="HTML" aciklama="Yapıyı oluşturur"/>
      <Kart baslik="CSS" aciklama="Görünümü belirler"/>
      <Kart baslik="JavaScript" aciklama="Etkileşimi ekler"/>
    </div>
  );
}

//Tekrar Kullanılabilir Hale Dönüştürme
function Kart(props){
  return(
    <div className="Kart">
      <h3>{props.baslik}</h3>
      <h3>{props.aciklama}</h3>
    </div>
  );
}
//Footer Bileşeni
function Footer(){
  return(
    <footer>
      <p>2026 - İstanbul Gelişim Üniversitesi</p>
    </footer>
  );
}

//App - Tüm Bileşenleri biraraya getirir
function App(){
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
}
export default App;