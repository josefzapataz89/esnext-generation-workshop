'use strict'

module.exports = function generate(isEven) {
    let num = isEven ? 0 : -1;
  
    let myIterator = {
      next: function(swap) {
  
        num += (swap ? 1 : 2);
  
        return {
          value: num
        }
  
      }
    }
  
    return myIterator;
  }