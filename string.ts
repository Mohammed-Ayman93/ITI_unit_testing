export const reverseString =( a : string)=>{
    let newString = "";
    for(let i = a.length-1 ; i >= 0  ; i--){
        newString += a[i];
    }
    return newString;
}

export const getCharactersCount = (str: string): Record<string, number> =>{
  const result: Record<string, number> = {};

  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}
