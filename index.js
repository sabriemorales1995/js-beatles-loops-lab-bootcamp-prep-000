function theBeatlesPlay(mus, inst){
  var temp = [];
  for(var i=0; mus.length>i;i++){
    temp[i]= `${mus[i]} plays ${inst}`;
  }
  
  return temp;
}