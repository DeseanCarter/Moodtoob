//===Monica Section===//
//color constants:
//font: #fff4de; bg: #101c25;

//initial mood palette: 
//SURPRISED: #ed8632, #ed4558, #a15f99

//happiness mood palette: 
//#f27906 #faa106 #2995c0

//disgust mood palette: 
//#ffe016 #b2d223 #70ab1d

//anger mood palette: 
//#fb9841 #ed4a1d #d53e27

//neutral mood palette: 
//#bde47a #55ba9a #3ca1aa

//sadness mood palette: 
//#296f9d #144c80 #2b2f72

//surprise mood palette: 
//#ffaa16, #f06516, #e43108

let initialBg = "linear-gradient(to bottom right, (#ed8632, #ed4558 , #a15f99))"

let appendColorTest = function(){
  $("body").initialBg
}
appendColorTest()

// some test logic for touching parts of document to apply color themeing to, "to bottom right" only seems to work when set as variable...hmm.
// considering relocating gradient from body or otherwise ensuring submission page style is untouched, don't want the gradient there.

let currentMood;
let imageSubmit;
let imageBase64;
let api_key = "";
let api_secret= "";
let mood;
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
       
        mood = 4;
        authenticate().then(loadClient).then(execute);
      $("#moodDisplay").append("You are Happy!")
    //if you are disgust
    } else if (disgust >= happiness && disgust >= fear && disgust >= anger && disgust >= neutral && disgust >= sadness && disgust >= surprise) {
        //do this
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are disgusted!")
        mood = 2;
        authenticate().then(loadClient)
    //if you are fear
    } else if(fear >= happiness && fear >= disgust && fear >= anger && fear >= neutral && fear >= sadness && fear >= surprise) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are afraid!")
        mood = 3;
      authenticate().then(loadClient)
    }
    //if you are angry 
      else if(anger >= happiness && anger >= disgust && anger >= fear && anger >= neutral && anger >= sadness && anger >= surprise) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are angry!")
        mood = 1;
        authenticate().then(loadClient)
    }
    //if you are neutral
    else if(neutral >= happiness && neutral >= disgust && neutral >= fear && neutral >= anger && neutral >= sadness && neutral >= surprise) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are neutral!")
        mood = 7;
      authenticate().then(loadClient)
    }
    //if you are sadness 
    else if(sadness >= happiness && sadness >= disgust && sadness >= fear && sadness >= anger && sadness >= neutral && sadness >= surprise) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are sad!")
        mood = 5;
      authenticate().then(loadClient)
    } 
    //if you are surprise
    else if(surprise >= happiness && surprise >= disgust && surprise >= fear && surprise >= anger && surprise >= neutral && surprise >= sadness) {
        //do this 
        $("#moodDisplay").empty();
        $("#moodDisplay").append("You are surprised!")
      mood = 6;
      authenticate().then(loadClient)
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

  //submit button functionality 
  $("#submitBtn").click(function(event){
      event.preventDefault();
      console.log("click!");
      getMood();
  })

  //rock button functionality
  $("#magicRock").click(function(event){
    event.preventDefault();
    nextPage(); 
})





//   $('#testImg').change( function(event)
//   {
//     console.log( event.target.files );
//   });

function nextPage(){
    $(".landingPage").attr("style", "display:none");
    $(".submissionPage").attr("style", "display:block")

}




  //Desean's Area 


  //Josh's Area
  let moodArr = {
    angry: 
        [
        'getting angry',
        'pissed off',
        'angry',
        'isolated',
        'enraged',
        'eat shit and die'
        ],
    disgust:
        [
        'disgust',
        'nasty',
        'bad',
        'gross',
        'rick roll',
        'yuck'
        ],
      fear:[
        'fear',
        'scary',
        'afraid',
        'spooky',
        'spoopy',
        'haunting'
      ],
      happy:[
        'happy',
        'joy',
        'cheerful',
        'upbeat',
        'inspiring',
        'fun',
        'party'
      ],
      sad:[
        'sad',
        'sadness',
        'tears',
        'emotional',
        'unhappy',
        'misery',
        'miserable',
        'sadboi'
      ],
      surprise:[
        'surprise',
        'shocked',
        'jump scare',
        'loud noise',
        'astounded',
        'awe',
        'wow',
        'incredulous'
        
      ],
      neutral:[
        'neutral',
        'chill',
        'numb',
        'dont care',
        'calm',
        'vibing',
        'nonchalant',
        'aloof',
        'casual',
        'couch potato',
        'inactive',
        'I dont care anymore'
      ]
      
    
      }

  
  let genre;
  
  function getEmotion(){
    // let mood = Math.floor(Math.random() * 7 + 1);
    console.log(mood);
    if( mood === 1 ){
      genre = moodArr.angry[Math.floor(Math.random() * moodArr.angry.length)]
      console.log(genre);
  
        
    }else if( mood === 2 ){
      genre = moodArr.disgust[Math.floor(Math.random() * moodArr.disgust.length)]
      console.log(genre);
  
        
    }else if( mood === 3 ){
      genre = moodArr.fear[Math.floor(Math.random() * moodArr.fear.length)]
      console.log(genre);
  
        
    }else if( mood === 4 ){
      genre = moodArr.happy[Math.floor(Math.random() * moodArr.happy.length)]
      console.log(genre);
  
        
    }
    else if( mood === 5 ){
      genre = moodArr.sad[Math.floor(Math.random() * moodArr.sad.length)]
      console.log(genre);
  
       
    }else if( mood === 6 ){
      genre = moodArr.surprise[Math.floor(Math.random() * moodArr.surprise.length)]
      console.log(genre);
  
        
    }else if( mood === 7 ){
      genre = moodArr.neutral[Math.floor(Math.random() * moodArr.neutral.length)]
      console.log(genre);
  
        
    }
  }
  
  const youtubeURL = 'https://www.youtube.com/embed/';
  
  
  
    function authenticate() {
      return gapi.auth2.getAuthInstance()
          .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
          .then(function() { console.log("Sign-in successful"); },
                function(err) { console.error("Error signing in", err); });
    }
    function loadClient() {
      gapi.client.setApiKey("APiKey");
      return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
          .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
      
    }
    
    function execute() {
      getEmotion();
     return gapi.client.youtube.search.list({
        "part": [
          "snippet"
        ],
        "topicId": "/m/04rlf",
        "maxResults": 50,
        "q": genre,
        "regionCode": "US",
        "type": ["video"]
        
      })
       
       .then(function(response) {
       
       
       console.log('response', response)
       document.querySelector('#btn').innerHTML = "";
       document.querySelector('#player').innerHTML = "";
       let newBtn = document.createElement('button');
                  newBtn.textContent = 'Moretoob';
                  newBtn.id = 'go';
                  newBtn.className= 'row';
       document.querySelector('#btn').append(newBtn);
        for(let i = 0; i < 6; i++)
        {
                  
                  let newVideo = document.createElement('iframe');
                  
                  newVideo.src = "" + youtubeURL + response.result.items[Math.floor(Math.random()* 50                   + 1)].id.videoId + "";
                  newVideo.className = 'row player';
                  document.querySelector('#player').append(newVideo);
                  
            
        }
                },
                function(err) { console.error("Execute error", err); });
    }
    gapi.load("client:auth2", function() {
      gapi.auth2.init({client_id: "clientId"});
    });
  
  
  
  
   
//   document.addEventListener('click', function(e) 
//   {
//       if(e.target.matches('#auth'))
//       {
//           authenticate().then(loadClient);
          
//       }
//   })
  document.addEventListener('click', function(e) 
  {
      if(e.target.matches('#go'))
      {
          execute();
          
      }
  })
  
  
  
  


