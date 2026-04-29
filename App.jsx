import { useState } from 'react'
import './App.css'

// Hafta 12 — Controlled Components ile Form

function KayitFormu() {

  // Her alan için ayrı state — başlangıç değerleri boş
  const [isim,       setIsim]       = useState('');
  const [email,      setEmail]      = useState('');
  const [sehir,      setSehir]      = useState('istanbul'); // select baştan İstanbul seçili
  const [gonderildi, setGonderildi] = useState(false);      // form henüz gönderilmedi

  const handleSubmit = (e) => {
    e.preventDefault();                          // sayfanın yenilenmesini engelle
    if (!isim || !email) {
      alert('Tüm alanları doldurun!');
      return;                                    // eksik alan varsa burada dur
    }
    setGonderildi(true);                         // her şey tamam → başarı ekranına geç
  };

  // gonderildi true olunca form yerine bu ekran gelir
  if (gonderildi) {
    return (
      <div>
        <h2>Hoş geldiniz, {isim}!</h2>           {/* state'teki ismi ekrana bas */}
        <button onClick={() => setGonderildi(false)}>Yeni kayıt</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>               {/* onClick değil onSubmit kullan */}

      {/* value + onChange = controlled component */}
      <input value={isim}  onChange={(e) => setIsim(e.target.value)}  placeholder="İsim" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-posta" />

      <select value={sehir} onChange={(e) => setSehir(e.target.value)}>
        <option value="istanbul">İstanbul</option>
        <option value="yalova">Yalova</option>
        <option value="balikesir">Balıkesir</option>
        <option value="denizli">Denizli</option>
      </select>

      <button type="submit">Kayıt ol</button>
    </form>
  );
}

export default KayitFormu;