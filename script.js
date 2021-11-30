var speedPedro = 0;
var speedJuca = 0;
var speedMaria = 0;

var quantVoltas = 0;

var lap_winner_pedro = 0;
var lap_winner_juca = 0;
var lap_winner_maria = 0;



function race() {
    document.getElementById("lap_winner").style.display = 'inline';
    quantVoltas = document.querySelector('input[name="track"]:checked').value;
    lap_winner_pedro = 0;
    lap_winner_juca = 0;
    lap_winner_maria = 0;
    console.log(quantVoltas);
    laps(quantVoltas);

     if(lap_winner_pedro >= lap_winner_maria) {
         if(lap_winner_pedro >= lap_winner_juca){
             if((lap_winner_pedro == lap_winner_maria)||(lap_winner_pedro == lap_winner_juca)){
                while((lap_winner_pedro == lap_winner_maria)&&(lap_winner_pedro == lap_winner_juca)){
                    laps(1);
                }

                if(lap_winner_pedro > lap_winner_maria){
                    if(lap_winner_pedro > lap_winner_juca){
                        document.getElementById("race_winner").innerHTML = 'Pedro';
                    }else{
                        document.getElementById("race_winner").innerHTML = 'Juca';
                    }
                }else{
                    if(lap_winner_juca > lap_winner_maria){
                        document.getElementById("race_winner").innerHTML = 'Juca';
                    }else{
                        document.getElementById("race_winner").innerHTML = 'Maria';
                    }
                }
                
             }else{
                document.getElementById("race_winner").innerHTML = 'Pedro';
             }
         }else{
            if(lap_winner_juca == lap_winner_maria){
                while(lap_winner_juca == lap_winner_maria){
                    laps(1);
                }

                if(lap_winner_juca > lap_winner_maria){
                    document.getElementById("race_winner").innerHTML = 'Juca';
                }else{
                    document.getElementById("race_winner").innerHTML = 'Maria';
                }


            }else{
                document.getElementById("race_winner").innerHTML = 'Juca';
            }
         }
     }else{
         if(lap_winner_maria >= lap_winner_juca){
            if(lap_winner_maria == lap_winner_juca){
                while(lap_winner_maria == lap_winner_juca){
                    laps(1);
                }

                if(lap_winner_maria > lap_winner_juca){
                    document.getElementById("race_winner").innerHTML = 'Maria';
                }else{
                    document.getElementById("race_winner").innerHTML = 'Juca';
                }

            }else{
                document.getElementById("race_winner").innerHTML = 'Maria';
            }
         }else{
            document.getElementById("race_winner").innerHTML = 'Juca';

         }
     }



    document.getElementById("lap_pedro").innerHTML = lap_winner_pedro;
    document.getElementById("lap_juca").innerHTML = lap_winner_juca;
    document.getElementById("lap_maria").innerHTML = lap_winner_maria;

  }


 function speedLap(min, max, der) {

    let speed = (Math.random() * (max - min) + min) * ((100 - der)/100);


    return speed;


  }

  function speedPerLap(){
    speedPedro = speedLap(150, 230, 3);
    speedJuca = speedLap(120, 260, 5);
    speedMaria = speedLap(180, 220, 1);

  }

function laps(numberLaps) {
    for (var i = 0; i < numberLaps; i++) {
        speedPerLap();
        if(speedPedro > speedMaria) {
            if(speedPedro > speedJuca){
                lap_winner_pedro = lap_winner_pedro + 1;
            }else{
                lap_winner_juca = lap_winner_juca + 1;
            }
        }else {
            if(speedMaria > speedJuca) {
                lap_winner_maria = lap_winner_maria + 1;
            }else{
                lap_winner_juca = lap_winner_juca + 1;
            }
        }

     }
}
