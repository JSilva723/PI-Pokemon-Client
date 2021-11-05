import { Switch, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { Main } from './main/Main';
import { Create } from './create/Create';
import { Detail } from './main/Detail';

export const App = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/main" component={ Main }/>
      <Route path="/detail/:name" component={ Detail }/>
      <Route path="/create" component={ Create }/>
    </Switch>
  );
};
