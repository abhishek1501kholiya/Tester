var i  = 0;
var canvas;
var database;
function setup (){
   canvas = createCanvas(800,800);
    
    database = firebase.database();
    var storageRef = firebase.storage().ref();
  //imageRef = storageRef.child('pupies');
 storageRef.child('/').listAll().then(function(result){
  result.items.forEach(function(imageRef){
     //console.log(imageRef.toString());
     i+=150;
     displayImage(i,imageRef); 
 });
 });
}
function draw(){
    


}
function displayImage(row,image){
    image.getDownloadURL().then(function(url){
      console.log(url.toString());
      var modURL = "https://cors-anywhere.herokuapp.com" + url;
      tab = createImg(modURL,"test");
      tab.position(200,row);
      tab.style("width","100px");
      tab.style("height","100px");
  
    });
  }
  