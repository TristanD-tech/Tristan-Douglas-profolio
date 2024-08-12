console.log("Hello World!")

// declare  a variable and assign it a prompt
// put the mail inside the mailbox
// var prompt = prompt('What is your name?');


console.log(prompt)

// if (10 > 9){
//   console.log( 'yes 10 is grester than 9')
// }else  {
//   console.log('this is false')
// }

function areYouOldEnough(age) {
  var age = prompt('What is your age?');

  if (age < 18 && typeof age === "string") {
    alert('you are a minor');
  } else if (age >= 18 && age <= 60) {
    alert('your an adult');
  } else {
    alert('your a senoir citzen');
  }
}




function uploadAndIdentifyPlantID() {
  var photoInput = document.getElementById('photoInput');

  if (photoInput.files.length === 0) {
    alert('please select a photo to upload');
    return;
  }

  var selectedFile = photoInput.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var base64 = e.target.result;
    // Now you can use the base64 data for your API call or other actions
    console.log(base64); // Example: Log the base64 data to the console
  }
  reader.readAsDataURL(selectedFile); // Read the file as a data URL
  var apikey = 'MsyfBz4bd54Pa6GTQCvcnwrtU1TG7ULrSDFAeJZSiCklzEBpaA';
  var latitude = 49.207;
  var longtitude = 16.608;
  var health = 'all';
  var similarImages = true;
  var details = 'common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods,treatment,cause';
  var laguage = 'en';
  var apiPlantIDUrl = '`https://plant.id/api/v3/identification?details=${details}&language=${language}`;
}
axios.post(
  aniPlantIDUrl,
  {
    images: [base64],
    Latitude: latitude,
    Longtitude: longtitude,
    health: health,
    similarImages: similarImages,
  },
  {
    headers: {
      'Api-key': apikey,
      'Content-Type': 'apllication/Json'
    }
  }
)
}