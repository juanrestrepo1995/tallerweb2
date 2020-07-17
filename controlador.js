//1. necesito un objeto ajax para comucarme
let objetoAJAX= new XMLHttpRequest();

//2 url del servidor
let url="https://api.spotify.com/v1/artists/5lwmRuXgjX8xIwlnauTZIP/top-tracks?country=us";

//3.saber si necesito permiso  
let token= "Bearer BQDSWFzEMbvV3HvBkFdbUfteqdYB9KtqSgvjLGfmRZAhBBWJERORPeJ6LNvs_Qc0dxCMJ9-lq1hPomjptiQCKIyRV69qBjgdKi3XosVlEyaY7YOb2wsiW7OKUkuVPEshG4-2H9Wfe0QkavmXQvcLo4SPDXMpobU";
//4. abre la conexiòn
objetoAJAX.open('get',url,true);

//no veo esa 3 que pasa ome dejame sigo buscando
//5 pido permiso o enviar headers
objetoAJAX.setRequestHeader('Authorization',token);

//6 carga la informacion del servicio
objetoAJAX.onload=function() {
    let respuesta= JSON.parse(this.responseText);
    console.log(respuesta);
    console.log(respuesta.tracks);
    console.log(respuesta.tracks[0]);
    console.log(respuesta.tracks[0].preview_url);
    console.log(respuesta.tracks[0].album.images[0].url);
    console.log(respuesta.tracks[0].album.name);

    //card1
    let imagen1=document.getElementById("imagen1");
    imagen1.src=respuesta.tracks[0].album.images[0].url;

    let titulo1=document.getElementById("titulo1");
    titulo1.textContent=respuesta.tracks[0].album.name;

    let audio1=document.getElementById("audio1");
    audio1.src=respuesta.tracks[0].preview_url;
    ////////////////////////////////

    let imagen2=document.getElementById("imagen2");
    imagen2.src=respuesta.tracks[1].album.images[0].url;

    let titulo2=document.getElementById("titulo2");
    titulo2.textContent=respuesta.tracks[1].album.name;

    let audio2=document.getElementById("audio2");
    audio2.src=respuesta.tracks[1].preview_url;
 ////////////////////////////////


    let imagen3=document.getElementById("imagen3");
    imagen3.src=respuesta.tracks[2].album.images[0].url;

    let titulo3=document.getElementById("titulo3");
    titulo3.textContent=respuesta.tracks[2].album.name;

    let audio3=document.getElementById("audio3");
    audio3.src=respuesta.tracks[2].preview_url;

}

//7 cierre el sobre de la carta 
objetoAJAX.send();
