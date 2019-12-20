// add solution here
function theBeatlesPlay(musicians, instruments){
var list = [];
var mlen = musicians.length;
  for (let i = 0; i < mlen; i++){
    list.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return list;
}

function johnLennonFacts(facts){
var i = 0;
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts
}

function iLoveTheBeatles(i){
var say = [];
  do {
    i++;
    return say.push('I Love The Beatles!');
  }
  while (i < 15);
}
