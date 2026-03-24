import React from 'react';

// ─── Alt bileşen — props ile veri alır, varsayılan değerler parametrede tanımlı ───
function KullaniciKarti({ isim = "Anonim Kullanıcı", email = "belirtilmemiş", rol = "Öğrenci" }) 
{
  return (
    <div className="kullanici-kart">
      <h3>{isim}</h3>
      <p>Email: {email}</p>
      <p>Rol: {rol}</p>
    </div>
  );
}

// ─── Üst bileşen — props ile veri gönderir ───
function App() {
  return (
    <div>
      <h1>Kullanıcılar</h1>

      {/* Gerçek verilerle oluşturulan kartlar */}
      <KullaniciKarti
        isim="Çisem Yaşar"
        email="cyasar@mail.com"
        rol="Bölüm Başkanı"
      />
      <KullaniciKarti
        isim="Tuğba Saray"
        email="tsaray@mail.com"
        rol="Program Başkanı"
      />

      {/* Props gönderilmezse parametre varsayılan değerleri kullanılır */}
      <KullaniciKarti />
    </div>
  );
}

export default App;