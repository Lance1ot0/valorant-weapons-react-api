import React, { useState, useEffect  } from 'react';
import WeaponCard from './components/WeaponCard';

function App() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data_api, setDataApi] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setDataApi(data);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setDataApi(null);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);


const {data} = data_api;

  return (
    <div className="App">
      
      <h1><span className='title'>Valorant</span> Weapons</h1>
      <div className='weaponGrid'>
        {data && data.map((weapon) => (
          <WeaponCard
          key={weapon.uuid}
          defaultName={weapon.displayName}
          basicSkin={weapon.displayIcon}
          shopData={weapon.shopData}
          weaponStats={weapon.weaponStats}
          skins={weapon.skins}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
