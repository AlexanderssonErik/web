
let levelBlockX = [];
let levelBlockY = [];
let levelBlockZ = [];
let levelBlockRT = [];
let levelBlockLED2x2 = [];
let levelBlockLED2x4 = [];

let levelBlockCount = [];
let levelBlockNumberStages = [];

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