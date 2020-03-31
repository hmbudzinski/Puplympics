let alfie = {
    name: "Alfie",
    time: 1,
    runTrue: true,
    distance: 0,
    points: 0
};

let lincoln = {
    name: "Lincoln",
    time: 1,
    runTrue: true,
    distance: 0,
    points: 0
};

let tuck = {
    name: "Tuck",
    time: 1,
    runTrue: true,
    distance: 0,
    points: 0
};

let sullivan = {
    name: "Sullivan",
    time: 1,
    runTrue: true,
    distance: 0,
    points: 0
};

let stitch= {
    name: "Stitch",
    time: 1,
    runTrue: true,
    distance: 0,
    points: 0
};

let zema = {
    name: "Zema",
    time: 1,
    runTrue: true,
    distance: 0,
    points: 0
};

let mara = {
    name: "Mara",
    time: 1,
    runTrue: true,
    distance: 0,
    points: 0
};

let butter = {
    name: "Butter",
    time: 1,
    runTrue: true,
    distance: 0,
    points: 0
};

let ember = {
    name: "Ember",
    time: 1,
    runTrue: true,
    distance: 0,
    points: 0
};

let time = 0; 
let timer;
let topDogsI = 0;
let topDog;
let countdown = 200;
$(".alert").hide();

$(".btn").on("click", function(event){
    event.preventDefault();
    $(".btn").hide();

    timer = setInterval(function(){
        beginRace();
        $("#countdown").empty();
        $("#countdown").append(countdown--); 
    }, 1000);
});
    

function beginRace() {
    time++;
    
    if(time === 200){
        clearInterval(timer);
        $("#welcometxt").hide();
        $("#pagetimer").hide();
        $("#countdown").hide();
        $(".alert").show();
        $(".btn").show();
    };
    
    alfieRun();
    lincolnRun();
    tuckRun();
    sullivanRun();
    stitchRun();
    zemaRun();
    maraRun();
    butterRun();
    emberRun();
    topDogs();
    pageRender();
    postPoints();
    
};

function topDogs(){
    var topDogArray = [alfie, lincoln, tuck, sullivan, stitch, zema, mara, butter, ember];

    for(var i = 0; i < topDogArray.length; i++){
        if( i === 0 ){
            topDog = topDogArray[0];
        }
        if( topDog.distance < topDogArray[i].distance){
            topDog = topDogArray[i];
            topDogsI = i;
        }
    };

    topDogArray[topDogsI].points++;
    $("#topdogalert").empty();
    $("#topdogalert").append(topDogArray[topDogsI].name);
};

function pageRender(){

    $("#alfie").empty();
    $("#alfie").append(alfie.distance); 

    $("#lincoln").empty();
    $("#lincoln").append(lincoln.distance);

    $("#tuck").empty();
    $("#tuck").append(tuck.distance);

    $("#sullivan").empty();
    $("#sullivan").append(sullivan.distance);

    $("#stitch").empty();
    $("#stitch").append(stitch.distance);

    $("#zema").empty();
    $("#zema").append(zema.distance);

    $("#mara").empty();
    $("#mara").append(mara.distance);

    $("#butter").empty();
    $("#butter").append(butter.distance);

    $("#ember").empty();
    $("#ember").append(ember.distance);

};

function postPoints(){

    $("#alfiepoints").empty();
    $("#alfiepoints").append(alfie.points); 

    $("#lincolnpoints").empty();
    $("#lincolnpoints").append(lincoln.points);

    $("#tuckpoints").empty();
    $("#tuckpoints").append(tuck.points);

    $("#sullivanpoints").empty();
    $("#sullivanpoints").append(sullivan.points);

    $("#stitchpoints").empty();
    $("#stitchpoints").append(stitch.points);

    $("#zemapoints").empty();
    $("#zemapoints").append(zema.points);

    $("#marapoints").empty();
    $("#marapoints").append(mara.points);

    $("#butterpoints").empty();
    $("#butterpoints").append(butter.points);

    $("#emberpoints").empty();
    $("#emberpoints").append(ember.points);
};

function alfieRun(){
    if( alfie.runTrue ){
        alfie.distance = alfie.distance + 5;
        if( alfie.time === 17){ 
            alfie.runTrue = false;
            alfie.time = 1;
        } else{ 
            alfie.time++;
        }
    } else{ 
        if(alfie.time === 57){
        alfie.runTrue = true;
        alfie.time = 1;
        }else{
            alfie.time++;
        }
    }
};

function lincolnRun(){

    if( lincoln.runTrue ){
        lincoln.distance = lincoln.distance + 28;
        if( lincoln.time === 6){ 
            lincoln.runTrue = false;
            lincoln.time = 1;
        } else{ 
            lincoln.time++;
        }
    } else{ 
        if(lincoln.time === 133){
        lincoln.runTrue = true;
        lincoln.time = 1;
        }else{
            lincoln.time++;
        }
    }
};

function tuckRun(){

    if( tuck.runTrue ){
        tuck.distance = tuck.distance + 23;
        if( tuck.time === 4){ 
            tuck.runTrue = false;
            tuck.time = 1;
        } else{ 
            tuck.time++;
        }
    } else{ 
        if(tuck.time === 83){
        tuck.runTrue = true;
        tuck.time = 1;
        }else{
            tuck.time++;
        }
    }
};

function sullivanRun(){

    if( sullivan.runTrue ){
        sullivan.distance = sullivan.distance + 19;
        if( sullivan.time === 7){ 
            sullivan.runTrue = false;
            sullivan.time = 1;
        } else{ 
            sullivan.time++;
        }
    } else{ 
        if(sullivan.time === 108){
        sullivan.runTrue = true;
        sullivan.time = 1;
        }else{
            sullivan.time++;
        }
    }
};

function stitchRun(){

    if( stitch.runTrue ){
        stitch.distance = stitch.distance + 4;
        if( stitch.time === 22){ 
            stitch.runTrue = false;
            stitch.time = 1;
        } else{ 
            stitch.time++;
        }
    } else{ 
        if(stitch.time === 62){
        stitch.runTrue = true;
        stitch.time = 1;
        }else{
            stitch.time++;
        }
    }
};

function zemaRun(){

    if( zema.runTrue ){
        zema.distance = zema.distance + 16;
        if( zema.time === 6){ 
            zema.runTrue = false;
            zema.time = 1;
        } else{ 
            zema.time++;
        }
    } else{ 
        if(zema.time === 86){
        zema.runTrue = true;
        zema.time = 1;
        }else{
            zema.time++;
        }
    }
};

function maraRun(){

    if( mara.runTrue ){
        mara.distance = mara.distance + 27;
        if( mara.time === 6){ 
            mara.runTrue = false;
            mara.time = 1;
        } else{
            mara.time++;
        }
    } else{ 
        if(mara.time === 135){
        mara.runTrue = true;
        mara.time = 1;
        }else{
            mara.time++;
        }
    }
};

function butterRun(){
    if( butter.runTrue ){
        butter.distance = butter.distance + 12;
        if( butter.time === 6){ 
            butter.runTrue = false;
            butter.time = 1;
        } else{ 
            butter.time++;
        }
    } else{ 
        if(butter.time === 53){
        butter.runTrue = true;
        butter.time = 1;
        }else{
            butter.time++;
        }
    }
};

function emberRun(){

    if( ember.runTrue ){
        ember.distance = ember.distance + 15;
        if( ember.time === 4){ 
            ember.runTrue = false;
            ember.time = 1;
        } else{ 
            ember.time++;
        }
    } else{ 
        if(ember.time === 50){
        ember.runTrue = true;
        ember.time = 1;
        }else{
            ember.time++;
        }
    }
};