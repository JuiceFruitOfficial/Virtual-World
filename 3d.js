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
function load3dmodel(data, editor,add=false) {
    var world       = editor.getWorld()
    var scene       = world.getScene()
    var editor      = new voxelcss.Editor(world);
    var ls=scene.getLightSources()
    if (add==false) {
    for (var i=0; i < ls.length; i++) {
        scene.removeLightSource(ls[i])
    }
    var voxels=world.getVoxels()
	for (var i=0; i < voxels.length; i++) {
		var voxel=voxels[i]
		world.remove(voxel)
    }
}
    //blockname,x,y,z,dimesnsion
    var data1=data.split(";")
    for (var i=0; i < data1.length-1; i++) {
        var blockname=data1[i].split(",") [0]
        var blockx=Number(data1[i].split(",") [1])
        var blocky=Number(data1[i].split(",") [2])
        var blockz=Number(data1[i].split(",") [3])
        var blockdimension=data1[i].split(",") [4]
        if (blockname=="lightsource") {
            var ls=new voxelcss.LightSource(blockx,blocky,blockz,Number(blockdimension.split("+")[0]),Number(blockdimension.split("+")[1]),Number(blockdimension.split("+")[2]))
            //ls.setTravelDistance(300)
            scene.addLightSource(ls)
        }else{
            var blockdimension=Number(blockdimension)
        var vface=new voxelcss.ColorFace(0,0,0)
        var vblock=new voxelcss.Mesh().setFaces(vface)
        vblock=getBlock(blockname)
        //console.log([blockname,blockx, blocky, blockz, blockdimension])
        var voxel=new voxelcss.Voxel(blockx, blocky, blockz, blockdimension)
        voxel.setMesh(vblock)
        
        world.add(voxel)
        if (blockname=="button") {
            if (data1[i].split(",").length > 5) {
                var el=scene.getParentElement().getElementsByClassName("scene") [0].getElementsByClassName("zoom")[0].getElementsByClassName("camera")[0].getElementsByClassName("cube") [scene.getVoxels().length-1]
                el.setAttribute("oncontextmenu", data1[i].substring(data1[i].indexOf(",",data1[i].indexOf(",",data1[i].indexOf(",",data1[i].indexOf(",",data1[i].indexOf(",")+1)+1)+1)+1)+1, data1[i].length))
                el.setAttribute("onclick", data1[i].substring(data1[i].indexOf(",",data1[i].indexOf(",",data1[i].indexOf(",",data1[i].indexOf(",",data1[i].indexOf(",")+1)+1)+1)+1)+1, data1[i].length))

            
            }
        }
    }
    }
    return world.export()
}
var usepath=""
function getBlock(blockname) {
    if (blockname=="grass") {
        return voxelcss.Meshes.grass
    }
    if (blockname=="wood") {
        return voxelcss.Meshes.treeTrunk
    }
    if (blockname=="leaves") {
        return voxelcss.Meshes.treeLeaves
    }
    if (blockname=="dirt") {
        return voxelcss.Meshes.dirt
    }
    if (blockname=="sand") {
        var vface=new voxelcss.ImageFace(usepath + "images/sand.png")
        var vblock=new voxelcss.Mesh()
        vblock.setFaces(vface)
        return vblock
    }
    if (blockname=="button") {
        var vface=new voxelcss.ImageFace(usepath + "images/btn.png")
        var vblock=new voxelcss.Mesh()
        vblock.setFaces(vface)
        return vblock
    }
    if (blockname=="bricks") {
        var vface=new voxelcss.ImageFace(usepath + "images/brick.png")
        var vblock=new voxelcss.Mesh()
        vblock.setFaces(vface)
        return vblock
    }
    if (blockname.includes(":")) {
        if (blockname.split(":") [0]=="color") {
            
            var vface=new voxelcss.ColorFace(blockname.split(":") [1])
            var vblock=new voxelcss.Mesh()
            //console.log(vface)
            vblock.setFaces(vface)
            return vblock
        }
    }
}
var blocklist=["grass","leaves","dirt","sand","bricks","button","wood"]
//------------------------------Models-------------------------------
var shopmodel="wood,-100,0,0,100;wood,0,0,0,100;wood,-100,0,-100,100;wood,-100,0,100,100;wood,0,0,100,100;wood,0,0,-100,100;wood,100,0,-100,100;wood,100,0,0,100;wood,100,0,100,100;bricks,-100,100,-200,100;bricks,0,100,-200,100;bricks,100,100,-200,100;bricks,200,100,-100,100;bricks,200,100,0,100;bricks,200,100,100,100;bricks,100,200,-200,100;bricks,0,200,-200,100;bricks,-100,200,-200,100;bricks,200,200,-100,100;bricks,200,200,100,100;bricks,100,100,200,100;bricks,100,200,200,100;bricks,0,100,200,100;bricks,0,200,200,100;bricks,-100,200,200,100;bricks,-100,100,200,100;bricks,-200,100,100,100;bricks,-200,200,100,100;bricks,-200,100,0,100;bricks,-200,100,-100,100;bricks,-200,200,-100,100;bricks,200,300,100,100;bricks,200,300,0,100;bricks,200,300,-100,100;bricks,100,300,-200,100;bricks,0,300,-200,100;bricks,-100,300,-200,100;bricks,100,300,200,100;bricks,0,300,200,100;bricks,-100,300,200,100;bricks,-200,300,100,100;bricks,-200,300,0,100;bricks,-200,300,-100,100;leaves,100,400,100,100;leaves,0,400,100,100;leaves,-100,400,100,100;leaves,100,400,0,100;leaves,0,400,0,100;leaves,100,400,-100,100;leaves,0,400,-100,100;leaves,-100,400,-100,100;leaves,-100,400,0,100;bricks,200,200,0,100;button,-200,200,0,100,loadplace('startIsland');lightsource,300,300,300,750+0.5+1;"
var babychar="color:ffa493,0,0,-100,100;color:ffa493,-100,0,0,100;color:ffa493,0,0,100,100;color:ffa493,0,-100,0,100;color:ffa493,0,-100,-100,100;color:ffa493,0,-100,100,100;color:ffa493,-100,-100,-100,100;color:ffa493,-100,-100,0,100;color:ffa493,-100,-100,100,100;color:ffa493,-200,-100,100,100;color:ffa493,-200,-100,-100,100;color:ffa493,-200,-100,0,100;color:ffa493,-100,0,-100,100;color:ffa493,-100,0,100,100;color:ffa493,-200,0,0,100;color:ffa493,0,0,0,100;color:000000,-200,0,100,100;color:000000,-200,0,-100,100;color:a74c00,0,100,100,100;color:a74c00,-100,100,100,100;color:a74c00,-200,100,100,100;color:a74c00,0,100,0,100;color:a74c00,-100,100,0,100;color:a74c00,-200,100,0,100;color:a74c00,0,100,-100,100;color:a74c00,-100,100,-100,100;color:a74c00,-200,100,-100,100;color:000dff,-200,-200,100,100;color:000dff,-100,-200,100,100;color:000dff,-200,-200,0,100;color:000dff,-100,-200,0,100;color:000dff,0,-200,100,100;color:000dff,0,-200,0,100;color:000dff,0,-200,-100,100;color:000dff,-100,-200,-100,100;color:000dff,-200,-200,-100,100;color:000dff,-100,-200,200,100;color:000dff,0,-200,200,100;color:000dff,100,-200,200,100;color:000dff,100,-200,100,100;color:000dff,100,-300,200,100;color:000dff,100,-300,100,100;color:ff0013,0,-300,100,100;color:ff0013,0,-300,0,100;color:ff0013,0,-300,-100,100;color:ff0013,-100,-300,-100,100;color:ff0013,-100,-300,0,100;color:ff0013,-100,-300,100,100;color:ff0013,-200,-300,0,100;color:ff0013,-200,-300,-100,100;color:000dff,-200,-200,200,100;color:ff0013,-200,-300,100,100;color:ff0013,-200,-400,-100,100;color:ff0013,-200,-400,0,100;color:ff0013,-200,-400,100,100;color:ff0013,-100,-400,100,100;color:ff0013,0,-400,100,100;color:ff0013,-100,-400,-100,100;color:ff0013,-100,-400,0,100;color:ff0013,0,-400,-100,100;color:ff0013,0,-400,0,100;color:000dff,100,-200,0,100;color:000dff,100,-200,-100,100;color:000dff,100,-300,0,100;color:000dff,100,-300,-100,100;color:000dff,100,-400,200,100;color:000dff,100,-400,100,100;color:000dff,100,-400,0,100;color:000dff,100,-400,-100,100;color:000dff,100,-200,-200,100;color:000dff,0,-200,-200,100;color:000dff,-100,-200,-200,100;color:000dff,-200,-200,-200,100;color:000dff,100,-300,-200,100;color:000dff,100,-400,-200,100;color:ff0013,-200,-500,-100,100;color:ff0013,-200,-500,0,100;color:ff0013,-200,-500,100,100;color:ff0013,-100,-500,-100,100;color:ff0013,-100,-500,0,100;color:ff0013,-100,-500,100,100;color:ff0013,0,-500,100,100;color:ff0013,0,-500,0,100;color:ff0013,0,-500,-100,100;lightsource,300,300,300,750+0.5+1;"
var treemodel="grass,0,0,0,100;wood,0,100,0,100;wood,0,200,0,100;wood,0,300,0,100;wood,0,400,0,100;wood,0,500,0,100;wood,0,600,0,100;wood,0,700,0,100;leaves,-100,700,0,100;leaves,-100,600,0,100;leaves,0,600,100,100;leaves,0,700,100,100;leaves,100,600,0,100;leaves,100,700,0,100;leaves,0,600,-100,100;leaves,0,700,-100,100;leaves,0,800,0,100;leaves,-100,500,0,100;leaves,-100,500,-100,100;leaves,-100,600,-100,100;leaves,0,500,-100,100;leaves,100,500,0,100;leaves,100,500,-100,100;leaves,-100,500,100,100;leaves,0,500,100,100;leaves,100,500,100,100;leaves,0,500,200,100;leaves,-100,500,200,100;leaves,-200,500,-100,100;leaves,-200,500,0,100;leaves,-200,500,100,100;leaves,100,500,200,100;leaves,200,500,-100,100;leaves,200,500,0,100;leaves,200,500,100,100;leaves,100,500,-200,100;leaves,0,500,-200,100;leaves,-100,500,-200,100;leaves,100,600,-100,100;leaves,100,600,100,100;leaves,-100,600,100,100;leaves,0,600,200,100;leaves,-200,600,0,100;leaves,0,600,-200,100;leaves,200,600,0,100;lightsource,300,300,300,750+0.5+1;"
var spawnmodel="grass,0,0,0,100;wood,0,100,0,100;wood,0,200,0,100;wood,0,300,0,100;wood,0,400,0,100;wood,0,500,0,100;wood,0,600,0,100;wood,0,700,0,100;leaves,-100,700,0,100;leaves,-100,600,0,100;leaves,0,600,100,100;leaves,0,700,100,100;leaves,100,600,0,100;leaves,100,700,0,100;leaves,0,600,-100,100;leaves,0,700,-100,100;leaves,0,800,0,100;leaves,-100,500,0,100;leaves,-100,500,-100,100;leaves,-100,600,-100,100;leaves,0,500,-100,100;leaves,100,500,0,100;leaves,100,500,-100,100;leaves,-100,500,100,100;leaves,0,500,100,100;leaves,100,500,100,100;leaves,0,500,200,100;leaves,-100,500,200,100;leaves,-200,500,-100,100;leaves,-200,500,0,100;leaves,-200,500,100,100;leaves,100,500,200,100;leaves,200,500,-100,100;leaves,200,500,0,100;leaves,200,500,100,100;leaves,100,500,-200,100;leaves,0,500,-200,100;leaves,-100,500,-200,100;leaves,100,600,-100,100;leaves,100,600,100,100;leaves,-100,600,100,100;leaves,0,600,200,100;leaves,-200,600,0,100;leaves,0,600,-200,100;leaves,200,600,0,100;grass,0,0,100,100;grass,0,0,200,100;grass,0,0,300,100;grass,0,0,400,100;grass,-100,0,0,100;grass,-200,0,0,100;grass,-300,0,0,100;grass,-400,0,0,100;grass,-100,0,100,100;grass,-200,0,100,100;grass,-300,0,100,100;grass,-400,0,100,100;grass,-100,0,200,100;grass,-200,0,200,100;grass,-300,0,200,100;grass,-400,0,200,100;grass,-100,0,300,100;grass,-200,0,300,100;grass,-300,0,300,100;grass,-400,0,300,100;grass,-100,0,400,100;grass,-200,0,400,100;grass,-300,0,400,100;grass,-400,0,400,100;wood,0,0,500,100;wood,-100,0,500,100;wood,-200,0,500,100;wood,-300,0,500,100;wood,-400,0,500,100;dirt,-400,0,600,100;dirt,-400,0,700,100;dirt,-300,0,600,100;dirt,-300,0,700,100;dirt,-200,0,600,100;dirt,-200,0,700,100;dirt,-100,0,600,100;dirt,-100,0,700,100;dirt,0,0,600,100;dirt,0,0,700,100;dirt,0,0,800,100;dirt,-100,0,800,100;dirt,-200,0,800,100;dirt,-300,0,800,100;dirt,-400,0,800,100;wood,0,0,900,100;wood,-100,0,900,100;wood,-200,0,900,100;wood,-300,0,900,100;wood,-400,0,900,100;grass,-400,0,1000,100;grass,-300,0,1000,100;grass,0,0,1000,100;grass,-100,0,1000,100;grass,-200,0,1000,100;grass,-400,0,1100,100;grass,-300,0,1100,100;grass,0,0,1100,100;grass,-100,0,1100,100;grass,-200,0,1100,100;grass,0,0,1200,100;grass,-100,0,1200,100;grass,-200,0,1200,100;grass,-300,0,1200,100;grass,-400,0,1200,100;grass,0,0,1300,100;grass,-200,0,1300,100;grass,-300,0,1300,100;grass,-100,0,1300,100;grass,-400,0,1300,100;wood,0,100,1300,100;wood,0,200,1300,100;wood,0,300,1300,100;wood,0,400,1300,100;leaves,0,500,1300,100;leaves,-100,500,1300,100;leaves,-200,500,1300,100;leaves,0,500,1200,100;leaves,-100,500,1200,100;leaves,-200,500,1200,100;leaves,0,500,1100,100;leaves,-100,500,1100,100;leaves,0,500,1400,100;leaves,-100,500,1400,100;leaves,-200,500,1400,100;leaves,0,500,1500,100;leaves,-100,500,1500,100;leaves,100,500,1100,100;leaves,100,500,1200,100;leaves,100,500,1300,100;leaves,100,500,1400,100;leaves,100,500,1500,100;leaves,200,500,1200,100;leaves,200,500,1300,100;leaves,200,500,1400,100;leaves,0,600,1500,100;leaves,-200,600,1300,100;leaves,0,600,1100,100;leaves,200,600,1300,100;leaves,100,600,1200,100;leaves,100,600,1400,100;leaves,-100,600,1200,100;leaves,0,700,1200,100;leaves,-100,700,1300,100;leaves,100,700,1300,100;leaves,-100,600,1400,100;leaves,0,700,1400,100;leaves,0,700,1300,100;leaves,0,800,1300,100;color:ffffff,-500,0,500,100;color:ffffff,-500,0,600,100;color:ffffff,-500,0,700,100;color:ffffff,-500,0,800,100;color:ffffff,-500,0,900,100;color:ffffff,-500,100,900,100;color:ffffff,-500,100,500,100;color:ffffff,-500,200,900,100;color:ffffff,-500,300,900,100;color:ffffff,-500,200,500,100;color:ffffff,-500,300,500,100;color:ffffff,-500,400,900,100;color:ffffff,-500,400,800,100;color:ffffff,-500,400,700,100;color:ffffff,-500,400,600,100;color:ffffff,-500,400,500,100;color:ffffff,-500,0,1000,100;color:ffffff,-500,100,1000,100;color:ffffff,-500,200,1000,100;color:ffffff,-500,300,1000,100;color:ffffff,-500,400,1000,100;color:ffffff,-500,0,400,100;color:ffffff,-500,100,400,100;color:ffffff,-500,200,400,100;color:ffffff,-500,300,400,100;color:ffffff,-500,400,400,100;color:ffffff,-600,0,1000,100;color:ffffff,-700,0,1000,100;color:ffffff,-800,0,1000,100;color:ffffff,-600,0,400,100;color:ffffff,-700,0,400,100;color:ffffff,-800,0,400,100;color:ffffff,-900,0,400,100;color:ffffff,-900,0,1000,100;color:ffffff,-600,0,900,100;color:ffffff,-600,0,800,100;color:ffffff,-600,0,700,100;color:ffffff,-600,0,500,100;color:ffffff,-600,0,600,100;color:ffffff,-700,0,900,100;color:ffffff,-700,0,800,100;color:ffffff,-700,0,700,100;color:ffffff,-700,0,600,100;color:ffffff,-700,0,500,100;color:ffffff,-800,0,900,100;color:ffffff,-800,0,800,100;color:ffffff,-800,0,700,100;color:ffffff,-800,0,600,100;color:ffffff,-800,0,500,100;color:ffffff,-900,0,900,100;color:ffffff,-900,0,800,100;color:ffffff,-900,0,700,100;color:ffffff,-900,0,600,100;color:ffffff,-900,0,500,100;lightsource,300,300,300,750+0.5+1;"
var ship1model="color:ffffff,100,0,0,100;color:ffffff,0,0,100,100;color:ffffff,200,0,0,100;color:ffffff,200,0,100,100;color:ffffff,0,0,200,100;color:ffffff,100,0,200,100;color:ffffff,200,0,200,100;color:ffffff,100,0,100,100;color:ffffff,0,0,0,100;color:ffffff,-100,0,0,100;color:ffffff,-100,0,100,100;color:ffffff,-100,0,200,100;color:ffffff,100,0,300,100;color:ffffff,0,0,300,100;color:ffffff,-100,0,300,100;color:ffffff,-100,100,-100,100;color:ffffff,0,100,-100,100;color:ffffff,100,100,-100,100;color:ffffff,200,100,-100,100;color:ffffff,-100,200,-100,100;color:ffffff,0,200,-100,100;color:ffffff,100,200,-100,100;color:ffffff,200,200,-100,100;color:ffffff,-100,300,-100,100;color:ffffff,0,300,-100,100;color:ffffff,100,300,-100,100;color:ffffff,200,300,-100,100;color:ffffff,300,100,0,100;color:ffffff,300,100,100,100;color:ffffff,300,100,200,100;color:ffffff,300,100,300,100;color:ffffff,300,200,0,100;color:ffffff,300,200,100,100;color:ffffff,300,200,200,100;color:ffffff,300,200,300,100;color:ffffff,300,300,300,100;color:ffffff,300,300,200,100;color:ffffff,300,300,100,100;color:ffffff,300,300,0,100;color:ffffff,-200,100,0,100;color:ffffff,-200,100,100,100;color:ffffff,-200,100,200,100;color:ffffff,-200,100,300,100;color:ffffff,-200,200,0,100;color:ffffff,-200,200,100,100;color:ffffff,-200,200,200,100;color:ffffff,-200,200,300,100;color:ffffff,-200,300,0,100;color:ffffff,-200,300,100,100;color:ffffff,-200,300,200,100;color:ffffff,-200,300,300,100;color:ffffff,-100,100,400,100;color:ffffff,-100,200,400,100;color:ffffff,-100,300,400,100;color:ffffff,200,0,300,100;color:ffffff,200,100,400,100;color:ffffff,200,200,400,100;color:ffffff,200,300,400,100;color:ffffff,0,100,400,100;color:ffffff,100,100,400,100;color:ffffff,0,300,400,100;color:ffffff,100,300,400,100;color:ffffff,0,200,400,100;color:ffffff,100,200,400,100;color:ffffff,-100,400,300,100;color:ffffff,0,400,300,100;color:ffffff,100,400,300,100;color:ffffff,200,400,300,100;color:ffffff,-100,400,200,100;color:ffffff,-100,400,100,100;color:ffffff,0,400,100,100;color:ffffff,-100,400,0,100;color:ffffff,0,400,0,100;color:ffffff,100,400,0,100;color:ffffff,200,400,0,100;color:ffffff,200,400,200,100;color:ffffff,200,400,100,100;color:ffffff,0,400,200,100;color:ffffff,100,400,200,100;color:ffffff,100,400,100,100;lightsource,300,300,300,750+0.5+1;"
var taximodel="color:fff400,0,0,30,30;color:fff400,0,30,30,30;color:fff400,-30,30,30,30;color:fff400,-60,30,30,30;color:fff400,-90,30,30,30;color:fff400,-120,0,30,30;color:fff400,-120,30,30,30;color:fff400,-90,0,30,30;color:fff400,-210,0,30,30;color:fff400,-150,30,30,30;color:fff400,-180,30,30,30;color:fff400,-210,30,30,30;color:fff400,-90,0,0,30;color:fff400,-120,0,0,30;color:fff400,-150,0,0,30;color:fff400,-180,0,0,30;color:fff400,-210,0,0,30;color:fff400,-240,0,0,30;color:fff400,-240,30,0,30;color:fff400,-240,0,-30,30;color:fff400,-240,0,-60,30;color:fff400,-240,0,-90,30;color:fff400,-240,30,-30,30;color:fff400,-240,30,-90,30;color:fff400,-240,30,-60,30;color:fff400,-60,0,0,30;color:fff400,-30,0,0,30;color:fff400,-210,0,-90,30;color:fff400,-180,0,-90,30;color:fff400,-150,0,-90,30;color:fff400,-120,0,-90,30;color:fff400,-90,0,-90,30;color:fff400,-60,0,-90,30;color:fff400,-30,0,-90,30;color:fff400,-210,30,-120,30;color:fff400,-180,30,-120,30;color:fff400,-150,30,-120,30;color:fff400,-120,30,-120,30;color:fff400,-90,30,-120,30;color:fff400,-60,30,-120,30;color:fff400,-30,30,-120,30;color:fff400,0,0,-30,30;color:fff400,0,0,-60,30;color:fff400,0,0,-90,30;color:fff400,0,0,-120,30;color:fff400,-90,0,-120,30;color:fff400,-120,0,-120,30;color:fff400,-210,0,-120,30;color:fff400,0,30,0,30;color:fff400,0,30,-30,30;color:fff400,0,30,-60,30;color:fff400,0,30,-90,30;color:fff400,0,30,-120,30;color:fff400,0,0,0,30;color:fff400,0,60,-120,30;color:fff400,0,90,-120,30;color:fff400,0,120,-120,30;color:fff400,-90,60,-120,30;color:fff400,-90,90,-120,30;color:fff400,-30,120,-120,30;color:fff400,-90,120,-120,30;color:fff400,-60,120,-120,30;color:fff400,-120,60,-120,30;color:fff400,-120,90,-120,30;color:fff400,-210,60,-120,30;color:fff400,-120,120,-120,30;color:fff400,-180,90,-120,30;color:fff400,-150,120,-120,30;color:fff400,-120,120,-90,30;color:fff400,-120,120,-60,30;color:fff400,-120,120,-30,30;color:fff400,-120,120,0,30;color:fff400,-120,60,30,30;color:fff400,-120,90,30,30;color:fff400,-120,120,30,30;color:fff400,-150,120,30,30;color:fff400,-210,60,30,30;color:fff400,-180,90,30,30;color:fff400,0,60,30,30;color:fff400,0,90,30,30;color:fff400,0,120,30,30;color:fff400,-90,120,30,30;color:fff400,-60,120,30,30;color:fff400,-30,120,30,30;color:fff400,0,120,0,30;color:fff400,0,120,-30,30;color:fff400,0,120,-60,30;color:fff400,0,120,-90,30;color:000000,-180,0,-120,30;color:000000,-150,0,-120,30;color:000000,-180,-30,-120,30;color:000000,-150,-30,-120,30;color:000000,-60,0,-120,30;color:000000,-30,0,-120,30;color:000000,-30,-30,-120,30;color:000000,-60,-30,-120,30;color:000000,-180,0,30,30;color:000000,-180,-30,30,30;color:000000,-150,0,30,30;color:000000,-150,-30,30,30;color:000000,-30,0,30,30;color:000000,-60,0,30,30;color:000000,-60,-30,30,30;color:000000,-30,-30,30,30;color:62c7ff,-150,120,0,30;color:62c7ff,-150,120,-30,30;color:62c7ff,-150,120,-60,30;color:62c7ff,-150,120,-90,30;color:62c7ff,-180,90,0,30;color:62c7ff,-180,90,-30,30;color:62c7ff,-180,90,-60,30;color:62c7ff,-180,90,-90,30;color:62c7ff,-210,60,0,30;color:62c7ff,-210,60,-30,30;color:62c7ff,-210,60,-60,30;color:62c7ff,-210,60,-90,30;color:62c7ff,-90,120,0,30;color:62c7ff,-90,120,-30,30;color:62c7ff,-90,120,-60,30;color:62c7ff,-90,120,-90,30;color:62c7ff,-60,120,0,30;color:62c7ff,-30,120,0,30;color:62c7ff,-60,120,-30,30;color:62c7ff,-30,120,-30,30;color:62c7ff,-60,120,-60,30;color:62c7ff,-30,120,-60,30;color:62c7ff,-30,120,-90,30;color:62c7ff,-60,120,-90,30;color:62c7ff,-30,60,-120,30;color:62c7ff,-30,90,-120,30;color:62c7ff,-60,60,-120,30;color:62c7ff,-60,90,-120,30;color:62c7ff,-150,60,-120,30;color:62c7ff,-150,90,-120,30;color:62c7ff,-180,60,-120,30;color:62c7ff,0,60,-90,30;color:62c7ff,0,60,-60,30;color:62c7ff,0,60,-30,30;color:62c7ff,0,60,0,30;color:62c7ff,0,90,0,30;color:62c7ff,0,90,-30,30;color:62c7ff,0,90,-60,30;color:62c7ff,0,90,-90,30;color:62c7ff,-30,60,30,30;color:62c7ff,-60,60,30,30;color:62c7ff,-90,60,30,30;color:62c7ff,-90,90,30,30;color:62c7ff,-60,90,30,30;color:62c7ff,-30,90,30,30;color:62c7ff,-150,60,30,30;color:62c7ff,-150,90,30,30;color:62c7ff,-180,60,30,30;lightsource,300,300,300,750+0.5+1;"
