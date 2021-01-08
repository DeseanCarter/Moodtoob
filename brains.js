let bean = "./bean.jpg"
let currentMood;


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
        image_url: "https://i2.wp.com/www.irishcatholic.com/wp-content/uploads/2016/01/child-in-fear.jpg?fit=700%2C400&ssl=1",
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
        $("#moodDisplay").append("You are Happy!")
    //if you are disgust
    } else if (disgust >= happiness && disgust >= fear && disgust >= anger && disgust >= neutral && disgust >= sadness && disgust >= surprise) {
        //do this
        $("#moodDisplay").append("You are disgusted!")
    //if you are fear
    } else if(fear >= happiness && fear >= disgust && fear >= anger && fear >= neutral && fear >= sadness && fear >= surprise) {
        //do this 
        $("#moodDisplay").append("You are afraid!")
    }
    //if you are angry 
      else if(anger >= happiness && anger >= disgust && anger >= fear && anger >= neutral && anger >= sadness && anger >= surprise) {
        //do this 
        $("#moodDisplay").append("You are angry!")
    }
    //if you are neutral
    else if(neutral >= happiness && neutral >= disgust && neutral >= fear && neutral >= anger && neutral >= sadness && neutral >= surprise) {
        //do this 
        $("#moodDisplay").append("You are neutral!")
    }
    //if you are sadness 
    else if(sadness >= happiness && sadness >= disgust && sadness >= fear && sadness >= anger && sadness >= neutral && sadness >= surprise) {
        //do this 
        $("#moodDisplay").append("You are sad!")
    } 
    //if you are surprise
    else if(surprise >= happiness && surprise >= disgust && surprise >= fear && surprise >= anger && surprise >= neutral && surprise >= sadness) {
        //do this 
        $("#moodDisplay").append("You are surprised!")
    } 

})

}



//image submit function 

    // $('#testImg').change( function()
    // {
    //   console.log( $(this).val() );
    // });


function checkImage(){
    console.log( "hello!")
}