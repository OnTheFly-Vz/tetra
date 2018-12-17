var data = input.get('data'); 
var portNumbers = {}; 
var portNames = {}; 
var portList = data['ixp']['portDetails']; 
for (port : portList) 
{
   if (port['virtualPortId'] != null)
    { portNumbers.add(port['virtualPortId']);
     portNames.add(port['virtualPortName']); } 
}  
var portNumberList = [...]; 
var portNameList = [...];
 portNumberList.addAll(portNumbers); 
 portNameList.addAll(portNames); 
 return portNumberList, portNameList;