for(const property in statistics){
  if(statistics[property] % 2 === 1 || property.charAt(0) === 'r'){
    console.log(statistics[property]);
  }
}
