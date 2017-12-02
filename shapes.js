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
    
let blockChamf;

let materials = [];

let camera;

function initShapes(scene){



    baseTopPlane = BABYLON.MeshBuilder.CreatePlane("plane", {height:10, width: 10, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
    baseTopPlane.rotation.x = -Math.PI/2;
    baseTopPlane.position.x =4.5; 
    baseTopPlane.position.y =0;
    baseTopPlane.position.z =4.5;


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

    for (let x= 0; x< 10; ++x) {  
        
            for(let y=0; y<10; y++){
        
                if( x == 0 && y ==0){		
              
                }else{
                    let baseNipples = baseNipple.createInstance("baseNipple: " +x+y);
                    baseNipples.position.x = x;
                    baseNipples.position.z = y;
                }
        
            }
        }
        
        let whiteMaterial = new BABYLON.StandardMaterial("whiteMaterial", scene);
        
        
        
        
        
        materials[0] = new BABYLON.StandardMaterial("NA", scene);
        materials[1] = new BABYLON.StandardMaterial("RED", scene);
        
        materials[0].diffuseColor = new BABYLON.Color3(0.9, 0.9, 1);
        materials[1].diffuseColor = new BABYLON.Color3(0, 0, 1);
        
        
        
        
        whiteMaterial.diffuseColor = new BABYLON.Color3(0.9, 0.9, 1);
        //whiteMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        //whiteMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
        //whiteMaterial.ambientColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        //whiteMaterial.backFaceCulling = false;
        baseNipple.material = whiteMaterial  ;
        baseTopPlane.material =  whiteMaterial  ;

        //customMesh[0].material = myMaterial;
//customMesh[0].enableEdgesRendering();    
//customMesh[0].edgesWidth = 20.0;
//customMesh[0].edgesColor = new BABYLON.Color4(0, 0, 1, 0.5);
    

        let light0 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 5, 10), scene);
        light0.specular = new BABYLON.Color3(0, 0, 0);
        light0.specularPower = 0;
        light0.diffuse = new BABYLON.Color3(1, 1, 1);
        light0.intensity =0.75;


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

        camera.lowerRadiusLimit = 10;
        camera.upperRadiusLimit = 30;
    // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
    camera.angularSensibilityX = 5000;
    camera.angularSensibilityY = 5000;
    camera.angularSensibilityZ = 5000;
    camera.wheelPrecision = 50;

}