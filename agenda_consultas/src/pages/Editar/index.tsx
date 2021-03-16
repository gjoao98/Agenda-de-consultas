import React from 'react';
import { Link } from 'react-router-dom';

const Editar: React.FC = () => {
    return (
        <header>
            <h1>Alterar Cadastro</h1>
            <form id="cadastro-de-consulta">
                <div className="input-block">
                    <label htmlFor="subject">Nome</label>
                    <input type="text" id="subject" />
                </div>

                <div className="input-block">
                    <label htmlFor="especiality">Especialidade</label>
                    <input type="text" id="subject" />
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
                    <input type="text" id="subject" />
                </div>
            </form>

            <Link to="/editar" className="Editar">
                <button type="button">
                    Cancelar
                    </button>
            </Link>

            <Link to="/" className="Editar">
                <button type="button">
                    Salvar
                    </button>
            </Link>
        </header>
    );
}

export default Editar;