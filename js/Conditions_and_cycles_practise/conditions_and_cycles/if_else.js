function checkAge(age) {
  const message = `You are an adult`;
  if(age>=18){
    return message;
  } else {
    return undefined;
  }

}

function checkStorage(available, ordered) {
  if(available<ordered){
    return `Not enough goods in stock!`;
  } else{
    return `Order is processed, our manager will contact you`;
  }
}

function checkStorage(available, ordered) {
  if(ordered==0){
    return `There are no products in the order!`;
  }else if(available<ordered){
    return `Your order is too large, there are not enough items in stock!`
  }else{
    return `The order is accepted, our manager will contact you`
  }

}

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  const type = correctPassword==password? 'Access granted' : 'Access denied, wrong password!';
  return type;
}

function getSubscriptionPrice(type) {
  switch(type){
    case type = 'starter':
      let priceCase1 = 0;
      return priceCase1;
      break;
    case type = 'professional':
     let priceCase2 = 20 ;
      return priceCase2 ;
      break;
    case type = 'organization':
      priceCase3 = 50 ;
      return priceCase3;
      break;
    default: return `Invalid subscription type!`
      
  }
}
