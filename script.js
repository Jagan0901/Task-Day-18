const api = "https://restcountries.com/v3.1/all?fields=name,capital,region,cca3,flags,latlng";

let countries = [];

async function getCountries() {
    // console.log(countries.name.common)
    const countries = await fetch(api, { method: "GET" }).then((data) => data.json());
    console.log(countries,typeof(countries))
    
  const division = document.createElement("div");
  division.setAttribute("id", "container");
  division.setAttribute("class", "container");
  countries.forEach(
    (country) =>
      (division.innerHTML += `
    <div class="row col-lg-4 col-sm-12">
                  <div class="card card-header card-body" id="card">
                    <h5 class="card-title" id="name">${country.name.common}</h5>
                    <img src=${country.flags.png} class="card-img-top" alt="${country.name.common}">
                    <p class="card-text">Capital: ${country.capital}</p>
                    <p class="card-text">Region: ${country.region}</p>
                    <p class="card-text">Country code: ${country.cca3}</p>
                    <button class="btn btn-primary" id="btn" onclick = "getWeather(${country.capital})">Click for Weather</button>  
                    </div>
              </div>
              
    `)
  );
  window.onload=function(){
  const button = document.getElementById("btn");
  button.addEventListener("click", getWeather(country));
  }
  document.body.appendChild(division);
}

getCountries();

async function getWeather(capital){
  // console.log(capital)
  api_key = "cec37aa26ab43cd4209aeff1013855a0"
  const countriesWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`, { method: "GET" }).then((data) => data.json());
    console.log(countriesWeather)
}
// getWeather()
