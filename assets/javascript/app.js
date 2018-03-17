$( document ).ready(function () {


let apiURL = "https://accounts.spotify.com/authorize?client_id=fa3f02378e7049139d059733f8e59a19&response_type=code&redirect_uri=http://localhost:8888/callback"

$("#submit").on("click", function(){
event.preventDefault()
var corsProxy = "https://cors-anywhere.herokuapp.com/";
var apiUrl = "https://your-api-url/";
var url = corsProxy + apiUrl;

$.ajax({
    url: url,
    type: 'GET',
}).then(function(data) { 
    console.log(data);
});
});


//////
})
