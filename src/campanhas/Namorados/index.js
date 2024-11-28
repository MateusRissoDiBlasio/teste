var perfEntries = performance.getEntriesByType("navigation");
var add = 0;

if (perfEntries[0].type === "reload"){ 
    add = add+1;
}else{ location.reload(); }

console.log(perfEntries[0].type);
console.log(add);

function ruaOliveiraBotelho(){
    document.getElementById('btn1').addEventListener('click', function() {
        setTimeout(function () {document.getElementById('btn1', 'msg', 'bag').classList.add('visibillity'); document.getElementById('checkbox1').checked = true;}, 1000);
    });
    setTimeout(function () { window.location.href="https://api.whatsapp.com/send?phone=5522999235157"; }, 2200);
    
}

function ruaMoisesAmelio(){
    document.getElementById('btn2').addEventListener('click', function() {
        setTimeout(function () {document.getElementById('btn2', 'msg', 'bag').classList.add('visibillity'); document.getElementById('checkbox2').checked = true;}, 1000);
    });
    setTimeout(function () { window.location.href="https://api.whatsapp.com/send?phone=5522996222125"; }, 2000);
}

function ruaGalianoDasNeves(){
    document.getElementById('btn3').addEventListener('click', function() {
        setTimeout(function () {document.getElementById('btn3', 'msg', 'bag').classList.add('visibillity'); document.getElementById('checkbox3').checked = true;}, 1000);
    });
    setTimeout(function () { window.location.href="https://api.whatsapp.com/send?phone=5522998815670"; }, 2000);
}
