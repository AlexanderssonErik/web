let textFps;
let fpsTimeOut;

function initGui() {

    var advancedTextureFPS = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    
        textFps = new BABYLON.GUI.TextBlock();
        textFps.text = "FPS: ";
        textFps.color = "white";
        textFps.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        textFps.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    
        textFps.fontSize = 24;
        advancedTextureFPS.addControl(textFps);    

        fpsTimeOut = setTimeout(guiFpsFunction, 1000);



  //  Color Wheel

  var advancedTextureColorSelect; //= BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ColorSelect");
  var buttonColorWheel = [];
  

var buttonColorWheelSize = "1px";



  var bCWPSize = 120;
  var bCWPMax = 100;
  var bCWPMin = 60;
  var bCWPOT = 40;
  var bCWPOR = 40;


  var buttonColorWheelPaddingT = [ bCWPMax +bCWPOT, bCWPMin +bCWPOT,  bCWPOT-(bCWPSize/2) , bCWPOT-(bCWPMin +bCWPSize), bCWPOT-(bCWPMax + bCWPSize), bCWPOT-(bCWPMin + bCWPSize), bCWPOT-(bCWPSize/2) , bCWPMin+bCWPOT];
  var buttonColorWheelPaddingB = [-(bCWPMax+bCWPSize+bCWPOT),-(bCWPMin + bCWPSize +bCWPOT), -(bCWPSize/2 + bCWPOT) , bCWPMin-bCWPOT, bCWPMax-bCWPOT, bCWPMin-bCWPOT, -(bCWPSize/2 +bCWPOT) , -(bCWPMin + bCWPSize+bCWPOT)];
  var buttonColorWheelPaddingL = [bCWPOR-(bCWPSize/2), bCWPMin +bCWPOR, bCWPMax+bCWPOR, bCWPMin+bCWPOR, bCWPOR-(bCWPSize/2), bCWPOR-(bCWPMin +bCWPSize), bCWPOR-(bCWPMax +bCWPSize), bCWPOR-(bCWPMin + bCWPSize)];
  var buttonColorWheelPaddingR = [-(bCWPSize/2 +bCWPOR), -(bCWPMin+bCWPSize +bCWPOR), -(bCWPMax +bCWPSize+bCWPOR), -(bCWPMin + bCWPSize+bCWPOR), -(bCWPSize/2 +bCWPOR), bCWPMin-bCWPOR, bCWPMax-bCWPOR, bCWPMin-bCWPOR];


  for(var b = 0; b < 2; b++ ){

      for(var g = 0; g < 2; g++ ){
          for(var r = 0; r < 2; r++ ){
              
              //let tmpI = (4*b)+ (2*g) + r;
              let tmpI = (4*r)+ (2*g) + b;
              buttonColorWheel[tmpI] = new BABYLON.GUI.Ellipse();

              buttonColorWheel[tmpI].color =  "#101050";

              buttonColorWheel[tmpI].width = buttonColorWheelSize;//"160px"
              buttonColorWheel[tmpI].height = buttonColorWheelSize;//"160px";
              
              buttonColorWheel[tmpI].paddingTop = buttonColorWheelPaddingT[tmpI];
              buttonColorWheel[tmpI].paddingBottom = buttonColorWheelPaddingB[tmpI];
              buttonColorWheel[tmpI].paddingLeft = buttonColorWheelPaddingL[tmpI];
              buttonColorWheel[tmpI].paddingRight = buttonColorWheelPaddingR[tmpI];

              //buttonColorWheel[tmpI].left -= 200;
              //buttonColorWheel[tmpI].shadowBlur = 1;
              //buttonColorWheel[tmpI].shadowOffsetX = 1;
              //buttonColorWheel[tmpI].shadowOffsetY = 1;
              //buttonColorWheel[tmpI].shadowColor = "#111";
              //buttonColorWheel[tmpI].margin = "40px";
              buttonColorWheel[tmpI].thickness = 3;
              let colorString = "#"
              
              if(b){
                colorString += "FF"
            }else{
                colorString += "00"
            }

              if(g){
                  colorString += "FF"
              }else{
                  colorString += "00"
              }

              if(r){
                colorString += "FF"
            }else{                    
                colorString += "00"
            }

              if(r||g||b){
              buttonColorWheel[tmpI].background =    colorString;
              }
              //buttonColorWheel[tmpI].onPointerEnterObservable.add(function() {

              buttonColorWheel[tmpI].onPointerMoveObservable.add(function() {
                 // console.log('buttoncolorwheel R: ' + tmpI);
                  //blocksLEDs2x2[colorWheelMeshI] = tmpI;
                  if( colorWheelMeshType == 'B'){
                     // console.log('A colorWheelMeshI: ' + colorWheelMeshI);
                    //  console.log(' ( tmpI | (0xF1 & blocksLEDs2x2[colorWheelMeshI] )): ' +  ( tmpI | (0xF8 & blocksLEDs2x2[colorWheelMeshI] )));
                      if(blocksLEDs2x2[colorWheelMeshI] != ( tmpI | (0xF8 & blocksLEDs2x2[colorWheelMeshI] ))){
                          blocksLEDs2x2[colorWheelMeshI] = ( tmpI | (0xF8 & blocksLEDs2x2[colorWheelMeshI] )); 
                          blocksRender = 1;
                      }
                  }else if (colorWheelMeshType == 'A'){
                     // console.log('B colorWheelMeshI: ' + colorWheelMeshI);
                     // console.log(' ( (tmpI << 3) | (0xC7 & blocksLEDs2x2[colorWheelMeshI]))' + ( (tmpI << 3) | (0xC7 & blocksLEDs2x2[colorWheelMeshI])));
                      if(blocksLEDs2x2[colorWheelMeshI] != ( (tmpI << 3) | (0xC7 & blocksLEDs2x2[colorWheelMeshI]))){
                          blocksLEDs2x2[colorWheelMeshI] = ( (tmpI << 3) | (0xC7 & blocksLEDs2x2[colorWheelMeshI])); 
                          blocksRender = 1;
                      }
                  }else if (colorWheelMeshType == 'D'){
                      if(blocksLEDs2x4[colorWheelMeshI] != ( tmpI | (0xF8 & blocksLEDs2x4[colorWheelMeshI] ))){
                          blocksLEDs2x4[colorWheelMeshI] = ( tmpI | (0xF8 & blocksLEDs2x4[colorWheelMeshI] )); 
                          blocksRender = 1;
                      }
                      
                  }else if (colorWheelMeshType == 'C'){
                      if(blocksLEDs2x4[colorWheelMeshI] != ( (tmpI << 3) | (0xC7 & blocksLEDs2x4[colorWheelMeshI])) ){
                          blocksLEDs2x4[colorWheelMeshI] = ( (tmpI << 3) | (0xC7 & blocksLEDs2x4[colorWheelMeshI])); 
                          blocksRender = 1;
                      }
                      
                  }else if (colorWheelMeshType == 'E'){
                      if(baseLED[colorWheelMeshI] != ( tmpI | (0xF8 & baseLED[colorWheelMeshI]))){
                          baseLED[colorWheelMeshI] = ( tmpI | (0xF8 & baseLED[colorWheelMeshI]));            
                    //  console.log('E colorWheelMeshI: ' + colorWheelMeshI);
                      //console.log(' ( tmpI | (0xF8 & blocksLEDs2x4[colorWheelMeshI]))' + ( tmpI | (0xF8 & blocksLEDs2x4[colorWheelMeshI])));
                      blocksRender = 1;
                      }
                            
                  }else if (colorWheelMeshType == 'F'){
                      if(baseLED[colorWheelMeshI] != ( (tmpI << 3) | (0xC7 & baseLED[colorWheelMeshI]))){
                          baseLED[colorWheelMeshI] = ( (tmpI << 3) | (0xC7 & baseLED[colorWheelMeshI])); 
                    //  console.log('F colorWheelMeshI: ' + colorWheelMeshI);
                    //  console.log('( (tmpI << 3) | (0xC7 & blocksLEDs2x4[colorWheelMeshI]))' + ( (tmpI << 3) | (0xC7 & blocksLEDs2x4[colorWheelMeshI])));
                      blocksRender = 1;
                      }
                  }
                      

                  
              });

          }
      }
  }



           // GUI
           var advancedTextureStart = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Start");
           
                   var guiPanelStart = new BABYLON.GUI.StackPanel();
                   guiPanelStart.width = "400px";
                   guiPanelStart.height = "100px";
                   guiPanelStart.fontSize = "14px";
                   guiPanelStart.isVertical = false;
                   guiPanelStart.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                   guiPanelStart.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                   advancedTextureStart.addControl(guiPanelStart);
           
                   var buttonSnap = BABYLON.GUI.Button.CreateSimpleButton("buttonSnap", "Snap");
                   buttonSnap.width = "150px"
                   buttonSnap.height = "40px";
                   buttonSnap.paddingTop = "10px";
                   buttonSnap.paddingRight = "10px";
                   buttonSnap.color = "white";
                   buttonSnap.cornerRadius = 20;
                   buttonSnap.background = "green";
                   buttonSnap.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                   buttonSnap.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                   buttonSnap.isVisible = false;
           
                   
           
                   buttonSnap.onPointerEnterObservable.add(function() {
                       console.log('Snap ');
           
           
                   });
                   guiPanelStart.addControl(buttonSnap); 
           
                   var buttonStart = BABYLON.GUI.Button.CreateSimpleButton("buttonStart", "Start");
                   buttonStart.width = "150px"
                   buttonStart.height = "40px";
                   buttonStart.paddingTop = "10px";
                   buttonStart.paddingRight = "10px";
                   buttonStart.color = "white";
                   buttonStart.cornerRadius = 20;
                   buttonStart.background = "green";
                   buttonStart.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                   buttonStart.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
           
                   buttonStart.onPointerDownObservable.add(function() {
                       buttonSnap.isVisible = true;
                       console.log('Start ');
                   });
           
           
                   guiPanelStart.addControl(buttonStart); 
           
                  
                   var buttonCompass = BABYLON.GUI.Button.CreateSimpleButton("buttonCompass", "Full Screen");
                   buttonCompass.width = "150px"
                   buttonCompass.height = "40px";
                   buttonCompass.paddingTop = "10px";
                   buttonCompass.paddingRight = "10px";
                   buttonCompass.color = "white";
                   buttonCompass.cornerRadius = 20;
                   buttonCompass.background = "green";
                   buttonCompass.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                   buttonCompass.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
           
                   buttonCompass.onPointerDownObservable.add(function() {
                       buttonSnap.isVisible = true;
                       if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
                           (!document.mozFullScreen && !document.webkitIsFullScreen)) {
                           if (document.documentElement.requestFullScreen) {  
                               document.documentElement.requestFullScreen();  
                            } else if (document.documentElement.mozRequestFullScreen) {  
                               document.documentElement.mozRequestFullScreen();  
                           } else if (document.documentElement.webkitRequestFullScreen) {  
                               document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
                           }  
                       } else {  
                           if (document.cancelFullScreen) {  
                               document.cancelFullScreen();  
                           } else if (document.mozCancelFullScreen) {  
                               document.mozCancelFullScreen();  
                           } else if (document.webkitCancelFullScreen) {  
                               document.webkitCancelFullScreen();  
                           }  
                       }  
                      // console.log('Compass ');
                   });
           
                   guiPanelStart.addControl(buttonCompass); 
        
                   

            //When pointer down event is raised
            scene.onPointerUp = function (evt, pickResult) {
                
                        console.log('Pointer up ');
                      
                        if(colorWheelActive){
                            
                
                            
                                advancedTextureColorSelect.dispose();
                            
                
                            
                            scene.activeCamera.attachControl(canvas);
                         
                        }
                
                    };


                              //When pointer down event is raised
    scene.onPointerDown = function (evt, pickResult) {
        
                
        
                if (pickResult.hit) {
        
                    colorWheelActive = 1;
                    console.log('Pointer down x:' + pickResult.pickedPoint.x);
        
        
        
                    advancedTextureColorSelect = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ColorSelect");
                
                    colorWheelMeshI = pickResult.pickedMesh.name.match(/\d+$/)[0];
                    colorWheelMeshType = pickResult.pickedMesh.name.slice(0, 1);
        
        
                    console.log('colorWheelMeshI: X ' + colorWheelMeshI + " X ");
                    console.log('colorWheelMeshType: X ' + colorWheelMeshType+ " X ");
                    
                     for(let i = 0; i < 8; i++){
                        advancedTextureColorSelect.addControl(buttonColorWheel[i]);
                        
        
                        buttonColorWheel[i].linkWithMesh(pickResult.pickedMesh);
                       // scene.pick(scene.pointerX, scene.pointerY)
                        //buttonColorWheel[i].linkWithMesh(renderBlocksPart1[0]);
                      
                    }
        
                      //advancedTextureColorSelect.addControl(buttonR); 
                      //advancedTextureColorSelect.addControl(buttonRG); 
        
                      //buttonR.linkWithMesh(renderBlocksPart1[0]);
                      //buttonRG.linkWithMesh(renderBlocksPart1[0]);
        
                      scene.activeCamera.detachControl(canvas);
                     
             //   advancedTextureColorSelect.dispose();
        
                    /*buttonR.isVisible = true;
                    buttonR.top = "100px";
                    buttonR.y = pickResult.pickedPoint.y;
        
                    buttonR.linkWithMesh(sphere1);
        */
                   // buttonColorSelect.isVisible = true;
        
        
        
                 /*   var plane = BABYLON.Mesh.CreatePlane("plane", 2);
                    //plane.parent = sphere;
                plane.position.y = pickResult.pickedPoint.y;
        plane.position.x = pickResult.pickedPoint.x;
        
        plane.position = camera.getFrontPosition(12);
        
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
        
        var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Click Me");
        button1.width = 1;
        button1.height = 0.4;
        button1.color = "white";
        button1.fontSize = 50;
        button1.background = "green";
        button1.onPointerUpObservable.add(function() {
            alert("you did it!");
        });
        advancedTexture.addControl(button1);*/
        
                }
                // if the click hits the ground object, we change the impact position
                /*
        
                if (pickResult.hit) {
                    impact.position.x = pickResult.pickedPoint.x;
                    impact.position.y = pickResult.pickedPoint.y;
                }*/
            };

}

function guiFpsFunction() {
    
        //textFps.text = fpsCounter;
        textFps.text = "FPS: " + fpsCounter;
        clearTimeout(guiFpsFunction);
        
        fpsCounter = 0;
        fpsTimeOut = setTimeout(guiFpsFunction, 1000);
    }