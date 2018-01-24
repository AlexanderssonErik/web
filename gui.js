let textFps;
let fpsTimeOut;

let guiAdvancedTextureSettings;
let guiSettingsStart;

let guiSettingsSnap;
let guiSettingsSnapOff;
let guiSettingsSnap4Diagonal;
let guiSettingsSnap4Horizontal;
let guiSettingsSnap8;

let guiSettingsRender;
let guiSettingsRenderLow;
let guiSettingsRenderMid;
let guiSettingsRenderHigh;

let guiSettingsCompass;
let guiSettingsCompassOff;
let guiSettingsCompassOn;

let guiFps = 60;


var bCWPSize = 120;
var bCWPMax = 100;
var bCWPMin = 60;
var bCWPOT = 40;
var bCWPOR = 40;

let snapDistance = (Math.PI/4); 
var cameraAnimateFrameRate = 10;
var cameraAnimateFrameTime = 2; //speed
var cameraAnimate;
var cameraAnimateKeyFrames = []; 
let cameraAnimatable;

let snapDiagonalA = 0; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
let snapDiagonalB = 2; //1 for 8pos, 2 4pos


//color wheel
var buttonColorWheel = [];
var advancedTextureColorSelect; //= BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ColorSelect");

function initGui() {


    
    
     cameraAnimate = new BABYLON.Animation("cameraAnimate", "alpha", cameraAnimateFrameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT  );
    
    
    
    cameraAnimateKeyFrames.push({
        frame: 0,
        value: 0
    });
    
    cameraAnimateKeyFrames.push({
        frame: cameraAnimateFrameRate,
        value: 0.1
    });
    
    // scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
    //var cameraAnimatable = scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
    cameraAnimatable = scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
    cameraAnimatable.animationStarted = false;
      
    cameraAnimate.setKeys(cameraAnimateKeyFrames);
    
        scene.activeCamera.attachControl(canvas);
        
   


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

 

  

var buttonColorWheelSize = "1px";


/*
  var bCWPSize = 120;
  var bCWPMax = 100;
  var bCWPMin = 60;
  var bCWPOT = 40;
  var bCWPOR = 40;


  var bCWPSize = 60;
  var bCWPMax = 50;
  var bCWPMin = 30;
  var bCWPOT = 20;
  var bCWPOR = 20;
  */

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
                  //console.log('buttoncolorwheel R: ' + tmpI);
                  //blocksLEDs2x2[colorWheelMeshI] = tmpI;
                  if( colorWheelMeshType == 'B'){
                    //  console.log('A colorWheelMeshI: ' + colorWheelMeshI);
                    //  console.log(' ( tmpI | (0xF1 & blocksLEDs2x2[colorWheelMeshI] )): ' +  ( tmpI | (0xF8 & blocksLEDs2x2[colorWheelMeshI] )));
                      if(blocksLEDs2x2[colorWheelMeshI+blocksOffset] != ( tmpI | (0xF8 & blocksLEDs2x2[colorWheelMeshI+blocksOffset] ))){
                          blocksLEDs2x2[colorWheelMeshI+blocksOffset] = ( tmpI | (0xF8 & blocksLEDs2x2[colorWheelMeshI+blocksOffset] )); 
                          blocksRender = 1;
                        //  console.log('B colorWheelMeshI+blocksOffset: ' + (colorWheelMeshI+blocksOffset));
                        //  console.log('B blocksLEDs2x2[colorWheelMeshI+blocksOffset]: ' + blocksLEDs2x2[colorWheelMeshI+blocksOffset]);
                        //  console.log('B blocksLEDs2x2[0]: ' + blocksLEDs2x2[0]);
                         
                      }
                  }else if (colorWheelMeshType == 'A'){
                     // console.log('B colorWheelMeshI: ' + colorWheelMeshI);
                     // console.log(' ( (tmpI << 3) | (0xC7 & blocksLEDs2x2[colorWheelMeshI]))' + ( (tmpI << 3) | (0xC7 & blocksLEDs2x2[colorWheelMeshI])));
                      if(blocksLEDs2x2[colorWheelMeshI+blocksOffset] != ( (tmpI << 3) | (0xC7 & blocksLEDs2x2[colorWheelMeshI+blocksOffset]))){
                          blocksLEDs2x2[colorWheelMeshI+blocksOffset] = ( (tmpI << 3) | (0xC7 & blocksLEDs2x2[colorWheelMeshI+blocksOffset])); 
                          blocksRender = 1;
                      //    console.log('A colorWheelMeshI+blocksOffset: ' + (colorWheelMeshI+blocksOffset));
                       //   console.log('A blocksLEDs2x2[colorWheelMeshI+blocksOffset]: ' + blocksLEDs2x2[colorWheelMeshI+blocksOffset]);
                      //    console.log('A blocksLEDs2x2[0]: ' + blocksLEDs2x2[0]);
                      }
                  }else if (colorWheelMeshType == 'D'){
                      if(blocksLEDs2x4[colorWheelMeshI+blocksOffset] != ( tmpI | (0xF8 & blocksLEDs2x4[colorWheelMeshI+blocksOffset] ))){
                          blocksLEDs2x4[colorWheelMeshI+blocksOffset] = ( tmpI | (0xF8 & blocksLEDs2x4[colorWheelMeshI+blocksOffset] )); 
                          blocksRender = 1;
                      }
                      
                  }else if (colorWheelMeshType == 'C'){
                      if(blocksLEDs2x4[colorWheelMeshI+blocksOffset] != ( (tmpI << 3) | (0xC7 & blocksLEDs2x4[colorWheelMeshI+blocksOffset])) ){
                          blocksLEDs2x4[colorWheelMeshI+blocksOffset] = ( (tmpI << 3) | (0xC7 & blocksLEDs2x4[colorWheelMeshI+blocksOffset])); 
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
        
                   




                    


 

}

function guiPointerUp(pickResult){

                        //SettingsMenu
                        guiSettingsFocusChange();
                        
                                   
                           
               
                                       console.log('Pointer up ');
                                     
                                       if(colorWheelActive){
                                           
                               
                                           
                                               advancedTextureColorSelect.dispose();
                                           
                               
                                           
                                           scene.activeCamera.attachControl(canvas);
                                        
                                       }
               
                                   
                                       if(guiSettingsActive){
               
                                           guiSettingsActive = false;
                                           scene.activeCamera.attachControl(canvas);
               
                                       }

}


                              //When pointer down event is raised
    
function guiPointerDownd(pickResult){
                                
                                        if (pickResult.hit) {
                                
                                            colorWheelActive = 1;
                                            console.log('Pointer down x:' + pickResult.pickedPoint.x);
                                
                                
                                
                                            advancedTextureColorSelect = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ColorSelect");
                                        
                                            colorWheelMeshI = Number(pickResult.pickedMesh.name.match(/\d+$/)[0]);
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
                                    }


function guiFpsFunction() {
    
        //textFps.text = fpsCounter;
        textFps.text = "FPS: " + fpsCounter;
        clearTimeout(guiFpsFunction);
        
        guiFps = fpsCounter;
        fpsCounter = 0;
        fpsTimeOut = setTimeout(guiFpsFunction, 1000);

        //console.log(camera.alpha);
        //console.log(camera.alpha%(Math.PI/4));
        //console.log((camera.alpha%(Math.PI/4)) - Math.PI/8);
        
    }


    let guiSettingsClickTransparancy = 0.5;
    let guiSettingsNoClickTransparancy = 0.2;
    let guiSettingsActive  =false ;

function guiSettingsFocusChange(){

    guiSettingsStart.alpha = guiSettingsNoClickTransparancy;

    guiSettingsSnap.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnapOff.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap4Diagonal.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap4Horizontal.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap8.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap.isVisible = false;
    guiSettingsSnapOff.isVisible = false;
    guiSettingsSnap4Diagonal.isVisible = false;
    guiSettingsSnap4Horizontal.isVisible = false;
    guiSettingsSnap8.isVisible = false;

    guiSettingsRender.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderLow.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderMid.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderHigh.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRender.isVisible = false;
    guiSettingsRenderLow.isVisible = false;
    guiSettingsRenderMid.isVisible = false;
    guiSettingsRenderHigh.isVisible = false;
    
    guiSettingsCompass.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassOff.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassOn.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompass.isVisible = false;
    guiSettingsCompassOff.isVisible = false;
    guiSettingsCompassOn.isVisible = false;

    
}

function guiSettingsSizeChange (button, size, paddingLeft, paddingTop){

    button.width = size + "px";
    button.height = size + "px";
    button.left = paddingLeft + "px";
    button.top = "-" + paddingTop + "px";


}



function guiInitSettingsMenu(){

    /*
    guiSettingsStart
        guiSettingsSnap
            guiSettingsSnapOff
            guiSettingsSnap4Diagonal
            guiSettingsSnap8
        guiSettingsRender
            guiSettingsRenderLow
            guiSettingsRenderMid
            guiSettingsRenderHigh
        guiSettingsCompass
            guiSettingsCompassOff
            guiSettingsCompassOn
        


            
    */



    let guiSettingsSizeM = 100;
    let guiSettingsPaddingBottom = 10;
    let guiSettingsPaddingTop = 5;    
    let guiSettingsColor = "#00FF00";
    let guiSettingsLineThickness = 0;    
    let guiSettingsClickColor = "black";
    //let guiSettingsNoClickColor = "black";
    
        //alpha
    //background
    //focusedBackground
    //let paddingPitch = "110px"

    

    guiSettingsSize = new BABYLON.GUI.Ellipse();
    guiSettingsSize.color = guiSettingsColor;
    guiSettingsSize.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsSize, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
    
 //   guiSettingsSize.width = guiSettingsSizeM + "px";
  //  guiSettingsSize.height = guiSettingsSizeM + "px";
   // guiSettingsSize.left = guiSettingsPaddingBottom + "px";
   // guiSettingsSize.top = "-" + guiSettingsPaddingBottom + "px";
    guiSettingsSize.paddingTop = guiSettingsPaddingTop;              
    guiSettingsSize.paddingRight = guiSettingsPaddingTop;
    guiSettingsSize.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsSize.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    guiSettingsSize.background = guiSettingsClickColor;
    guiSettingsSize.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSize.onPointerDownObservable.add(function() {

        if(guiSettingsSizeM == 50){
            guiSettingsSizeM = 100;

            bCWPSize = 120;
            bCWPMax = 100;
            bCWPMin = 60;
            bCWPOT = 40;
            bCWPOR = 40;
                        
        }else if(guiSettingsSizeM == 100){
            guiSettingsSizeM = 200;

            bCWPSize = 240;
            bCWPMax = 200;
            bCWPMin = 120;
            bCWPOT = 80;
            bCWPOR = 80;
        }else if(guiSettingsSizeM == 200){
            guiSettingsSizeM = 50;
            bCWPSize = 60;
            bCWPMax = 50;
            bCWPMin = 30;
            bCWPOT = 20;
            bCWPOR = 20;
        }

        if(guiSettingsSizeM == 50){
            guiSettingsSizeChange(guiSettingsSize, 100, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
        }else{
            guiSettingsSizeChange(guiSettingsSize, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
        }
        
        

        guiSettingsSizeChange(guiSettingsStart, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
        guiSettingsSizeChange(guiSettingsSnap, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnapOff, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4Diagonal, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4Horizontal, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap8, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*4, guiSettingsPaddingBottom + guiSettingsSizeM);
        
        guiSettingsSizeChange(guiSettingsRender, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderLow, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        
        guiSettingsSizeChange(guiSettingsRenderMid, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        
        guiSettingsSizeChange(guiSettingsRenderHigh, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsCompass, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOff, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOn, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        
    });

    
    guiSettingsStart = new BABYLON.GUI.Ellipse();
    guiSettingsStart.color = guiSettingsColor;
    guiSettingsStart.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsStart, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
    //guiSettingsStart.width = guiSettingsSizeM + "px";
    //guiSettingsStart.height = guiSettingsSizeM + "px";
    //guiSettingsStart.left = guiSettingsPaddingBottom + "px";
    //guiSettingsStart.top = "-" + guiSettingsPaddingBottom + "px";
    guiSettingsStart.paddingTop = guiSettingsPaddingTop;              
    guiSettingsStart.paddingRight = guiSettingsPaddingTop;
    guiSettingsStart.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsStart.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsStart.background = guiSettingsClickColor;
    guiSettingsStart.alpha = guiSettingsNoClickTransparancy;
    guiSettingsStart.onPointerDownObservable.add(function() {
        
        guiSettingsFocusChange();
        guiSettingsSnap.isVisible = true;
        guiSettingsRender.isVisible = true;
        guiSettingsCompass.isVisible = true;
        guiSettingsStart.alpha = guiSettingsClickTransparancy;
        guiSettingsActive = true;
        scene.activeCamera.detachControl(canvas);
    });
    guiSettingsStart.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        if(guiSettingsActive){
            guiSettingsSnap.isVisible = true;
            guiSettingsRender.isVisible = true;
            guiSettingsCompass.isVisible = true;
            guiSettingsStart.alpha = guiSettingsClickTransparancy;
        }

    });

    guiSettingsSnap = new BABYLON.GUI.Ellipse();
    guiSettingsSnap.color = guiSettingsColor;
    guiSettingsSnap.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsSnap, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM);
    //guiSettingsSnap.width = guiSettingsSizeM + "px";
    //guiSettingsSnap.height = guiSettingsSizeM + "px";
    //guiSettingsSnap.left =(guiSettingsPaddingBottom) + "px";
    //guiSettingsSnap.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    guiSettingsSnap.paddingTop = guiSettingsPaddingTop;              
    guiSettingsSnap.paddingRight = guiSettingsPaddingTop;
    guiSettingsSnap.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsSnap.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsSnap.background = guiSettingsClickColor;
    guiSettingsSnap.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        //if(guiSettingsActive){
            guiSettingsSnap.isVisible = true;
            guiSettingsSnapOff.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsRender.isVisible = true;
            guiSettingsCompass.isVisible = true;
            guiSettingsSnap.alpha = guiSettingsClickTransparancy;
       // }
    });



    guiSettingsSnapOff = new BABYLON.GUI.Ellipse();
    guiSettingsSnapOff.color = guiSettingsColor;
    guiSettingsSnapOff.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsSnapOff, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM);
   // guiSettingsSnapOff.width = guiSettingsSizeM + "px";
    //guiSettingsSnapOff.height = guiSettingsSizeM + "px";
  //  guiSettingsSnapOff.left =(guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    //guiSettingsSnapOff.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    guiSettingsSnapOff.paddingTop = guiSettingsPaddingTop;              
    guiSettingsSnapOff.paddingRight = guiSettingsPaddingTop;
    guiSettingsSnapOff.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsSnapOff.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsSnapOff.background = guiSettingsClickColor;
    guiSettingsSnapOff.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnapOff.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
            guiSettingsSnap.isVisible = true;
            guiSettingsSnapOff.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;
            guiSettingsSnap8.isVisible = true;            
            guiSettingsSnapOff.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = 0; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 1; //1 for 8pos, 2 4pos
       // }
    });

   
    guiSettingsSnap4Diagonal = new BABYLON.GUI.Ellipse();
    guiSettingsSnap4Diagonal.color = guiSettingsColor;
    guiSettingsSnap4Diagonal.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsSnap4Diagonal, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM);
    
    //guiSettingsSnap4Diagonal.width = guiSettingsSizeM + "px";
    //guiSettingsSnap4Diagonal.height = guiSettingsSizeM + "px";
    //guiSettingsSnap4Diagonal.left =(guiSettingsPaddingBottom + guiSettingsSizeM*2) + "px";
    //guiSettingsSnap4Diagonal.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    guiSettingsSnap4Diagonal.paddingTop = guiSettingsPaddingTop;              
    guiSettingsSnap4Diagonal.paddingRight = guiSettingsPaddingTop;
    guiSettingsSnap4Diagonal.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsSnap4Diagonal.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsSnap4Diagonal.background = guiSettingsClickColor;
    guiSettingsSnap4Diagonal.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap4Diagonal.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
            guiSettingsSnap.isVisible = true;
            guiSettingsSnapOff.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsSnap4Diagonal.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = -1; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 2; //1 for 8pos, 2 4pos
       // }
    });

    guiSettingsSnap4Horizontal = new BABYLON.GUI.Ellipse();
    guiSettingsSnap4Horizontal.color = guiSettingsColor;
    guiSettingsSnap4Horizontal.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsSnap4Horizontal, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM);
    
    //guiSettingsSnap4Horizontal.width = guiSettingsSizeM + "px";
    //guiSettingsSnap4Horizontal.height = guiSettingsSizeM + "px";
    //guiSettingsSnap4Horizontal.left =(guiSettingsPaddingBottom + guiSettingsSizeM*2) + "px";
    //guiSettingsSnap4Horizontal.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    guiSettingsSnap4Horizontal.paddingTop = guiSettingsPaddingTop;              
    guiSettingsSnap4Horizontal.paddingRight = guiSettingsPaddingTop;
    guiSettingsSnap4Horizontal.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsSnap4Horizontal.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsSnap4Horizontal.background = guiSettingsClickColor;
    guiSettingsSnap4Horizontal.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap4Horizontal.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
            guiSettingsSnap.isVisible = true;
            guiSettingsSnapOff.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsSnap4Horizontal.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = 1; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 2; //1 for 8pos, 2 4pos
        
       // }
    });

    guiSettingsSnap8 = new BABYLON.GUI.Ellipse();
    guiSettingsSnap8.color = guiSettingsColor;
    guiSettingsSnap8.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsSnap8, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*4, guiSettingsPaddingBottom + guiSettingsSizeM);
    

   // guiSettingsSnap8.width = guiSettingsSizeM + "px";
   // guiSettingsSnap8.height = guiSettingsSizeM + "px";
   // guiSettingsSnap8.left =(guiSettingsPaddingBottom + guiSettingsSizeM*3) + "px";
   // guiSettingsSnap8.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    guiSettingsSnap8.paddingTop = guiSettingsPaddingTop;              
    guiSettingsSnap8.paddingRight = guiSettingsPaddingTop;
    guiSettingsSnap8.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsSnap8.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsSnap8.background = guiSettingsClickColor;
    guiSettingsSnap8.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap8.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
            guiSettingsSnap.isVisible = true;
            guiSettingsSnapOff.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsSnap8.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = 1; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 1; //1 for 8pos, 2 4pos
       // }
    });
    

    guiSettingsRender = new BABYLON.GUI.Ellipse();
    guiSettingsRender.color = guiSettingsColor;
    guiSettingsRender.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsRender, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*2);
    
    //guiSettingsRender.width = guiSettingsSizeM + "px";
    //guiSettingsRender.height = guiSettingsSizeM + "px";
    //guiSettingsRender.left =(guiSettingsPaddingBottom ) + "px";
    //guiSettingsRender.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM*2) + "px";
    guiSettingsRender.paddingTop = guiSettingsPaddingTop;              
    guiSettingsRender.paddingRight = guiSettingsPaddingTop;
    guiSettingsRender.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsRender.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsRender.background = guiSettingsClickColor;
    guiSettingsRender.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRender.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRender.isVisible = true;
        guiSettingsRenderLow.isVisible = true;
        guiSettingsRenderMid.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsSnap.isVisible = true;
        guiSettingsCompass.isVisible = true;
        guiSettingsRender.alpha = guiSettingsClickTransparancy;
    });

    guiSettingsRenderLow = new BABYLON.GUI.Ellipse();
    guiSettingsRenderLow.color = guiSettingsColor;
    guiSettingsRenderLow.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsRenderLow, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2);
    

   // guiSettingsRenderLow.width = guiSettingsSizeM + "px";
    //guiSettingsRenderLow.height = guiSettingsSizeM + "px";
    //guiSettingsRenderLow.left =(guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    //guiSettingsRenderLow.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM*2) + "px";
    guiSettingsRenderLow.paddingTop = guiSettingsPaddingTop;              
    guiSettingsRenderLow.paddingRight = guiSettingsPaddingTop;
    guiSettingsRenderLow.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsRenderLow.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsRenderLow.background = guiSettingsClickColor;
    guiSettingsRenderLow.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderLow.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRender.isVisible = true;
        guiSettingsRenderLow.isVisible = true;
        guiSettingsRenderMid.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsRenderLow.alpha = guiSettingsClickTransparancy;
    });

    guiSettingsRenderMid = new BABYLON.GUI.Ellipse();
    guiSettingsRenderMid.color = guiSettingsColor;
    guiSettingsRenderMid.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsRenderMid, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*2);
    
   // guiSettingsRenderMid.width = guiSettingsSizeM + "px";
    //guiSettingsRenderMid.height = guiSettingsSizeM + "px";
    //guiSettingsRenderMid.left =(guiSettingsPaddingBottom + guiSettingsSizeM*2) + "px";
    //guiSettingsRenderMid.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM*2) + "px";
    guiSettingsRenderMid.paddingTop = guiSettingsPaddingTop;              
    guiSettingsRenderMid.paddingRight = guiSettingsPaddingTop;
    guiSettingsRenderMid.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsRenderMid.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsRenderMid.background = guiSettingsClickColor;
    guiSettingsRenderMid.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderMid.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRender.isVisible = true;
        guiSettingsRenderLow.isVisible = true;
        guiSettingsRenderMid.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsRenderMid.alpha = guiSettingsClickTransparancy;
    });

    guiSettingsRenderHigh = new BABYLON.GUI.Ellipse();
    guiSettingsRenderHigh.color = guiSettingsColor;
    guiSettingsRenderHigh.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsRenderHigh, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM*2);
    
    //guiSettingsRenderHigh.width = guiSettingsSizeM + "px";
    //guiSettingsRenderHigh.height = guiSettingsSizeM + "px";
    //guiSettingsRenderHigh.left =(guiSettingsPaddingBottom + guiSettingsSizeM*3) + "px";
    //guiSettingsRenderHigh.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM*2) + "px";
    guiSettingsRenderHigh.paddingTop = guiSettingsPaddingTop;              
    guiSettingsRenderHigh.paddingRight = guiSettingsPaddingTop;
    guiSettingsRenderHigh.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsRenderHigh.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsRenderHigh.background = guiSettingsClickColor;
    guiSettingsRenderHigh.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderHigh.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRender.isVisible = true;
        guiSettingsRenderLow.isVisible = true;
        guiSettingsRenderMid.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsRenderHigh.alpha = guiSettingsClickTransparancy;
    });

    guiSettingsCompass = new BABYLON.GUI.Ellipse();
    guiSettingsCompass.color = guiSettingsColor;
    guiSettingsCompass.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsCompass, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*3);
    
    //guiSettingsCompass.width = guiSettingsSizeM + "px";
    //guiSettingsCompass.height = guiSettingsSizeM + "px";
    //guiSettingsCompass.left =(guiSettingsPaddingBottom ) + "px";
    //guiSettingsCompass.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM*3) + "px";
    guiSettingsCompass.paddingTop = guiSettingsPaddingTop;              
    guiSettingsCompass.paddingRight = guiSettingsPaddingTop;
    guiSettingsCompass.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsCompass.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsCompass.background = guiSettingsClickColor;
    guiSettingsCompass.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompass.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRender.isVisible = true;
        guiSettingsSnap.isVisible = true;
        guiSettingsCompass.isVisible = true;
        guiSettingsCompassOff.isVisible = true;
        guiSettingsCompassOn.isVisible = true;     
        guiSettingsCompass.alpha = guiSettingsClickTransparancy;
    });

    guiSettingsCompassOff = new BABYLON.GUI.Ellipse();
    guiSettingsCompassOff.color = guiSettingsColor;
    guiSettingsCompassOff.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsCompassOff, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3);
    
    //guiSettingsCompassOff.width = guiSettingsSizeM + "px";
    //guiSettingsCompassOff.height = guiSettingsSizeM + "px";
    //guiSettingsCompassOff.left =(guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    //guiSettingsCompassOff.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM*3) + "px";
    guiSettingsCompassOff.paddingTop = guiSettingsPaddingTop;              
    guiSettingsCompassOff.paddingRight = guiSettingsPaddingTop;
    guiSettingsCompassOff.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsCompassOff.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsCompassOff.background = guiSettingsClickColor;
    guiSettingsCompassOff.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassOff.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsCompass.isVisible = true;
        guiSettingsCompassOff.isVisible = true;
        guiSettingsCompassOn.isVisible = true;     
        guiSettingsCompassOff.alpha = guiSettingsClickTransparancy;
    });

    
    guiSettingsCompassOn = new BABYLON.GUI.Ellipse();
    guiSettingsCompassOn.color = guiSettingsColor;
    guiSettingsCompassOn.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsCompassOn, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*3);
    
    //guiSettingsCompassOff.width = guiSettingsSizeM + "px";
    //guiSettingsCompassOff.height = guiSettingsSizeM + "px";
    //guiSettingsCompassOff.left =(guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    //guiSettingsCompassOff.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM*3) + "px";
    guiSettingsCompassOn.paddingTop = guiSettingsPaddingTop;              
    guiSettingsCompassOn.paddingRight = guiSettingsPaddingTop;
    guiSettingsCompassOn.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsCompassOn.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    guiSettingsCompassOn.background = guiSettingsClickColor;
    guiSettingsCompassOn.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassOn.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsCompass.isVisible = true;
        guiSettingsCompassOff.isVisible = true;
        guiSettingsCompassOn.isVisible = true;     
        guiSettingsCompassOn.alpha = guiSettingsClickTransparancy;
    });



   /* let guiSettingsRenderLow;
    let guiSettingsRenderMid;
    let guiSettingsRenderHigh;
    
    let guiSettingsCompass;
    let guiSettingsCompassOff;
    let guiSettingsCompassOn;   */ 
    //let guiSettingsSnapOff;
    //let guiSettingsSnap4Diagonal;
    //let guiSettingsSnap8;


    //guiSettingsStart.width = 60;
    //guiSettingsStart.height = 60;
  
    guiAdvancedTextureSettings = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Settings");
                
    guiAdvancedTextureSettings.addControl(guiSettingsStart);
    guiAdvancedTextureSettings.addControl(guiSettingsSnap);
    guiSettingsSnap.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnapOff);
    guiSettingsSnapOff.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnap4Diagonal);
    guiSettingsSnap4Diagonal.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnap4Horizontal);
    guiSettingsSnap4Horizontal.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnap8);
    guiSettingsSnap8.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRender);
    guiSettingsRender.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderLow);
    guiSettingsRenderLow.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderMid);
    guiSettingsRenderMid.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderHigh);
    guiSettingsRenderHigh.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsCompass);
    guiSettingsCompass.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsCompassOff);
    guiSettingsCompassOff.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsCompassOn);
    guiSettingsCompassOn.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSize);
    
    
}




function guiRender(pointerIsDown){

   //let sss = shapesStar.clone("A" );

    if(snapDiagonalA && !pointerIsDown){
        
        
                            if(camera.alpha%snapDistance > 0.05 && ! cameraAnimatable.animationStarted){                            
                                    if(snapDiagonalA*(camera.alpha%(snapDistance*snapDiagonalB) - (snapDiagonalB*snapDistance)/2) > 0){
                                        cameraAnimateKeyFrames.pop();
                                        cameraAnimateKeyFrames.pop();
                                        cameraAnimateKeyFrames.push({
                                            frame: 0,
                                            value: camera.alpha
                                        });
                                        cameraAnimateKeyFrames.push({
                                            frame: cameraAnimateFrameTime,
                                            value: camera.alpha += snapDistance - camera.alpha%snapDistance                                    
                                        });
                                        cameraAnimate.setKeys(cameraAnimateKeyFrames);                                
                                        cameraAnimatable = scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
                                    }else if(snapDiagonalA*(camera.alpha%(snapDistance *snapDiagonalB) - (snapDiagonalB*snapDistance)/2) <  0){
                                        cameraAnimateKeyFrames.pop();
                                        cameraAnimateKeyFrames.pop();
                                        cameraAnimateKeyFrames.push({
                                            frame: 0,
                                            value: camera.alpha
                                        });
                                        cameraAnimateKeyFrames.push({
                                            frame: cameraAnimateFrameTime,
                                            value: camera.alpha -= camera.alpha%snapDistance                                     
                                        });
                                        cameraAnimate.setKeys(cameraAnimateKeyFrames);                                
                                        cameraAnimatable = scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
                                    }
                                }
        
                                if(camera.alpha%snapDistance < -0.05 && ! cameraAnimatable.animationStarted){                            
                                    if(snapDiagonalA*(camera.alpha%(snapDistance*snapDiagonalB) + (snapDiagonalB*snapDistance)/2) > 0){
                                        cameraAnimateKeyFrames.pop();
                                        cameraAnimateKeyFrames.pop();
                                        cameraAnimateKeyFrames.push({
                                            frame: 0,
                                            value: camera.alpha
                                        });
                                        cameraAnimateKeyFrames.push({
                                            frame: cameraAnimateFrameTime,
                                            value: camera.alpha -= camera.alpha%snapDistance                                    
                                        });
                                        cameraAnimate.setKeys(cameraAnimateKeyFrames);                                
                                        cameraAnimatable = scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
                                    }else if(snapDiagonalA*(camera.alpha%(snapDistance *snapDiagonalB) + (snapDiagonalB*snapDistance)/2) <  0){
                                        cameraAnimateKeyFrames.pop();
                                        cameraAnimateKeyFrames.pop();
                                        cameraAnimateKeyFrames.push({
                                            frame: 0,
                                            value: camera.alpha
                                        });
                                        cameraAnimateKeyFrames.push({
                                            frame: cameraAnimateFrameTime,
                                            value: camera.alpha -= snapDistance + camera.alpha%snapDistance                                    
                                        });
                                        cameraAnimate.setKeys(cameraAnimateKeyFrames);                                
                                        cameraAnimatable = scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
                                    }
                                }
                            }
}