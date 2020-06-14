const axios = require('axios');

const getClima = async(lat, lng) => {

    let encodedUrlLat = encodeURI(lat);
    let encodedUrlLng = encodeURI(lng);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ encodedUrlLat }&lon=${ encodedUrlLng }&units=metric&appid=df9bc4d37664b762ffbc3e8cebf5374f`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};