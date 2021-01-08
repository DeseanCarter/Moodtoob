
let currentMood;
let imageSubmit;
let imageBase64;

function getMood (){

//face analyzer API call 

var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect"


$.ajax({
    url: queryURL,
    type: 'POST',
    data: {
        api_key: api_key,
        api_secret: api_secret,
        return_attributes: "emotion",
        image_base64: imageBase64,
    },
 


})
.then(function(response) {
    console.log(queryURL);
    console.log(response); 
    currentMood = response.faces[0].attributes.emotion;
   let happiness = currentMood.happiness
   let disgust = currentMood.disgust
   let fear =  currentMood.fear
   let anger = currentMood.anger 
   let neutral = currentMood.neutral 
   let sadness = currentMood.sadness
   let surprise = currentMood.surprise 

    //if you are happiness
    if (happiness >= disgust && happiness >= fear && happiness >= anger && happiness >= neutral && happiness >= sadness && happiness >= surprise){
       //do this
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are Happy!")
    //if you are disgust
    } else if (disgust >= happiness && disgust >= fear && disgust >= anger && disgust >= neutral && disgust >= sadness && disgust >= surprise) {
        //do this
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are disgusted!")
    //if you are fear
    } else if(fear >= happiness && fear >= disgust && fear >= anger && fear >= neutral && fear >= sadness && fear >= surprise) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are afraid!")
    }
    //if you are angry 
      else if(anger >= happiness && anger >= disgust && anger >= fear && anger >= neutral && anger >= sadness && anger >= surprise) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are angry!")
    }
    //if you are neutral
    else if(neutral >= happiness && neutral >= disgust && neutral >= fear && neutral >= anger && neutral >= sadness && neutral >= surprise) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are neutral!")
    }
    //if you are sadness 
    else if(sadness >= happiness && sadness >= disgust && sadness >= fear && sadness >= anger && sadness >= neutral && sadness >= surprise) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are sad!")
    } 
    //if you are surprise
    else if(surprise >= happiness && surprise >= disgust && surprise >= fear && surprise >= anger && surprise >= neutral && surprise >= sadness) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are surprised!")
    } 

})

}



//image submit function 

    // $('#testImg').change( function()
    // {
    //   console.log( $(this).val() );
    // });


// function checkImage(){
//     console.log( "hello!")
//     getMood();
// }


//DESEAN'S AREA 

$(function()
  {
    $('#testImg').change( function(event)
    {
      console.log( $(this).val() );
      imageSubmit = event.target.files
      let reader = new FileReader();
      reader.readAsDataURL(imageSubmit[0]);
      reader.onload = function () {
        imageBase64 = reader.result;
        console.log(reader.result)

    };
    });
  });

  $("#submitBtn").click(function(event){
      event.preventDefault();
      console.log("click!");
      getMood();
  })

//   $('#testImg').change( function(event)
//   {
//     console.log( event.target.files );
//   });






  //Desean's Area 



  //Josh's Area 















  //Josh's Area