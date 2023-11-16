function solution(inputArray) {
    let maxProduct =  -Infinity;
  
  
    for (let i = 0; i < inputArray.length - 1; i++) {
    
      const currentProduct = inputArray[i] * inputArray[i + 1];
  
    
      maxProduct = Math.max(maxProduct, currentProduct);
    }
  
    return maxProduct;
  }
  
  const inputArray = [3, 6, -2, -5, 7, 3];
  const result = solution(inputArray);
  console.log(result);