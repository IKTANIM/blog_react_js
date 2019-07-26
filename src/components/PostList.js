import React from 'react';
import {Link} from 'react-router-dom';
import JsonPlaceHolder from '../api/jsonPlaceHolder';

class PostList extends React.Component{
    state={posts: []};
    async componentDidMount(){
        const allPosts= await JsonPlaceHolder.get('/posts');
        // console.log(allPosts.data);
        
        this.setState({posts:allPosts.data });
    }
    postList(){
        // console.log(this.props);
       
        
        return this.state.posts.map(post=>{
            return(
                    <div className="card mb-4" key={post.id}>
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p className="card-text">{post.body}</p>
                            <Link to={`/post/${post.id}`} className="btn btn-primary">Read More &rarr;</Link>
                        </div>
                        {/* <div className="card-footer text-muted">
                            Posted on January 1, 2017 by
                            <a href="#">Start Bootstrap</a>
                        </div> */}
                    </div>
                
            );
        });
    }
    render(){
        return(
            <div className="col-md-8">
                {this.postList()}
            </div>
        );
    };
};

export default PostList;