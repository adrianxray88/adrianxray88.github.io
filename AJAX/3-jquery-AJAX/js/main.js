
$.getJSON(
    "https://jsonplaceholder.typicode.com/users/1",
    function (data) {
        let lat = data.adress.geo.latt;
        let lng = data.adress.geo.lng;
        console.log(data.adress.geo.lat);
    }
);
