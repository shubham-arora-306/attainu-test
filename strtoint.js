function strToInt(str) {
    var number = 0, factor = 1;
    var x = 1;

    // it takes O(n) time to finish the program
    for (var i = str.length - 1; i >= 0; i--) {
      // if(str.charAt(i) == ' ' ){
      //   i++;
      // }
      if(str.charAt(i) == '-' ){
        x = -1 ;
        // console.log('negative')
      } else if (str.charAt(i) != ' ' ){
        number += (str.charAt(i)) * factor;
        // console.log(answer)
        factor *= 10;
      }
    }
    number = x * number  ;

    if (isNaN(number)){
      // console.log('0')
      number = 0; 
    }

    return number;
}
console.log(strToInt('      - 1234      '))
