import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Personagem from '../Personagem/Personagem'
import { getPersonagens } from '../redux/personagens/slice'

import './Personagens.scss';

const Personagens = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.personagensReducer)

  const [personagens, setPersonagens] = useState([]);
  const [valorBusca, setValorBusca] = useState('');

  useEffect(() => {
    dispatch(getPersonagens());
  }, [dispatch])

  useEffect(() => {
    setPersonagens(data);
  }, [data])

  function handleChange(valor) {
    const listaPersonagensFiltrada = data.filter(p => p.name.toUpperCase().includes(valor.toUpperCase()));
    setPersonagens(listaPersonagensFiltrada);
    setValorBusca(valor)
  }

  return (
    <div className="Personagens">
      <div className="cabecalho">

        <div className="busca">
          <input
            id="input-busca"
            type="search"
            value={valorBusca}
            onChange={(value) => handleChange(value.target.value)}
            placeholder="Pesquise os personagens"
          />
        </div>
      </div>
      <div className="lista-personagens">
        <div className="titulo">
          {valorBusca ? `Você pesquisou por "${valorBusca}"` : 'Personagens'}
        </div>
        <div className="lista">
          {personagens && personagens.map(
            personagem => <Personagem personagem={personagem} key={personagem.char_id} />
          )}
        </div>
      </div>
    </div>
  )
}
export default Personagens;