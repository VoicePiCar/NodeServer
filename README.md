# NodeServer

Para usar el GPIO de RaspberryPi, debe usarse de esta forma

```
echo 17 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio17/direction
echo 1 > /sys/class/gpio/gpio17/value
echo 17 > /sys/class/gpio/unexport
```