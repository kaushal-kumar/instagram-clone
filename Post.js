import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { Container } from "react-bootstrap";

function Post() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://starlord.hackerearth.com/insta")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        {items.map((post, index) => (
          <article className="Post" key={index}>
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                    <img alt={''} />
                </div>
                <div className="Post-user-nickname">
                  <span>{'Kate'}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt={'Kaushal'} src={post.Image} />
              </div>
            </div>
            <div className="Post-user">
              <button
                className="post-like-button-white button-nodec"
              />
              {post.likes > 0 ? <span className="Post-likes"><strong>{post.likes} likes</strong></span> : null}
            </div>
            
            <div className="Post-time">
              <span>{post.timestamp}</span>
            </div>
          </article>
        ))}
      </div>
  );
}

export default Post;
