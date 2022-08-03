 #include <Servo.h>
Servo servo1;
 String incomingString="";
 
void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
  servo1.attach(9);

}

void loop() {
 
  // send data only when you receive data:
  if (Serial.available() > 0) {
    
    
    //read the direction
    incomingString= Serial.readString();
    
    Serial.print("I received: ");
    Serial.println(incomingString);
    
   if (incomingString.equals("right")){servo1.write(180);}
    else if (incomingString.equals("left")){servo1.write(0);}
    } 
    
    }
 
