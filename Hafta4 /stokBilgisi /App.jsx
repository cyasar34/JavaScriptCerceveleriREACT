import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function KullaniciBilgileri() {
  const isim = "Çisem";
  const email = "cyasar@mail.com";

  return (
    <>
      <h2>{isim}</h2>
      <p>{email}</p>
    </>
  );
}

function UrunKarti() {
  const urun1 = {
    ad: "Kablosuz Kulaklık",
    fiyat: 299.99,
    stokta: true,
  };
  const urun2 = {
    ad: "Bilgisayar",
    fiyat: 1099.99,
    stokta: true,
  };

  return (
    <>
      <h3>{urun1.ad}</h3>
      {/* Süslü parantez içinde hesaplama yapılabilir */}
      <p>Fiyat: {urun1.fiyat} TL</p>
      <p>KDV dahil: {(urun1.fiyat * 1.20).toFixed(2)} TL</p>
      {/* Koşullu ifade — ternary operatör */}
      <p>{urun1.stokta ? "Stokta var" : "Tükendi"}</p>

      <h3>{urun2.ad}</h3>
      <p>Fiyat: {urun2.fiyat} TL</p>
      <p>KDV dahil: {(urun2.fiyat * 1.20).toFixed(2)} TL</p>
      <p>{urun2.stokta ? "Stokta var" : "Tükendi"}</p>

    </>
  );
}
export default function App() {
  return (
    <>
      <h1>Kullanıcı Sepeti</h1>
      {/* Yukarıda yazdığın bileşenleri burada çağırıyoruz */}
      <KullaniciBilgileri />
      <UrunKarti />
    </>
  );
}

export {App};
