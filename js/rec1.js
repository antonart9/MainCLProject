
function calculateServings() {
    
    var serv = document.getElementById("servings").value;
    document.getElementById("egg").innerHTML = Math.round(serv/12);
    document.getElementById("meat").innerHTML = Math.round(serv*0.09375);
    document.getElementById("onion").innerHTML = Math.round(serv/12);
    document.getElementById("vego").innerHTML = Math.round(serv/12);
    document.getElementById("waterc").innerHTML = Math.round(serv/8);
    document.getElementById("saltc").innerHTML = Math.round(serv/12);
    document.getElementById("waterw").innerHTML = Math.round(serv/16);
    document.getElementById("flour").innerHTML = Math.round(serv/4);
    document.getElementById("salt").innerHTML = Math.round(serv/12);
}