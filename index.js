// add solution here
/* function theBeatlesPlay(musicians, instruments){
var list = [];
var mlen = musicians.length;
  for (let i = 1; i <= mlen; i++){
    list.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return list;
} */

function theBeatlesPlay(musicians, instruments){
var list = [];
var mlen = musicians.length;
  for (let i = 1; i <= mlen; i++){
      var musician = musicians[i];
      var instrument = instrument[i];
    list.push(`${musician} plays ${instrument}`);
  }
  return list;
}