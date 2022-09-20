(function(){
    console.info("Hello JS");
})();
var myNode = document.createElement('div');
document.getElementById('digitalClock').appendChild(myNode);
myNode.innerHTML ="welcome!"


// console.dir(myDate);
var updateTime = function(){
    var myDate = new Date ();
    myNode.innerHTML = myDate.toTimeString();
}
setInterval(updateTime, 1000);


