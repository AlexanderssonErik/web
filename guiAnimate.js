let particleSystem;

let shapesStar2;
let shapesStar3;

var starAnimateYR;
var starAnimateYR2;
var starAnimateYR3;
var starAnimateScale;

let starAnimatableScale;
let starAnimatableScale2;
let starAnimatableScale3;

function guiAnimateInit(){
    
        shapesStar2 =  shapesStar.createInstance("shapesStar2");
        shapesStar3 =  shapesStar.createInstance("shapesStar3");
    
        shapesStar.position.x =4.5; 
        shapesStar.position.y =2; 
        shapesStar.position.z =4.5;
    
        shapesStar2.position.x =4.5; 
        shapesStar2.position.y =2; 
        shapesStar2.position.z =6.5;
        
        shapesStar3.position.x =4.5; 
        shapesStar3.position.y =2; 
        shapesStar3.position.z =2.5;
    
        shapesStar2.setEnabled(0);
        shapesStar3.setEnabled(0);
    
        var url = "http://upload.wikimedia.org/wikipedia/en/8/86/Einstein_tongue.jpg";
    
          // Create a particle system
          particleSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
          
              //Texture of each particle
              particleSystem.particleTexture = new BABYLON.Texture(url, scene);
          
              // Where the particles come from
              particleSystem.emitter = shapesStar; // the starting object, the emitter
              particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
              particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...
          
              // Colors of all particles
              //particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
              particleSystem.color1 = new BABYLON.Color4(0.9, 1, 0, 1.0);
              //particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
              particleSystem.color2 = new BABYLON.Color4(0.8, 0.9, 0, 1.0);
              particleSystem.colorDead = new BABYLON.Color4(0.7, 0.8, 0, 0.5);
          
              // Size of each particle (random between...
              //particleSystem.minSize = 0.1;
              //particleSystem.maxSize = 0.5;
              particleSystem.minSize = 0.05;
              particleSystem.maxSize = 0.3;
          
              // Life time of each particle (random between...
              particleSystem.minLifeTime = 0.3;
              //particleSystem.maxLifeTime = 1.5;
              particleSystem.maxLifeTime = 1;
          
              // Emission rate
              particleSystem.emitRate = 200;
          
              // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
              particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
          
              // Set the gravity of all particles
              particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
          
              // Direction of each particle after it has been emitted
             // particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
             // particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);
          
              particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
              particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);
          
              // Angular speed, in radians
              particleSystem.minAngularSpeed = 0;
              particleSystem.maxAngularSpeed = Math.PI;
          
              // Speed
              particleSystem.minEmitPower = 1;
              particleSystem.maxEmitPower = 3;
              particleSystem.updateSpeed = 0.005;
    
    }
    
function guiAnimateStopWinningAndNext(){
    guiLevelNext.isVisible = false;
    guiLevelNextImage.isVisible = false;

    particleSystem.stop();

    scene.stopAnimation(shapesStar);
    scene.stopAnimation(shapesStar2);
    scene.stopAnimation(shapesStar3);

    /*scene.stopAnimation(starAnimatableScale);
    scene.stopAnimation(starAnimatableScale2);
    scene.stopAnimation(starAnimatableScale3);*/

    if(starAnimatableScale){
    starAnimatableScale.stop();
    }
    if(starAnimatableScale2){
    starAnimatableScale2.stop();
    starAnimatableScale3.stop();
    }
    shapesStar.setEnabled(0); 
    shapesStar2.setEnabled(0); 
    shapesStar3.setEnabled(0); 


}


function guiAnimateWin(wins){
    
        var starAnimateFrameRate = 10;
        //var starAnimateFrameTime = 2; //speed
       // var starAnimateYR;
        //var starAnimateYR2;
        //var starAnimateYR3;
        //var starAnimateScale;
        var starAnimateKeyFrames = []; 
        var starAnimateScaleKeyFrames = []; 
        var starAnimateScaleKeyFrames2 = []; 
        let starAnimatableYR;
        //let starAnimatableXR;
              
        //let starAnimatableScale;
        //let starAnimatableScale2;
        //let starAnimatableScale3;
    
        //let shapesStar2;
        //let shapesStar3;
        let nextColor
        
        shapesStar.setEnabled(1); 
     //!!
     /*   
        shapesStar.position.x =4.5; 
        shapesStar.position.y =2; 
        shapesStar.position.z =4.5;
    */
        //console.log("Math.floor(wins/3): " + Math.floor(wins/3));
        
        if(Math.floor(wins/3) < 4){
            shapesStar.material = shapesMaterialsStar[Math.floor(wins/3)];
            nextColor = Math.floor(wins/3) + 1;
            
        }else{
            shapesStar.material = shapesMaterialsStar[4];
            nextColor = 4;
        }
    
       
    
       
        if(wins% 3 == 2 ){
            shapesStar2.setEnabled(1);
            shapesStar3.setEnabled(1);
        
 
    
        }
        
       
        
        starAnimateYR = new BABYLON.Animation("starAnimateYR", "rotation.y", starAnimateFrameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE );
        //starAnimateXR = new BABYLON.Animation("starAnimateXR", "rotation.z", starAnimateFrameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE );
        starAnimateScale = new BABYLON.Animation("starAnimateScale", "scaling", starAnimateFrameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE );
        if(wins% 3 == 2 ){
        starAnimateScale2 = new BABYLON.Animation("starAnimateScale", "scaling", starAnimateFrameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT );
        }
        
        
        //.scaling = new BABYLON.Vector3(3, 3, 3);
        starAnimateKeyFrames.push({
            frame: 0,
            value: 0
        });
        
        starAnimateKeyFrames.push({
            frame: cameraAnimateFrameRate,
            value: Math.PI
        });
        
        starAnimateKeyFrames.push({
            frame: cameraAnimateFrameRate*2,
            value: Math.PI*2
        });
        
        
        starAnimateScaleKeyFrames.push({
            frame: 0,
            value: new BABYLON.Vector3(1, 1, 1)
        });
        
        starAnimateScaleKeyFrames.push({
            frame: cameraAnimateFrameRate,
            value: new BABYLON.Vector3(1.5, 1.5, 1.5)
        });
        
        starAnimateScaleKeyFrames.push({
            frame: cameraAnimateFrameRate*2,
            value: new BABYLON.Vector3(1, 1, 1)
        });
        
        if(wins% 3 ==2 ){
    
        starAnimateScaleKeyFrames2.push({
            frame: 0,
            value: new BABYLON.Vector3(1, 1, 1)
        });
        
        starAnimateScaleKeyFrames2.push({
            frame: cameraAnimateFrameRate,
            value: new BABYLON.Vector3(0.6, 0.6, 0.6)
        });
        
        starAnimateScaleKeyFrames2.push({
            frame: cameraAnimateFrameRate*2,
            value: new BABYLON.Vector3(0, 0, 0)
        });
        
    }
        
        
        // scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
        //var cameraAnimatable = scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
        starAnimatableYR = scene.beginDirectAnimation(shapesStar, [starAnimateYR], 0, 2 * starAnimateFrameRate, true);
        starAnimatableScale = scene.beginDirectAnimation(shapesStar, [starAnimateScale], 0, 2 *   starAnimateFrameRate, true);
    
        if(wins% 3 == 2 ){
        starAnimatableYR2 = scene.beginDirectAnimation(shapesStar2, [starAnimateYR], 0, 2 * starAnimateFrameRate, true);
        starAnimatableYR3 = scene.beginDirectAnimation(shapesStar3, [starAnimateYR], 0, 2 * starAnimateFrameRate, true);
       
        starAnimatableScale2 = scene.beginDirectAnimation(shapesStar2, [starAnimateScale2], 0, 2 *   starAnimateFrameRate, false);
        //starAnimatableScale2 = scene.beginDirectAnimation(shapesStar3, [starAnimateScale2], 0, 2 *   starAnimateFrameRate, true);
        starAnimatableScale3 = scene.beginDirectAnimation(shapesStar3, [starAnimateScale2], 0, 2 *   starAnimateFrameRate, false, 1, function (){shapesStar.material = shapesMaterialsStar[nextColor];;});
        }
        //tarAnimatableXR = scene.beginDirectAnimation(shapesStar, [starAnimateXR], 0, 2 * starAnimateFrameRate, true);
        //starAnimatable.animationStarted = false;
          
        starAnimateYR.setKeys(starAnimateKeyFrames);
        starAnimateScale.setKeys(starAnimateScaleKeyFrames);
        if(wins% 3 == 2 ){
        starAnimateScale2.setKeys(starAnimateScaleKeyFrames2);
        //starAnimateXR.setKeys(starAnimateKeyFrames);
        }
        
        
     
            particleSystem.start();
        
    
    }