// print 1 to 10 without using loop

function printNum(num){
  if(num <= 10){
    console.log(num);
    printNum(num + 1);
  }
}
printNum(1);
