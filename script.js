// Types Js

const typed3  = new Typed('.hero-text',{
    strings: ['Amazing...','Exciting...', 'Awaiting...','Creative...'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 })

 // Timer 
 
 const endDate = "14 July 2023 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;
    console.log(diff);
    inputs[0].value = Math.floor(diff/60/24/60); // Days
    inputs[1].value = Math.floor(diff/60/60)%24; // Hours
    inputs[2].value = Math.floor(diff/60)%60; // Minutes
    inputs[3].value = Math.floor(diff)%60; // Seconds
}
clock();

setInterval( () => {
    clock();
},500)

// Scroll Animation Code

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.scrollY / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

// Login Form Code

  document.getElementById('loginbtn').addEventListener('click', () => {
    var loginBox = document.getElementById('loginbox');
    if (loginBox.style.display === "none" || loginBox.style.display === "") {
      loginBox.style.display = "block";
    } else {
      loginBox.style.display = "none";
    }
  });
  document.getElementById('signupbtn').addEventListener('click', () => {
    var loginBox = document.getElementById('loginbox');
    if (loginBox.style.display === "none" || loginBox.style.display === "") {
      loginBox.style.display = "block";
    } else {
      loginBox.style.display = "none";
    }
  });

  // Firebase Linked

  const firebaseConfig = {
    apiKey: "AIzaSyAS_AUmLAbfcCFysel2lkfRJGPLJkqm2mQ",
    authDomain: "contactform-vedansh.firebaseapp.com",
    databaseURL: "https://contactform-vedansh-default-rtdb.firebaseio.com",
    projectId: "contactform-vedansh",
    storageBucket: "contactform-vedansh.appspot.com",
    messagingSenderId: "854559371653",
    appId: "1:854559371653:web:766d4541609f5b505954ec",
    measurementId: "G-9QDD6ST418"
  };

  firebase.initializeApp(firebaseConfig);
  const contactformDB = firebase.database().ref('contactform-Vedansh');

  document.getElementById('contactform-Vedansh').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();
  var emailid = getElementVal("email");

  const saveMessages = (emailid) => {
    var newform = contactformDB.push();
    saveMessages();

    newform.set({
      emailid : emailid
    })
  };
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};