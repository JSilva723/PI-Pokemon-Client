import { useEffect, useState } from 'react';
import { Check } from './Check';
import { Modal } from './Modal';
import { Service } from '../../utils/service';
import { DEFAULT_VALUES } from '../../utils/index';
import { validate } from '../../utils/validations';
const api = new Service();

export const Create = () => {

  const [inputs, setInputs] = useState(DEFAULT_VALUES);
  const [show, setShow] = useState('close');
  const [resDB, setResDB] = useState(null);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    api.insert(inputs)
      .then(res => {
        setResDB(res);
        handleShow();
        setInputs(DEFAULT_VALUES);
      })
      .catch(err => console.log(err)) // eslint-disable-line
  };

  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelect = (e) => {
    if (inputs.types.includes(e.target.value)){
      const filterTypes = inputs.types.filter(type => type !== e.target.value);
      setInputs(prev => ({
        ...prev,
        'types': [...filterTypes]
      }));
    } else {
      setInputs(prev => ({
        ...prev,
        'types': [...prev.types, e.target.value]
      }));
    }
  };

  const handleShow = () => (show === 'close' ? setShow('open') : setShow('close'));

  useEffect(() => {
    setError(validate(inputs));
    return;
  }, [inputs]);

  return (
    <>
      <Modal show={show} handleShow={handleShow} buttonTxt='Aceptar'>
        <h1>Creado</h1>
        {JSON.stringify(resDB)}
      </Modal>
      <form onSubmit={handleSubmit}>
        <input name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Nombre..."
          required
          type="text"
        />
        {error.name && <span>{error.name}</span>}
        <br />
        <input name="hp"
          value={inputs.hp}
          onChange={handleChange}
          placeholder="Ingrese los puntos de vida"
          required
          type="text"
        />
        {error.hp && <span>{error.hp}</span>}
        <br />
        <input name="attack"
          value={inputs.attack}
          onChange={handleChange}
          placeholder="Ingrese los puntos de ataque"
          required
          type="text"
        />
        {error.attack && <span>{error.attack}</span>}
        <br />
        <input name="defense"
          value={inputs.defense}
          onChange={handleChange}
          placeholder="Ingrese los puntos de defensa"
          required
          type="text"
        />
        {error.defense && <span>{error.defense}</span>}
        <br />
        <input name="speed"
          value={inputs.speed}
          onChange={handleChange}
          placeholder="Ingrese los puntos de velocidad"
          required
          type="text"
        />
        {error.speed && <span>{error.speed}</span>}
        <br />
        <input name="height"
          value={inputs.height}
          onChange={handleChange}
          placeholder="Ingrese la altura"
          required
          type="text"
        />
        {error.height && <span>{error.height}</span>}
        <br />
        <input name="weight"
          value={inputs.weight}
          onChange={handleChange}
          placeholder="Ingrese el peso"
          required
          type="text"
        />
        {error.weight && <span>{error.weight}</span>}
        <br />
        <h4>Selecione los tipos</h4>
        <Check handleSelect={handleSelect} />
        <br />
        <input name="img"
          value={inputs.img}
          onChange={handleChange}
          placeholder="Ingrese la URL de la imagen"
          type="text"
        />
        <br />
        <br />
        {
          Object.keys(error).length === 0 && inputs.types.length !== 0
            ? <button>Crear</button>
            : null
        }
      </form>
    </>
  );
};