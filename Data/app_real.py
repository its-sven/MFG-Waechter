import time
import board
import adafruit_dht

dhtDevice = adafruit_dht.DHT11(board.D2, use_pulseio=False)

while True:
    t = dhtDevice.temperature
    print(t)