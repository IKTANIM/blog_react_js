import React from 'react';
import {Link} from 'react-router-dom';
import JsonPlaceHolder from '../api/jsonPlaceHolder';

class PostList extends React.Component{
    state={posts: []};
    componentWillMount(){
        JsonPlaceHolder.get('/posts').then(allPosts=>{
            this.setState({posts:allPosts.data })
        });
        console.log(this.state.posts);
        
    }
    
    
    postList(){
       
       
        
        return this.state.posts.map(post=>{
            return(
                    <div className="card mb-4" key={post.id}>
                        <div className="card-body">
                            <h2 className="card-title">{post.title.toUpperCase()}</h2>
                            <p className="card-text">{post.body.substr(0,100)}</p>
                            <Link to={`/post/${post.id}`} className="btn btn-primary">Read More &rarr;</Link>
                        </div>
                    </div>
                
            );
        });
    }
    render(){
        return(
            <div  >
                <div className="col-md-12">
                    {this.postList()}
                </div>
            </div>
        );
    };
};

export default PostList;