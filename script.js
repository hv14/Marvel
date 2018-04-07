$(document).ready(function() {
    console.log("ready");
    var PRIV_KEY = "Replace me with your PRIVATE key"; //TODO
    var PUBLIC_KEY = "Replace me with your PUBLIC key"; //TODO
    //var CryptoJS = require("crypto-js");
    var moduleName = 'crypto-js';

    $("#search").click(function() {                                                                                 
        var ts = new Date().getTime();
        var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
        console.log("clicked");
        var superhero = $("#input").val();
        jQuery.get( "https://gateway.marvel.com:443/v1/public/characters", {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash,
            name: superhero
            }).done(function( data ) {
                results = data.data.results[0];
                console.log(results);
            $("#name").text(results.name);
            imgPath = results.thumbnail.path + "/portrait_uncanny." + results.thumbnail.extension;
            $("#pic").attr("src",imgPath);
            $("#description").text(results.description);
        });
    });

    $("#avengers").click(function() {                                                                                 
        var ts = new Date().getTime();
        var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
        console.log("clicked");
        var superhero1 = "Captain America"; //TODO: Replace me with a character from this movie
        var superhero2 = "";
        jQuery.get( "https://gateway.marvel.com:443/v1/public/characters", {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash,
            name: superhero1
            }).done(function( data ) {
                results = data.data.results[0];
                console.log(results);
            $("#name1").text(results.name);
            imgPath = results.thumbnail.path + "/portrait_uncanny." + results.thumbnail.extension;
            $("#pic1").attr("src",imgPath);
            $("#descrip1").text(results.description);
            //TODO: fill in the descrip tag with the description of the superhero!
        });

        //TODO: add another get request like the one above for superhero1
    });

    $("#spiderman").click(function() {                                                                              
        var ts = new Date().getTime();
        var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
        console.log("clicked");
        var superhero1 = ""; //TODO: Replace me with a character from this movie
        var superhero2 = "";
        jQuery.get( "https://gateway.marvel.com:443/v1/public/characters", {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash,
            name: superhero1
            }).done(function( data ) {
                results = data.data.results[0];
                console.log(results);
            $("#name").text(results.name);
            imgPath = results.thumbnail.path + "/portrait_uncanny." + results.thumbnail.extension;
            $("#pic").attr("src",imgPath);
            //TODO: fill in the descrip tag with the description of the superhero!
        });
    });

    $("#thor").click(function() {                                                                               
        var ts = new Date().getTime();
        var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
        console.log("clicked");
        var superhero1 = ""; //TODO: Replace me with a character from this movie
        var superhero2 = "";
        jQuery.get( "https://gateway.marvel.com:443/v1/public/characters", {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash,
            name: superhero1
            }).done(function( data ) {
                results = data.data.results[0];
                console.log(results);
            $("#name").text(results.name);
            imgPath = results.thumbnail.path + "/portrait_uncanny." + results.thumbnail.extension;
            $("#pic").attr("src",imgPath);
            //TODO: fill in the descrip tag with the description of the superhero!
        });
    });

    $("#infinity").click(function() {                                                                               
        var ts = new Date().getTime();
        var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
        console.log("clicked");
        var superhero1 = ""; //TODO: Replace me with a character from this movie
        var superhero2 = "";
        jQuery.get( "https://gateway.marvel.com:443/v1/public/characters", {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash,
            name: superhero1
            }).done(function( data ) {
                results = data.data.results[0];
                console.log(results);
            $("#name").text(results.name);
            imgPath = results.thumbnail.path + "/portrait_uncanny." + results.thumbnail.extension;
            $("#pic").attr("src",imgPath);
            //TODO: fill in the descrip tag with the description of the superhero!
        });
    });


    
});
