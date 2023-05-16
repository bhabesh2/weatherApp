

let temp = document.getElementsByClassName("temp")[0];
let tempMin_max = document.getElementsByClassName("temp-mx")[0];
let loctn = document.getElementsByClassName("location")[0];
let icon = document.getElementsByClassName("icon")[0];

let city = document.getElementById("city");
let state = document.getElementById("state");

let submit = document.getElementById("submit");

// Default city and state
let defaultCity = "Mangaldai";
let defaultState = "Assam";

// API call with default city and state
let pro = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${defaultCity},${defaultState},IN&units=metric&appid=143ef405b79782d13c9678a7e9000b8b`);

pro.then((value)=>{
    return value.json();
}).then((res)=>{
    let tempData = res.main.temp;
    let tempMin = res.main.temp_min;
    let tempMax = res.main.temp_max;
    let location = res.name;
    let ctryCd = res.sys.country;
    let iconCode = res.weather[0].icon;
    temp.innerHTML = ` <H1 class="temp">${tempData}&degC</H1>`
    tempMin_max.innerHTML = ` <h4 class="temp-mx">Min ${tempMin}&degC | Max ${tempMax}&degC</h4>`
    loctn.innerHTML = `<h2>${location},${ctryCd}</h2>`
    icon.innerHTML =  `<img src="http://openweathermap.org/img/w/${iconCode}.png">`;

}).catch((Error)=>{
    console.log(Error);
})

submit.addEventListener("click", () => {
  // Retrieve user input
  let cityInput = city.value;
  let stateInput = state.value;
  
  // API call with user input
  let pro = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput},${stateInput},IN&units=metric&appid=143ef405b79782d13c9678a7e9000b8b`);

  pro.then((value)=>{
      return value.json();
  }).then((res)=>{
      let tempData = res.main.temp;
      let tempMin = res.main.temp_min;
      let tempMax = res.main.temp_max;
      let location = res.name;
      let ctryCd = res.sys.country;
      temp.innerHTML = ` <H1 class="temp">${tempData}&degC</H1>`
      tempMin_max.innerHTML = ` <h4 class="temp-mx">Min ${tempMin}&degC | Max ${tempMax}&degC</h4>`
      loctn.innerHTML = `<h2>${location},${ctryCd}</h2>`
  }).catch((Error)=>{
      console.log(Error);
  })
});


