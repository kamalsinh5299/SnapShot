import React from "react";
import './ImageList.css';
const ImageList = (props) =>{
    return(
        <div className="container">
            <div className="row">
              {props.images.map(({id ,tags,largeImageURL})=>{
               return(
                   <div key={id}  style={{marginBottom:"1rem"}}>
                       <div className="ImageList__container">
                       <img src={largeImageURL} alt={tags}/>
                        </div>
                        
                   </div>
               )
           })}
            </div>
        </div>
    );
}

export default ImageList;