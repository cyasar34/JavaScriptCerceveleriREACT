import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NameForm from "./NameForm"; // Oluşturduğumuz bileşeni içe aktarıyoruz.

function App() {
  return (
    <div>
      <h1>Hoş Geldiniz</h1>
      {/* NameForm bileşenini burada çağırıyoruz */}
      <NameForm />
    </div>
  );
}

export default App;
