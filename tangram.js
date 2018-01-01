
let tile;
let tangramPitchY;
let tangramOffsetY;
let tangramMaterials = [];





let renderAllocatedCountSideA;
let renderCountSideA;
let renderSideA = [];
let renderSideAX = [];
let renderSideAY = [];
let renderSideAZ = [];
let renderSideAColor = [];

let renderSideAZMax = [];
let renderSideAZMin = [];
let renderSideAZCount = [];


let blockPixelX = [];
let blockPixelY = [];
let blockPixelZ = [];
let blockPixelColor = [];
let blockPixelCount;


let levelBlockX = [];
let levelBlockY = [];
let levelBlockZ = [];
let levelBlockRT = [];
let levelBlockCount;


//how to deal with holes
//deal when mapping pixels



function initTangram(scene, pitchY){
    //   https://doc.babylonjs.com/how_to/parametric_shapes#extruded-shapes
   
    //   https://www.babylonjs-playground.com/#165IV6#71
   
   
      // baseLED side -------------------------------------------------------
      blockPixelCount = 0;
      renderAllocatedCountSideA = 0;

      tangramPitchY = pitchY;
      tangramOffsetY = pitchY/2;
      
      blockPixel = BABYLON.MeshBuilder.CreatePlane("blockPixel", {width: 1, height: tangramPitchY}, scene);

      blockPixel.setEnabled(0); 

      let emissiveColor = 0.8;
      let transparencyCavity = 0.4;
   
      tangramMaterials[0] = new BABYLON.StandardMaterial("NA", scene);
      tangramMaterials[1] = new BABYLON.StandardMaterial("BLUE", scene);
      tangramMaterials[2] = new BABYLON.StandardMaterial("GREEN", scene);
      tangramMaterials[3] = new BABYLON.StandardMaterial("CYAN", scene);

      

      tangramMaterials[4] = new BABYLON.StandardMaterial("NA TRANS", scene);
      tangramMaterials[5] = new BABYLON.StandardMaterial("BLUE TRANS", scene);
      tangramMaterials[6] = new BABYLON.StandardMaterial("GREEN TRANS", scene);
      tangramMaterials[7] = new BABYLON.StandardMaterial("CYAN TRANS", scene);

      tangramMaterials[8] = new BABYLON.StandardMaterial("NO COLOR SELECTED", scene);
      tangramMaterials[9] = new BABYLON.StandardMaterial("RED", scene);
          
          
      tangramMaterials[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterials[0].emissiveColor = new BABYLON.Color3(0.6, 0.6, 0.6);
      tangramMaterials[1].diffuseColor = new BABYLON.Color3(0, 0, 1);
      tangramMaterials[1].emissiveColor = new BABYLON.Color3(0, 0, emissiveColor);
      tangramMaterials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
      tangramMaterials[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
      tangramMaterials[3].diffuseColor = new BABYLON.Color3(0, 1, 1);
      tangramMaterials[3].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);


      tangramMaterials[4].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterials[4].emissiveColor = new BABYLON.Color3(0.6, 0.6, 0.6);
      tangramMaterials[4].alpha =  transparencyCavity;
      tangramMaterials[5].diffuseColor = new BABYLON.Color3(0, 0, 1);
      tangramMaterials[5].emissiveColor = new BABYLON.Color3(0, 0, emissiveColor);
      tangramMaterials[5].alpha =  transparencyCavity;
      tangramMaterials[6].diffuseColor = new BABYLON.Color3(0, 1, 0);
      tangramMaterials[6].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
      tangramMaterials[6].alpha =  transparencyCavity;
      tangramMaterials[7].diffuseColor = new BABYLON.Color3(0, 1, 1);
      tangramMaterials[7].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
      tangramMaterials[7].alpha =  transparencyCavity;

      tangramMaterials[8].diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
      tangramMaterials[8].emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
      tangramMaterials[8].alpha =  0;

      tangramMaterials[9].diffuseColor = new BABYLON.Color3(1, 0, 0);
      tangramMaterials[9].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);


    

      levelBlockX[0] = 0;
      levelBlockY[0] = 0;
      levelBlockZ[0] = 0;
      levelBlockRT[0] = 0;
      
      levelBlockCount = 1;

      //tile.rotation.y = -Math.PI/2;

  
    }

/*function tangramBuildLevel(){


    
} */   

function tangramRender(){


    //define block pixels

    for(let i = 0; i < levelBlockCount; i++){

        
    }


    //!!blockPixelCount = 12;



    renderCountSideA = 0;
    let x;


    for(let i = 0; i < blockPixelCount; i++){
        

        for(x = 0; x < renderCountSideA; x++){
            if(blockPixelX[i] == renderSideAX[x]){
                if(blockPixelY[i] == renderSideAY[x]){
                    //need to update accordingly
                    if(blockPixelColor[i] != renderSideAColor[x] && renderSideAColor[x] == 0){

                        renderSideAColor[x] = blockPixelColor[i];

                    }else if(blockPixelColor[i] != renderSideAColor[x] ){
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

        
    }



    for(let i = 0; i < renderCountSideA; i++){

        if(renderSideAZMax[i] - renderSideAZMin[i] > renderSideAZCount[i]){
            renderSideAColor[i] +=4;
            
        }

        if(i >=  renderAllocatedCountSideA){
          
            renderSideA[i] = blockPixel.clone("blockPixelA" +i);
        }
       
        renderSideA[i].isPickable = false;
        renderSideA[i].position.x = renderSideAX[i];
        renderSideA[i].position.y = tangramOffsetY + renderSideAY[i] * tangramPitchY;
        renderSideA[i].position.z = renderSideAZ[i];
        renderSideA[i].material = tangramMaterials[renderSideAColor[i]];
        
      //  renderSideA[i].position.x = renderSideAX[i];
       // renderSideA[i].position.x = renderSideAX[i];



    }

    if(renderCountSideA > renderAllocatedCountSideA){
        renderAllocatedCountSideA = renderCountSideA;
    }

    for(let i = renderCountSideA; i < renderAllocatedCountSideA; i++){
        renderSideA[i].setEnabled(0);         
    }



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