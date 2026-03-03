import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Etkinlik() {
  const [isim, setIsim] = useState("");
  const [rol, setRol] = useState("Öğrenci");
  const [mesaj, setMesaj] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#2d3a4a" }}>Etkinlik Katılım Formu</h1>

      {/* İsim input'u - controlled component
      Kullanıcı yazar → onChange tetiklenir → 
      setIsim ile state güncellenir → React yeniden render eder → input yeni değeri gösterir
      */}
      <input
        type="text"
        placeholder="İsminizi girin"
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
        style={{ padding: "6px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
      <br /><br />

      {/* Rol seçimi */}
      <select
        value={rol}
        onChange={(e) => setRol(e.target.value)}
        style={{ padding: "6px", borderRadius: "6px" }}
      >
        <option>Öğrenci</option>
        <option>Eğitmen</option>
      </select>
      <br /><br />

      {/* İsim boşsa hata, doluysa hoş geldin mesajı
      Bu yapıya ternary operatör denir. Kısaca şu anlama geliyor:
      koşul ? doğruysa bunu yap : yanlışsa bunu yap
      */}
      <button
        onClick={() =>
          isim.trim() === ""
            ? setMesaj("Lütfen isminizi giriniz.")
            : setMesaj(`Etkinliğe hoş geldiniz ${rol} ${isim}`)
        }
        style={{
          padding: "8px",
          backgroundColor: "#2d3a4a",
          color: "white",
        }}
      >
        Katılımı Tamamla
      </button>

      {/* Koşullu render - mesaj varsa göster */}
      {mesaj && (
        <h2 style={{ color: isim.trim() === "" ? "red" : "green" }}>
          {mesaj}
        </h2>
      )}
    </div>
  );
}
export default Etkinlik;
