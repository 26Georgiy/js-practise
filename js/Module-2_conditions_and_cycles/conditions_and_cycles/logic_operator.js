function isNumberInRange(start, end, number) {
  if (number>=start&&number<=end){
    return true;
  } else {
    return false;
  }
}

function checkAccess(subType) {
  if(subType=="pro"||subType=="vip"){
    return true;
  }else{
    return false;
  }
}

function toggleModalVisibility(isVisible) {
  if(!isVisible){
    return true;
  } else{
    return false;
  }
}
