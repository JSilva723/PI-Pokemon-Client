export const DEFAULT_VALUES = {
  name: '',
  hp: '',
  attack: '',
  defense: '',
  speed: '',
  height: '',
  weight: '',
  types: []
};


export const filterItems = (array, filter) => {
  if (filter.toLowerCase() === 'default') return array;
  if (filter.toLowerCase() === 'existente') {
    return array;
  };
  if (filter.toLowerCase() === 'creado') {
    return array;
  };
  return array.filter(item => item.type.includes(filter.toLowerCase()));
};

export const itemsSort = function (array, order_by) {
  const [ad, by] = order_by.split('_');
  let swap = true;
  while (swap) {
      swap = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (ad === 'a'){
          if (array[i][by] > array[i + 1][by]) {
            let aux = array[i];
            array[i] = array[i + 1];
            array[i + 1] = aux;
            swap = true;
          };
        }
      };
  };
  return array;
};
