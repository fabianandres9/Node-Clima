const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=a1032b0bdd00a5e4bd5c8efacf641a79`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}