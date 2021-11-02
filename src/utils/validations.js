const re_name = /[0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]/
const re_number = /[A-Za-z_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]/
export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'El nombre es requerido';
  } else if (re_name.test(input.name)) {
    errors.name = 'El nombre es invalido';
  }
  if (!input.hp) {
    errors.hp = 'Los puntos de vida son requeridos';
  } else if (re_number.test(input.hp)) {
    errors.hp = 'Debe ser un numero';
  }
  if (!input.attack) {
    errors.attack = 'Los puntos de ataque son requeridos';
  } else if (re_number.test(input.attack)) {
    errors.attack = 'Debe ser un numero';
  }
  if (!input.defense) {
    errors.defense = 'Los puntos de defensa son requeridos';
  } else if (re_number.test(input.defense)) {
    errors.defense = 'Debe ser un numero';
  }
  if (!input.speed) {
    errors.speed = 'La velocidad es requerida';
  } else if (re_number.test(input.speed)) {
    errors.speed = 'Debe ser un numero';
  }
  if (!input.height) {
    errors.height = 'La altura es requerida';
  } else if (re_number.test(input.height)) {
    errors.height = 'Debe ser un numero';
  }
  if (!input.weight) {
    errors.weight = 'El peso es requerido';
  } else if (re_number.test(input.weight)) {
    errors.weight = 'Debe ser un numero';
  }
  return errors;
};