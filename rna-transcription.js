import { arrayExpression } from "@babel/types";

//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaString) => {
  const dnaToRnaMap =
  {
    "G" : "C",
    "C" : "G",
    "T" : "A",
    "A" : "U"};
  
    // string.replace(searchvalue, newvalue) searches string, replaces with values in dnaToRnaMap
    // '/g' searches/replaces globaly 
  return dnaString.replace(/["G","C","T","A"]/g, m => dnaToRnaMap[m])
};
