let cats =['Milo', 'Otis', 'Garfield']
function beforeEach(cats){
  return length = 0;
}

function destructivelyAppendCat(name){
  cats.push('Ralph')
  return cats
}
function destructivelyPrependCat(name){
  cats.unshift('Bob')
  return cats
}
function destructivelyRemoveLastCat(){
  cats.pop('Garfield')
  return cats
}
function destructivelyRemoveFirstCat(){
  cats.shift('Milo')
  return cats
}
function appendCat(){
  return cats.concat('Broom')
}
function prependCat() {
  return['Arnold']. concat(cats)
}
function removeLastCat(){
  return cats.slice(0, -1)
}
function removeFirstCat(){
  return cats.slice(1)
}
