
let tile;
let tangramPitchY;
let tangramOffsetY;
let tangramMaterials = [];





let renderAllocatedCountSideA;
//let renderCountSideA;
let renderCountSideA;
let renderSideA = [];
let renderSideA2 = [];
let renderSideAX = [];
let renderSideAY = [];
let renderSideAZ = [];
let renderSideAColor = [];

let renderSideAZMax = [];
let renderSideAZMin = [];
let renderSideAZCount = [];


let renderAllocatedCountSideB;
let renderCountSideB;
let renderSideB = [];
let renderSideB2 = [];
let renderSideBX = [];
let renderSideBY = [];
let renderSideBZ = [];
let renderSideBColor = [];

let renderSideBXMax = [];
let renderSideBXMin = [];
let renderSideBXCount = [];


let renderAllocatedCountSideC;
let renderCountSideC;
let renderSideC = [];
let renderSideCX = [];
let renderSideCY = [];
let renderSideCZ = [];
let renderSideCColor = [];

let renderSideCYMax = [];
let renderSideCYMin = [];
let renderSideCYCount = [];


//--
let renderGameAllocatedCountSideA;
let renderGameCountSideA;
let renderGameSideA = [];
let renderGameSideA2 = [];
let renderGameSideAX = [];
let renderGameSideAY = [];
let renderGameSideAZ = [];
let renderGameSideAColor = [];

let renderGameSideAZMax = [];
let renderGameSideAZMin = [];
let renderGameSideAZCount = [];


let renderGameAllocatedCountSideB;
let renderGameCountSideB;
let renderGameSideB = [];
let renderGameSideB2 = [];
let renderGameSideBX = [];
let renderGameSideBY = [];
let renderGameSideBZ = [];
let renderGameSideBColor = [];

let renderGameSideBXMax = [];
let renderGameSideBXMin = [];
let renderGameSideBXCount = [];


let renderGameAllocatedCountSideC;
let renderGameCountSideC;
let renderGameSideC = [];
let renderGameSideCX = [];
let renderGameSideCY = [];
let renderGameSideCZ = [];
let renderGameSideCColor = [];

let renderGameSideCYMax = [];
let renderGameSideCYMin = [];
let renderGameSideCYCount = [];


//--


let blockPixelX = [];
let blockPixelY = [];
let blockPixelZ = [];
let blockPixelColor = [];
let blockPixelCount;
let blockPixel;
let blockPixelBottom;


let levelBlockX = [];
let levelBlockY = [];
let levelBlockZ = [];
let levelBlockRT = [];
let levelBlocksLEDs2x2 = [];
let levelBlocksLEDs2x4 = [];

let levelBlockCount;


//how to deal with holes
//deal when mapping pixels



function initTangram(scene, pitchY){
    //   https://doc.babylonjs.com/how_to/parametric_shapes#extruded-shapes
   
    //   https://www.babylonjs-playground.com/#165IV6#71
   
   
      // baseLED side -------------------------------------------------------
      blockPixelCount = 0;
      renderAllocatedCountSideA = 0;
      renderAllocatedCountSideB = 0;
      renderAllocatedCountSideC = 0;

      //renderCountSideB = 0;


      tangramPitchY = pitchY;
      tangramOffsetY = pitchY/2;
      
      blockPixel = BABYLON.MeshBuilder.CreatePlane("blockPixel", {width: 1, height: tangramPitchY}, scene);

      blockPixel.setEnabled(0); 
      
      blockPixelBottom = BABYLON.MeshBuilder.CreatePlane("blockPixel", {width: 1, height: 1}, scene);
      blockPixelBottom.setEnabled(0); 

      let emissiveColor = 0.8;
      let transparencyCavity = 0.4;
   
      tangramMaterials[0] = new BABYLON.StandardMaterial("NA", scene);
      tangramMaterials[1] = new BABYLON.StandardMaterial("GREEN", scene);
      tangramMaterials[2] = new BABYLON.StandardMaterial("BLUE", scene);
      tangramMaterials[3] = new BABYLON.StandardMaterial("CYAN", scene);

      

      tangramMaterials[4] = new BABYLON.StandardMaterial("NA TRANS", scene);
      tangramMaterials[5] = new BABYLON.StandardMaterial("GREEN TRANS", scene);
      tangramMaterials[6] = new BABYLON.StandardMaterial("BLUE TRANS", scene);
      tangramMaterials[7] = new BABYLON.StandardMaterial("CYAN TRANS", scene);

      tangramMaterials[8] = new BABYLON.StandardMaterial("NO COLOR SELECTED", scene);
      tangramMaterials[9] = new BABYLON.StandardMaterial("RED", scene);
          
          
      tangramMaterials[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterials[0].emissiveColor = new BABYLON.Color3(0.6, 0.6, 0.6);
      tangramMaterials[1].diffuseColor = new BABYLON.Color3(0, 1, 0);
      tangramMaterials[1].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
      tangramMaterials[2].diffuseColor = new BABYLON.Color3(0, 0, 1);
      tangramMaterials[2].emissiveColor = new BABYLON.Color3(0, 0, emissiveColor);
      tangramMaterials[3].diffuseColor = new BABYLON.Color3(0, 1, 1);
      tangramMaterials[3].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);


      tangramMaterials[4].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterials[4].emissiveColor = new BABYLON.Color3(0.6, 0.6, 0.6);
      tangramMaterials[4].alpha =  transparencyCavity;
      tangramMaterials[5].diffuseColor = new BABYLON.Color3(0, 1, 0);
      tangramMaterials[5].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
      tangramMaterials[5].alpha =  transparencyCavity;
      tangramMaterials[6].diffuseColor = new BABYLON.Color3(0, 0, 1);
      tangramMaterials[6].emissiveColor = new BABYLON.Color3(0, 0, emissiveColor);
      tangramMaterials[6].alpha =  transparencyCavity;
      tangramMaterials[7].diffuseColor = new BABYLON.Color3(0, 1, 1);
      tangramMaterials[7].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
      tangramMaterials[7].alpha =  transparencyCavity;

      tangramMaterials[8].diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
      tangramMaterials[8].emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
      tangramMaterials[8].alpha =  0;

      tangramMaterials[9].diffuseColor = new BABYLON.Color3(1, 0, 0);
      tangramMaterials[9].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);


    

      levelBlockX[0] = 3;
      levelBlockY[0] = 0;
      levelBlockZ[0] = 2;
      levelBlockRT[0] = 0;
      levelBlocksLEDs2x2[0] = 0x04;
      levelBlocksLEDs2x4[0] = 0x04;

      levelBlockX[1] = 3;
      levelBlockY[1] = 1;
      levelBlockZ[1] = 2;
      levelBlockRT[1] = 2;
      levelBlocksLEDs2x2[1] = 0x02;
      levelBlocksLEDs2x4[1] = 0x04;

      levelBlockX[2] = 5;
      levelBlockY[2] = 0;
      levelBlockZ[2] = 5;
      levelBlockRT[2] = 4;
      levelBlocksLEDs2x2[2] = 0x02;
      levelBlocksLEDs2x4[2] = 0x04;

     /* levelBlockX[0] = 3;
      levelBlockY[0] = 1;
      levelBlockZ[0] = 2;
      levelBlockRT[0] = 2;
      levelBlocksLEDs2x2[0] = 0x02;
      levelBlocksLEDs2x4[0] = 0x04;*/
      
    /*  levelBlockX[2] = 5;
      levelBlockY[2] = 2;
      levelBlockZ[2] = 1;
      levelBlockRT[2] = 4;
      levelBlocksLEDs2x2[2] = 0x02;
      levelBlocksLEDs2x4[2] = 0x04;
*/
      levelBlockCount = 3;


      //defineLevelBlockPixels();


        defineBlockPixels(levelBlockCount,  levelBlockX, levelBlockY, levelBlockZ, levelBlockRT, levelBlocksLEDs2x2, levelBlocksLEDs2x4, 0);

      defineLevelPlanes();

      tangramLevelRender();
      //tile.rotation.y = -Math.PI/2;

  
    }

/*function tangramBuildLevel(){


    
} */   

/*
levelBlockCount : C
levelBlockX : X
levelBlockY : Y
levelBlockZ : Z
levelBlocksLEDs2x2 : LEDs2x2
levelBlocksLEDs2x4 : LEDs2x4


*/
function defineBlockPixels(C, X, Y, Z, RT, LEDs2x2, LEDs2x4, O){
    
        blockPixelCount = 0;
        
            for(let i = 0; i < C; i++){
        
                blockPixelX[blockPixelCount] = X[i+O];   
                blockPixelY[blockPixelCount] = Y[i+O];                 
                blockPixelZ[blockPixelCount] = Z[i+O];    
                blockPixelColor[blockPixelCount] = (LEDs2x2[i+O] & 0x38) >> 4;                 
                blockPixelCount++;
        
                blockPixelY[blockPixelCount] = Y[i+O];
                blockPixelY[blockPixelCount+1] = Y[i+O];
                blockPixelY[blockPixelCount+2] = Y[i+O];
        
                
                blockPixelColor[blockPixelCount] = (LEDs2x2[i+O] & 0x38) >> 4; 
                blockPixelColor[blockPixelCount+1] = (LEDs2x2[i+O] & 0x07) >> 1;
                blockPixelColor[blockPixelCount+2] = (LEDs2x2[i+O] & 0x07) >> 1; 
        
        
        
                if((RT[i+O] & 0x03) == 0){            
                    
                    blockPixelX[blockPixelCount] = X[i+O];          
                    blockPixelZ[blockPixelCount] = Z[i+O]+1;                        
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = X[i+O]+1;            
                    blockPixelZ[blockPixelCount] = Z[i+O];            
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = X[i+O]+1;           
                    blockPixelZ[blockPixelCount] = Z[i+O]+1;                 
                    blockPixelCount++;
        
                }else if((RT[i+O] & 0x03) == 1){
                    
                    blockPixelX[blockPixelCount] = X[i+O]+1;            
                    blockPixelZ[blockPixelCount] = Z[i+O];                         
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = X[i+O];            
                    blockPixelZ[blockPixelCount] = Z[i+O]-1;            
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = X[i+O]+1;            
                    blockPixelZ[blockPixelCount] = Z[i+O]-1;     
                    blockPixelCount++;
        
                }else if((RT[i+O] & 0x03) == 2){
                    
                    blockPixelX[blockPixelCount] = X[i+O];            
                    blockPixelZ[blockPixelCount] = Z[i+O]-1;           
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = X[i+O]-1;            
                    blockPixelZ[blockPixelCount] = Z[i+O];
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = X[i+O]-1;            
                    blockPixelZ[blockPixelCount] = Z[i+O]-1;                   
                    blockPixelCount++;
        
                }else{
        
                    
                    blockPixelX[blockPixelCount] = X[i+O]-1;            
                    blockPixelZ[blockPixelCount] = Z[i+O];             
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = X[i+O];            
                    blockPixelZ[blockPixelCount] = Z[i+O]+1;
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = X[i+O]-1;            
                    blockPixelZ[blockPixelCount] = Z[i+O]+1;                    
                    blockPixelCount++;
        
                }
                
                        //2x4
                if((RT[i+O] & 0x0C) == 0){
        
                    
                     
                    blockPixelY[blockPixelCount] = Y[i+O];                
                    blockPixelY[blockPixelCount+1] = Y[i+O];
                    blockPixelY[blockPixelCount+2] = Y[i+O];
                    blockPixelY[blockPixelCount+3] = Y[i+O];
                            
                    blockPixelColor[blockPixelCount] = (LEDs2x4[i+O] & 0x38) >> 4; 
                    blockPixelColor[blockPixelCount+1] = (LEDs2x4[i+O] & 0x38) >> 4; 
                    blockPixelColor[blockPixelCount+2] = (LEDs2x4[i+O] & 0x07) >> 1;
                    blockPixelColor[blockPixelCount+3] = (LEDs2x4[i+O] & 0x07) >> 1; 
        
                    if((RT[i+O] & 0x03) == 0){       
                        
                        blockPixelX[blockPixelCount] = X[i+O]+2;          
                        blockPixelZ[blockPixelCount] = Z[i+O];                        
                        blockPixelCount++;
                                            
                        blockPixelX[blockPixelCount] = X[i+O]+2;          
                        blockPixelZ[blockPixelCount] = Z[i+O]+1;                        
                        blockPixelCount++;
                                
                        blockPixelX[blockPixelCount] = X[i+O]+3;            
                        blockPixelZ[blockPixelCount] = Z[i+O];            
                        blockPixelCount++;
                                
                        blockPixelX[blockPixelCount] = X[i+O]+3;           
                        blockPixelZ[blockPixelCount] = Z[i+O]+1;                 
                        blockPixelCount++;
                                
                    }else if((RT[i+O] & 0x03) == 1){
        
                        blockPixelX[blockPixelCount] = X[i+O];          
                        blockPixelZ[blockPixelCount] = Z[i+O]-2;                        
                        blockPixelCount++;
                        
                        blockPixelX[blockPixelCount] = X[i+O]+1;            
                        blockPixelZ[blockPixelCount] = Z[i+O]-2;                         
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O];            
                        blockPixelZ[blockPixelCount] = Z[i+O]-3;            
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]+1;            
                        blockPixelZ[blockPixelCount] = Z[i+O]-3;     
                        blockPixelCount++;
            
                    }else if((RT[i+O] & 0x03) == 2){
        
                        blockPixelX[blockPixelCount] = X[i+O]-2;          
                        blockPixelZ[blockPixelCount] = Z[i+O];                        
                        blockPixelCount++;
                        
                        blockPixelX[blockPixelCount] = X[i+O]-2;            
                        blockPixelZ[blockPixelCount] = Z[i+O]-1;           
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]-3;            
                        blockPixelZ[blockPixelCount] = Z[i+O];
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]-3;            
                        blockPixelZ[blockPixelCount] = Z[i+O]-1;                   
                        blockPixelCount++;
            
                    }else{
        
                        blockPixelX[blockPixelCount] = X[i+O];          
                        blockPixelZ[blockPixelCount] = Z[i+O]+2;                        
                        blockPixelCount++;    
                        
                        blockPixelX[blockPixelCount] = X[i+O]-1;            
                        blockPixelZ[blockPixelCount] = Z[i+O]+2;             
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O];            
                        blockPixelZ[blockPixelCount] = Z[i+O]+3;
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]-1;            
                        blockPixelZ[blockPixelCount] = Z[i+O]+3;                    
                        blockPixelCount++;
            
                    } 
                                        
                }
        
                
        
                
            }
    
    }
    /*
function defineLevelBlockPixels(){

    blockPixelCount = 0;
    
        for(let i = 0; i < levelBlockCount; i++){
    
            blockPixelX[blockPixelCount] = levelBlockX[i];   
            blockPixelY[blockPixelCount] = levelBlockY[i];                 
            blockPixelZ[blockPixelCount] = levelBlockZ[i];    
            blockPixelColor[blockPixelCount] = (levelBlocksLEDs2x2[i] & 0x38) >> 4;                 
            blockPixelCount++;
    
            blockPixelY[blockPixelCount] = levelBlockY[i];
            blockPixelY[blockPixelCount+1] = levelBlockY[i];
            blockPixelY[blockPixelCount+2] = levelBlockY[i];
    
            
            blockPixelColor[blockPixelCount] = (levelBlocksLEDs2x2[i] & 0x38) >> 4; 
            blockPixelColor[blockPixelCount+1] = (levelBlocksLEDs2x2[i] & 0x07) >> 1;
            blockPixelColor[blockPixelCount+2] = (levelBlocksLEDs2x2[i] & 0x07) >> 1; 
    
    
    
            if((levelBlockRT[i] & 0x03) == 0){            
                
                blockPixelX[blockPixelCount] = levelBlockX[i];          
                blockPixelZ[blockPixelCount] = levelBlockZ[i]+1;                        
                blockPixelCount++;
    
                blockPixelX[blockPixelCount] = levelBlockX[i]+1;            
                blockPixelZ[blockPixelCount] = levelBlockZ[i];            
                blockPixelCount++;
    
                blockPixelX[blockPixelCount] = levelBlockX[i]+1;           
                blockPixelZ[blockPixelCount] = levelBlockZ[i]+1;                 
                blockPixelCount++;
    
            }else if((levelBlockRT[i] & 0x03) == 1){
                
                blockPixelX[blockPixelCount] = levelBlockX[i]+1;            
                blockPixelZ[blockPixelCount] = levelBlockZ[i];                         
                blockPixelCount++;
    
                blockPixelX[blockPixelCount] = levelBlockX[i];            
                blockPixelZ[blockPixelCount] = levelBlockZ[i]-1;            
                blockPixelCount++;
    
                blockPixelX[blockPixelCount] = levelBlockX[i]+1;            
                blockPixelZ[blockPixelCount] = levelBlockZ[i]-1;     
                blockPixelCount++;
    
            }else if((levelBlockRT[i] & 0x03) == 2){
                
                blockPixelX[blockPixelCount] = levelBlockX[i];            
                blockPixelZ[blockPixelCount] = levelBlockZ[i]-1;           
                blockPixelCount++;
    
                blockPixelX[blockPixelCount] = levelBlockX[i]-1;            
                blockPixelZ[blockPixelCount] = levelBlockZ[i];
                blockPixelCount++;
    
                blockPixelX[blockPixelCount] = levelBlockX[i]-1;            
                blockPixelZ[blockPixelCount] = levelBlockZ[i]-1;                   
                blockPixelCount++;
    
            }else{
    
                
                blockPixelX[blockPixelCount] = levelBlockX[i]-1;            
                blockPixelZ[blockPixelCount] = levelBlockZ[i];             
                blockPixelCount++;
    
                blockPixelX[blockPixelCount] = levelBlockX[i];            
                blockPixelZ[blockPixelCount] = levelBlockZ[i]+1;
                blockPixelCount++;
    
                blockPixelX[blockPixelCount] = levelBlockX[i]-1;            
                blockPixelZ[blockPixelCount] = levelBlockZ[i]+1;                    
                blockPixelCount++;
    
            }
            
                    //2x4
            if((levelBlockRT[i] & 0x0C) == 0){
    
                
                 
                blockPixelY[blockPixelCount] = levelBlockY[i];                
                blockPixelY[blockPixelCount+1] = levelBlockY[i];
                blockPixelY[blockPixelCount+2] = levelBlockY[i];
                blockPixelY[blockPixelCount+3] = levelBlockY[i];
                        
                blockPixelColor[blockPixelCount] = (levelBlocksLEDs2x4[i] & 0x38) >> 4; 
                blockPixelColor[blockPixelCount+1] = (levelBlocksLEDs2x4[i] & 0x38) >> 4; 
                blockPixelColor[blockPixelCount+2] = (levelBlocksLEDs2x4[i] & 0x07) >> 1;
                blockPixelColor[blockPixelCount+3] = (levelBlocksLEDs2x4[i] & 0x07) >> 1; 
    
                if((levelBlockRT[i] & 0x03) == 0){       
                    
                    blockPixelX[blockPixelCount] = levelBlockX[i]+2;          
                    blockPixelZ[blockPixelCount] = levelBlockZ[i];                        
                    blockPixelCount++;
                                        
                    blockPixelX[blockPixelCount] = levelBlockX[i]+2;          
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]+1;                        
                    blockPixelCount++;
                            
                    blockPixelX[blockPixelCount] = levelBlockX[i]+3;            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i];            
                    blockPixelCount++;
                            
                    blockPixelX[blockPixelCount] = levelBlockX[i]+3;           
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]+1;                 
                    blockPixelCount++;
                            
                }else if((levelBlockRT[i] & 0x03) == 1){
    
                    blockPixelX[blockPixelCount] = levelBlockX[i];          
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]-2;                        
                    blockPixelCount++;
                    
                    blockPixelX[blockPixelCount] = levelBlockX[i]+1;            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]-2;                         
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = levelBlockX[i];            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]-3;            
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = levelBlockX[i]+1;            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]-3;     
                    blockPixelCount++;
        
                }else if((levelBlockRT[i] & 0x03) == 2){
    
                    blockPixelX[blockPixelCount] = levelBlockX[i]-2;          
                    blockPixelZ[blockPixelCount] = levelBlockZ[i];                        
                    blockPixelCount++;
                    
                    blockPixelX[blockPixelCount] = levelBlockX[i]-2;            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]-1;           
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = levelBlockX[i]-3;            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i];
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = levelBlockX[i]-3;            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]-1;                   
                    blockPixelCount++;
        
                }else{
    
                    blockPixelX[blockPixelCount] = levelBlockX[i];          
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]+2;                        
                    blockPixelCount++;    
                    
                    blockPixelX[blockPixelCount] = levelBlockX[i]-1;            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]+2;             
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = levelBlockX[i];            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]+3;
                    blockPixelCount++;
        
                    blockPixelX[blockPixelCount] = levelBlockX[i]-1;            
                    blockPixelZ[blockPixelCount] = levelBlockZ[i]+3;                    
                    blockPixelCount++;
        
                } 
                                    
            }
    
            
    
            
        }

}
*/
function defineGamePlanes(){
    
        renderGameCountSideA = 0;
        renderGameCountSideB = 0;
        renderGameCountSideC = 0;
        let x;
    
    
        for(let i = 0; i < blockPixelCount; i++){        
    
            for(x = 0; x < renderGameCountSideA; x++){
                if(blockPixelX[i] == renderGameSideAX[x]){
                    if(blockPixelY[i] == renderGameSideAY[x]){
                        //need to update accordingly
                        if(blockPixelColor[i] != renderGameSideAColor[x] && renderGameSideAColor[x] == 0){
    
                            renderGameSideAColor[x] = blockPixelColor[i];
    
                        }else if(blockPixelColor[i] != renderGameSideAColor[x] && blockPixelColor[i] != 0){
                            renderGameSideAColor[x] = 3;
                        }
                        
                        if(blockPixelZ[i] > renderGameSideAZMax[x] ){
                           
                           renderGameSideAZMax[x] = blockPixelZ[i];
                           
                            
                        }else{
                            renderGameSideAZMin[x] = blockPixelZ[i];
                            
                        }
    
                        renderGameSideAZCount[x]++; 
                        break;
                    }                
                }
            }
            
            if(x == renderGameCountSideA){
                renderGameSideAX[renderGameCountSideA] = blockPixelX[i];
                renderGameSideAY[renderGameCountSideA] = blockPixelY[i];
                renderGameSideAZ[renderGameCountSideA] = 9.5;
                renderGameSideAColor[renderGameCountSideA] = blockPixelColor[i];
    
                renderGameSideAZMax[renderGameCountSideA] = blockPixelZ[i];
                renderGameSideAZMin[renderGameCountSideA] = blockPixelZ[i];
                renderGameSideAZCount[renderGameCountSideA] = 0;
                renderGameCountSideA++;
    
    
            }
    
            //B
            for(x = 0; x < renderGameCountSideB; x++){
                if(blockPixelZ[i] == renderGameSideBZ[x]){
                    if(blockPixelY[i] == renderGameSideBY[x]){
                        //need to update accordingly
                        if(blockPixelColor[i] != renderGameSideBColor[x] && renderGameSideBColor[x] == 0){
    
                            renderGameSideBColor[x] = blockPixelColor[i];
    
                        }else if(blockPixelColor[i] != renderGameSideBColor[x] && blockPixelColor[i] != 0){
                            renderGameSideBColor[x] = 3;
                        }
                        
                        if(blockPixelX[i] > renderGameSideBXMax[x] ){
                           
                           renderGameSideBXMax[x] = blockPixelX[i];
                           
                            
                        }else{
                            renderGameSideBXMin[x] = blockPixelX[i];
                            
                        }
    
                        renderGameSideBXCount[x]++; 
                        break;
                    }                
                }
            }
            
            if(x == renderGameCountSideB){
                renderGameSideBX[renderGameCountSideB] = -0.5;
                renderGameSideBY[renderGameCountSideB] = blockPixelY[i];
                renderGameSideBZ[renderGameCountSideB] = blockPixelZ[i];
                renderGameSideBColor[renderGameCountSideB] = blockPixelColor[i];
    
                renderGameSideBXMax[renderGameCountSideB] = blockPixelX[i];
                renderGameSideBXMin[renderGameCountSideB] = blockPixelX[i];
                renderGameSideBXCount[renderGameCountSideB] = 0;
                renderGameCountSideB++;
    
    
            }
    
            //C
    
            for(x = 0; x < renderGameCountSideC; x++){
                if(blockPixelX[i] == renderGameSideCX[x]){
                    if(blockPixelZ[i] == renderGameSideCZ[x]){
                        //need to update accordingly
                        if(blockPixelColor[i] != renderGameSideCColor[x] && renderGameSideCColor[x] == 0){
    
                            renderGameSideCColor[x] = blockPixelColor[i];
    
                        }else if(blockPixelColor[i] != renderGameSideCColor[x] && blockPixelColor[i] != 0){
                            renderGameSideCColor[x] = 3;
                        }
                        
                        if(blockPixelY[i] > renderGameSideCYMax[x] ){
                           
                           renderGameSideCYMax[x] = blockPixelY[i];
                           
                            
                        }else{
                            renderGameSideCYMin[x] = blockPixelY[i];
                            
                        }
    
                        renderGameSideCYCount[x]++; 
                        break;
                    }                
                }
            }
            
            if(x == renderGameCountSideC){
                renderGameSideCX[renderGameCountSideC] = blockPixelX[i];
                renderGameSideCY[renderGameCountSideC] = 0;
                renderGameSideCZ[renderGameCountSideC] = blockPixelZ[i];
                renderGameSideCColor[renderGameCountSideC] = blockPixelColor[i];
    
                renderGameSideCYMax[renderGameCountSideC] = blockPixelY[i];
                renderGameSideCYMin[renderGameCountSideC] = blockPixelY[i];
                renderGameSideCYCount[renderGameCountSideC] = 0;
                renderGameCountSideC++;
    
    
            }
    
    
    
            
        }
    
        for(let i = 0; i < renderGameCountSideA; i++){
            
                    if(renderGameSideAZMax[i] - renderGameSideAZMin[i] > renderGameSideAZCount[i]){
                        renderGameSideAColor[i] +=4;
                        
                    }
        }
    
        for(let i = 0; i < renderGameCountSideB; i++){
            
                    if(renderGameSideBXMax[i] - renderGameSideBXMin[i] > renderGameSideBXCount[i]){
                        renderGameSideBColor[i] +=4;
                        
                    }
                }
    
        for(let i = 0; i < renderGameCountSideC; i++){
                    
            if(renderGameSideCYMax[i] - renderGameSideCYMin[i] > renderGameSideCYCount[i]){
                renderGameSideCColor[i] +=4;
                                
            }
        }

    }

function defineLevelPlanes(){

    renderCountSideA = 0;
    renderCountSideB = 0;
    renderCountSideC = 0;
    let x;


    for(let i = 0; i < blockPixelCount; i++){        

        for(x = 0; x < renderCountSideA; x++){
            if(blockPixelX[i] == renderSideAX[x]){
                if(blockPixelY[i] == renderSideAY[x]){
                    //need to update accordingly
                    if(blockPixelColor[i] != renderSideAColor[x] && renderSideAColor[x] == 0){

                        renderSideAColor[x] = blockPixelColor[i];

                    }else if(blockPixelColor[i] != renderSideAColor[x] && blockPixelColor[i] != 0){
                        renderSideAColor[x] = 3;
                    }
                    
                    if(blockPixelZ[i] > renderSideAZMax[x] ){
                       
                       renderSideAZMax[x] = blockPixelZ[i];
                       
                        
                    }else{
                        renderSideAZMin[x] = blockPixelZ[i];
                        
                    }

                    renderSideAZCount[x]++; 
                    break;
                }                
            }
        }
        
        if(x == renderCountSideA){
            renderSideAX[renderCountSideA] = blockPixelX[i];
            renderSideAY[renderCountSideA] = blockPixelY[i];
            renderSideAZ[renderCountSideA] = 9.5;
            renderSideAColor[renderCountSideA] = blockPixelColor[i];

            renderSideAZMax[renderCountSideA] = blockPixelZ[i];
            renderSideAZMin[renderCountSideA] = blockPixelZ[i];
            renderSideAZCount[renderCountSideA] = 0;
            renderCountSideA++;


        }

        //B
        for(x = 0; x < renderCountSideB; x++){
            if(blockPixelZ[i] == renderSideBZ[x]){
                if(blockPixelY[i] == renderSideBY[x]){
                    //need to update accordingly
                    if(blockPixelColor[i] != renderSideBColor[x] && renderSideBColor[x] == 0){

                        renderSideBColor[x] = blockPixelColor[i];

                    }else if(blockPixelColor[i] != renderSideBColor[x] && blockPixelColor[i] != 0){
                        renderSideBColor[x] = 3;
                    }
                    
                    if(blockPixelX[i] > renderSideBXMax[x] ){
                       
                       renderSideBXMax[x] = blockPixelX[i];
                       
                        
                    }else{
                        renderSideBXMin[x] = blockPixelX[i];
                        
                    }

                    renderSideBXCount[x]++; 
                    break;
                }                
            }
        }
        
        if(x == renderCountSideB){
            renderSideBX[renderCountSideB] = -0.5;
            renderSideBY[renderCountSideB] = blockPixelY[i];
            renderSideBZ[renderCountSideB] = blockPixelZ[i];
            renderSideBColor[renderCountSideB] = blockPixelColor[i];

            renderSideBXMax[renderCountSideB] = blockPixelX[i];
            renderSideBXMin[renderCountSideB] = blockPixelX[i];
            renderSideBXCount[renderCountSideB] = 0;
            renderCountSideB++;


        }

        //C

        for(x = 0; x < renderCountSideC; x++){
            if(blockPixelX[i] == renderSideCX[x]){
                if(blockPixelZ[i] == renderSideCZ[x]){
                    //need to update accordingly
                    if(blockPixelColor[i] != renderSideCColor[x] && renderSideCColor[x] == 0){

                        renderSideCColor[x] = blockPixelColor[i];

                    }else if(blockPixelColor[i] != renderSideCColor[x] && blockPixelColor[i] != 0){
                        renderSideCColor[x] = 3;
                    }
                    
                    if(blockPixelY[i] > renderSideCYMax[x] ){
                       
                       renderSideCYMax[x] = blockPixelY[i];
                       
                        
                    }else{
                        renderSideCYMin[x] = blockPixelY[i];
                        
                    }

                    renderSideCYCount[x]++; 
                    break;
                }                
            }
        }
        
        if(x == renderCountSideC){
            renderSideCX[renderCountSideC] = blockPixelX[i];
            renderSideCY[renderCountSideC] = 0;
            renderSideCZ[renderCountSideC] = blockPixelZ[i];
            renderSideCColor[renderCountSideC] = blockPixelColor[i];

            renderSideCYMax[renderCountSideC] = blockPixelY[i];
            renderSideCYMin[renderCountSideC] = blockPixelY[i];
            renderSideCYCount[renderCountSideC] = 0;
            renderCountSideC++;


        }



        
    }


    for(let i = 0; i < renderCountSideA; i++){
        
                if(renderSideAZMax[i] - renderSideAZMin[i] > renderSideAZCount[i]){
                    renderSideAColor[i] +=4;
                    
                }
    }

    for(let i = 0; i < renderCountSideB; i++){
        
                if(renderSideBXMax[i] - renderSideBXMin[i] > renderSideBXCount[i]){
                    renderSideBColor[i] +=4;
                    
                }
            }

    for(let i = 0; i < renderCountSideC; i++){
                
        if(renderSideCYMax[i] - renderSideCYMin[i] > renderSideCYCount[i]){
            renderSideCColor[i] +=4;
                            
        }
    }

}


function tangramLevelRender(){


    //Define Block Pixels



    //!!blockPixelCount = 12;


    //Define Plane
   


    //Render Plane
    for(let i = 0; i < renderCountSideA; i++){

       /* if(renderSideAZMax[i] - renderSideAZMin[i] > renderSideAZCount[i]){
            renderSideAColor[i] +=4;
            
        }*/

        if(i >=  renderAllocatedCountSideA){
          
            renderSideA[i] = blockPixel.clone("blockPixelA" +i);
            renderSideA2[i] = blockPixel.clone("blockPixelA2" +i);
        }
       
        renderSideA[i].isPickable = false;
        renderSideA[i].position.x = renderSideAX[i];
        renderSideA[i].position.y = tangramOffsetY + renderSideAY[i] * tangramPitchY;
        renderSideA[i].position.z = renderSideAZ[i];
        renderSideA[i].material = tangramMaterials[renderSideAColor[i]];

        renderSideA2[i].isPickable = false;
        renderSideA2[i].position.x = renderSideAX[i];
        renderSideA2[i].position.y = tangramOffsetY + renderSideAY[i] * tangramPitchY;
        renderSideA2[i].position.z = renderSideAZ[i] -10;
        renderSideA2[i].material = tangramMaterials[renderSideAColor[i]];
        renderSideA2[i].rotation.y = Math.PI;
        
      //  renderSideA[i].position.x = renderSideAX[i];
       // renderSideA[i].position.x = renderSideAX[i];



    }

    if(renderCountSideA > renderAllocatedCountSideA){
        renderAllocatedCountSideA = renderCountSideA;
    }

    for(let i = renderCountSideA; i < renderAllocatedCountSideA; i++){
        renderSideA[i].setEnabled(0);      
        renderSideA2[i].setEnabled(0);       
    }


//B
    for(let i = 0; i < renderCountSideB; i++){
        
             /*   if(renderSideBXMax[i] - renderSideBXMin[i] > renderSideBXCount[i]){
                    renderSideBColor[i] +=4;
                    
                }*/
        
                if(i >=  renderAllocatedCountSideB){
                  
                    renderSideB[i] = blockPixel.clone("blockPixelB" +i);
                    renderSideB2[i] = blockPixel.clone("blockPixelB2" +i);
                }
               
                renderSideB[i].isPickable = false;
                renderSideB[i].position.x = renderSideBX[i];
                renderSideB[i].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                renderSideB[i].position.z = renderSideBZ[i];
                renderSideB[i].material = tangramMaterials[renderSideBColor[i]];
                renderSideB[i].rotation.y = -Math.PI/2;

                renderSideB2[i].isPickable = false;
                renderSideB2[i].position.x = renderSideBX[i] +10;
                renderSideB2[i].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                renderSideB2[i].position.z = renderSideBZ[i];
                renderSideB2[i].material = tangramMaterials[renderSideBColor[i]];
                renderSideB2[i].rotation.y = Math.PI/2;

                /*renderSideB2[i].isPickable = false;
                renderSideB2[i].position.x = renderSideBX[i] + 10;
                renderSideB2[i].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                renderSideB2[i].position.z = renderSideBZ[i];                
                renderSideB2[i].rotation.y = -Math.PI/2;
*/
              //  renderSideA[i].position.x = renderSideAX[i];
               // renderSideA[i].position.x = renderSideAX[i];
        
        
        
            }
        
            if(renderCountSideB > renderAllocatedCountSideB){
                renderAllocatedCountSideB = renderCountSideB;
            }
        
            for(let i = renderCountSideB; i < renderAllocatedCountSideB; i++){
                renderSideB[i].setEnabled(0);     
                renderSideB2[i].setEnabled(0);     
            }

    //C

    for(let i = 0; i < renderCountSideC; i++){
        
               /* if(renderSideCYMax[i] - renderSideCYMin[i] > renderSideCYCount[i]){
                    renderSideCColor[i] +=4;
                    
                }*/
        
                if(i >=  renderAllocatedCountSideC){
                  
                    renderSideC[i] = blockPixelBottom.clone("blockPixelC" +i);
                }
               
                renderSideC[i].isPickable = false;
                renderSideC[i].position.x = renderSideCX[i];
                renderSideC[i].position.y = renderSideCY[i] + 0.01;
                renderSideC[i].position.z = renderSideCZ[i];
                renderSideC[i].material = tangramMaterials[renderSideCColor[i]];
                renderSideC[i].rotation.x = Math.PI/2;
                //renderSideC[i].rotation.x = Math.PI/2;
                
              //  renderSideA[i].position.x = renderSideAX[i];
               // renderSideA[i].position.x = renderSideAX[i];
        
        
        
            }
        
            if(renderCountSideC > renderAllocatedCountSideC){
                renderAllocatedCountSideC = renderCountSideC;
            }
        
            for(let i = renderCountSideC; i < renderAllocatedCountSideC; i++){
                renderSideC[i].setEnabled(0);         
            }


}


function tangramRender(){
    
    
        //Define Block Pixels
    
    
    
        //!!blockPixelCount = 12;
    
    
        //Define Plane

        defineBlockPixels(blocksCount, blocksX, blocksY, blocksZ, blocksRT, blocksLEDs2x2, blocksLEDs2x4, blocksOffset);
       
    
        defineGamePlanes();
    
        
        //Render Plane
        let renderCountA = 0;
        let renderCountB = 0;
        let renderCountC = 0;
        let l;
       
        /*console.log("renderLevelCountSideA: " + renderLevelCountSideA);
        console.log("renderGameCountSideA: " + renderGameCountSideA);

        for(let t = 0; t < renderLevelCountSideA; t++){
            console.log("renderSideAX[t]: " + renderSideAX[t]);
           // console.log("renderSideAY[t]: " + renderSideAY[t]);
           // console.log("renderSideAZ[t]: " + renderSideAZ[t]);
            console.log("renderSideAColor[t]: " + renderSideAColor[t]);
            

        }

        for(let t = 0; t < renderGameCountSideA; t++){
            console.log("renderGameSideAX[t]: " + renderGameSideAX[t]);
          //  console.log("renderGameSideAY[t]: " + renderGameSideAY[t]);
           // console.log("renderGameSideAZ[t]: " + renderGameSideAZ[t]);
            console.log("renderGameSideAColor[t]: " + renderGameSideAColor[t]);
            

        }*/

        for(let i = 0; i < renderCountSideA; i++){
            for(l = 0; l < renderGameCountSideA; l++){
                if(renderSideAX[i] == renderGameSideAX[l] &&
                    renderSideAY[i] == renderGameSideAY[l] &&
                    renderSideAZ[i] == renderGameSideAZ[l] &&
                    renderSideAColor[i] == renderGameSideAColor[l]                                
                ){
                  //  console.log("break i: " + i);
                    break;
                }

           }

            if(l == renderGameCountSideA){
                

                if(renderCountA >=  renderAllocatedCountSideA){
                 //   console.log("allocate" + i);
                      renderSideA[renderCountA] = blockPixel.clone("blockPixelA" +i);
                      renderSideA2[renderCountA] = blockPixel.clone("blockPixelA2" +i);
                }

                renderSideA[renderCountA].isPickable = false;
                renderSideA[renderCountA].position.x = renderSideAX[i];
                renderSideA[renderCountA].position.y = tangramOffsetY + renderSideAY[i] * tangramPitchY;
                renderSideA[renderCountA].position.z = renderSideAZ[i];
                renderSideA[renderCountA].material = tangramMaterials[renderSideAColor[i]];
                renderSideA[renderCountA].setEnabled(1);

                renderSideA2[renderCountA].isPickable = false;
                renderSideA2[renderCountA].position.x = renderSideAX[i];
                renderSideA2[renderCountA].position.y = tangramOffsetY + renderSideAY[i] * tangramPitchY;
                renderSideA2[renderCountA].position.z = renderSideAZ[i] -10;
                renderSideA2[renderCountA].material = tangramMaterials[renderSideAColor[i]];
                renderSideA2[renderCountA].rotation.y = Math.PI;
                renderSideA2[renderCountA].setEnabled(1);

                renderCountA++;

            }


    
            for(let i = 0; i < renderGameCountSideA; i++){
                for(l = 0; l <  renderCountSideA; l++){
                    if(renderSideAX[l] == renderGameSideAX[i] &&
                        renderSideAY[l] == renderGameSideAY[i] &&
                        renderSideAZ[l] == renderGameSideAZ[i] 
                        //renderSideAColor[l] == renderGameSideAColor[i]                                
                    ){
                    //    console.log("break i: " + i);
                        break;
                    }
    
               }
    
                if(l == renderCountSideA){
                    
    
                    if(renderCountA >=  renderAllocatedCountSideA){
                      //  console.log("allocate" + i);
                          renderSideA[renderCountA] = blockPixel.clone("blockPixelA" +i);
                          renderSideA2[renderCountA] = blockPixel.clone("blockPixelA2" +i);
                    }
    
                    renderSideA[renderCountA].isPickable = false;
                    renderSideA[renderCountA].position.x = renderGameSideAX[i];
                    renderSideA[renderCountA].position.y = tangramOffsetY + renderGameSideAY[i] * tangramPitchY;
                    renderSideA[renderCountA].position.z = renderGameSideAZ[i];
                    renderSideA[renderCountA].material = tangramMaterials[9];
                    renderSideA[renderCountA].setEnabled(1);
    
                    renderSideA2[renderCountA].isPickable = false;
                    renderSideA2[renderCountA].position.x = renderGameSideAX[i];
                    renderSideA2[renderCountA].position.y = tangramOffsetY + renderGameSideAY[i] * tangramPitchY;
                    renderSideA2[renderCountA].position.z = renderGameSideAZ[i] -10;
                    renderSideA2[renderCountA].material = tangramMaterials[9];
                    renderSideA2[renderCountA].rotation.y = Math.PI;
                    renderSideA2[renderCountA].setEnabled(1);
    
                    renderCountA++;
    
                }
        
        
            }
    
    
        }
    
        if(renderCountA > renderAllocatedCountSideA){
            renderAllocatedCountSideA = renderCountA;
        }
    
        for(let i = renderCountA; i < renderAllocatedCountSideA; i++){
            renderSideA[i].setEnabled(0);      
            renderSideA2[i].setEnabled(0);     
          //  console.log("destroy " + i);  
        }


        //B------------------------------


        for(let i = 0; i < renderCountSideB; i++){
            for(l = 0; l < renderGameCountSideB; l++){
                if(renderSideBX[i] == renderGameSideBX[l] &&
                    renderSideBY[i] == renderGameSideBY[l] &&
                    renderSideBZ[i] == renderGameSideBZ[l] &&
                    renderSideBColor[i] == renderGameSideBColor[l]                                
                ){
                 //   console.log("break i: " + i);
                    break;
                }

           }

            if(l == renderGameCountSideB){
                

                if(renderCountB >=  renderAllocatedCountSideB){
                  //  console.log("allocate" + i);
                      renderSideB[renderCountB] = blockPixel.clone("blockPixelB" +i);
                      renderSideB2[renderCountB] = blockPixel.clone("blockPixelB2" +i);
                }

                renderSideB[renderCountB].isPickable = false;
                renderSideB[renderCountB].position.x = renderSideBX[i];
                renderSideB[renderCountB].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                renderSideB[renderCountB].position.z = renderSideBZ[i];
                renderSideB[renderCountB].material = tangramMaterials[renderSideBColor[i]];
                renderSideB[renderCountB].rotation.y = -Math.PI/2;
                renderSideB[renderCountB].setEnabled(1);

                renderSideB2[renderCountB].isPickable = false;
                renderSideB2[renderCountB].position.x = renderSideBX[i]+10;
                renderSideB2[renderCountB].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                renderSideB2[renderCountB].position.z = renderSideBZ[i];
                renderSideB2[renderCountB].material = tangramMaterials[renderSideBColor[i]];
                renderSideB2[renderCountB].rotation.y = Math.PI/2;
                renderSideB2[renderCountB].setEnabled(1);

                renderCountB++;

            }


    
            for(let i = 0; i < renderGameCountSideB; i++){
                for(l = 0; l <  renderCountSideB; l++){
                    if(renderSideBX[l] == renderGameSideBX[i] &&
                        renderSideBY[l] == renderGameSideBY[i] &&
                        renderSideBZ[l] == renderGameSideBZ[i] 
                        //renderSideBColor[l] == renderGameSideBColor[i]                                
                    ){
                      //  console.log("break i: " + i);
                        break;
                    }
    
               }
    
                if(l == renderCountSideB){
                    
    
                    if(renderCountB >=  renderAllocatedCountSideB){
                       // console.log("allocate" + i);
                          renderSideB[renderCountB] = blockPixel.clone("blockPixelB" +i);
                          renderSideB2[renderCountB] = blockPixel.clone("blockPixelB2" +i);
                    }
    
                    renderSideB[renderCountB].isPickable = false;
                    renderSideB[renderCountB].position.x = renderGameSideBX[i];
                    renderSideB[renderCountB].position.y = tangramOffsetY + renderGameSideBY[i] * tangramPitchY;
                    renderSideB[renderCountB].position.z = renderGameSideBZ[i];
                    renderSideB[renderCountB].material = tangramMaterials[9];
                    renderSideB[renderCountB].rotation.y = -Math.PI/2;
                    renderSideB[renderCountB].setEnabled(1);
    
                    renderSideB2[renderCountB].isPickable = false;
                    renderSideB2[renderCountB].position.x = renderGameSideBX[i] +10;
                    renderSideB2[renderCountB].position.y = tangramOffsetY + renderGameSideBY[i] * tangramPitchY;
                    renderSideB2[renderCountB].position.z = renderGameSideBZ[i];
                    renderSideB2[renderCountB].material = tangramMaterials[9];
                    renderSideB2[renderCountB].rotation.y = Math.PI/2;
                    renderSideB2[renderCountB].setEnabled(1);
    
                    renderCountB++;
    
                }
        
        
            }
    
    
        }
    
        if(renderCountB > renderAllocatedCountSideB){
            renderAllocatedCountSideB = renderCountB;
        }
    
        for(let i = renderCountB; i < renderAllocatedCountSideB; i++){
            renderSideB[i].setEnabled(0);      
            renderSideB2[i].setEnabled(0);     
            console.log("destroy " + i);  
        }
    

        //C ------------------------------------------------------

        


          for(let i = 0; i < renderCountSideC; i++){
            for(l = 0; l < renderGameCountSideC; l++){
                if(renderSideCX[i] == renderGameSideCX[l] &&
                    renderSideCY[i] == renderGameSideCY[l] &&
                    renderSideCZ[i] == renderGameSideCZ[l] &&
                    renderSideCColor[i] == renderGameSideCColor[l]                                
                ){
                   // console.log("break i: " + i);
                    break;
                }

           }

            if(l == renderGameCountSideC){
                

                if(renderCountC >=  renderAllocatedCountSideC){
                  //  console.log("allocate" + i);
                      renderSideC[renderCountC] = blockPixelBottom.clone("blockPixelC" +i);
                      
                }

                renderSideC[renderCountC].isPickable = false;
                renderSideC[renderCountC].position.x = renderSideCX[i];
                renderSideC[renderCountC].position.y = renderSideCY[i] + 0.01;
                renderSideC[renderCountC].position.z = renderSideCZ[i];
                renderSideC[renderCountC].material = tangramMaterials[renderSideCColor[i]];
                renderSideC[renderCountC].rotation.x = Math.PI/2;
                renderSideC[renderCountC].setEnabled(1);


       

                renderCountC++;

            }


    
            for(let i = 0; i < renderGameCountSideC; i++){
                for(l = 0; l <  renderCountSideC; l++){
                    if(renderSideCX[l] == renderGameSideCX[i] &&
                        renderSideCY[l] == renderGameSideCY[i] &&
                        renderSideCZ[l] == renderGameSideCZ[i] 
                        //renderSideCColor[l] == renderGameSideCColor[i]                                
                    ){
                     //   console.log("break i: " + i);
                        break;
                    }
    
               }
    
                if(l == renderCountSideC){
                    
    
                    if(renderCountC >=  renderAllocatedCountSideC){
                      //  console.log("allocate" + i);
                          renderSideC[renderCountC] = blockPixelBottom.clone("blockPixelC" +i);
                   
                    }
    
                    renderSideC[renderCountC].isPickable = false;
                    renderSideC[renderCountC].position.x = renderGameSideCX[i];
                    renderSideC[renderCountC].position.y =  renderGameSideCY[i] +0.01;
                    renderSideC[renderCountC].position.z = renderGameSideCZ[i];
                    renderSideC[renderCountC].material = tangramMaterials[9];
                    renderSideC[renderCountC].rotation.x = Math.PI/2;
                    renderSideC[renderCountC].setEnabled(1);
    

           

    
                    renderCountC++;
    
                }
        
        
            }
    
    
        }
    
        if(renderCountC > renderAllocatedCountSideC){
            renderAllocatedCountSideC = renderCountC;
        }
    
        for(let i = renderCountC; i < renderAllocatedCountSideC; i++){
            renderSideC[i].setEnabled(0);      
             
         //   console.log("destroy " + i);  
        }
    
    //B
    /*
        for(let i = 0; i < renderCountSideB; i++){
            
                    if(renderSideBXMax[i] - renderSideBXMin[i] > renderSideBXCount[i]){
                        renderSideBColor[i] +=4;
                        
                    }
            
                    if(i >=  renderAllocatedCountSideB){
                      
                        renderSideB[i] = blockPixel.clone("blockPixelB" +i);
                        renderSideB2[i] = blockPixel.clone("blockPixelB2" +i);
                    }
                   
                    renderSideB[i].isPickable = false;
                    renderSideB[i].position.x = renderSideBX[i];
                    renderSideB[i].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                    renderSideB[i].position.z = renderSideBZ[i];
                    renderSideB[i].material = tangramMaterials[renderSideBColor[i]];
                    renderSideB[i].rotation.y = -Math.PI/2;
    
                    renderSideB2[i].isPickable = false;
                    renderSideB2[i].position.x = renderSideBX[i] +10;
                    renderSideB2[i].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                    renderSideB2[i].position.z = renderSideBZ[i];
                    renderSideB2[i].material = tangramMaterials[renderSideBColor[i]];
                    renderSideB2[i].rotation.y = Math.PI/2;
    

                  //  renderSideA[i].position.x = renderSideAX[i];
                   // renderSideA[i].position.x = renderSideAX[i];
            
            
            
                }
            
                if(renderCountSideB > renderAllocatedCountSideB){
                    renderAllocatedCountSideB = renderCountSideB;
                }
            
                for(let i = renderCountSideB; i < renderAllocatedCountSideB; i++){
                    renderSideB[i].setEnabled(0);     
                    renderSideB2[i].setEnabled(0);     
                }
    
        //C
    
        for(let i = 0; i < renderCountSideC; i++){
            
                    if(renderSideCYMax[i] - renderSideCYMin[i] > renderSideCYCount[i]){
                        renderSideCColor[i] +=4;
                        
                    }
            
                    if(i >=  renderAllocatedCountSideC){
                      
                        renderSideC[i] = blockPixelBottom.clone("blockPixelC" +i);
                    }
                   
                    renderSideC[i].isPickable = false;
                    renderSideC[i].position.x = renderSideCX[i];
                    renderSideC[i].position.y = renderSideCY[i] + 0.01;
                    renderSideC[i].position.z = renderSideCZ[i];
                    renderSideC[i].material = tangramMaterials[renderSideCColor[i]];
                    renderSideC[i].rotation.x = Math.PI/2;
                    //renderSideC[i].rotation.x = Math.PI/2;
                    
                  //  renderSideA[i].position.x = renderSideAX[i];
                   // renderSideA[i].position.x = renderSideAX[i];
            
            
            
                }
            
                if(renderCountSideC > renderAllocatedCountSideC){
                    renderAllocatedCountSideC = renderCountSideC;
                }
            
                for(let i = renderCountSideC; i < renderAllocatedCountSideC; i++){
                    renderSideC[i].setEnabled(0);         
                }
    */
    
    }

    //Render test
      /*
      renderSideAX[0] = 5
      renderSideAY[0] = 0;
      renderSideAZ[0] = 9.5;
      renderSideAColor[0] = 1;
     

      renderSideAX[1] = 6
      renderSideAY[1] = 1;
      renderSideAZ[1] = 9.5;
      renderSideAColor[1] = 5;
  

      renderSideAX[2] = 5
      renderSideAY[2] = 1;
      renderSideAZ[2] = 9.5;
      renderSideAColor[2] = 1;

      renderSideAX[3] = 9
      renderSideAY[3] = 0;
      renderSideAZ[3] = 9.5;
      renderSideAColor[3] = 8;
     

      renderSideAX[4] = 10
      renderSideAY[4] = 1;
      renderSideAZ[4] = 9.5;
      renderSideAColor[4] = 4;
  

      renderSideAX[5] = 9
      renderSideAY[5] = 1;
      renderSideAZ[5] = 9.5;
      renderSideAColor[5] = 0;
  

      renderCountSideA = 6;

      renderAllocatedCountSideA = 0;
*/

//---------------------------------------------

/*Test block pixel
        blockPixelX[0] = 5;
        blockPixelY[0] = 0;
        blockPixelZ[0] = 5 ;
        blockPixelColor[0] = 1;

        blockPixelX[1] = 5;
        blockPixelY[1] = 0;
        blockPixelZ[1] = 2 ;
        blockPixelColor[1] = 2;

        blockPixelX[2] = 5;
        blockPixelY[2] = 1;
        blockPixelZ[2] = 5 ;
        blockPixelColor[2] = 3;

        blockPixelX[3] = 0;
        blockPixelY[3] = 1;
        blockPixelZ[3] = 5 ;
        blockPixelColor[3] = 2;

        blockPixelX[4] = 9;
        blockPixelY[4] = 1;
        blockPixelZ[4] = 5 ;
        blockPixelColor[4] = 1;

        blockPixelX[5] = 9;
        blockPixelY[5] = 0;
        blockPixelZ[5] = 5 ;
        blockPixelColor[5] = 1;


        blockPixelX[6] = 9;
        blockPixelY[6] = 0;
        blockPixelZ[6] = 3 ;
        blockPixelColor[6] = 1;

        blockPixelX[7] = 0;
        blockPixelY[7] = 0;
        blockPixelZ[7] = 5 ;
        blockPixelColor[7] = 2;

        blockPixelX[8] = 0;
        blockPixelY[8] = 0;
        blockPixelZ[8] = 3 ;
        blockPixelColor[8] = 2;

        blockPixelX[9] = 1;
        blockPixelY[9] = 0;
        blockPixelZ[9] = 3 ;
        blockPixelColor[9] = 0;


        blockPixelX[10] = 1;
        blockPixelY[10] = 0;
        blockPixelZ[10] = 5 ;
        blockPixelColor[10] = 0;


        blockPixelX[11] = 1;
        blockPixelY[11] = 1;
        blockPixelZ[11] = 3 ;
        blockPixelColor[11] = 0;


        blockPixelCount = 12;
*/