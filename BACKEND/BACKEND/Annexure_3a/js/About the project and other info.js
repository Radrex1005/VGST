// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBGO2B6hQTK4K5OE5zrbJ02vjdi6f28Erk",
    authDomain: "vgstproposals.firebaseapp.com",
    databaseURL: "https://vgstproposals.firebaseio.com",
    projectId: "vgstproposals",
    storageBucket: "vgstproposals.appspot.com",
    messagingSenderId: "552421108644",
    appId: "1:552421108644:web:6e33c08cbc16366cdeef31",
    measurementId: "G-0QNPLQVH6Y"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
// Reference messages collection
var messagesRef = firebase.database().ref('Aadhar/Annexure_3/'); 

// Listen for form submit
document.getElementById('Proposals').addEventListener('submit', submitForm);

//Submit form
function submitForm(e)
{
    e.preventDefault(); 

// Get values
    var V1 = getInputval('Titleoftheproject');
    var V2 = getInputval('Subjectareaasperinstruction');

    //Save Co_Principal Investigator

    saveCo_PrincipalInvestigator(V1,V2)

      // Show alert
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
 // },3000);

  // Clear form
  document.getElementById('Proposals').reset();
}

// Function to get from values
function getInputval(id)
{
    return document.getElementById(id).value;
}

// Save Co_Principal Investigator
function saveCo_PrincipalInvestigator(V1,V2)
{
    var newCo_PrincipalInvestigator = messagesRef.push();
    newCo_PrincipalInvestigator.set(
        {
            Title_of_the_project: V1,
            Subject_area_as_per_instruction: V2,

        }
    );
}