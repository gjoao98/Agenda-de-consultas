import React from 'react';
import { Link } from 'react-router-dom';

const Editar: React.FC = () => {
    return (
        <header>
            <h1>Alterar Cadastro</h1>

            <Link to="/" className="Landing">
                <button type="button">
                    Landing
                </button>
            </Link>

        </header>
    );
}

export default Editar;