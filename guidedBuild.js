
function initGuidedBuild(){





}

let gBLevelBlockX = [3,1,2,3,4];
let gBLevelBlockY = [0,1,2,3,4];
let gBLevelBlockZ = [2,1,2,3,4];
let gBLevelBlockRT = [3,1,2,3,4];
let gBLevelBlockLED2x2 = [0,1,2,3,4];
let gBLevelBlockLED2x4 = [0,1,2,3,4];
//let gBLevelBlockFound = [];
let gBLevelBlockCount = 5;
let gBNoOfBlocksShown = 1;

//!!! don't forget that we are matching colors

function renderGuidedBuild(blocksX, blocksY, blocksZ, blocksRT, blocksLEDs2x2, blocksLEDs2x4, blocksUseAlpha, blocksOffset){

    let initialblocksCount = blocksCount + blocksOffset;
    let i;
    let igB;
    let noOfBlocksFound = 0;
   

   
    //
    for(igB = 0; igB < gBLevelBlockCount; igB++ ){
        for(i = blocksOffset; i < initialblocksCount; i++ ){
            if(blocksX[i] == gBLevelBlockX[igB] &&
                blocksY[i] == gBLevelBlockY[igB] &&
                blocksZ[i] == gBLevelBlockZ[igB] &&
                blocksRT[i] == gBLevelBlockRT[igB] &&
                blocksLEDs2x2[i] == gBLevelBlockLED2x2[igB] &&
                blocksLEDs2x4[i] == gBLevelBlockLED2x4[igB]
                ){
                    break;
            }
        }

        
        if(i == initialblocksCount && noOfBlocksFound < gBNoOfBlocksShown){
            
            
            
            blocksX[blocksCount + blocksOffset] = gBLevelBlockX[igB];
            blocksY[blocksCount+ blocksOffset] = gBLevelBlockY[igB];
            blocksZ[blocksCount + blocksOffset] = gBLevelBlockZ[igB];
            blocksRT[blocksCount+ blocksOffset] = gBLevelBlockRT[igB];
            blocksLEDs2x2[blocksCount + blocksOffset] = gBLevelBlockLED2x2[igB];
            blocksLEDs2x4[blocksCount + blocksOffset] = gBLevelBlockLED2x4[igB];
            blocksUseAlpha[blocksCount + blocksOffset] = 1;
            blocksCount++;
            noOfBlocksFound++;
            


        }
    }

    //}

    //blocksX[0] =2;


}