function isElevatorSafe(weights) {
  if (Array.isArray(weights) !== true) {
    return "Invalid";
  }
  let totalWeight = 0;
  for (let weight of weights) {
    totalWeight += weight;
  }
  if(totalWeight <= 400 ){
    return true;
  }
  else{
    return false;
  }
}
