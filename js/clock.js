(function(){
    console.info("Hello JS");
})();
var myNode = document.createElement('div');
document.getElementById('digitalClock').appendChild(myNode);
myNode.innerHTML ="welcome!"


var updateTime = function(){
    var myDate = new Date ();
    myNode.innerHTML = myDate.toTimeString(). substring(0,8);
    let seconds = myDate.getSeconds();
    let minutes = myDate.getMinutes();
    let hours = myDate.getHours();
    hours = hours + minutes/60;
    let rotSeconds = (seconds * 6) - 90;
    let rotMinutes = (minutes * 6) - 90;
    let rotHours = (hours * 30) - 90;
    document.getElementById("secondHand").style.transform = `rotate(${rotSeconds}deg)`;
    document.getElementById('minHand').style.transform = `rotate(${rotMinutes}deg)`;
    document.getElementById('hrHand').style.transform = `rotate(${rotHours}deg)`;
}    
setInterval(updateTime, 1000);
updateTime();


document.getElementById('hrHand').style.backgroundColor = '#0f0';





S
// document.getElementById("secondHand").style.transform = 'rotate('+rotSeconds+'deg)';






//     "editor.defaultFormatter"; "esbenp.prettier-vscode",
//     "[javascript]"; {
//       "editor.defaultFormatter"; "esbenp.prettier-vscode"
//     }
//   }

// myNode.innerHTML = myDate.toTimeString().substr(0, 8);
// upDateTime();
// setInterval(updateTime, 1000);


// var myDate = new Date();
// var myHours = myDate.getHours();
// var myMins = myDate.getMinutes();
// var mySeconds = myDate.getSeconds();
// var myTimeDisplay = myHours + ":"+ myMins +":"+ mySeconds;
// myNode.innerHTML = myTimeDisplay;

// if(myHours < 10){
//     myHours = "0"+ myHours;
//     }
//     if(myMins < 10){
//     myMins = "0"+myMins;
//     }
//     if(mySeconds < 10){
//     mySeconds = "0"+mySeconds;}

//     var checkForLeadingZeros = function (timeVal){
//         if(timeVal < 10){
//         timeVal = "0"+timeVal;
//         }
//         return timeVal;}

//         var myDate = new Date();
// var myHours = checkForLeadingZeros(myDate.getHours());
// var myMins = checkForLeadingZeros(myDate.getMinutes());
// var mySeconds = checkForLeadingZeros(myDate.getSeconds());


// myNode.innerHTML = myDate.ToTimeString().substr(0, 8);
// upDateTime();
// setInterval(UpDateTime, 1000);


// document.getElementById('hrHand').style.backgroundColor = '#0f0';
// var rotSeconds = (seconds * 6) - 90;


// document.getElementById('secondHand').style.transform =
// 'rotate('+rotSeconds+'deg)'; 

// document.getElementById('minHand')
// var rotMinutes(seconds * 


