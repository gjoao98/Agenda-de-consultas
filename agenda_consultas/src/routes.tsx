import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Cadastro from './pages/Cadastro'
import Editar from './pages/Editar'
import Consultas from './pages/Consultas'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Consultas} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/editar" component={Editar} />
        </Switch>
    );
}

export default Routes;