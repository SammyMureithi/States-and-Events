import React from 'react'

function ImagePicker() {
    const [image, setImage] = React.useState( "https://randomfox.ca/images/41.jpg" );
    const [likes,setLikes] = React.useState( 0 );
    
    function handleNewFoxClick() {
      fetch("https://randomfox.ca/floof/")
        .then((response) => response.json())
        .then(({ image }) => {
          console.log(image)
        })
    }
    function addLike(){
        return setLikes( prevLikes => prevLikes + 1 );
    }
    
    return (
      <div>
        <h1>🦊 FoxFindr 🦊</h1>
        <div className="buttons">
            <button onClick={handleNewFoxClick}>New 🦊 Please</button>
            <button onClick={addLike}>Likes: {likes}</button>
        </div>
        <img src={image} alt="Random Fox" />
      </div>
    );
  }


export default ImagePicker