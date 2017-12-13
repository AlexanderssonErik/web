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




let camera;

function initShapes(scene){
 //   https://doc.babylonjs.com/how_to/parametric_shapes#extruded-shapes

 //   https://www.babylonjs-playground.com/#165IV6#71

    // baseSidePlane -------------------------------------------------------

    let baseSideShape = [ new BABYLON.Vector3( -4.8,-5,0),		
        new BABYLON.Vector3( -5,-4.8,0),	
        new BABYLON.Vector3( -5,4.8,0), 
        new BABYLON.Vector3( -4.8,5,0),    
        new BABYLON.Vector3( 4.8,5,0),        
        new BABYLON.Vector3( 5,4.8,0),   
        new BABYLON.Vector3( 5,-4.8,0),    
        new BABYLON.Vector3( 4.8,-5,0)                            
        ];

    baseSideShape.push(baseSideShape[0]); //why?

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

    let baseSidePlane = BABYLON.MeshBuilder.ExtrudeShapeCustom("baseSidePlane", {shape: baseSideShape, path: myPath, scaleFunction: scaling, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: false}, scene);
    baseSidePlane.rotation.x = Math.PI/2;
    baseSidePlane.position.x =4.5; 
    baseSidePlane.position.z =4.5;
    baseSidePlane.isPickable = false;

     // baseTopPlane -------------------------------------------------------

     let baseTopShape = [ new BABYLON.Vector3( -4.8,0,-5),		
        new BABYLON.Vector3( -5,0,-4.8),	
        new BABYLON.Vector3( -5,0,4.8), 
        new BABYLON.Vector3( -4.8,0,5),    
        new BABYLON.Vector3( 4.8,0,5),        
        new BABYLON.Vector3( 5,0,4.8),   
        new BABYLON.Vector3( 5,0,-4.8),    
        new BABYLON.Vector3( 4.8,0,-5)                        
        ];

    baseTopPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:baseTopShape, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    baseTopPlane.position.x =4.5; 
    baseTopPlane.position.y =0;
    baseTopPlane.position.z =4.5;
    baseTopPlane.isPickable = false;

    baseTopPlane.enableEdgesRendering();    
    baseTopPlane.edgesWidth = 2.0;
    baseTopPlane.edgesColor = new BABYLON.Color4(0, 0, 0, 0.5);


    // block -------------------------------------------------------

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
    
    let blockChamfNipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    blockChamfNipple1.position.y =1.19;
    blockChamfNipple1.rotation.z = Math.PI;
    
    let blockChamfNipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    blockChamfNipple2.position.z =1;//!
    blockChamfNipple2.position.y =1.19;
    blockChamfNipple2.rotation.z = Math.PI;
    
    let blockNoChamfNipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    blockNoChamfNipple1.position.y =1.19;
    blockNoChamfNipple1.rotation.z = Math.PI;
    
    let blockNoChamfNipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    blockNoChamfNipple2.position.z =1;//!
    blockNoChamfNipple2.position.y =1.19;
    blockNoChamfNipple2.rotation.z = Math.PI;
    
    let blockChamfArray = [blockChamfBody, blockChamfNipple1, blockChamfNipple2];
    blockChamf = BABYLON.Mesh.MergeMeshes(blockChamfArray); 
    scene.meshes.pop();
    
    let blockNoChamfArray = [blockNoChamfBody, blockNoChamfNipple1, blockNoChamfNipple2];
    blockNoChamf = BABYLON.Mesh.MergeMeshes(blockNoChamfArray); 
    scene.meshes.pop();

    let baseNipple = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    baseNipple.rotation.x = Math.PI;

    // baseNipple -------------------------------------------------------

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

    // materials -------------------------------------------------------
        
    let whiteMaterial = new BABYLON.StandardMaterial("whiteMaterial", scene);  
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
        
        /*
        .specularColor = new BABYLON.Color3(0, 0, 0);
        .ambientColor = new BABYLON.Color3(0, 0, 0);
        .alpha = 0.1;
        .backFaceCulling = false;*/
     
    whiteMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
    whiteMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    whiteMaterial.alpha = 100;
    whiteMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    whiteMaterial.ambientColor = new BABYLON.Color3(0, 0, 0);

    baseNipple.material = whiteMaterial  ;
    baseTopPlane.material =  whiteMaterial  ;
    baseSidePlane.material  =  whiteMaterial  ;
    blockChamf.material =  whiteMaterial ;
    blockNoChamf.material =  whiteMaterial ;
      
    //new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-0.5, -0.8, 5), scene);
    //new BABYLON.SpotLight("spotLight1", new BABYLON.Vector3(3, 1, 6), new BABYLON.Vector3(-0.7, -1, 0), Math.PI /1, 10, scene);
    light0 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 5, 0), scene);
        
    light0.specular = new BABYLON.Color3(0, 0, 0);
    light0.specularPower = 0;
    light0.diffuse = new BABYLON.Color3(1, 1, 1);
    light0.intensity =0.75;

    //.excludeMeshes  = [environtmentPlane];
    //.includedOnlyMeshes = [baseTopPlane];
    //.range = 0.5;
     

    light0Pos = BABYLON.Mesh.CreateBox("light0Pos", 1.0, scene);     
    //light0Pos.scaling = new BABYLON.Vector3(3, 1, 1.5);
    light0Pos.position.y = 0;  
    light0Pos.setEnabled(0); 
    light0.parent = light0Pos;
    light0Pos.position.x = 10; //?
    light0Pos.position.z = 10; //?

    // whiteMaterial.maxSimultaneousLights = 20;

    // camera -------------------------------------------------------

        // Parameters: alpha, beta, radius, target position, scene
        camera = new BABYLON.ArcRotateCamera("Camera", 0,0, 10, new BABYLON.Vector3(4.5,0 ,4.5), scene);
        
       // camera.rotation = new BABYLON.Vector3(0, 1, 1);
        //camera.setTarget(BABYLON.Vector3.Zero());
  //  camera.upVector =  new BABYLON.Vector3(0, 0, 1);
   // camera.setPosition(new BABYLON.Vector3(15, 4.5,15));

   camera.setPosition(new BABYLON.Vector3(15,15,15));

    //camera.lowerAlphaLimit =1;
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