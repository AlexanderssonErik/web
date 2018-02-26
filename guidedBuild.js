
let guidedBuildWinning = 0;

let guidedBuildLastStage =[];

let guidedBuildLevel = 0;
let guidedBuildStage = 0;


function guidedBuildCreateGame(level){

    console.log("guidedBuildCreateGame " +level);
   // console.log("guidedBuildLevel: " +guidedBuildLevel);
   // console.log("guidedBuildStage: " +guidedBuildStage);
    
    guidedBuildLevel = level;
    guidedBuildStage = Math.floor(Math.random()*levelBlockNumberStages[guidedBuildLevel -1]) ;
    
    while(guidedBuildStage == guidedBuildLastStage[guidedBuildLevel-1]){
        guidedBuildStage = Math.floor(Math.random()*levelBlockNumberStages[guidedBuildLevel -1]) ;
    }

    guidedBuildLastStage[guidedBuildLevel -1] = guidedBuildStage;
    guidedBuildWinning = 0;


    //defineLevelPlanes();

    guidedBuildRender();


}


function initGuidedBuild(){


   //1


      //levelBlockX[0][0][0] = 3;
      //levelBlockX[0][0][0] = 3;
      //0-0
      levelBlockX[0][0][0] = 3;
      levelBlockY[0][0][0] = 0;
      levelBlockZ[0][0][0] = 3;
      levelBlockRT[0][0][0] = 2;
      levelBlockLED2x2[0][0][0] = 0;
      levelBlockLED2x4[0][0][0] = 0;

      levelBlockX[0][0][1] = 3;
      levelBlockY[0][0][1] = 1;
      levelBlockZ[0][0][1] = 3;
      levelBlockRT[0][0][1] = 2;
      levelBlockLED2x2[0][0][1] = 0;
      levelBlockLED2x4[0][0][1] = 0;

      levelBlockCount[0][0] = 2;

       //0-1
       levelBlockX[0][1][0] = 5;
       levelBlockY[0][1][0] = 0;
       levelBlockZ[0][1][0] = 3;
       levelBlockRT[0][1][0] = 4;
       levelBlockLED2x2[0][1][0] = 0;
       levelBlockLED2x4[0][1][0] = 0;
       levelBlockCount[0][1] = 1;

      //0-2
      levelBlockX[0][2][0] = 5;
      levelBlockY[0][2][0] = 0;
      levelBlockZ[0][2][0] = 6;
      levelBlockRT[0][2][0] = 4;
      levelBlockLED2x2[0][2][0] = 0;
      levelBlockLED2x4[0][2][0] = 0;
      levelBlockCount[0][2] = 1;


      levelBlockNumberStages[0] = 3;

      //------------
//2

            //1-0
            levelBlockX[1][0][0] = 3;
            levelBlockY[1][0][0] = 0;
            levelBlockZ[1][0][0] = 3;
            levelBlockRT[1][0][0] = 2;
            levelBlockLED2x2[1][0][0] = 0;
            levelBlockLED2x4[1][0][0] = 0;
      
            levelBlockX[1][0][1] = 3;
            levelBlockY[1][0][1] = 1;
            levelBlockZ[1][0][1] = 3;
            levelBlockRT[1][0][1] = 2;
            levelBlockLED2x2[1][0][1] = 0;
            levelBlockLED2x4[1][0][1] = 0;
      
            levelBlockCount[1][0] = 2;
      
             //1-1
             levelBlockX[1][1][0] = 5;
             levelBlockY[1][1][0] = 0;
             levelBlockZ[1][1][0] = 3;
             levelBlockRT[1][1][0] = 4;
             levelBlockLED2x2[1][1][0] = 0;
             levelBlockLED2x4[1][1][0] = 0;
             levelBlockCount[1][1] = 1;
      
            //1-2
            levelBlockX[1][2][0] = 5;
            levelBlockY[1][2][0] = 0;
            levelBlockZ[1][2][0] = 6;
            levelBlockRT[1][2][0] = 4;
            levelBlockLED2x2[1][2][0] = 0;
            levelBlockLED2x4[1][2][0] = 0;
            levelBlockCount[1][2] = 1;
      
      
            levelBlockNumberStages[1] = 3;

              //------------


//3

            //2-0
            levelBlockX[2][0][0] = 3;
            levelBlockY[2][0][0] = 0;
            levelBlockZ[2][0][0] = 3;
            levelBlockRT[2][0][0] = 2;
            levelBlockLED2x2[2][0][0] = 0;
            levelBlockLED2x4[2][0][0] = 0;
      
            levelBlockX[2][0][1] = 3;
            levelBlockY[2][0][1] = 1;
            levelBlockZ[2][0][1] = 3;
            levelBlockRT[2][0][1] = 2;
            levelBlockLED2x2[2][0][1] = 0;
            levelBlockLED2x4[2][0][1] = 0;

            levelBlockX[2][0][2] = 3;
            levelBlockY[2][0][2] = 0;
            levelBlockZ[2][0][2] = 6;
            levelBlockRT[2][0][2] = 4;
            levelBlockLED2x2[2][0][2] = 0;
            levelBlockLED2x4[2][0][2] = 0;
      
            levelBlockCount[2][0] = 3;
      
             //2-1
             levelBlockX[2][1][0] = 5;
             levelBlockY[2][1][0] = 0;
             levelBlockZ[2][1][0] = 3;
             levelBlockRT[2][1][0] = 4;
             levelBlockLED2x2[2][1][0] = 0;
             levelBlockLED2x4[2][1][0] = 0;
           

             levelBlockX[2][1][1] = 6;
             levelBlockY[2][1][1] = 0;
             levelBlockZ[2][1][1] = 6;
             levelBlockRT[2][1][1] = 4;
             levelBlockLED2x2[2][1][1] = 0;
             levelBlockLED2x4[2][1][1] = 0;

             levelBlockCount[2][1] = 2;
      
            //2-2
            levelBlockX[2][2][0] = 5;
            levelBlockY[2][2][0] = 0;
            levelBlockZ[2][2][0] = 6;
            levelBlockRT[2][2][0] = 4;
            levelBlockLED2x2[2][2][0] = 0;
            levelBlockLED2x4[2][2][0] = 0;

            levelBlockX[2][2][1] = 5;
            levelBlockY[2][2][1] = 0;
            levelBlockZ[2][2][1] = 9;
            levelBlockRT[2][2][1] = 4;
            levelBlockLED2x2[2][2][1] = 0;
            levelBlockLED2x4[2][2][1] = 0;

            levelBlockCount[2][2] = 2;
      
      
            levelBlockNumberStages[2] = 3;

              //------------




}


function guidedBuildRender(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLEDsx4, blocksUseAlpha, blocksOffset){
    let initialblocksCount = blocksCount + blocksOffset;
    let i;
    let iGB;
    let noOfBlocksFound = 0;
    let gBNoOfBlocksShown = 1;


    console.log("guidedBuildLevel: " +guidedBuildLevel);
    console.log("guidedBuildStage: " +guidedBuildStage);

    for(iGB = 0; iGB < levelBlockCount[guidedBuildLevel][guidedBuildStage]; iGB++ ){
        for(i = blocksOffset; i < initialblocksCount; i++ ){
            if(blocksX[i] == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                blocksY[i] == levelBlockY[guidedBuildLevel][guidedBuildStage][iGB] &&
                blocksZ[i] == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] &&
                blocksRT[i] == levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] &&
                blockLED2x2[i] == levelBlockLED2x2[guidedBuildLevel][guidedBuildStage][iGB] &&
                blockLED2x4[i] == levelBlockLED2x4[guidedBuildLevel][guidedBuildStage][iGB]
                ){
                    break;
            }
        }

        
        if(i == initialblocksCount && noOfBlocksFound < gBNoOfBlocksShown){
            
            
            
            blocksX[blocksCount + blocksOffset] = levelBlockX[guidedBuildLevel][guidedBuildStage][iGB];
            blocksY[blocksCount+ blocksOffset] = levelBlockY[guidedBuildLevel][guidedBuildStage][iGB];
            blocksZ[blocksCount + blocksOffset] = levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB];
            blocksRT[blocksCount+ blocksOffset] = levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB];
            blockLED2x2[blocksCount + blocksOffset] = levelBlockLED2x2[guidedBuildLevel][guidedBuildStage][iGB];
            blockLED2x4[blocksCount + blocksOffset] = levelBlockLED2x4[guidedBuildLevel][guidedBuildStage][iGB];
            blocksUseAlpha[blocksCount + blocksOffset] = 1;
            blocksCount++;
            noOfBlocksFound++;
            


        }
    }



}
/*
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
*/