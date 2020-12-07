import Layout from './hoc/Layout/Layout';
import Tools from './containers/Tools/Tools';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Switch>
    <Layout>
      <Route exact path="/tools" component={Tools}/>
    </Layout>
    </Switch>
  );
}

export default App;
