import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Her bileşen bir fonksiyondur ve JSX döndürür.
function Baslik() {
  return <h2>İstanbul Gelişim Üniversitesi</h2>;
}
function KisiKarti(){
  return(
    <>
<p>Adı: Efe Çetinkaya</p>
<p>Programı: Ön Yüz Yazılım Geliştirme Programı</p>
<p>Dönem: 2.Dönem</p>
</>
  );
}
function AltBilgi() {
  return (
    <footer>
      <p>2025 — Tüm hakları saklıdır.</p>
    </footer>
  );
}
// Ana bileşen — diğerlerini birleştirir 
function App() {
  return (
    <div>
      <Baslik />
      <KisiKarti />
      <AltBilgi />
    </div>
  );
}

export default App;
