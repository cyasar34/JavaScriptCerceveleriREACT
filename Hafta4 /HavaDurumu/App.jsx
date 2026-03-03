import { useState } from 'react'
import './App.css'

function HavaDurumuKarti({ sehir, sicaklik, durum }) {
  // JSX içinde kullanılacak mantıksal hesaplamalar
  const sicakMi = sicaklik > 25;
  const sogukMu = sicaklik < 10;

  // Duruma göre ikon seçimi
  const durumIkonu = {
    gunesli: "Güneş",
    bulutlu: "Bulut",
    yagmurlu: "Yağmur",
    karli: "Kar",
  };

  // Sıcaklığa göre dinamik arka plan rengi belirleme
  const arkaplanRengi = 
  sogukMu
    ? 'lightblue' 
    : sicakMi
      ? 'yellow' 
      : 'green'; 

  return (
    <div style={{
      backgroundColor: arkaplanRengi,
      borderRadius: '12px',
      padding: '24px',
      margin: '10px',
      width: '280px',
      display: 'inline-block',
      textAlign: 'center'
    }}>
      {/* Sehir adi */}
      <h2>{sehir}</h2>

      {/* Durum ikonu */}
      <p style={{ fontSize: '32px' }}>
        {durumIkonu[durum]}
      </p>

      {/* Sicaklik değeri */}
      <p style={{ fontSize: '28px', fontWeight: 'bold' }}>
        {sicaklik} derece
      </p>

      {/* Kosullu render — Sicaklik durumuna gore cikan özel mesajlar */}
      {sicakMi && (
        <p style={{ color: 'gray', fontWeight: 'bold' }}>
          Sıcak hava! Su içmeyi unutmayın.
        </p>
      )}
      {sogukMu && (
        <p style={{ color: 'gray', fontWeight: 'bold' }}>
          Soğuk hava! Kalın giyinin.
        </p>
      )}
    </div>
  );
}

function HavaDurumuApp() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Şehir Hava Durumu Paneli</h1>
      <>
        <HavaDurumuKarti sehir="İstanbul" sicaklik={30} durum="gunesli" />
        <HavaDurumuKarti sehir="Yalova" sicaklik={5} durum="bulutlu" />
      </>
    </div>
  );
}

export default HavaDurumuApp;
