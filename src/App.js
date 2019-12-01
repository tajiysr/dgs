import React, { useState } from "react";
import "./App.css";

function App() {
  const [turkceDogru, setTurkceDogru] = useState(0);
  const [turkceY, setTurkceY] = useState(0);
  const [matDogru, setMatDogru] = useState(0);
  const [matY, setmatY] = useState(0);
  const [onLis, setOnLis] = useState(0);

  // const [turkishTrue, setTurkishTrue] = useState(0);
  // const [mathTrue, setMathTrue] = useState(0);
  // const [turkishFalse, setTurkishFalse] = useState(0);
  // const [mathFalse, setMathFalse] = useState(0);
  // const [diplomaPoints, setDiplomaPoints] = useState(0);




  const [puan, setPuan] = useState(0);

  // console.log(turkceDogru, matDogru, matY);

  function hesaplama(e) {
    e.preventDefault();
    let sonuc = 126.1;
    sonuc =
      sonuc +
      netHesapla(turkceDogru, turkceY) * 2.4;
    sonuc =
      sonuc + netHesapla(matDogru, matY) * 0.6;
    sonuc = sonuc + onLis * 0.6;
    setPuan(sonuc);
  }

  function netHesapla(dogru, yanlis) {
    
    
const newYanlis = parseInt(yanlis);
const newdogru = parseInt(dogru);


if ( newYanlis % 4 !== 0) {
  
  console.log(newdogru - Math.floor((newYanlis / 4)));

  return newdogru - Math.floor((newYanlis / 4));
}
else  {
  console.log(newdogru - (newYanlis / 4));
  return newdogru - (newYanlis / 4);
}




// if (newYanlis / 4 === 0 ) {

//   const a = newYanlis % 4;
//   return newdogru - a;
  
// }

// else {
  
//   const a = newYanlis / 4;
//   console.log( a);
//   return newdogru - a;
  
//   }
}

  return (
    <div className="App">
      <div className="baslik">
        <h3>
          
          DGS Puan Hesaplama Aracı
        </h3>
        <p>Nurefşan Hanım İçin Hazırlanmıştır.</p>
        <hr></hr>
      </div>
      <form>
        <div className="container">
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Türkçe Doğru Saysını Giriniz</label>
          <input
            className="form-control"
            id="t-d"
            type="number"
            onChange={e => setTurkceDogru(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Türkçe Yanlış Saysını Giriniz</label>
          <input
          className="form-control"
            id="t-y"
            type="number"
            onChange={e => setTurkceY(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Matematik Doğru Saysını Giriniz</label>
          <input
          className="form-control"
            id="m-d"
            type="number"
            onChange={e => setMatDogru(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Matematik Yanlış Saysını Giriniz</label>
          <input
          className="form-control"
            id="t-y"
            type="number"
            onChange={e => setmatY(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <label>Ön Lisans Başarı Puanı</label>
          <input
          className="form-control"
            id="o-l"
            type="number"
            onChange={e => setOnLis(e.target.value)}
          />
        </div>
        <button
        className="btn btn-danger col-md-12"
          onClick={e => {
            hesaplama(e);
          }}
        >
          Hesapla
        </button>
         </div>
         </div>
      </form>
      <div className="puan">
        Sonuç:
         { puan}
      </div>
    </div>
  );
}

export default App;
