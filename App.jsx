import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function OlayOrnekleri() {
  const [tikSayisi, setTikSayisi] = useState(0);
  const [metin, setMetin] = useState('');
  const [fareUstunde, setFareUstunde] = useState(false);

  // onClick olayi
  const tiklaHandler = () => {
    setTikSayisi(tikSayisi + 1);
  };

  // onChange olayi — input degeri
  const metinDegisti = (e) => {
    setMetin(e.target.value);
  };

  return (
    <div>
      <h2>Olay Örnekleri</h2>

      {/* onClick */}
      <button onClick={tiklaHandler}>
        Tıklandı: {tikSayisi} kez
      </button>

      {/* onChange */}
      <div>
        <input
          value={metin}
          onChange={metinDegisti}
          placeholder="Lütfen bir şeyler yazın..."
        />
        <p>Yazdığınız: {metin}</p>
        <p>Karakter sayısı: {metin.length}</p>
      </div>

      {/* onMouseEnter / onMouseLeave */}
      <div
        onMouseEnter={() => setFareUstunde(true)}
        onMouseLeave={() => setFareUstunde(false)}
        style={{
          padding: '20px',
          backgroundColor: fareUstunde ? 'red' : 'blue',
        
        }}
      >
        {fareUstunde ? 'Fare üzerinde!' : 'Fare üzerinde değil'}
      </div>
    </div>
  );
}

export default OlayOrnekleri;
