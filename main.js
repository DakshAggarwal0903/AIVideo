zearray=[];
zestatus="";

function preload(){
 video=createVideo('video.mp4');
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}
function draw(){
    image(video,0,0,480,380);
    if(zestatus != ""){
        a.detect(video,errorr);
        for(i=0;i<zearray.length;i++){
        document.getElementById("stas").innerHTML="Object is Detected";
        document.getElementById("nobj").innerHTML="The number of objects is: "+zearray.length;
        t=zearray[i].label;
        c=floor(zearray[i].confidence*100)
        fill('red');
        stroke('red');
        noFill()
        text(t+" "+c+"%",zearray[i].x+5,zearray[i].y+15);
        rect(zearray[i].x,zearray[i].y,zearray[i].width,zearray[i].height);
        }
    }
}
function startstart(){
   a= ml5.objectDetector('cocossd',detectorr);
   document.getElementById("stas").innerHTML="CocoSSD has been loaded";
}
function detectorr(){
    console.log("CocoSSD Detected, Model Loaded")
    zestatus=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}
function errorr(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        zearray=results;
    }
}