$( document ).ready(function () {


var corsProxy = "https://cors-anywhere.herokuapp.com/"
var apiUrl = "https://accounts.spotify.com/api/token";
var url = corsProxy + apiUrl;
let client_secret = window.btoa("fa3f02378e7049139d059733f8e59a19:163da59e8eb44cfeaabaeb984e5f9a43")
console.log(client_secret)


$.ajax({
    type: 'POST',
    url: url,
    headers: { 'Authorization': 'Basic ' + client_secret },
    data: { grant_type: 'client_credentials' },
    dataType: 'json'
    }).then(function(request_auth) { 
    console.log('success', request_auth)
$("#test-display").html(request_auth)

});

function success(request_auth){
$("#test-display").text()
}
function error(error){
    console.log('error', error)
}
////// 
})