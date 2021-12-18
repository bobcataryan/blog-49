console.log("java script is linked")

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/o-UK8j99L/model.json",modelReady);
}
 function modelReady(){
     classifier.classify(gotResults);
     console.log("model has been loaded")
 }

var dog= 0;
var cricket= 0;
row=""
 function gotResults(error,results){
    if (error){
console.error(error);
    }
    else{
        console.log(results);

        picture=document.getElementById("the_image");
        if(results[0].label == "dog"){
            picture.src="bark.gif";
            dog++;
            document.getElementById("classified").innerHTML="I can hear a dog barking";
            row="<h3 id='dog_detected'> Detected dog - "+dog+"</h3> <h3 id='cricket_detected'> Detected cricket - "+cricket+"</h3>";
            document.getElementById("display").innerHTML=row;
        }
        else if (results[0].label == "cricket"){
            picture.src="Chirping.png";
            cricket++;
            document.getElementById("classified").innerHTML="I can hear a cricket chirping";
            document.getElementById("dog_detected").innerHTML= "Detected dog - " +dog
            document.getElementById("dog_detected").innerHTML= "Detected dog - " +dog
            document.getElementById("display").innerHTML=row;
        }
        else {
            picture.src="listen.gif";
            document.getElementById("classified").innerHTML="I can hear background noise";
            row="<h3> Detected dog - "+dog+"</h3> <h3> Detected cricket - "+cricket+"</h3>";
            document.getElementById("display").innerHTML=row;
        }
}
 }  

