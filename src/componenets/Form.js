import {memeImages}from "../componenets//Images";
import { useState } from "react";

function Form (){
   const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1g8my4.jpg");

   function getMemeImage (){
      const memesArray = memeImages.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      setMemeImage(memesArray[randomNumber].url);
   }  
   return(
      <div className="bodycont">
         <div className="form">
            <input 
               type="text" 
               placeholder="Your Header here"
               id="head--text"
            />
            <input 
               type="text" 
               placeholder="Your footer here"
               id="foot--text"
            />
            <input 
               type="button" 
               value="Get a new meme image  🖼" 
               className="btn"
               onClick={getMemeImage}
            />
         </div>
         {getMemeImage &&<img src={memeImage} className="image" alt="mm"/>}
      </div>
   );
}
export default Form;