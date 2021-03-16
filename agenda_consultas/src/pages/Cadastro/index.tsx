import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'


interface IConsultas {
    name: string;
    especiality: string;
    description: string;
}

const Cadastro: React.FC = () => {

    const [model, setModel] = useState<IConsultas>({
        name: '',
        especiality: '',
        description: '',
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    return (
        <header>

            <h1>Cadastro!!!</h1>

            <form id="cadastro-de-consulta">
                <div className="input-block">
                    <label htmlFor="subject">Nome</label>
                    <input type="text" id="subject"
                        name="name" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                </div>

                <div className="input-block">
                    <label htmlFor="especiality">Especialidade</label>
                    <input type="text-area" id="subject"
                        name="especiality" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                </div>

                <div className="input-block">
                    <label htmlFor="Begining">Inicio</label>
                    <input type="text" id="subject" />
                </div>

                <div className="input-block">
                    <label htmlFor="ending">Fim</label>
                    <input type="text" id="subject" />
                </div>

                <div className="input-block">
                    <label htmlFor="description">Descrição</label>
                    <input type="text" id="subject"
                        name="description" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                </div>
            </form>

            <Link to="/editar" className="Editar">
                <button type="button">
                    Cancelar
                </button>
            </Link>

            <Link to="/editar" className="Editar">
                <button type="button">
                    Salvar
                </button>
            </Link>
        </header>
    );
}

export default Cadastro;