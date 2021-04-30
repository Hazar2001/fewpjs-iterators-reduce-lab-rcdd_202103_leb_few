const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function totalBatteries(){
 const sum=batteryBatches.reduce( (total, element) => element  + total, 0);
 return sum;
}
