import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Cadastro from './pages/Cadastro'
import Editar from './pages/Editar'
import Landing from './pages/Landing'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/Cadastro" component={Cadastro} />
            <Route path="/Editar" component={Editar} />
        </Switch>
    );
}

export default Routes;