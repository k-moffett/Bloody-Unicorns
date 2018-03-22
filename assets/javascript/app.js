$( document ).ready(function () {

    let corsProxy = "https://cors-anywhere.herokuapp.com/"
    let apiUrl = "https://accounts.spotify.com/api/token";
    let url = corsProxy + apiUrl;
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
        user_input = $("#search-form").val().trim()
        final_input = user_input
        console.log(final_input)
    $.ajax({
        type: 'GET',
        url: 'https://api.spotify.com/v1/search',
        headers: { 'Authorization': 'Bearer ' + current_token },
        data: {
            q: final_input,
            type: 'album',
        },
        dataType: 'json',
        limit: 1,
    }).then(function(search){
        
        console.log(search)
        console.log(search.albums)
        

for (i=0; i<5; i++) {

        let results = search.albums;
        let p = $('<p>').text("Album: " + results.items["0"].name);
        let h = $('<h3>').text(final_input);
        let showImage = $('<img>');
        let art_url = search.albums.items[i].images[2].url
        let art = ""
        let artist = results.items[i].artists["0"].name
        let album_name = results.items[i].name
        let new_row = `<tr> <td><img src="`+art_url+`"></td> <td>`+artist+`</td> <td>`+album_name+`</td> </tr>`
        $("#display-info").append(new_row)

    }
    
    }); 

    })

 
 })

