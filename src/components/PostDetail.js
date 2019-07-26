import React from 'react';
import {Link} from 'react-router-dom';
import JsonPlaceHolder from '../api/jsonPlaceHolder';

class PostDetail extends React.Component{
    state={post: null};
    async componentDidMount(){
        const postId=this.props.match.params.postId;
        const postDetail= await JsonPlaceHolder.get(`/posts/${postId}`);
        // console.log(allPosts.data);
        
        this.setState({post:postDetail.data });
    }
    PostDetail(){
        console.log(this.state.post);
        const {post}=this.state;
        if(this.state.post){
            return(
                <div className="card mb-4" key={post.id}>
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-text">{post.body}</p>
                        <Link to="#" className="btn btn-primary">Read More &rarr;</Link>
                    </div>
                    {/* <div className="card-footer text-muted">
                        Posted on January 1, 2017 by
                        <a href="#">Start Bootstrap</a>
                    </div> */}
                </div>
            );
        }
    }
    render(){
        console.log(this.props.match.params.postId);
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {this.PostDetail()}
                    </div>
                </div>
            </div>
        );
    };
};

export default PostDetail;