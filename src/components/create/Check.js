import { useEffect, useState } from 'react'
import { Service } from '../../utils/service'
const api = new Service()

export const Check = ({ handleSelect }) => {
  
  const [types, setTypes] = useState([])

  useEffect(() => {
    api.types()
      .then(res => {
        const names = res.map(type => type.name)
        setTypes([...names])
      })
    return 
  },[])

  return (
    <div>
      {
        types.map(type => {
          return (
            <div key={type}>
              <label>{type}</label>
              <input name={type}
                type="checkbox"
                value={type}
                onChange={handleSelect}
              />
            </div>
          )
        })
      }
    </div>
  )
}
