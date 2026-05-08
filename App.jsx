import './App.css'
import { useState, useEffect } from 'react';

function SayfaBasligi() {
  // sayac: kaç kez tıklandığını tutar
  const [sayac, setSayac] = useState(0);

  // sayac her değiştiğinde sekme başlığını güncelle
  useEffect(() => {
    document.title = `Tıklama: ${sayac}`;
  }, [sayac]); // bağımlılık: sadece sayac değişince çalışır

  return (
    <div>
      <p>Sayaç: {sayac}</p>
      <button onClick={() => setSayac(sayac + 1)}>Tıkla</button>
      <p><i>(Not: Tarayıcının başlığına bakar mısın?)</i></p>
    </div>
  );
}

function Zamanlayici() {
  const [saniye, setSaniye] = useState(0);
  const [calisiyor, setCalisiyor] = useState(false);

  useEffect(() => {
    if (!calisiyor) return;
    const timer = setInterval(
      () => setSaniye(s => s + 1), 
      1000
    );
    return () => clearInterval(timer);
  }, [calisiyor]);

  return (
    <div>
      <h2>{saniye} saniye</h2>
      <button onClick={() => setCalisiyor(c => !c)}>
        {calisiyor ? 'Durdur' : 'Başlat'}
      </button>
      <button onClick={() => { setCalisiyor(false); setSaniye(0); }}>
        Sıfırla
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SayfaBasligi />
      <hr />
      <Zamanlayici />
    </div>
  );
}

export default App;


