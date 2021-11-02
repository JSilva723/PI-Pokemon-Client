export function Service(){ }

Service.prototype.insert = function(data){
  return new Promise((resolve, reject) => {
  fetch('http://localhost:3001/pokemons',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => resolve(response))
      .catch(err => reject(err))
  })
}

Service.prototype.types = function(){
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3001/types')
      .then(res => res.json())
      .then(response => resolve(response))
      .catch(err => reject(err))
  })
}
