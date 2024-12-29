function toss(){
    let result = Math.random();
    if (result<=0.5){
       document.getElementById('result').textContent = "It's Heads!!";  
    }
    else{
       document.getElementById('result').textContent = "It's Tails!!";
    }
 }
function changemode(){
    if (document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById('modebtn').textContent = "🌞";
        document.getElementById('modebtn').style.borderColor = "orange";
        document.getElementById('modebtn').style.borderWidth = "5px";
        document.getElementById('tossBtn').style.borderColor = "orange";
        document.getElementById('tossBtn').style.borderWidth = "5px";
        document.getElementById('h1').style.textShadow = "3px 3px 4px white";
        document.getElementById('cont').style.borderColor = "white";
      
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById('modebtn').textContent = "🌙";
    }
 }

