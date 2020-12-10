import Layout from './hoc/Layout/Layout';
import Tools from './containers/Tools/Tools';
import Creative from './containers/Creative/Creative';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Switch>
    <Layout>
      <Route exact path="/tools" component={Tools}/>
      <Route exact path="/creative" component={Creative} />
    </Layout>
    </Switch>
  );
}

export default App;
