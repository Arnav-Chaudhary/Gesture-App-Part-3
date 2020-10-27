Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+ data_uri +'">';
    console.log("inside takesnapshot function");
    });
}
console.log('ml5 version:' ,ml5.version);

Classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VF5kku2s6/model.json', modelLoaded);
function modelLoaded(){
    console.log('model loaded')
};

function check() {
    img= document.getElementById("captured_image");
    Classifier.classify(img,got_result);
}

function got_result(error, results){
 if (error){
     console.error(error);
 }
 else{
     console.log(results);
     document.getElementById("result_emotion_name").innerHTML= results[0].label;
     document.getElementById("result_emotion_name2").innerHTML= results[1].label;
 
 if (results[0].label == "Hi"){
     document.getElementById("update_emoji").innerHTML= "&#9995;";
 }
 if (results[0].label == "Best"){
    document.getElementById("update_emoji").innerHTML= " &#128077;";
}  
if (results[0].label == "Victory"){
    document.getElementById("update_emoji").innerHTML= "&#9996;";
}
if (results[1].label == "Hi"){
    document.getElementById("update_emoji2").innerHTML= "&#9995;";
}
if (results[1].label == "Best"){
   document.getElementById("update_emoji2").innerHTML= " &#128077;";
}  
if (results[1].label == "Victory"){
    document.getElementById("update_emoji2").innerHTML= "&#9996;";
}
}
}