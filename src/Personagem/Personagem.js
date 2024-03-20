import React, { Component } from "react"
import PropTypes from "prop-types"

import './Personagem.scss';

class Personagem extends Component {

  render() {
    const { personagem } = this.props;
    console.log(personagem)

    let imagem = personagem.image !== "" ? personagem.image : "https://i.pinimg.com/280x280_RS/46/87/d9/4687d9c8695cfb2d7acd2a303ae45228.jpg"

    return (
      <div className="personagem" key={personagem.id}>
        <img src={imagem} width="100%" height="100%" alt={personagem.name} />
        <div className="dados">
          <div className="status">
            <div className="etiqueta" style={{ backgroundColor: personagem.alive ? '#008B45' : '#EE7600' }}>
              {personagem.species}
            </div>
          </div>
          <div className="info">
            <div className="nome">{personagem.name}</div>
            <div className="data-nascimento">★ {personagem.dateOfBirth}</div>
            <div className="ocupacao">{personagem.house}</div>
          </div>
        </div>
      </div>
    )
  }
}

Personagem.propTypes = {
  personagem: PropTypes.object.isRequired,
}

export default Personagem
