function calculateTotal(number) {
   let n = 0;
   let x = 0;
   while (n < number) {
       n++;
       x += n;
   }
   console.log(x);
    
}
calculateTotal(24);

function calculateTotal(number) {
   let x=0;
    for (let i = 0; i <= number; i++) {
       x+=i;
        }
      console.log(x);
    }
  
 calculateTotal(24);

 function calculateEvenTotal(number) {
    let x=0;
   for (let i = 0; i <= number; i++) {
       if(i%2==0){
           x+=i;
       }
   }
   console.log(x) ;

 }
 calculateEvenTotal(7);




 const start = 6;
 const end = 17;
 let number;
   for(i=start;i<end;i++){
         if(i%5===0){
             number = i;
             break;
         }
     }
     console.log(number);


 function find5 (start, end){
    for(i=start;i<end;i++){
        if(i%5===0){
            number = i;
            break;
        }
    }
    console.log(number);
 }
 find5 (17, 25);
 find5 (2,11);
 find5 (11, 37);

  
function findNumber(start, end, divisor) {
    for(i=start;i<end;i++){
        if(i%divisor===0){
            return i;
        }
    }
}