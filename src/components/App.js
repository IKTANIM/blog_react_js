import React from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import Header from './Header';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <div className="container" style={{marginTop:'2em',width:"80%",alignItem:"center"}}>
                    <div className="row">
                        <Route path="/" exact component={PostList} />
                        <Route path="/post/:postId"  exact  component={PostDetail} />
                    </div>
                </div>
            
            </BrowserRouter>
            
        );
    };
}

export default App;