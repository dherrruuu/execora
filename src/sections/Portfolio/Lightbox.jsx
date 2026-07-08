import { useEffect } from "react";
import "./Lightbox.css";

import {

ChevronLeft,
ChevronRight,
X

} from "lucide-react";

export default function Lightbox({

images,
index,
setIndex,
onClose

}){

useEffect(()=>{

const handle=(e)=>{

if(e.key==="Escape") onClose();

if(e.key==="ArrowLeft")
setIndex((index-1+images.length)%images.length);

if(e.key==="ArrowRight")
setIndex((index+1)%images.length);

};

window.addEventListener("keydown",handle);

return ()=>window.removeEventListener("keydown",handle);

},[index]);

return(

<div className="lightbox">

<button
className="lightbox-close"
onClick={onClose}
>

<X size={24}/>

</button>

<button
className="lightbox-arrow left"
onClick={()=>setIndex((index-1+images.length)%images.length)}
>

<ChevronLeft size={34}/>

</button>

<img
src={images[index]}
alt=""
/>

<button
className="lightbox-arrow right"
onClick={()=>setIndex((index+1)%images.length)}
>

<ChevronRight size={34}/>

</button>

<div className="lightbox-count">

{index+1} / {images.length}

</div>

</div>

);

}