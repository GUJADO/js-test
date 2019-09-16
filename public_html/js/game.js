var number;
var attemps = 0;
number =  Math.round( 1000 + Math.random() * (9999 - 1000));
function auessNumber(){
    ettemps++;
    var resukt = perseInt( prompt("Веди число ( -1 - закончить игру " ));
   
    if (result == number){
        alert("Вы угадали ! Число попыток : " + attempts );
        location.reload ( );
    }
    else if (result == 0 || isNaN(result )){
        alert( " вы не ввели число !!");
        guessNumber(); 
    }
    else if (resukt == -1){
        alert("Спасибо за игру ");
        
    }
    else {
        if ( result > number ){
            alert ("вышу число больше загаданного");
        }
        else
            alert("вышу число меньше  загаданного");
        guessNumber();
    }
}

