export function convertToGold(number){
  if(number){

      // split into int array:
      var array = number.toString().split("").map(function(num){return parseInt(num)})
      
      switch(true) {
        case array.length<3:// only show copper
          var pos3 = array.length+2
          array.splice(pos3,0,"c")
          var arrays= array.join()
          var string = arrays.split(',').join('')
          return string
          break;
        
        case array.length<5:
          var pos2 = array.length-2
          var pos3 = array.length+1
          array.splice(pos2,0,"s")
          array.splice(pos3,0,"c")
          var arrays= array.join()
          var string = arrays.split(',').join('')
          return string// show g s c;
          break;
        
        default:
          var pos1 = array.length-4
          var pos2 = array.length-1
          var pos3 = array.length+2
          array.splice(pos1,0,"g")
          array.splice(pos2,0,"s")
          array.splice(pos3,0,"c")
          var arrays= array.join()
          var string = arrays.split(',').join('')
            return string// show g s c;
          }


          }
        }

     
// // reverse it
//       var reversed = [];
//       for(var i = array.length-1; i >= 0; i--) {
//         reversed.push(array[i]);
//       }

//       var endValue = reversed.join()
//       var string = endValue.split(',').join('')