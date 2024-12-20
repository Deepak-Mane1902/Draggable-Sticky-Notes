
import { useRef } from 'react';
import Card from './Card'
     
const Foreground = () => {

     const ref = useRef(null)
     const data =[
          {
               desc :"Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing elit",
               filesize:".9mb",
               close:false,
               tag:{isOpen:true, tagTitle:"Learn More", tagColor:"green"},
          },
          {
               desc :"Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing elit",
               filesize:".9mb",
               close:false,
               tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"},
          },
          {
               desc :"Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing elit",
               filesize:".9mb",
               close:false,
               tag:{isOpen:true, tagTitle:"Upload", tagColor:"green"},
          },
     ];

  return (
          <div ref={ref} className='fixed top-0 left-0 z-[3] w-[100%] h-[100vh] flex gap-10 flex-wrap p-5'>
          {data.map((item,index)=>(
               <Card data={item} refrence={ref}/>
          ))}

          </div >

  )
}

export default Foreground