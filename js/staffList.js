(function(){ 
//     var staff = [
//         {
//         name : "Bob Smith",
//         email : "b.smith@busy.com"
//     }, 
//     {
//         name : "Jane Johnson",
//         email : "j.johnson@busy.com" 
//     },
//     {   
//         name : "Ethan Hawkson",
//         email : "e.hawkson@busy.com"
//     }, 
//     {
//         name : "Julie Grant",
//         email : "j.grant@busy.com" }
// var staff =[] 




var staff = JSON.parse(localStorage.getItem('staffList'));
if(staff === null){
    staff =[];
}

var rebuildlist =function(){
    document.getElementById('staffTable').innerHTML= ""
    staff.forEach(function(element) {
    var newStaffRow = document.createElement("tr");
    var newStaffName = document.createElement("td"); 
    newStaffName.innerHTML = element.name;
    var newStaffEmail = document.createElement("td"); 
    newStaffEmail.innerHTML = element.email; 
    newStaffRow.appendChild(newStaffName); 
    newStaffRow.appendChild(newStaffEmail); 
    document.getElementById('staffTable').appendChild(newStaffRow);
    
    });
    localStorage.setItem("staffList",JSON.stringify(staff));
}

    


document.getElementById("addStaffForm").addEventListener("submit", function(ev){
    ev.preventDefault();
    let newStaffName = document.getElementById('staffName').value;
    let newStaffEmail = document.getElementById('staffEmail').value;
    staff.push({name: newStaffName, email: newStaffEmail}); console.dir(staff)
    rebuildlist();
});

rebuildlist();

})();
// document.getElementById("myParagraph").addEventListener("click",(ev)=>{
//     console.info("hi I was clicked")
//     console.info(ev.target)
//     ev.target.style.backgroundcolor="#f20";

// })
//     let myObject = {
//         firstname: "Tom", 
//         Surname: "Wilkinson",
//         email: "thomas.wilkinson@skybettingandgaming.com",
//         age: 24,
//         qualifications: {
//             gcse: true,
//             Alevel: true,
//             university: "Norwich",
//             degree: true,

//         }, 
//         getSurname: function(){
//             return this.Surname
//         }
// }
//     console.dir(myObject.getSurname());
// var qualifications = [ {
//         subject : "Maths",
//         grade : "A" },
//         {
//         subject : "English",
//         grade : "B" },
//         {
//         subject : "French",
//         grade : "C" },
//         {
//         subject : "Physics",
//         grade : "B" }
//         ];
//     console.dir(qualifications);
//     // for(let i=0; i<qualifications.length; i++){
//     //     console.info(qualifications[i].subject)
//     // }
//     // qualifications.forEach(function(element) { console.info(element.subject);
//     //     console.info(element.grade); });
//     qualifications.forEach((element)=>{
//         console.info(element.subject); console.info(element.grade);
//     });

//     qualifications.forEach((e)=>{ console.info(e.subject); console.info(e.grade);})
//

    