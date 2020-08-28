function create3delement(name, x,y,z,x2,y2,z2,rotation=[0,0],type="cube") {
    if (x < x2) {
        var width=x2-x
    }else{
        var width=x-x2
    }
    if (y < y2) {
        var height=x2-x
    }else{
        var height=y-y2
    }
    if (z < z2) {
        var depth=z2-z
    }else{
        var depth=z-z2
    }
    if (type=="cube") {
        var newelementx=document.createElement("div")
        var newelementy=document.createElement("div")
        var newelementz=document.createElement("div")
        //Set the sizes of the cube

        newelementz.style.borderLeftWidth=(depth /2) + "px"
        newelementz.style.borderTopWidth=(depth /2)+ "px"
        newelementz.style.borderRightWidth=(depth /2)+ "px"
        newelementz.style.borderBottomWidth=(depth /2) + "px"
        newelementz.style.width=width + "px"
        newelementz.style.height=height + "px"
        //Set the position
        if (x > x2) {
            newelementy.style.left=x2+"px"
            newelementz.style.left=x2+"px"
        }else{
            newelementy.style.left=x+"px"
            newelementz.style.left=x+"px"
        }
        if (z > z2) {
            newelementx.style.left=z2+"px"
            newelementy.style.top=z2+"px"
        }else{
            newelementx.style.left=z+"px"
            newelementy.style.top=z+"px"
        }
        if (y > y2) {
            newelementx.style.top=y2+"px"
            newelementz.style.top=y2+"px"
        }else{
            newelementx.style.top=y+"px"
            newelementz.style.top=y+"px"
        }
        //colors
        
        newelementz.style.borderStyle="solid"
        newelementz.style.borderColor="rgba(0,0,0,0)"
        newelementz.style.backgroundColor="cyan"
        //Put the position to absolute
        newelementx.style.position="absolute"
        newelementz.style.position="absolute"
        newelementy.style.position="absolute"
        //Put the elements in the 3d
        var addelement=newelementz.cloneNode(true)
        projectorElements.push(addelement)
        newelementz.style.backgroundColor="rgba(0,0,0,0)"
        newelementz.style.borderLeftColor="blue"
        var addelement=newelementz.cloneNode(true)
        projectorElements.push(addelement)
        newelementz.style.borderTopColor="orange"
        newelementz.style.borderLeftColor="rgba(0,0,0,0)"
        var addelement=newelementz.cloneNode(true)
        projectorElements.push(addelement)
        newelementz.style.borderRightColor="green"
        newelementz.style.borderTopColor="rgba(0,0,0,0)"
        var addelement=newelementz.cloneNode(true)
        projectorElements.push(addelement)
        newelementz.style.borderRightColor="rgba(0,0,0,0)"
        newelementz.style.borderBottomColor="red"
        var addelement=newelementz.cloneNode(true)
        projectorElements.push(addelement)
    }
}

function load3d(element) {
	var PI          = Math.PI;
	var scene       = new voxelcss.Scene();
	var lightSource = new voxelcss.LightSource(300, 300, 300, 750, 0.3, 1);
	var world       = new voxelcss.World(scene);
	var editor      = new voxelcss.Editor(world);

	scene.rotate(-PI / 8, PI / 4, 0);
	scene.attach(element);
	scene.addLightSource(lightSource);

	editor.enableAutoSave();
	editor.load();

	if (world.getVoxels().length === 0) {
		editor.add(new voxelcss.Voxel(0, 0, 0, 100, {
			mesh: voxelcss.Meshes.grass
		}));
	}
}

//load3d()