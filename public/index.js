function Refresh() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(this.responseText)
        document.getElementById("device_type").innerHTML = "Device Type: "+ response["Device Type"];
        document.getElementById("device_name").innerHTML = "Device Name: "+ response["Device Name"];
        document.getElementById("connection_type").innerHTML = "Connection Type: "+ response["Connection Type"];
        document.getElementById("time_stamp").innerHTML = "Time Stamp: "+ response["Time Stamp"];
        response = response["Sensor Data"]
        document.getElementById("temp_data").innerHTML = "Temperature: " + response.Temperature+"*C";
        document.getElementById("humid_data").innerHTML = "Humidity: " + response.Humidity+"%";
        }
    };

    xhttp.open("POST", "35.227.123.142/", true);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send('{"Temperature":"Humidity"}');
}

$(document).ready(function(){
    Refresh()
}); 

setInterval(Refresh, 1000)
