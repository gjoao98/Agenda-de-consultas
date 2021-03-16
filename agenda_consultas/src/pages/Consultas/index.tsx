import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

import api from '../../services/api'

interface IConsultas {
    id: number;
    name: string;
    especiality: string;
    begin: Date;
    finish: Date;
    description: string;
}

const Consultas: React.FC = () => {

    const [consultas, setConsultas] = useState<IConsultas[]>([])
    const history = useHistory()

    useEffect(() => {
        loadConsultas()
    }, [])

    async function loadConsultas() {

        const response = await api.get('/consultas')
        console.log(response)
        setConsultas(response.data)
    }

    function novaConsulta() {
        history.push('/cadastro')
    }


    return (
        <header>
            <h1> Consultas </h1>

            <div>
                {
                    consultas.map(consultas => (
                        <ul key={consultas.id}>
                            <li>{consultas.name}</li>
                            <li>{consultas.especiality}</li>
                            <li>{consultas.begin}</li>
                            <li>{consultas.finish}</li>
                            <li>{consultas.description}</li>
                        </ul>
                    ))
                }

                <Link to="/cadastro" className="Cadastrar">
                    <button type="button" onClick={novaConsulta}>
                        Cadastrar nova consulta
                    </button>
                </Link>
            </div>
        </header>
    );
}

export default Consultas;