let today = document.querySelector("#today");
let todayDate = document.querySelector("#today-date")
let cityLocation = document.querySelector("#location")
let todayDegree = document.querySelector("#today-degree")
let todayIcon = document.querySelector("#today-icon")
let todayDescription = document.querySelector("#today-description")
let humidity = document.querySelector("#humdity")
let wind = document.querySelector("#wind")
let compass = document.querySelector("#compass")
let search = document.querySelector("#search")

let nextDay = document.getElementsByClassName("next-day")
let nextDayIcon = document.getElementsByClassName("next-day-icon")
let maxDegree = document.getElementsByClassName("max-degree")
let minDegree = document.getElementsByClassName("min-degree")
let nextDayDescription = document.getElementsByClassName("next-day-description")
  
let monthName = ["jan","Feb","March","April","May","June","July","August","September","October","November","December"]
let days = ["Sunday","Monday","Tuseday","Wendesday","Thursday","Friday","Saterday"]
  
let apiResponse;
let responseData;
let currentCity = "cairo"

  async function getWeatherData (){
    apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7e09ef7b51de4deebff163056232702&q=${currentCity}&days=3`);
    responseData = await apiResponse.json()
    console.log(responseData)
    dispalyTodayWeather()
    displayNextDay()
  }

  getWeatherData ()


  function dispalyTodayWeather(){
    
    let date = new Date();
    today.innerHTML = days[date.getDay()]
    todayDate.innerHTML = `${date.getDate()} ${monthName[date.getMonth()]}`
    // console.log(responseData.location.name);
    cityLocation.innerHTML = responseData.location.name;
    todayDegree.innerHTML = responseData.current.temp_c;
    todayIcon.setAttribute("src",`https:${responseData.current.condition.icon}`)
    todayDescription.innerHTML = responseData.current.condition.text
    humidity.innerHTML = responseData.current.humidity
    wind.innerHTML = responseData.current.wind_kph
    compass.innerHTML = responseData.current.wind_dir


   }


  //  console.log(days[new Date(2023-03-03).getDay()]);

   function displayNextDay(){
    for(let i = 0; i < nextDay.length; i++){
      nextDay[i].innerHTML = days[new Date(responseData.forecast.forecastday[i+1].date).getDay()];
      nextDayIcon[i].setAttribute("src",`https:${responseData.forecast.forecastday[i+1].day.condition.icon}`)
      maxDegree[i].innerHTML = responseData.forecast.forecastday[i+1].day.maxtemp_c;
      minDegree[i].innerHTML = responseData.forecast.forecastday[i+1].day.mintemp_c;
      nextDayDescription[i].innerHTML = responseData.forecast.forecastday[i+1].day.condition.text
    }
    
   }
  
  
   search.addEventListener("keyup",function(){
    currentCity = search.value;
    console.log(currentCity);
    getWeatherData ()
   })
  
  
  



















  // var myHttp = new XMLHttpRequest();
  // var items = [];

  // myHttp.open("GET",`https://api.weatherapi.com/v1/forecast.json?key=7e09ef7b51de4deebff163056232702&q=lond&days=3`);
  
  // myHttp.send();
  
  // myHttp.addEventListener("readystatechange", function(){
  //   if (myHttp.readyState == 4 && myHttp.status == 200) {
  //     console.log(JSON.parse(myHttp.response));
  //     items = JSON.parse(myHttp.response).articles;
  //     console.log(items);
  //     displayData();
  //   }
  // });

