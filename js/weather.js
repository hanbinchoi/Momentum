// weather js

const API_KEY = "0dbd18c87c76b1c2769e97177bf57131";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const temp = Math.round(data.main.temp *10 ) / 10;
        city.innerText = ` @ ${data.name}`;
        weather.innerText = `${temp}℃`;
    });
     // 실제로 URL에 갈 필요없이 URL을 요청하는 함수
     // then은 fetch를 하고 할 행동을 명시

}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

