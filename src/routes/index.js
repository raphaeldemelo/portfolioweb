import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Projetos from '../pages/Projetos';
import Erro from '../pages/PaginaErro';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/projetos' component={Projetos} />
                <Route path='*' component={Erro} />
            </Switch >
        </BrowserRouter>
    )
}