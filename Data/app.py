#-*- coding:utf-8 -*-
from flask import Flask, send_from_directory, request
import json
from flask_cors import CORS
from random import randint
import time
import board
import adafruit_dht
import digitalio


## Flask aufsetzen
app = Flask(__name__)
CORS(app)

# Routing für die Basisdateien des Webservers
@app.route("/")
def base():
    return send_from_directory('client', 'index.html')

# Routing für das Svelte Frontend
@app.route("/<path:path>")
def home(path):
    return send_from_directory('client', path)


## API Endpoint, um die Werte anzufragen
@app.route("/api", methods=['GET', 'POST'])
def values():
    if request.method == 'POST':
        action = request.form['action'];

        # Das Frontend fragt die entsprechenden Daten als Array an
        if action == 'get-values':
            dhtDevice = adafruit_dht.DHT11(board.D2, use_pulseio=False)
            bt = digitalio.DigitalInOut(board.D3)
            bt.direction = digitalio.Direction.INPUT
            temp = dhtDevice.temperature
            humid = dhtDevice.humidity
            door = bt.value

            # Daten als Array zusammensetzen
            values = {"Temp": str(temp), "Humidity": str(humid), "Door": door}

            # Array an das Frontend zurückgeben
            return json.dumps(values)

    return "";

# Eintrittspunkt für Python
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=False)
