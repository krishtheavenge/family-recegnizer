Webcam.set({
    width:350,
    height:250,
    image_format:'jpg',
    png_quality:100
});

camera=document.getElementById("cam");


Webcam.attach('#cam');


function take_snapshot(){
    Webcam.snap(function(photo){
            document.getElementById("output").innerHTML ="<img id='capured_image' src='"+photo+"'>";
    })
};


console.log("ml5version",ml5.version);



    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y9OOyt4dD/model.json',modelLoaded);

            function modelLoaded(){
                console.log("model loaded");
            }
                function identify_object(){
                    img = document.getElementById("capured_image");
                    classifier.classify(img,got_result);
                }
                        function got_result(error,result){
                                if(error){
                                    console.log(error);
                                }
                                else{
                                    console.log(result);
                                    document.getElementById("member").innerHTML = result[0].label;
                                    document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(2);
                                }
                        }