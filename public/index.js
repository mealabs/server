function Refresh() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(this.responseText)
        document.getElementById("temp_data").innerHTML = "Temperature: " + response.Temperature;
        document.getElementById("humid_data").innerHTML = "Humidity: " + response.Humidity;
        }
    };

    xhttp.open("POST", "http://localhost:80/", true);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send('{"Temperature":"Humidity"}');
}

$(document).ready(function(){
    Refresh()
}); 

setInterval(Refresh, 1000)