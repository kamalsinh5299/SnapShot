// import React, { useState } from "react";
// const API_KEY="25605016-7c37ea89c48504eef902e9736"

// function Test(props) {
//     const [items,setItem]=useState([]);
//  const  Handel=async(name)=>{
   
//     const url=`https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo`
//     const request=await fetch(url);
//     const response=await request.json()
//     setItem({imagaes:response.hits})
// }

//     return ( 
//         <div>
//                 {items.map(({largeImageURL,tags})=>{
//                     return<img src={largeImageURL} alt={tags}></img>
//                 })}


//             <button onClick={()=>Handel("dog")}>Dog</button>
//             <button  onClick={()=>Handel("cat")}>cat</button>
//             <button  onClick={()=>Handel("food")}>Food</button>
//             <button  onClick={()=>Handel("burger")}>Burger</button>
//         </div>
//      );
// }

// export default Test;