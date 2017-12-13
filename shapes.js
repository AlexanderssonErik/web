let  nippleShape = [ new BABYLON.Vector3(-0.21,0, -0.29),		
    new BABYLON.Vector3(0.21,0, -0.29), 
    new BABYLON.Vector3(0.29,0, -0.21),    
    new BABYLON.Vector3(0.29,0, 0.21), 
    new BABYLON.Vector3(0.21,0, 0.29), 
    new BABYLON.Vector3(-0.21,0, 0.29), 
    new BABYLON.Vector3(-0.29,0, 0.21), 
    new BABYLON.Vector3(-0.29, 0, -0.21) 		                    
    ];

let baseTopPlane;

let blockNoChamf;
    
let light0;

var light0Pos;

let blockChamf;

let materials = [];

//let materialsLED = [];

let lightLED = [];


let camera;

function initShapes(scene){
 //   https://doc.babylonjs.com/how_to/parametric_shapes#extruded-shapes

 //   https://www.babylonjs-playground.com/#165IV6#71

   /* let baseTopShape = [ new BABYLON.Vector3( -5,-5,0),		
        new BABYLON.Vector3( -5,5,0), 
        new BABYLON.Vector3( 5,5,0),    
        new BABYLON.Vector3( 5,-5, 0)                            
        ];
*/
        let baseSideShape = [ new BABYLON.Vector3( -4.8,-5,0),		
            new BABYLON.Vector3( -5,-4.8,0),	
            new BABYLON.Vector3( -5,4.8,0), 
            new BABYLON.Vector3( -4.8,5,0),    
            new BABYLON.Vector3( 4.8,5,0),        
            new BABYLON.Vector3( 5,4.8,0),   
            new BABYLON.Vector3( 5,-4.8,0),    
            new BABYLON.Vector3( 4.8,-5,0)                            
            ];

            let baseTopShape = [ new BABYLON.Vector3( -4.8,0,-5),		
                new BABYLON.Vector3( -5,0,-4.8),	
                new BABYLON.Vector3( -5,0,4.8), 
                new BABYLON.Vector3( -4.8,0,5),    
                new BABYLON.Vector3( 4.8,0,5),        
                new BABYLON.Vector3( 5,0,4.8),   
                new BABYLON.Vector3( 5,0,-4.8),    
                new BABYLON.Vector3( 4.8,0,-5)                        
                ];

        
/*
        let baseTopShape = [ new BABYLON.Vector3( 0, 0, 0),		
            new BABYLON.Vector3( 0,10,0), 
            new BABYLON.Vector3( 10,10,0),    
            new BABYLON.Vector3( 10,0,0)                            
            ];
*/
baseSideShape.push(baseSideShape[0]);

      /*  var myPath = [
            new BABYLON.Vector3(0, 0, 0),
            new BABYLON.Vector3(0, 2, 0),
            new BABYLON.Vector3(0, 6, 0),
            new BABYLON.Vector3(0, 8, 0),
            new BABYLON.Vector3(0, 10, 0)
            
    ];*/

	var myPath = [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(0, 0, 0.2),
        new BABYLON.Vector3(0, 0, 1.19)
      
];


var scaling = function(i, distance) {
    if(i == 0){
        return 1;
    }else if(i == 1){
        return 0.95;
    }else if(i == 2){
        return 0.9;
    }
    return 0.1;
   // return 1/(i+1);
};

//Create custom extrusion with updatable parameter set to true for later changes
let baseSidePlane = BABYLON.MeshBuilder.ExtrudeShapeCustom("baseSidePlane", {shape: baseSideShape, path: myPath, scaleFunction: scaling, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: false}, scene);

baseSidePlane.rotation.x = Math.PI/2;
baseSidePlane.position.x =4.5; 

baseSidePlane.position.z =4.5;

baseSidePlane.isPickable = false;
//--








//--
    //baseTopPlane = BABYLON.MeshBuilder.CreatePlane("plane", {height:10, width: 10, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);

    baseTopPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:baseTopShape, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);

   

    //baseTopPlane.rotation.x = -Math.PI/2;
    baseTopPlane.position.x =4.5; 
    baseTopPlane.position.y =0;
    baseTopPlane.position.z =4.5;

    baseTopPlane.isPickable = false;


    /*environtmentPlanex = BABYLON.MeshBuilder.CreatePlane("plane", {height:12, width: 12, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
    
    environtmentPlanex.rotation.x = -Math.PI/2;
    environtmentPlanex.position.x =4.5; 
    environtmentPlanex.position.y =0;
    environtmentPlanex.position.z =4.5;

    environtmentPlanex.isPickable = false;
*/


 /*   environtmentPlane = BABYLON.MeshBuilder.CreatePlane("plane", {height:1000, width: 1000, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
    
    environtmentPlane.rotation.x = -Math.PI/2;
    environtmentPlane.position.x =4.5; 
    environtmentPlane.position.y =-1.19;
    environtmentPlane.position.z =4.5;

    environtmentPlane.isPickable = false;
  */

    let chamfBlockShape = [ new BABYLON.Vector3( -0.48,0,-0.3),		
        new BABYLON.Vector3( -0.48,0,0.5), 
        new BABYLON.Vector3( 1.48,0,0.5),    
        new BABYLON.Vector3( 1.48,0, -0.3), 
        new BABYLON.Vector3( 1.3,0,-0.48), 
        new BABYLON.Vector3(-0.3,0,-0.48 )                             
        ];
        
    let noChamfBlockShape = [ new BABYLON.Vector3( -0.48,0,-0.5),		
        new BABYLON.Vector3(-0.48,0,0.5 ), 
        new BABYLON.Vector3( 1.48,0,0.5), 
        new BABYLON.Vector3( 1.48,0,-0.5)                             
        ];

    let blockChamfBody = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:chamfBlockShape, depth: 1.18, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    blockChamfBody.rotation.z = Math.PI;
    blockChamfBody.rotation.y = Math.PI/2;;
    
    let blockNoChamfBody = BABYLON.MeshBuilder.ExtrudePolygon("polygonx", {shape:noChamfBlockShape, depth: 1.18, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    blockNoChamfBody.rotation.z = Math.PI;
    blockNoChamfBody.rotation.y = Math.PI/2;;
    //blockNoChamfBody.rotation.x = -Math.PI/2;
    
    let blockChamfNipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    blockChamfNipple1.position.y =1.19;
    blockChamfNipple1.rotation.z = Math.PI;
    //blockChamfNipple1.rotation.x = -Math.PI/2;
    
    let blockChamfNipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    blockChamfNipple2.position.z =1;//!
    blockChamfNipple2.position.y =1.19;
    blockChamfNipple2.rotation.z = Math.PI;
    //blockChamfNipple2.rotation.x = -Math.PI/2;
    
    let blockNoChamfNipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
 
    blockNoChamfNipple1.position.y =1.19;
    blockNoChamfNipple1.rotation.z = Math.PI;
    
    //blockNoChamfNipple1.position.z =1.19;
    //blockNoChamfNipple1.rotation.x = -Math.PI/2;
    
    let blockNoChamfNipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    blockNoChamfNipple2.position.z =1;//!
    blockNoChamfNipple2.position.y =1.19;
    blockNoChamfNipple2.rotation.z = Math.PI;
    //blockNoChamfNipple2.rotation.x = -Math.PI/2;
    
    let blockChamfArray = [blockChamfBody, blockChamfNipple1, blockChamfNipple2];
    blockChamf = BABYLON.Mesh.MergeMeshes(blockChamfArray); 
    scene.meshes.pop();
    
    let blockNoChamfArray = [blockNoChamfBody, blockNoChamfNipple1, blockNoChamfNipple2];
    blockNoChamf = BABYLON.Mesh.MergeMeshes(blockNoChamfArray); 
    scene.meshes.pop();

 //   blockChamf.position.x = 1;

    let baseNipple = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    baseNipple.rotation.x = Math.PI;

    baseNipple.enableEdgesRendering();    
    baseNipple.edgesWidth = 2.0;
    baseNipple.edgesColor = new BABYLON.Color4(0, 0, 0, 0.5);

    for (let x= 0; x< 10; ++x) {  
        
            for(let y=0; y<10; y++){
        
                if( x == 0 && y ==0){		
                   
              
                }else{
                    let baseNipples = baseNipple.createInstance("baseNipple: " +x+y);
                    baseNipples.position.x = x;
                    baseNipples.position.z = y;
                    baseNipples.isPickable = false;

                    baseNipples.enableEdgesRendering();    
                    baseNipples.edgesWidth = 2.0;
                    baseNipples.edgesColor = new BABYLON.Color4(0, 0, 0, 0.5);
                    
                }
        
            }
        }
        
        let whiteMaterial = new BABYLON.StandardMaterial("whiteMaterial", scene);
        let whiteMaterialTransparent = new BABYLON.StandardMaterial("whiteMaterialTransparent", scene);
        
        
        
        let emissiveColor = 0.2;
        
        materials[0] = new BABYLON.StandardMaterial("NA", scene);
        materials[1] = new BABYLON.StandardMaterial("RED", scene);
        materials[2] = new BABYLON.StandardMaterial("GREEN", scene);
        materials[3] = new BABYLON.StandardMaterial("YELLOW", scene);
        materials[4] = new BABYLON.StandardMaterial("BLUE", scene);
        materials[5] = new BABYLON.StandardMaterial("PURPLE", scene);
        materials[6] = new BABYLON.StandardMaterial("CYAN", scene);
        materials[7] = new BABYLON.StandardMaterial("WHITE", scene);
        
        materials[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
        materials[0].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        materials[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
        materials[1].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
        materials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
        materials[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
        materials[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
        materials[3].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
        materials[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
        materials[4].emissiveColor = new BABYLON.Color3(0, 0, emissiveColor);
        materials[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
        materials[5].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
        materials[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
        materials[6].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
        materials[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
        materials[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
        
      //  let environtmentPlaneColor = new BABYLON.StandardMaterial("environtmentPlane", scene);
       // environtmentPlaneColor.diffuseColor  = new BABYLON.Color3(0.7, 0.7, 0.7);
        /*environtmentPlaneColor.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        environtmentPlaneColor.specularColor = new BABYLON.Color3(0, 0, 0);
        environtmentPlaneColor.ambientColor = new BABYLON.Color3(0, 0, 0);*/
       // environtmentPlaneColor.alpha = 0.1;

        whiteMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
        whiteMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        whiteMaterial.alpha = 100;
        whiteMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        whiteMaterial.ambientColor = new BABYLON.Color3(0, 0, 0);

      //  whiteMaterialTransparent.diffuseColor  = new BABYLON.Color3(1, 1, 1);
       // whiteMaterialTransparent.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        //whiteMaterialTransparent.alpha = 0.5;
      //  whiteMaterialTransparent.specularColor = new BABYLON.Color3(0, 0, 0);
      //  whiteMaterialTransparent.ambientColor = new BABYLON.Color3(0, 0, 0);

        //!whiteMaterial.diffuseColor = new BABYLON.Color3(0.9, 0.9, 1);
        //whiteMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        //whiteMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
        //whiteMaterial.ambientColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        //whiteMaterial.backFaceCulling = false;
        baseNipple.material = whiteMaterial  ;
        baseTopPlane.material =  whiteMaterial  ;
        baseSidePlane.material  =  whiteMaterial  ;
      

        //environtmentPlane.material = environtmentPlaneColor  ;


        blockChamf.material =  whiteMaterial ;
        blockNoChamf.material =  whiteMaterial ;

        //customMesh[0].material = myMaterial;
//customMesh[0].enableEdgesRendering();    
//customMesh[0].edgesWidth = 20.0;
//customMesh[0].edgesColor = new BABYLON.Color4(0, 0, 1, 0.5);

        //LED in base

        let emissiveColorLED = 1;
        
       /* materialsLED[0] = new BABYLON.StandardMaterial("NA LED", scene);
        materialsLED[1] = new BABYLON.StandardMaterial("RED LED", scene);
        materialsLED[2] = new BABYLON.StandardMaterial("GREEN LED", scene);
        materialsLED[3] = new BABYLON.StandardMaterial("YELLOW LED", scene);
        materialsLED[4] = new BABYLON.StandardMaterial("BLUE LED", scene);
        materialsLED[5] = new BABYLON.StandardMaterial("PURPLE LED", scene);
        materialsLED[6] = new BABYLON.StandardMaterial("CYAN LED", scene);
        materialsLED[7] = new BABYLON.StandardMaterial("WHITE LED", scene);
        
        materialsLED[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
        materialsLED[0].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        materialsLED[1].diffuseColor = new BABYLON.Color3(0, 0, 0);
        materialsLED[1].emissiveColor = new BABYLON.Color3(emissiveColorLED, 0, 0);
  
        materialsLED[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
        materialsLED[2].emissiveColor = new BABYLON.Color3(0, emissiveColorLED, 0);
        materialsLED[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
        materialsLED[3].emissiveColor = new BABYLON.Color3(emissiveColorLED, emissiveColorLED, 0);
        materialsLED[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
        materialsLED[4].emissiveColor = new BABYLON.Color3(0, 0, emissiveColorLED);
        materialsLED[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
        materialsLED[5].emissiveColor = new BABYLON.Color3(emissiveColorLED, 0, emissiveColorLED);
        materialsLED[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
        materialsLED[6].emissiveColor = new BABYLON.Color3(0, emissiveColorLED, emissiveColorLED);
        materialsLED[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
        materialsLED[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
        

        var sphere = BABYLON.Mesh.CreateSphere("LED1", 1, 1, scene);
        sphere.material= materialsLED[5];

        sphere.position.z =1;
        sphere.position.x =1;
        sphere.position.y =0;*/

        //let lightLED1 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, 0), scene);
       // var lightLED1 = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-1, -2, -1), scene);
     //   var lightLED1 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(-1, -1, -0.1), scene);

        //var lightLED1 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(-2, -2, -2), new BABYLON.Vector3(0, -1, 0),3, 2, scene);

        //let 

        //---------------
       
      //!!  var lightLED1 = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-0.5, -0.8, 5), scene);

        //var lightLED1 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 30, -10), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
        //!!var lightLED1 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(-0.8, -0.2, 5), new BABYLON.Vector3(0.5, -1, 0), Math.PI / 2,2,  scene);
        //lightLED1.specular = new BABYLON.Color3(0, 0, 0);
       // lightLED1.specularPower = 0;
    //!!lightLED1.diffuse = new BABYLON.Color3(0, 0, 1);
       //!! lightLED1.intensity =0.7;
        //lightLED1.range = 0.5;
        //!!lightLED1.includedOnlyMeshes = [baseSidePlane, environtmentPlane];

        //light0 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(15, -15, 15), scene);
        light0 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 5, 0), scene);
        //!!light0 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 5, 0), new BABYLON.Vector3(0, -1, 0), Math.PI / 2,2,  scene);
        light0.specular = new BABYLON.Color3(0, 0, 0);
        light0.specularPower = 0;
        light0.diffuse = new BABYLON.Color3(1, 1, 1);
        light0.intensity =0.75;

        //light0.excludeMeshes  = [environtmentPlane];
        //light0.includedOnlyMeshes = [baseTopPlane];

        light0Pos = BABYLON.Mesh.CreateBox("light0Pos", 1.0, scene);     
        //light0Pos.scaling = new BABYLON.Vector3(3, 1, 1.5);
        light0Pos.position.y = 0;  
        light0Pos.setEnabled(0); 
       // camera.parent = chassis;
        light0.parent = light0Pos;
        light0Pos.position.x = 10; 
        light0Pos.position.z = 10; 


       /* whiteMaterial.maxSimultaneousLights = 20;

        environtmentPlaneColor.maxSimultaneousLights = 20;

        materials[0].maxSimultaneousLights = 23;
        materials[1].maxSimultaneousLights = 23;
        materials[2].maxSimultaneousLights = 23;
        materials[3].maxSimultaneousLights = 23;
        materials[4].maxSimultaneousLights = 23;
        materials[5].maxSimultaneousLights = 23;
        materials[6].maxSimultaneousLights = 23;
        materials[7].maxSimultaneousLights = 23;
*/
        


 //Base LED 

 //lightLED[0] = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-0.5, 0, 4.5), scene);
/*
 lightLED[0] = new BABYLON.SpotLight("spotLight1", new BABYLON.Vector3(3, 1, 3), new BABYLON.Vector3(-0.7, -1, 0), Math.PI /1, 10, scene);
 lightLED[0].diffuse = new BABYLON.Color3(0, 1, 0); 
 //lightLED[0].diffuse = new BABYLON.Color3(0, 1, 0); 
 lightLED[0].intensity =3;
 lightLED[0].includedOnlyMeshes = [environtmentPlane];// [baseSidePlane, environtmentPlane];

 lightLED[1] = new BABYLON.SpotLight("spotLight1", new BABYLON.Vector3(3, 1, 6), new BABYLON.Vector3(-0.7, -1, 0), Math.PI /1, 10, scene);
 lightLED[1].diffuse = new BABYLON.Color3(0, 1, 0); 
 lightLED[1].intensity =3;
 lightLED[1].includedOnlyMeshes = [environtmentPlane];// [baseSidePlane, environtmentPlane];
*/
 /*
 lightLED[1] = new BABYLON.SpotLight("spotLight1", new BABYLON.Vector3(2, 0, 4.5), new BABYLON.Vector3(-0.5, -1, 0), Math.PI /1, 10, scene);
 lightLED[1].diffuse = new BABYLON.Color3(0, 1, 0); 
 lightLED[1].intensity =10;
 lightLED[1].includedOnlyMeshes = [environtmentPlane];// [baseSidePlane, environtmentPlane];
*/
//--

 //lightLED[1] = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(4.5, -0.8, 9.5), scene);
 //lightLED[1] =  new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(4.5, 2.5, 3), new BABYLON.Vector3(0, -1, 0.7), Math.PI , 10, scene);
 //lightLED[1].diffuse = new BABYLON.Color3(1, 0, 0); 
 //lightLED[1].intensity =1;
 //lightLED[1].includedOnlyMeshes = [environtmentPlane];//  [baseSidePlane, environtmentPlane];

/*

 //--


 lightLED[2] = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(9.5, 0, 4.5), scene);
 lightLED[2].diffuse = new BABYLON.Color3(0, 0, 1); 
 lightLED[2].intensity =10;
 lightLED[2].includedOnlyMeshes = [environtmentPlane];//  [baseSidePlane, environtmentPlane];
 



 lightLED[3] = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(4.5, 0, -0.5), scene);
 lightLED[3].diffuse = new BABYLON.Color3(0,0, 0); 
 lightLED[3].intensity =10;
 lightLED[3].includedOnlyMeshes = [environtmentPlane];

*/

        //light0.positon.y =  -15;// new BABYLON.Vector3(15,-15,15);
        //light0.position.x  = 0.5;
        // Parameters: alpha, beta, radius, target position, scene
        camera = new BABYLON.ArcRotateCamera("Camera", 0,0, 10, new BABYLON.Vector3(4.5,0 ,4.5), scene);
        
       // camera.rotation = new BABYLON.Vector3(0, 1, 1);
        //camera.setTarget(BABYLON.Vector3.Zero());
    // Positions the camera overwriting alpha, beta, radius

    /*
    camera.upVector =  new BABYLON.Vector3(1, 0, 0);
       camera.setPosition(new BABYLON.Vector3(-15, 4.5,15));
*/
  //  camera.upVector =  new BABYLON.Vector3(0, 0, 1);
   // camera.setPosition(new BABYLON.Vector3(15, 4.5,15));

   camera.setPosition(new BABYLON.Vector3(15,15,15));

   // camera.upVector =  new BABYLON.Vector3(0,0, 0);
   // camera.setPosition(new BABYLON.Vector3(15, 15,15));

 //  camera.lowerAlphaLimit =1;
   //camera.upperAlphaLimit =2;

   //camera.lowerBetaLimit =Math.PI/8;
   camera.upperBetaLimit  = Math.PI - Math.PI/2;

        camera.lowerRadiusLimit = 10;
        camera.upperRadiusLimit = 30;
    // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
    camera.angularSensibilityX = 5000;
    camera.angularSensibilityY = 5000;
    camera.angularSensibilityZ = 5000;
    camera.wheelPrecision = 50;

    //camera.parent = light0;
    //camera.useBouncingBehavior = true;

}