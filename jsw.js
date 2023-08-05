const apiKey = "c76def4ae1aea88cd8018bb01317c7f7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const element3 = document.querySelector('.weather-icon');
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    // const nowInLocalTime = Date.now()  + 1000 * ob.timezone;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
    document.querySelector(".su").innerHTML = data.weather[0].main;
    // const nowInLocalTime = Date.now()  + 1000 * ob.timezone;
    if(data.weather[0].main == "Clear"){
        const element = document.querySelector('.back');
        element.style.background = 'linear-gradient(to bottom, #fd8c84 , #ff9973 , #fdae69 ,#fcb364, white 75% )' ;
        // const element1 = document.querySelector('.sun1');
        // element1.style.backgroundColor = ' #f7fd5a';
        // const element2 = document.querySelector('.sun2');
        // element2.style.backgroundColor = ' #faf077';
        element3.src = "sunny.png";
        element3.style.position = 'absolute';
        element3.style.height = '200px';
        element3.style.width = '200px';
        element3.style.background = 'none';
        element3.style.top = '10%';
        element3.style.left = '60%';
        element3.style.opacity = '1';
        document.body.style.backgroundImage = "url('background.jpg')";

    }
    else if(data.weather[0].main == "Rain"){
        const element = document.querySelector('.back');
        element.style.background = 'linear-gradient(to bottom, #bee4fb , #bbe0fb , #b7dbfd ,#b4d8fc, white 75% )' ;
        element3.src = "rain.png";
        element3.style.position = 'absolute';
        element3.style.height = '200px';
        element3.style.width = '450px';
        element3.style.background = 'none';
        element3.style.top = '10%';
        element3.style.left = '10%';
        element3.style.opacity = '0.8';
        document.body.style.backgroundImage = "url('back31.jpeg')";
     
    }
    // else if(data.weather[0].main == "Atmosphere"){
    //     const element = document.querySelector('.back');
    //     element.style.background = 'linear-gradient(to bottom,  #bee4fb , #bbe0fb , #b7dbfd ,#b4d8fc, white 75% )' ;
    // }
    else if(data.weather[0].main == "Snow"){
        const element = document.querySelector('.back');
        // element.style.background = 'linear-gradient(to bottom,  #bee4fb , #bbe0fb , #b7dbfd ,#b4d8fc, white 75% )' ;
        element3.src = "snow.png";
        element3.style.position = 'absolute';
        element3.style.height = '200px';
        element3.style.width = '200px';
        element3.style.background = 'none';
        element3.style.top = '10%';
        element3.style.left = '55%';
        element3.style.opacity = '0.8';
        document.body.style.backgroundImage = "url('mistback.jpeg')";
    }
    else if(data.weather[0].main == "Clouds"){
        const element = document.querySelector('.back');
        element.style.background = 'linear-gradient(to bottom, #bee4fb , #bbe0fb , #b7dbfd ,#b4d8fc, white 75% )' ;
        // function changeMutipleCSS(e){
        // const myStyles =
        // position: absolute;
        // height: 120px;
        // width:250px;
        // background: none;
        // top: 10%;
        // left: 45%;
        // ;
        // element3.style.cssText = myStyles;
        // }
      element3.src = "clouds.png";
      element3.style.position = 'absolute';
      element3.style.height = '120px';
      element3.style.width = '250px';
      element3.style.background = 'none';
      element3.style.top = '10%';
      element3.style.left = '50%';
      element3.style.opacity = '0.8';
     document.body.style.backgroundImage = "url('back31.jpeg')";
    //   function addClass(){
    //     const element3 = document.querySelector('.weather-icon');
    //     element3.classList.add('new-weather-icon');
    //   }
    }
    else if(data.weather[0].main == "Drizzle"){
        const element = document.querySelector('.back');
        element.style.background = 'linear-gradient(to bottom,  #bee4fb , #bbe0fb , #b7dbfd ,#b4d8fc, white 75% )' ;
        element3.src = "dizzle.png";
        element3.style.position = 'absolute';
        element3.style.height = '200px';
        element3.style.width = '200px';
        element3.style.background = 'none';
        element3.style.top = '10%';
        element3.style.left = '55%';
        element3.style.opacity = '1';
        document.body.style.backgroundImage = "url('back31.jpeg')";
    }
    else if(data.weather[0].main == "Thunderstrome"){
        const element = document.querySelector('.back');
        element.style.background = 'linear-gradient(to bottom,   #bee4fb , #bbe0fb , #b7dbfd ,#b4d8fc, white 75% )' ;
        element3.src = "thunderstrome.png";
        element3.style.position = 'absolute';
        element3.style.height = '200px';
        element3.style.width = '200px';
        element3.style.background = 'none';
        element3.style.top = '10%';
        element3.style.left = '55%';
        element3.style.opacity = '1';
        document.body.style.backgroundImage = "url('back31.jpeg')";
    }
    else {
        const element = document.querySelector('.back');
        element.style.background = 'linear-gradient(to bottom,  #efd8a6 , #e1d1b7 , #c9c9d5 ,#bbc3e7, white 75% )' ;
        element3.src = "atmosphere.png";
        element3.style.position = 'absolute';
        element3.style.height = '250px';
        element3.style.width = '300px';
        element3.style.background = 'none';
        element3.style.top = '5%';
        element3.style.left = '40%';
        element3.style.opacity = '0.6';
        document.body.style.backgroundImage = "url('mistback.jpeg')";
    }
    
}

// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=c76def4ae1aea88cd8018bb01317c7f7
 
 searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
 })

 const d = new Date();
 document.getElementById("date").innerHTML = d.toDateString();
 const e = new Date();
 document.getElementById("time").innerHTML = e.getHours() + ":" + e.getMinutes();