import {memeImages}from "../componenets//Images";
import React, { useState } from "react";

function Form (){
   const [meme, setMeme] = useState({
         toptext: "",
         bottomtext: "",
         randomImage:"https://i.imgflip.com/1g8my4.jpg"
   }
   )
   const [allMemesImages,]= useState(memeImages)

   function getMemeImage (){
      const memesArray = allMemesImages.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[randomNumber].url
      setMeme(prevMeme => ({
         ...prevMeme,
         randomImage: url
      }));
   }  

   function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => ({
          ...prevMeme, 
          [name]: value
      }))
  }
   return(
      <div className="bodycont">
         <div className="form">
            <input 
               type="text" 
               placeholder="Your Header here"
               id="head--text"
               name="toptext"
               value={meme.toptext}
               onChange={handleChange}
            />
            <input 
               type="text" 
               placeholder="Your footer here"
               id="foot--text"
               name="bottomtext"
               value={meme.bottomtext}
               onChange={handleChange}
            />
            <input 
               type="button" 
               value="Get a new meme image  🖼" 
               className="btn"
               onClick={getMemeImage}
            />
         </div>
         <div className="meme">
            <img src={meme.randomImage} className="image" alt="mm"/>
             <h2 className="meme--text top">{meme.toptext}</h2>
            <h2 className="meme--text bottom">{meme.bottomtext} </h2>
         </div>
         <div className="empty"></div>
      </div>
   );
}
export default Form;