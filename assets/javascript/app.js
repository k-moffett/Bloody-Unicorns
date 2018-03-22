$( document ).ready(function () {

    var corsProxy = "https://cors-anywhere.herokuapp.com/"
    var apiUrl = "https://accounts.spotify.com/api/token";
    var url = corsProxy + apiUrl;
    let client_secret = window.btoa("8656bed3d70344f2a82c8a2af92c98ba:17d848d816c242508e6b36ab7be1125d")
    let current_token 
    let user_input
    
    $.ajax({
        type: 'POST',
        url: url,
        headers: { 'Authorization': 'Basic ' + client_secret },
        data: { grant_type: 'client_credentials' },
        dataType: 'json'
        }).then(function(request_auth) { 
        console.log('success', request_auth)
        current_token = request_auth.access_token
    });
    function success(request_auth){
    $("#test-display").text()
    }
    

    ///Call to search
    $("#submit").on("click", function(){
        event.preventDefault()
        user_input = $("#search-track").val().trim()
        final_input = user_input.split(" ").join("%20")
        console.log(final_input)
    $.ajax({
        type: 'GET',
        url: 'https://api.spotify.com/v1/search',
        headers: { 'Authorization': 'Bearer ' + current_token },
        data: {
            q: final_input,
            type: 'Artist'
        },
        dataType: 'json'
    }).then(function(search){
    console.log(search)
    });

    })




$("#test-submit").on("click", function(){
    event.preventDefault()
    
    let art = "Art"
    let artist = "Artist"
    let album_name = "Album Name"

    let new_row = `<tr> <td>`+art+`</td> <td>`+artist+`</td> <td>`+album_name+`</td> </tr>`
    $("#display-info").append(new_row)

})










})

// generate table using jquery that displays the searched tracks
// create the chat box
//