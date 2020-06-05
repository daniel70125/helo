import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props){
    console.log(props);
    return (
        <div>
            <Link to='/Dashboard'>Home</Link>
            <Link to='/post/:postid'>New Post</Link>
            <Link to='/auth'>Logout</Link>
        </div>
    )
}
 
export default Nav ;