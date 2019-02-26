
function proveraForme(forma){
    if(forma.ime.value.trim() == ""){
        alert("Niste uneli ime")
        forma.ime.focus();
        return false;
    }
    if(forma.prezime.value.trim() == ""){
        alert("Niste uneli prezime")
        forma.prezime.focus();
        return false;
    }
    
    if(forma.ime.value[0] != forma.ime.value[0].toUpperCase()){
        alert("Ime mora poceti velikim slovom");
        return false;
    }
    if(forma.prezime.value[0] != forma.prezime.value[0].toUpperCase()){
        alert("Prezime mora poceti velikim slovom");
        return false;
    }
    return true;
}

function omoguci(param){
    var sel1 = document.getElementById("sel1");
    
    if(param.checked){
        sel1.disabled = false;
    }
    else {
        sel1.disabled = true;
    }
    
    oboji();
}
function oboji(){
    var sel= document.getElementById("sel1");
    var submit = document.getElementById("submitbtn");
    if(sel.disabled){
        submit.style.backgroundColor = "white";
    }else{
        if(sel.value == 1){
            submit.style.backgroundColor = "silver";
        }
        else if(sel.value == 2){
            submit.style.backgroundColor = "gold";
        }
        else{ 
        submit.style.backgroundColor = "skyblue"
    }
    }
}