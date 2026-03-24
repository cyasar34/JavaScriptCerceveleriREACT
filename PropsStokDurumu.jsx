import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



import React from 'react';

// ─── Alt bileşen — props ile veri alır ───
function UrunKarti({ urunAdi, fiyat, stok }) {
  return (
    <div style={{
      background: '#e8f4f0',
      borderRadius: '16px',
      padding: '1.5rem',
      margin: '12px 0',
      maxWidth: '400px',
      width: '100%',
      color: '#2d6a57'
    }}>
      <h3 style={{ margin: '0 0 0.75rem' }}>{urunAdi}</h3>
      <p style={{ margin: '4px 0' }}>Fiyat: {fiyat} ₺</p>
      <p style={{ margin: '4px 0' }}>
        Stok: {stok > 0 ? "Mevcut" : "Tükendi"}
      </p>
    </div>
  );
}

// ─── Üst bileşen ───
function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5faf8',
    }}>
      <UrunKarti urunAdi="Klavye" fiyat={450} stok={10} />
      <UrunKarti urunAdi="Mouse" fiyat={280} stok={0} />
      <UrunKarti urunAdi="Monitör" fiyat={3200} stok={5} />
    </div>
  );
}

export default App;
