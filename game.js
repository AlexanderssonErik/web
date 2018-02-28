let levelBlockX = [];
let levelBlockY = [];
let levelBlockZ = [];
let levelBlockRT = [];
let levelBlockLED2x2 = [];
let levelBlockLED2x4 = [];

let levelBlockCount = [];
let levelBlockNumberStages = [];


let errorBlinkTimeOut;
let errorBlinkTimeOutRunning = false;

function gameInit(){

    for(let i = 0; i < 10; i++){
        levelBlockX[i] = [];
        levelBlockX[i] = [];
        levelBlockY[i] = [];
        levelBlockZ[i] = [];
        levelBlockRT[i] = [];
        levelBlockLED2x2[i] = [];
        levelBlockLED2x4[i] = [];
        levelBlockCount[i] = [];
        for(let a = 0; a < 100; a++){
            levelBlockX[i][a] = [];
            levelBlockX[i][a] = [];
            levelBlockY[i][a] = [];
            levelBlockZ[i][a] = [];
            levelBlockRT[i][a] = [];
            levelBlockLED2x2[i][a] = [];
            levelBlockLED2x4[i][a] = [];
            //levelBlockCount[i][a] = [];

        }
    }

}
function gameErrorBlink(i) {

    if(!errorBlinkTimeOutRunning){
        if(blockLED2x2[i]  == 0x09){
            blockLED2x2[i] = 0x00; 
            blockLED2x4[i] = 0x00;                        
        }else{
            blockLED2x2[i] = 0x09; 
            blockLED2x4[i] = 0x09; 
        }
        errorBlinkTimeOutRunning = true;
       
        errorBlinkTimeOut = setTimeout(errorBlinkTimeOutFunction, 1000);
        blocksRender = 1;
    }  
}


function errorBlinkTimeOutFunction() {
    

        clearTimeout(errorBlinkTimeOutFunction);
        errorBlinkTimeOutRunning = false;

    }



