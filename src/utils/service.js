export function Service(){ }

Service.prototype._post = function(url, data){
  return new Promise((resolve, reject) => {
  fetch(url ,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
};

Service.prototype._get = function(url){
  return new Promise((resolve, reject) => {
    fetch(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
};


Service.prototype.insert = function(data){
  return new Promise ((resolve, reject) => {
    this._post('http://localhost:3001/pokemons', data)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

Service.prototype.getTypes = function(){
  return new Promise((resolve, reject) => {
    this._get('http://localhost:3001/types')
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

Service.prototype.getPokes = function(start, end){
  return new Promise((resolve, reject) => {
    this._get(`http://localhost:3001/pokemons/?start=${start}&end=${end}`)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};