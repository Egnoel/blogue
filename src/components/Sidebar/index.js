import React, {useState, useEffect} from 'react'
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const po = blogPost.data;
    setPosts(po);
  }, [posts]);


  return(
    <div className="sidebarContainer">
       <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
          <div className="cardHeader">
              <span>About Us</span>
          </div>
          <div className="profileImageContainer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYchLbFeHDAxouwT536xFD3DdWY0MA7qV7N94ndpzLbQyF1P1tNlw5y8RXdDfktfT-NY&usqp=CAU" alt="Boruto" />
          </div>
          <div className="cardBody">
            <p className="personalBio">Meu nome é Egnoel Neto, Programador, Otaku e entusiasta. Curto um bom anime, jogar e passar tempo com os amigos.</p>
          </div>
      </Card>

      <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
          <div className="cardHeader">
              <span>Social Network</span>
          </div>
      </Card>

      <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
          <div className="cardHeader">
              <span>Recent Posts</span>
          </div>

          <div className="recentPosts">

            {
              posts.map(post =>{
                return (
                  <NavLink key={post.id} to={`/post/${post.id}`}>
                    <div className="recentpost">
                      <h3>{post.blogTitle}</h3>
                      <span>{post.postedOn}</span>
                    </div>
                  </NavLink>
                  
                );
              })
            }

          </div>
      </Card>


    </div>
   
   )

 }

export default Sidebar;