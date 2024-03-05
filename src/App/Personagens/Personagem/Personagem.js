import React, { Component } from "react"
import PropTypes from "prop-types"

import './Personagem.scss';

class Personagem extends Component {

  obterOcupacao = (ocupacoes) => {
    let ocupacao = "";
    for (let i = 0; i < ocupacoes.length; i++) {
      if (i !== 0)
        ocupacao = `${ocupacao}, `;
      ocupacao = `${ocupacao} ${ocupacoes[i]}`;
    }
    return ocupacao;
  }

  render() {
    const { personagem } = this.props;

    return (
      <div className="personagem" key={personagem.char_id}>
        <img src={personagem.img} width="100%" height="100%" alt={personagem.name} />
        <div className="dados">
          <div className="status">
            <div className="etiqueta" style={{ backgroundColor: personagem.status === 'Alive' ? '#008B45' : '#EE7600' }}>
              {personagem.status}
            </div>
          </div>
          <div className="info">
            <div className="nome">{personagem.name}</div>
            <div className="data-nascimento">★ {personagem.birthday}</div>
            <div className="ocupacao">{this.obterOcupacao(personagem.occupation)}</div>
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
