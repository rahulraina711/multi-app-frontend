import {Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App';
import Note from './Components/Notes/Note';

export default function Router (){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/createNote"><Note /></Route>
                    <Route path="/"><App /></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}