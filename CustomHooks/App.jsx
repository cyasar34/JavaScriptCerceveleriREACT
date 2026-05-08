import { useState } from 'react';


// "use" ile baslamak ZORUNLU!
function useCounter(baslangicDeger = 0) {
  const [sayi, setSayi] = useState(baslangicDeger);
  const artir = () => setSayi(s => s + 1);
  const azalt = () => setSayi(s => s - 1);
  const sifirla = () => setSayi(baslangicDeger);

  return { sayi, artir, azalt, sifirla };
}
// ─── Custom Hook: useToggle ───
function useToggle(baslangic = false) {
  const [deger, setDeger] = useState(baslangic);
  const degistir = () => setDeger(d => !d);
  return [deger, degistir];
}
function App() {
  // useCounter kullaniyoruz — sayac mantigi tek yerde!
  const sayac1 = useCounter(0);
  const sayac2 = useCounter(100);

  // useToggle kullaniyoruz
  const [karanlikMod, karanlikToggle] = useToggle(false);
  const arkaplan = karanlikMod ? 'black' : 'white';
  const yaziRenk = karanlikMod ? 'white' : 'black';

  return (
    <div style={{ backgroundColor: arkaplan, 
    color: yaziRenk, 
    padding: '20px' }}>
      <h2>Custom Hook Örnekleri</h2>

      {/* Sayac 1 */}
      <div>
        <h3>Sayaç 1: {sayac1.sayi}</h3>
        <button onClick={sayac1.artir}>+</button>
        <button onClick={sayac1.azalt}>-</button>
        <button onClick={sayac1.sifirla}>Sıfırla</button>
      </div>
      {/* Sayac 2 — ayni hook, farkli baslangic degeri */}
      <div>
        <h3>Sayaç 2: {sayac2.sayi}</h3>
        <button onClick={sayac2.artir}>+</button>
        <button onClick={sayac2.azalt}>-</button>
        <button onClick={sayac2.sifirla}>Sıfırla</button>
      </div>
      {/* Karanlik Mod Toggle */}
      <button onClick={karanlikToggle}>
        {karanlikMod ? 'Açık Mod' : 'Karanlık Mod'}
      </button>
    </div>
  );
}
export default App;
