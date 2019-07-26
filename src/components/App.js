import React from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import Header from './Header';
import JsonPlaceHolder from '../api/jsonPlaceHolder';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends React.Component{
    // state={posts: []};
    //  async componentDidMount(){
    //     const allPosts= await JsonPlaceHolder.get('/posts');
    //     // console.log(allPosts.data);
        
    //     this.setState({posts:allPosts.data });
    // }
    render(){
        // console.log(this.state.posts);
        
        return(
            <BrowserRouter>
                <Header/>
                <div className="container" style={{marginTop:'2em'}}>
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