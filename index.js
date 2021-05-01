const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducerBatteries(){
let  totalBatteries=batteryBatches.reduce( (total, element) => element  + total, 0);
 const number=totalBatteries;
 return number;  
}
totalBatteries();