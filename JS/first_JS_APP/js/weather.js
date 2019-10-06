const weather = document.querySelector(".js-weather");
const API_KEY = "3f295d599459951cb92eebbd57e92ee7";
const COORDS = 'coords';

function getWeather(lat, lng) {
    // fetch에는 가져올 데이터가 들어가면됨 url주소가 들어감 
    // 성공시에 then함수를 실행함 
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    // 위도와 경도를 뽑아내서 저장함 
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // object 값 입력시 key와 value값이 같을 경우 이름 한개만 써줘도 저장됨.
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('Cant access geo location');
}

function askForCoords() {
    // 현재 사용자의 위치를 얻을 때 사용함 navigaotr.geolocation 앞에 인자값은 해당 함수로 정상적으로 위치정보를 받아왔을 때 실행하며
    // 두번째 함수는 실패했을 때 나옴
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        //getWeather
        const parsedCoords = JSON.parse(loadedCords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();