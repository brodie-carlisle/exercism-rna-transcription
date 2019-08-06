
export const toRna = (dnaString) => {
  
    // string.replace(searchvalue, newvalue) searches string, replaces with values in dnaToRnaMap
    // '/g' searches/replaces globaly 
  return dnaString.replace(/[G,C,T,A]/g, m => dnaToRnaMap[m])
};
const dnaToRnaMap =
  {
    "G" : "C",
    "C" : "G",
    "T" : "A",
    "A" : "U"
  };