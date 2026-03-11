import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// ─── Profil Başlık Bileşeni ───
function ProfilBaslik({ kullanici }) {
  return (
    <div style={{ padding: '20px', 
    backgroundColor: 'lightblue', 
    color: 'white', 
    borderRadius: '12px', 
    marginBottom: '20px' }}>
      <h1>{kullanici.isim}</h1>
      <p>{kullanici.bio}</p>
    </div>
  );
}  


// ─── İstatistik Bileşeni ───
function Istatistik({ etiket, deger }) {
  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <p><strong>{deger}</strong></p>
      <p style={{ color: 'red' }}>{etiket}</p>
    </div>
  );
}

// ─── İstatistik Barı Bileşeni ───
function IstatistikBari({ takipci, takip, gonderi }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', border: '1px solid gray', borderRadius: '8px', padding: '10px', marginBottom: '20px' }}>
      <Istatistik etiket="Gönderi" deger={gonderi} />
      <Istatistik etiket="Takipçi" deger={takipci} />
      <Istatistik etiket="Takip" deger={takip} />
    </div>
  );
}
// ─── Gönderi Bileşeni ───
function Gonderi({ icerik, tarih, begeni }) {
  return (
    <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '16px', marginBottom: '10px' }}>
      <p>{icerik}</p>
      <p style={{ color: 'blue' }}>{tarih} — {begeni} beğeni</p>
    </div>
  );
}



// ─── Ana Bileşen — Hepsini birleştirir ───
function SosyalMedyaProfil() {
  const kullanici = {
    isim: "Efe Çetinkaya",
    bio: "Yazılım öğrencisi | React öğreniyorum!",
  };

  const gonderiler = [
    { id: 1, icerik: "Bugün React bileşenlerini öğrendim!", tarih: "2 saat önce", begeni: 12 },
    { id: 3, icerik: "İlk projemi Vite ile oluşturdum.", tarih: "3 gün önce", begeni: 24 },
  ];

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <ProfilBaslik kullanici={kullanici} />
      <IstatistikBari takipci={1234} takip={567} gonderi={gonderiler.length} />
      <h2>Gönderiler</h2>
      {/*gonderiler dizisindeki her gönderi için bir Gonderi bileşeni oluşturuyor.*/}
      {gonderiler.map(g => (
        <Gonderi key={g.id} icerik={g.icerik} tarih={g.tarih} begeni={g.begeni} />
      ))}
      {/*elimizde 2 gönderi olan bir dizi var. 
      map bu dizinin üzerinden geçiyor ve her eleman için <Gonderi /> bileşeni üretiyor. 
      map, aynı bileşeni tek tek yazmak yerine dizideki verilerden otomatik olarak üretiyor.*/}
    </div>
  );
}
export default SosyalMedyaProfil;
