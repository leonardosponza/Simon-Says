var numeri = [];

while(numeri.length < 5){
    var random = randomnumber(1, 30)

    if(!array(numeri, random)){
        numeri.push(random);
    }
}

alert(numeri);

// countdown
var time = 30;
var countdown = setInterval(function(){
    textHtml.innerHTML = 'rimangono' + time;
    time--;
    if(!time){
        clearInterval(countdown);
        gioco();
    }
}, 1000);


 var giusto = [];
 var sbagliato = []
setTimeout(function(){
    for(i=0; i<numeri.length; i++){
        var risposta = prompt("Inserisci i numeri");

        //controllando che siano numeri
        while(isNaN(risposta)){
            alert("il dato non è un numero");
            risposta = prompt("Inserisci i numeri");
        }

        if(array(numeri, risposta)){
            giusto.push(risposta);
        }else if(!array(numeri, risposta)){
            sbagliato.push(risposta);
        
        }
    
    }
    document.getElementById("risultato").innerHTML += giusto.length + " numeri";
    }
    
     //visualizzo i numeri corretti e numeri sbagliati
    document.getElementById("giusto").innerHTML += giusto;
    document.getElementById("sbagliato").innerHTML += sbagliato;

    console.log(numeri);


    // funzione
    function randomnumber(min, max){
       return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function array(array, push){
       return array.includes(push);
    }
