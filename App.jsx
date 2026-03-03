import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// JSX içinde JavaScript ifadeleri kullanma

const ogrenciAdi1 = "Çisem Yaşar";
const bolum1 = "Yazılım Mühendisliği";
const donemSayisi1 = 1;

const ogrenciAdi2 = "Tuğba Saray";
const bolum2 = "Bilgisayar Mühendisliği";
const donemSayisi2 = 6;

function ProfilKarti() {
  return (
    <>
      <h1>{ogrenciAdi1}</h1>
      <p>Bölüm: {bolum1}</p>
      <p>Dönem: {donemSayisi1}. dönem</p>
      {/* JSX içinde yorum bu şekilde yazılır */}
      <p>Mezuniyet tahmini: {8 - donemSayisi1} dönem kaldı</p>

      <h1>{ogrenciAdi2}</h1>
      <p>Bölüm: {bolum2}</p>
      <p>Dönem: {donemSayisi2}. dönem</p>
      <p>Mezuniyet tahmini: {8 - donemSayisi2} dönem kaldı</p>
    </>
  );
}

export default ProfilKarti;
