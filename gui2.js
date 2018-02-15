let textFps;
let fpsTimeOut;

let guiCompassCameraAlphaDiff= 0;

let guiAdvancedTextureSettings;
let guiSettingsStart;

let guiSettingsZoom;
let guiSettingsZoomImage;
let guiSettingsHide;
let guiSettingsHideImage;



let guiSettingsSnap;
let guiSettingsSnapImage;
let guiSettingsSnapOff;
let guiSettingsSnapOffImage;
let guiSettingsSnap4Diagonal;
let guiSettingsSnap4DiagonalImage;
let guiSettingsSnap4Horizontal;
let guiSettingsSnap4HorizontalImage;
let guiSettingsSnap8;
let guiSettingsSnap8Image;

let guiSettingsRender;
let guiSettingsRenderImage;
let guiSettingsRenderLow;
let guiSettingsRenderLowImage;
let guiSettingsRenderMid;
let guiSettingsRenderMidImage;
let guiSettingsRenderHigh;
let guiSettingsRenderHighImage;

let guiSettingsCompass;
let guiSettingsCompassImage;
let guiSettingsCompassOff;
let guiSettingsCompassOffImage;
let guiSettingsCompassOn;
let guiSettingsCompassOnImage;

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
    let guiSettingsNoClickTransparancy = 0.3;
    let guiSettingsActive  =false ;

function guiSettingsFocusChange(){

    guiSettingsStart.alpha = guiSettingsNoClickTransparancy;

    guiSettingsHide.alpha = guiSettingsNoClickTransparancy;
    guiSettingsHideImage.isVisible = false;
    guiSettingsHide.isVisible = false;
    
    guiSettingsZoom.alpha = guiSettingsNoClickTransparancy;
    guiSettingsZoomImage.isVisible = false;
    guiSettingsZoom.isVisible = false;

    guiSettingsSnap.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnapOff.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap4Diagonal.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap4Horizontal.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap8.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnapImage.isVisible = false;
    guiSettingsSnap.isVisible = false;
    guiSettingsSnapOffImage.isVisible = false;
    guiSettingsSnapOff.isVisible = false;
    guiSettingsSnap4DiagonalImage.isVisible = false;
    guiSettingsSnap4Diagonal.isVisible = false;
    guiSettingsSnap4HorizontalImage.isVisible = false;
    guiSettingsSnap4Horizontal.isVisible = false;
    guiSettingsSnap8Image.isVisible = false;
    guiSettingsSnap8.isVisible = false;

    guiSettingsRender.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderLow.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderMid.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderHigh.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderImage.isVisible = false;
    guiSettingsRender.isVisible = false;
    guiSettingsRenderLowImage.isVisible = false;
    guiSettingsRenderLow.isVisible = false;
    guiSettingsRenderMidImage.isVisible = false;
    guiSettingsRenderMid.isVisible = false;
    guiSettingsRenderHighImage.isVisible = false;
    guiSettingsRenderHigh.isVisible = false;
    
    guiSettingsCompass.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassOff.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassOn.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassImage.isVisible = false;
    guiSettingsCompass.isVisible = false;
    guiSettingsCompassOffImage.isVisible = false;
    guiSettingsCompassOff.isVisible = false;
    guiSettingsCompassOnImage.isVisible = false;
    guiSettingsCompassOn.isVisible = false;

    
}

function guiSettingsSizeChange (button, size, paddingLeft, paddingTop){

    button.width = size + "px";
    button.height = size + "px";
    button.left = paddingLeft + "px";
    button.top = "-" + paddingTop + "px";


}


function guiInitButtonEllipseImage(ellipse, image, paddingLeft, paddingTop){

    let guiSettingsSizeM = 100;
    let guiSettingsPaddingBottom = 10;
    let guiSettingsPaddingTop = 5;    
    let guiSettingsColor = "#606060";
    let guiSettingsLineThickness = 0;    
   // let guiSettingsClickColor = "black";
   let guiSettingsClickColor = "#606060";


   guiSettingsSizeChange(image, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM * paddingLeft, guiSettingsPaddingBottom + guiSettingsSizeM * paddingTop); 
   
   image.paddingTop = guiSettingsPaddingTop;              
   image.paddingRight = guiSettingsPaddingTop;

   image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
   image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;

    
ellipse.color = guiSettingsColor;
ellipse.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(ellipse, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM * paddingLeft, guiSettingsPaddingBottom + guiSettingsSizeM * paddingTop);
    //guiSettingsSnap.width = guiSettingsSizeM + "px";
    //guiSettingsSnap.height = guiSettingsSizeM + "px";
    //guiSettingsSnap.left =(guiSettingsPaddingBottom) + "px";
    //guiSettingsSnap.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    ellipse.paddingTop = guiSettingsPaddingTop;              
    ellipse.paddingRight = guiSettingsPaddingTop;
    ellipse.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    ellipse.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    ellipse.background = guiSettingsClickColor;
    ellipse.alpha = guiSettingsNoClickTransparancy;

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
    let guiSettingsColor = "#606060";
    let guiSettingsLineThickness = 0;    
   // let guiSettingsClickColor = "black";
   let guiSettingsClickColor = "#606060";
   
    //let guiSettingsNoClickColor = "black";
    
        //alpha
    //background
    //focusedBackground
    //let paddingPitch = "110px"

    guiAdvancedTextureSettings = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Settings");



    var guiSettingsSizeImage = new BABYLON.GUI.Image("Start", "http://rawgit.com/AlexanderssonErik/web/master/ic_aspect_ratio_white_48px.svg");
    //guiSettingsStartImage.width = 0.2;
    //guiSettingsStartImage.height = "40px";
    guiSettingsSizeChange(guiSettingsSizeImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
    
    guiSettingsSizeImage.paddingTop = guiSettingsPaddingTop;              
    guiSettingsSizeImage.paddingRight = guiSettingsPaddingTop;
    
    guiSettingsSizeImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsSizeImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;

 
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
    guiSettingsSizeImage.onPointerDownObservable.add(function() {

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
            guiSettingsSizeChange(guiSettingsSizeImage, 100, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
        }else{
            guiSettingsSizeChange(guiSettingsSize, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
            guiSettingsSizeChange(guiSettingsSizeImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
        }
        

        guiSettingsSizeChange(guiSettingsHide, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom);
        guiSettingsSizeChange(guiSettingsHideImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom);
        guiSettingsSizeChange(guiSettingsZoom, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom);
        guiSettingsSizeChange(guiSettingsZoomImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM *2, guiSettingsPaddingBottom);

        guiSettingsSizeChange(guiSettingsStart, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
        guiSettingsSizeChange(guiSettingsStartImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom); 
        guiSettingsSizeChange(guiSettingsSnapImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM);
        
        guiSettingsSizeChange(guiSettingsSnapOffImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4DiagonalImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4HorizontalImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap8Image, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*4, guiSettingsPaddingBottom + guiSettingsSizeM);
      

        guiSettingsSizeChange(guiSettingsSnapOff, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4Diagonal, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4Horizontal, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap8, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*4, guiSettingsPaddingBottom + guiSettingsSizeM);
        
        guiSettingsSizeChange(guiSettingsRenderImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderLowImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderMidImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderHighImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM*2);
   
        guiSettingsSizeChange(guiSettingsRender, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderLow, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderMid, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderHigh, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        
        guiSettingsSizeChange(guiSettingsCompassImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOffImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOnImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*3);
 
        guiSettingsSizeChange(guiSettingsCompass, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOff, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOn, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        
    });

    

    var guiSettingsStartImage = new BABYLON.GUI.Image("Start", "http://rawgit.com/AlexanderssonErik/web/master/ic_settings_white_48px.svg");
    guiSettingsStart = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsStart, guiSettingsStartImage, 0, 0);

    
    guiSettingsStartImage.onPointerDownObservable.add(function() {
        
        guiSettingsFocusChange();
        guiSettingsHideImage.isVisible = true;
        guiSettingsHide.isVisible = true;
        
        guiSettingsZoomImage.isVisible = true;
        guiSettingsZoom.isVisible = true;

        guiSettingsSnapImage.isVisible = true;
        guiSettingsSnap.isVisible = true;
        
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;
        guiSettingsStart.alpha = guiSettingsClickTransparancy;
        guiSettingsActive = true;
        scene.activeCamera.detachControl(canvas);
    });
    guiSettingsStartImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        if(guiSettingsActive){
            guiSettingsHideImage.isVisible = true;
            guiSettingsHide.isVisible = true;
            
            guiSettingsZoomImage.isVisible = true;
            guiSettingsZoom.isVisible = true;

            guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsRenderImage.isVisible = true;
            guiSettingsRender.isVisible = true;

            guiSettingsCompassImage.isVisible = true;
            guiSettingsCompass.isVisible = true;
            guiSettingsStart.alpha = guiSettingsClickTransparancy;
        }

    });




    guiSettingsHideImage = new BABYLON.GUI.Image("guiSettingsSnapImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg");
    guiSettingsHide = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsHide, guiSettingsHideImage, 1, 0);
  
    guiSettingsHideImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        //if(guiSettingsActive){
            guiSettingsHideImage.isVisible = true;
            guiSettingsHide.isVisible = true;
            
            guiSettingsZoomImage.isVisible = true;
            guiSettingsZoom.isVisible = true;

            guiSettingsHide.alpha = guiSettingsClickTransparancy;

       // }
    });

    guiSettingsZoomImage = new BABYLON.GUI.Image("guiSettingsSnapImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_zoom_out_white_48px.svg");
    guiSettingsZoom = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsZoom, guiSettingsZoomImage, 2, 0);
  
    guiSettingsZoomImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        //if(guiSettingsActive){
            guiSettingsHideImage.isVisible = true;
            guiSettingsHide.isVisible = true;
            
            guiSettingsZoomImage.isVisible = true;
            guiSettingsZoom.isVisible = true;


            camera.radius = 20;
            guiSettingsZoom.alpha = guiSettingsClickTransparancy;

       // }
    });
    


    guiSettingsSnapImage = new BABYLON.GUI.Image("guiSettingsSnapImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_3d_rotation_white_48px.svg");
    guiSettingsSnap = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnap, guiSettingsSnapImage, 0, 1);
  
    guiSettingsSnapImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        //if(guiSettingsActive){
            guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true;
            guiSettingsSnap8.isVisible = true;

            guiSettingsRenderImage.isVisible = true;
            guiSettingsRender.isVisible = true;

            guiSettingsCompassImage.isVisible = true;
            guiSettingsCompass.isVisible = true;
            guiSettingsSnap.alpha = guiSettingsClickTransparancy;
       // }
    });


    guiSettingsSnapOffImage = new BABYLON.GUI.Image("guiSettingsSnapOffImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_rotate_90_degrees_ccw_white_48px.svg");
    guiSettingsSnapOff = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnapOff, guiSettingsSnapOffImage, 1, 1);

    guiSettingsSnapOffImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
        guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
        
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true; 
            guiSettingsSnap8.isVisible = true;            
            guiSettingsSnapOff.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = 0; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 1; //1 for 8pos, 2 4pos
       // }
    });

    guiSettingsSnap4DiagonalImage = new BABYLON.GUI.Image("guiSettingsSnap4DiagonalImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_rotate_90_degrees_ccw_white_48px.svg");
    guiSettingsSnap4Diagonal = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnap4Diagonal, guiSettingsSnap4DiagonalImage, 2, 1);
  
    guiSettingsSnap4DiagonalImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
        guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsSnap4Diagonal.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = -1; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 2; //1 for 8pos, 2 4pos
       // }
    });


    guiSettingsSnap4HorizontalImage = new BABYLON.GUI.Image("guiSettingsSnap4HorizontalImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_rotate_90_degrees_ccw_white_48px.svg");
    guiSettingsSnap4Horizontal = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnap4Horizontal, guiSettingsSnap4HorizontalImage, 3, 1);
  
    guiSettingsSnap4HorizontalImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
        guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsSnap4Horizontal.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = 1; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 2; //1 for 8pos, 2 4pos
        
       // }
    });


    guiSettingsSnap8Image = new BABYLON.GUI.Image("guiSettingsSnap8Image", "http://rawgit.com/AlexanderssonErik/web/master/ic_rotate_90_degrees_ccw_white_48px.svg");
    guiSettingsSnap8 = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnap8, guiSettingsSnap8Image, 3, 1);
   
    guiSettingsSnap8Image.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
        guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsSnap8.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = 1; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 1; //1 for 8pos, 2 4pos
       // }
    });
    

    guiSettingsRenderImage = new BABYLON.GUI.Image("guiSettingsRenderImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_settings_system_daydream_white_48px.svg");
    guiSettingsRender = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsRender, guiSettingsRenderImage, 0, 2);
   
    guiSettingsRenderImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();

        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsRenderLowImage.isVisible = true;
        guiSettingsRenderLow.isVisible = true;

        guiSettingsRenderMidImage.isVisible = true;
        guiSettingsRenderMid.isVisible = true;

        guiSettingsRenderHighImage.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;

        
        guiSettingsSnapImage.isVisible = true;
        guiSettingsSnap.isVisible = true;
        
        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;
        guiSettingsRender.alpha = guiSettingsClickTransparancy;
    });


    guiSettingsRenderLowImage = new BABYLON.GUI.Image("guiSettingsRenderLowImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_high_quality_white_48px.svg");
    guiSettingsRenderLow = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsRenderLow, guiSettingsRenderLowImage, 1, 2);

    guiSettingsRenderLowImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsRenderLowImage.isVisible = true;
        guiSettingsRenderLow.isVisible = true;

        guiSettingsRenderMidImage.isVisible = true;
        guiSettingsRenderMid.isVisible = true;

        guiSettingsRenderHighImage.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsRenderLow.alpha = guiSettingsClickTransparancy;
    });


    guiSettingsRenderMidImage = new BABYLON.GUI.Image("guiSettingsRenderMidImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_high_quality_white_48px.svg");
    guiSettingsRenderMid = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsRenderMid, guiSettingsRenderMidImage, 2, 2);
    //guiSettingsStartImage.width = 0.2;
    //guiSettingsStartImage.height = "40px";
  
    guiSettingsRenderMidImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsRenderLowImage.isVisible = true;
        guiSettingsRenderLow.isVisible = true;

        guiSettingsRenderMidImage.isVisible = true;
        guiSettingsRenderMid.isVisible = true;

        guiSettingsRenderHighImage.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsRenderMid.alpha = guiSettingsClickTransparancy;
    });


    guiSettingsRenderHighImage = new BABYLON.GUI.Image("guiSettingsRenderHighImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_high_quality_white_48px.svg");
    guiSettingsRenderHigh = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsRenderHigh, guiSettingsRenderHighImage, 3, 2);
   
    guiSettingsRenderHighImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsRenderLowImage.isVisible = true;
        guiSettingsRenderLow.isVisible = true;

        guiSettingsRenderMidImage.isVisible = true;
        guiSettingsRenderMid.isVisible = true;

        guiSettingsRenderHighImage.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsRenderHigh.alpha = guiSettingsClickTransparancy;
    });

    guiSettingsCompassImage = new BABYLON.GUI.Image("guiSettingsCompassImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_3d_rotation_white_48px.svg");
    guiSettingsCompass = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsCompass, guiSettingsCompassImage, 0, 3);
   
    guiSettingsCompassImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsSnapImage.isVisible = true;
        guiSettingsSnap.isVisible = true;
       
        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;

        guiSettingsCompassOffImage.isVisible = true;
        guiSettingsCompassOff.isVisible = true;

        guiSettingsCompassOnImage.isVisible = true;     
        guiSettingsCompassOn.isVisible = true;     
        guiSettingsCompass.alpha = guiSettingsClickTransparancy;
    });

    guiSettingsCompassOffImage = new BABYLON.GUI.Image("guiSettingsCompassImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_explore_white_48px.svg");
    guiSettingsCompassOff = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsCompassOff, guiSettingsCompassOffImage, 1, 3);
   
    guiSettingsCompassOffImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;

        guiSettingsCompassOffImage.isVisible = true;
        guiSettingsCompassOff.isVisible = true;

        guiSettingsCompassOnImage.isVisible = true; 
        guiSettingsCompassOn.isVisible = true;     
        guiSettingsCompassOff.alpha = guiSettingsClickTransparancy;
    });

    
    guiSettingsCompassOnImage = new BABYLON.GUI.Image("guiSettingsCompassOnImage", "http://rawgit.com/AlexanderssonErik/web/master/ic_explore_white_48px.svg");
    guiSettingsCompassOn = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsCompassOn, guiSettingsCompassOnImage, 2, 3);
    
    guiSettingsCompassOnImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;

        guiSettingsCompassOffImage.isVisible = true;
        guiSettingsCompassOff.isVisible = true;

        guiSettingsCompassOnImage.isVisible = true; 
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
  
   
                
    guiAdvancedTextureSettings.addControl(guiSettingsStart);
    guiAdvancedTextureSettings.addControl(guiSettingsStartImage); 


    guiAdvancedTextureSettings.addControl(guiSettingsHide);
    guiSettingsHide.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsHideImage);
    guiSettingsHideImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsZoom);
    guiSettingsZoom.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsZoomImage);
    guiSettingsZoomImage.isVisible = false;


    guiAdvancedTextureSettings.addControl(guiSettingsSnap);
    guiSettingsSnap.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnapImage);
    guiSettingsSnapImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsSnapOff);
    guiSettingsSnapOff.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnapOffImage);
    guiSettingsSnapOffImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsSnap4Diagonal);
    guiSettingsSnap4Diagonal.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnap4DiagonalImage);
    guiSettingsSnap4DiagonalImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsSnap4Horizontal);
    guiSettingsSnap4Horizontal.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnap4HorizontalImage);
    guiSettingsSnap4HorizontalImage.isVisible = false;


    guiAdvancedTextureSettings.addControl(guiSettingsSnap8);
    guiSettingsSnap8.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnap8Image);
    guiSettingsSnap8Image.isVisible = false;


    guiAdvancedTextureSettings.addControl(guiSettingsRender);
    guiSettingsRender.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderImage);
    guiSettingsRenderImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsRenderLow);
    guiSettingsRenderLow.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderLowImage);
    guiSettingsRenderLowImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsRenderMid);
    guiSettingsRenderMid.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderMidImage);
    guiSettingsRenderMidImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsRenderHigh);
    guiSettingsRenderHigh.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderHighImage);
    guiSettingsRenderHighImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsCompass);
    guiSettingsCompass.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsCompassImage);
    guiSettingsCompassImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsCompassOff);
    guiSettingsCompassOff.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsCompassOffImage);
    guiSettingsCompassOffImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsCompassOn);
    guiSettingsCompassOn.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsCompassOnImage);
    guiSettingsCompassOnImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsSize);
    guiAdvancedTextureSettings.addControl(guiSettingsSizeImage);
    
    
    
    
}




function guiRender(pointerIsDown, compassRender, compassCameraAlpha){

   //let sss = shapesStar.clone("A" );

   if(compassRender){
    
                   // guiRenderCompass(compassRender);
    
                    //camera.alpha =  -compassCameraAlpha;
                    camera.alpha =  -compassCameraAlpha + guiCompassCameraAlphaDiff;
                    
    }else{
    
        guiCompassCameraAlphaDiff = camera.alpha + compassCameraAlpha;
    }

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