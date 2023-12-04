let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    let dd = document.getElementById('date').value;
    let mm = document.getElementById('month').value;
    let yy = document.getElementById('year').value;

    let date = new Date();
    let cdd = date.getDay();
    let cmm = 1 + date.getMonth();
    let cyy = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (dd > cdd) {
        cdd = cdd + month[cmm - 1];
        cmm = cmm - 1;
    }
    if (mm > cmm) {
        cmm = cmm + 12;
        cyy = cyy - 1;
    }
    let d = cdd - dd;
    let m = cmm - mm;
    let y = cyy - yy;
    document.getElementById("age").innerHTML =
    "Your Age is " + y + " Years " + m + " Months " + d + " Days";
    
})

