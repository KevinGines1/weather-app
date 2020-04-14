import React, {useState, useEffect} from 'react';
import WeatherCard from './components/WeatherCard/component.js';
import './App.css';
function App() {

// 1st hook: useState(1st)
// 1st parameter is the initial value of the argument
// useState() returns two things: the variable itself & the setting function. The setting function causes the app to re-render
// e.g. const [city, setCity] = useState('')
// useState(initialValue) = Array[Variable, Updating Function]

// // hooks for updating values
  const[query, setQuery] = useState('Manila, PH');
//   const[city, setCity] = useState('');
//   const [temp, setTemp] = useState('');
//   const [condition, setCondition] = useState('');
//   const [country, setCountry] = useState('');

  const[weather, setWeather] = useState({ // this is better than having multiple useState functions
    temp: null,
    city: null,
    condition: null,
    country:null
  });

  const data = async(q)=> { // async function that get data from the API request and stores it
    // back ticks `` allows the combination of string and javascript variables
    const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q},gb&units=metric&APPID=cae352324597c53fff967c522aff6dac`); // fetch data from URL
    const resJSON = await apiRes.json(); // turn the returned object (called a promise) from the link into a json file
    return resJSON;
  }

  // console.log(data())
  // data().then(res => console.log(res)) // then() is a function that will only run when the promise is resolved and it will be holding the promised object.
  // res from then() is the json file form of the promised object
  

  // data().then(res=> { // sample codes just for accessing some of the attributes of the json file
  //   console.log("the temp is " + res.main.temp);
  //   console.log("and it feels like " + res.main.feels_like)
  // });

  const handleSearch = (event) =>{
    event.preventDefault(); // prevent the page from refreshing
    data(query).then(res=> { // sample codes just for accessing some of the attributes of the json file
      // setTemp(res.main.temp); // these arguments are taken from openweather website, they gave the objects that will be returned as a response
      // setCondition(res.weather[0].main); 
      // setCountry(res.sys.country);
      // setCity(res.name);
      setWeather({ // this is so much better than doing multiple setFunctions
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country
      })
    });
  };

  // 2nd hook: useEffect
// this function will run once the component is mounted and it will re-run when one of its dependencies are changed
// it holds a return function that will run when the component is unmounted
// e.g. useEffect(fun, [arr])
// useEffect(()=>{
  //code here will be done on mount
  // return(()=>{
    // code here will be done on unmount
  // })
// })

  useEffect(()=> { // sets the default value of the component at the start
    data(query).then(res=> {
      setWeather({ // this is so much better than doing multiple setFunctions
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country
      })
    });
  }, []) // this will only run once - when the component is mounted and since the dependency array is empty
  // the dependency array will only contain a thing/state that will re-run useEffect when that changes

  return (
    <div className="App">
     <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country}/>
     {/* <WeatherCard temp={temp} condition="Dust" city="Melbourne" country="AU"/> */}
     {/* <WeatherCard temp={temp} condition="Tornado" city="London" country="GB"/> */}
     <form className="inputField">
       <input 
         value = {query} 
         onChange={(e)=>setQuery(e.target.value)}// e.target.value here is the value placed in the input field 
       />
       <button onClick={e=>handleSearch(e)} >Search</button> 
     </form>
    </div>
  );
}

export default App;



  //getnada account for openweather: 
  //mavu@getnada.com pw: react2020