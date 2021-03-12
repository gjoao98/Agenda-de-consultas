import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
    return (
        <header>
            <h1> Landing Page </h1>

            <Link to="/Cadastro" className="Cadastrar">
                <button type="button">
                    Cadastro
                </button>
            </Link>

        </header>

    );
}

export default Landing;