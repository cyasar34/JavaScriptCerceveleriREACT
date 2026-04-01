import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



// ─── Basit Fonksiyonel Bileşen ───
function Selamlama() {             
  return (                          
    <h1 className="selamlama">      
      Merhaba, <span>Çisem Yaşar</span>  
    </h1>
  );
}

// ─── Arrow Function ile Bileşen ───
const AltBilgi = () => {            
  return (                          
    <footer className="alt-bilgi">  
      <p>2026 — Ön-Yüz Yazılım Geliştirme</p>  
    </footer>
  );
};

// ─── useState ile Sayaç ───
function Sayac() {                 
  const [sayi, setSayi] = useState(0);  // sayi: mevcut değer | setSayi: güncelleyici | 0: başlangıç değeri

  return (                          
    <div className="sayac-card">   
      <p className="sayac-label">Sayaç</p>              
      <h2 className={                
        `sayac-deger ${             
          sayi > 0 ? 'pozitif' :        
          sayi < 0 ? 'negatif' : ''     
        }`}>
        {sayi}                     
      </h2>
      <div className="butonlar">    
        <button
          className="btn artir"     onClick={() => setSayi(sayi + 1)}  >+ Artır</button>
        <button
          className="btn azalt"     onClick={() => setSayi(sayi - 1)}  >− Azalt</button>
        <button
          className="btn sifirla"  onClick={() => setSayi(0)} >Sıfırla</button>
      </div>
    </div>
  );
}

// ─── Ana Bileşen ───
function App() {                  
  return (
    <div className="app">          
      <Selamlama />                 
      <Sayac />                     
      <AltBilgi />                  
    </div>
  );
}

export default App;                 
