const axios = require('axios');


const getLugarLatLng = async(direccion) => { // async genera una promesa

    let encodedUrl = encodeURI(direccion); // Permite escapar la direccion para que sea un html valido

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyBIDIFeInYhEY4m8vlJ-HCUX03yGys1cNU`);


    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`); // Arroja un error

    }
    // console.log(JSON.stringify(resp.data, undefined, 2)); // data, valor nunca usado, espaciado
    // console.log(resp.status);
    let location = resp.date.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    };
}

module.exports = {
    getLugarLatLng
};