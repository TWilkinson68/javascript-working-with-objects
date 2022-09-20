(function(){
    console.info("Hello JS");
})();
var myNode = document.createElement('div');
document.getElementById('digitalClock').appendChild(myNode);
myNode.innerHTML ="welcome!"


var updateTime = function(){
    var myDate = new Date ();
    myNode.innerHTML = myDate.toTimeString(). substring(0,8);
}
setInterval(updateTime, 1000);
updateTime();


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


