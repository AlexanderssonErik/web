let levelActive;

let advancedTextureLevel;
let guiLevelNext;
let guiLevelNextImage;

let levelStart;
let levelStartImage;

let level = [];
let levelImage = [];
let levelHorizontalCount = 0;
let levelVerticalCount = 0;

function guiLevelButtonSize(guiSettingsSizeM){
    let guiSettingsPaddingBottom = 10;
    let guiSettingsPaddingTop = 5;    

    if(levelStart){

    guiSettingsSizeChange(guiLevelNext, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, true);
    guiSettingsSizeChange(guiLevelNextImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, true);
    
    guiSettingsSizeChange(levelStart, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom, true);
    guiSettingsSizeChange(levelStartImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom, true);

    for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){

        if(i < levelHorizontalCount){
            guiSettingsSizeChange(level[i], guiSettingsSizeM, guiSettingsPaddingBottom+guiSettingsSizeM*(i+1), guiSettingsPaddingBottom, true);
            guiSettingsSizeChange(levelImage[i], guiSettingsSizeM, guiSettingsPaddingBottom+guiSettingsSizeM*(i+1), guiSettingsPaddingBottom, true);
        
        }else{
            guiSettingsSizeChange(level[i], guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM*(i+1-levelHorizontalCount), true);
            guiSettingsSizeChange(levelImage[i], guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM*(i+1-levelHorizontalCount), true);
        }
    }

    }

}

function guiLevelPointerUp(){

    if(levelActive){
        
        levelStart.alpha = guiSettingsNoClickTransparancy;
        levelActive = false;
            scene.activeCamera.attachControl(canvas);

            for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){
                level[i].isVisible = false;                                          
                levelImage[i].isVisible = false;

            }   

        }

}


    function resetTransperancy(){
        levelStart.alpha = guiSettingsNoClickTransparancy;
        for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){
            level[i].alpha = guiSettingsNoClickTransparancy;                                          
        }

    }

    function guiLevelInit(horizontal, vertical){
        
        
        let levelImages = [];

        levelImages[0] = "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg";
        levelImages[1] = "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg";
        levelImages[2] = "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg";
        levelImages[3] = "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg";
        levelImages[4] = "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg";
        levelImages[5] = "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg";
        levelImages[6] = "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg";
        levelImages[7] = "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg";
        levelImages[8] = "http://rawgit.com/AlexanderssonErik/web/master/ic_flip_to_front_white_48px.svg";


        levelHorizontalCount = horizontal;
        levelVerticallCount = vertical;
        
        advancedTextureLevel = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Level");
        
        
        
            guiLevelNextImage = new BABYLON.GUI.Image("Next", "http://rawgit.com/AlexanderssonErik/web/master/ic_settings_white_48px.svg");
            guiLevelNext = new BABYLON.GUI.Ellipse();

            
            guiInitButtonEllipseImage(guiLevelNext, guiLevelNextImage, 0, 1, true, true, true);

            guiLevelNextImage.onPointerDownObservable.add(function() {
                guiLevelNext.isVisible = false;
                guiLevelNextImage.isVisible = false;
        
                guiAnimateStopWinningAndNext();

               /* particleSystem.stop();
        
                scene.stopAnimation(shapesStar);
                scene.stopAnimation(shapesStar2);
                scene.stopAnimation(shapesStar3);
    
                starAnimatableScale.stop();
                if(starAnimatableScale2){
                starAnimatableScale2.stop();
                starAnimatableScale3.stop();
                }
                shapesStar.setEnabled(0); 
                shapesStar2.setEnabled(0); 
                shapesStar3.setEnabled(0); */
        
        
                biloNext = true;
        
            });

            advancedTextureLevel.addControl(guiLevelNext);
            guiLevelNext.isVisible = false;
            advancedTextureLevel.addControl(guiLevelNextImage); 
            guiLevelNextImage.isVisible = false;
                
            levelStartImage = new BABYLON.GUI.Image("Start", "http://rawgit.com/AlexanderssonErik/web/master/ic_settings_white_48px.svg");
            levelStart = new BABYLON.GUI.Ellipse();

       
           guiInitButtonEllipseImage(levelStart, levelStartImage, 0, 0, false, true, true);
        
            
            levelStartImage.onPointerDownObservable.add(function() {
                
                for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){
                    level[i].isVisible = true;                                          
                    levelImage[i].isVisible = true;
    
                }
                resetTransperancy();

         
                levelStart.alpha = guiSettingsClickTransparancy;

                levelActive = true;
                biloLevel = 0;
                scene.activeCamera.detachControl(canvas);
            });
            levelStartImage.onPointerMoveObservable.add(function() {
                
                if(levelActive){
                 
                   biloLevel = 0;

                   resetTransperancy();

                    levelStart.alpha = guiSettingsClickTransparancy;
      
                }
        
            });

                     
            advancedTextureLevel.addControl(levelStart);
            advancedTextureLevel.addControl(levelStartImage); 
        
        
        //--
        for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){

                                                   
            levelImage[i] = new BABYLON.GUI.Image("levelImage", levelImages[i]);
            level[i] = new BABYLON.GUI.Ellipse();

            if(i < levelHorizontalCount){
                guiInitButtonEllipseImage(level[i], levelImage[i], i+1, 0, false, true, true);
            }else{
                guiInitButtonEllipseImage(level[i], levelImage[i], 0, i+1 - levelHorizontalCount, false, true, true);
            } 
           levelImage[i].onPointerMoveObservable.add(function() {
                
                resetTransperancy();
                         
                level[i].alpha = guiSettingsClickTransparancy;
                   
                 biloLevel = i +1;        
                                 
                       
            });

            
            advancedTextureLevel.addControl(level[i]);
            level[i].isVisible = false;
            advancedTextureLevel.addControl(levelImage[i]);
            levelImage[i].isVisible = false;

        }
   
    }

    function guiWinningAndNext(wins){
        guiAnimateWin(wins);
        
        guiLevelNext.isVisible = true;
        guiLevelNextImage.isVisible = true;
    
    }