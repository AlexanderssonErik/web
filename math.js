let mathtextblock1;
let mathtextblock2;
let mathtextblock3;
let mathtextblock4;
let mathtextblock5;



function mathInit(){
   

    let mathPlane1 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane1.position.y = 3;
    mathPlane1.position.x = 1.5;
    mathPlane1.position.z = 2;
    mathPlane1.rotation.x = Math.PI/8;
 
       let mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane1);
 
 
       mathtextblock1 = new BABYLON.GUI.TextBlock();
       mathtextblock1.height = "150px";
       mathtextblock1.fontSize = 100;
       mathtextblock1.text = "1";
       mathtextblock1.color= "#A020A0";
 
     mathAdvancedTexture.addControl(mathtextblock1);  
 
     //------------
 
     let mathPlane2 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane2.position.y = 3;
    mathPlane2.position.z = 2;
    mathPlane2.position.x = 3;
    mathPlane2.rotation.x = Math.PI/8;
 
       //var mathAdvancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
       mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
 
 
        mathtextblock2 = new BABYLON.GUI.TextBlock();
       mathtextblock2.height = "150px";
       mathtextblock2.fontSize = 100;
       mathtextblock2.text = "+";
       mathtextblock2.color = "#801080";
 
     mathAdvancedTexture.addControl(mathtextblock2);  
 
     //--------------
 
     let mathPlane3 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane3.position.y = 3;
    mathPlane3.position.x = 4.5;
    mathPlane3.position.z = 2;
    mathPlane3.rotation.x = Math.PI/8;
 
       //var mathAdvancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
       mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane3);
 
 
        mathtextblock3 = new BABYLON.GUI.TextBlock();
       mathtextblock3.height = "150px";
       mathtextblock3.fontSize = 100;
       mathtextblock3.text = "2";
       mathtextblock3.color = "#801080";
 
     mathAdvancedTexture.addControl(mathtextblock3);  
 
         //--------------
 
         let mathPlane4 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane4.position.y = 3;
    mathPlane4.position.x = 6;
    mathPlane4.position.z = 2;
    mathPlane4.rotation.x = Math.PI/8;
 
       //var mathAdvancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
       mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane4);
 
 
        mathtextblock4 = new BABYLON.GUI.TextBlock();
       mathtextblock4.height = "150px";
       mathtextblock4.fontSize = 100;
       mathtextblock4.text = "=";
       mathtextblock4.color ="#801080";
 
     mathAdvancedTexture.addControl(mathtextblock4);  
 
             //--------------
 
             let mathPlane5 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane5.position.y = 3;
    mathPlane5.position.x = 7.5;
    mathPlane5.position.z = 2;
    mathPlane5.rotation.x = Math.PI/8;
 
       //var mathAdvancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
       mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane5);
 
 
        mathtextblock5 = new BABYLON.GUI.TextBlock();
       mathtextblock5.height = "150px";
       mathtextblock5.fontSize = 100;
      // mathtextblock5.text = '¼';
       mathtextblock5.text = "¼½3";
      // mathtextblock5.color = "green";
      mathtextblock5.color = "#801080";
     mathAdvancedTexture.addControl(mathtextblock5); 
 

     camera.alpha = - Math.PI/2;
     scene.activeCamera.detachControl(canvas);
}

function mathRender(){
}