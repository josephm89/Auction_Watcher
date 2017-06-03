export function convertToGold(number){
    if(number){

      // split into int array:
      var array = number.toString().split("").map(function(num){return parseInt(num)})

      // reverse it
      var reversed = [];
      for(var i = array.length-1; i >= 0; i--) {
        reversed.push(array[i]);
      }
      
      // make int from index 3 . 4++++

      var endValue = reversed[4] +"."+ reversed[3] + reversed[2]

      return endValue
    }
  }