import Layout from './hoc/Layout/Layout';
import Tools from './containers/Tools/Tools';
import Creative from './containers/Creative/Creative';
import Chat from './containers/JoinRoom/JoinRoom';
import Chatbox from './components/Chat/ChatBox/Chat'
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Switch>
    <Layout>
      <Route exact path="/tools" component={Tools}/>
      <Route exact path="/creative" component={Creative} />
      <Route  exact path="/chat" component={Chat} />
      <Route  path="/chat/room" component={Chatbox} />
    </Layout>
    </Switch>
  );
}

export default App;
