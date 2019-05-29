function Refresh() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(this.responseText)
        document.getElementById("temp_data").innerHTML = "Temperature: " + response.Temperature+"*C";
        document.getElementById("humid_data").innerHTML = "Humidity: " + response.Humidity+"%";
        }
    };

    xhttp.open("POST", "http://4cd1a0b4.ngrok.io/", true);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send('{"Temperature":"Humidity"}');
}

$(document).ready(function(){
    Refresh()
}); 

setInterval(Refresh, 1000)