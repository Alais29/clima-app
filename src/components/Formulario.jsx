import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  const [error, guardarError] = useState(false)

  //extraer ciudad y pais
  const { ciudad, pais } = busqueda

  //Función que coloca los elementos en el state
  const handleChange = e => {
    //actualizar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  // Al hacer submit al form
  const handleSubmit = e => {
    e.preventDefault()
    //validar
    if (ciudad.trim() === '' || pais.trim() === '') {
      guardarError(true)
      return;
    }
    guardarError(false)
    // pasar al componente principal
    guardarConsultar(true)
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
    >
      {error && <Error mensaje="Ambos campos son obligatorios" />}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="pais"
          id="pais"
          value={pais}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
          <option value="CL">Chile</option>
        </select>
        <label htmlFor="pais">País</label>
      </div>
      <div className="input-field col s12">
        <button type="submit" className=" black-text waves-effect waves-light btn-large btn-block yellow accent-4">Buscar Clima</button>
      </div>
    </form>
  )
}

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired
}

export default Formulario
