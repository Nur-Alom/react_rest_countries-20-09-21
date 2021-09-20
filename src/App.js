// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      {/* <Countries></Countries> */}
    </div>
  );
};



// function Countries() {
//   const [countries, setCountry] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all')
//       .then(res => res.json())
//       .then(data => setCountry(data))
//   }, [])
//   return (
//     <div>
//       <h1>Traveling in the World!!</h1>
//       <h4>Countries Available: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div >
//   )
// };

// function Country(props) {
//   return (
//     <div className='style'>
//       <h2>Name: {props.name}</h2>
//       <h3>Capital:{props.capital}</h3>
//     </div>
//   )
// }

export default App;
