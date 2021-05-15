import './App.scss';
import logo from './static/logo.png';
import {Add, Note, FormatListBulleted, PublicOutlined} from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="title-logo">
          <div id="app-logo"><img src={logo} alt="app-logo"/></div>
          <div id="app-title">My Notes</div>
        </div>
        <div className="content-box">
          display notes here
        </div>
      </header>
      <footer className="app-footer">
        <div id="add-btn-block">
          <button id="add-btn"><Add style={{ fontSize: 30 }}/></button>
        </div>
        <div className="more-optns">
          <div className="switches">
            <Note className="q" style={{ fontSize: 30 }} />
            <FormatListBulleted className="q" style={{ fontSize: 30 }} />
            <PublicOutlined className="q" style={{ fontSize: 30 }} />
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
