import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import './index.css';
import './tailwind.output.css';

import Page from './pages/Page';
import ModeSelectionPage from './pages/ModeSelectionPage';
import GamePage from './pages/GamePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Page component={ModeSelectionPage}/>}/>
        <Route exact path="/game" render={() => <Page component={GamePage}/>}/>
        <Route path="*" render={() => <Page component={NotFoundPage}/>}/>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
