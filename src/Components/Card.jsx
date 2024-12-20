import React from 'react'
import { motion } from "motion/react"
import { FaRegFileLines,FaDownload } from "react-icons/fa6";

const Card = ({data,refrence}) => {
  return (
     <motion.div drag dragConstraints={refrence}  whileDrag={{scale:1.1}} dragElastic={0.2 } className='relative w-60 flex-shrink-0 h-72 rounded-[40px] bg-zinc-900/90 text-[#ffffffd5] px-8 py-10 overflow-hidden '>

     <FaRegFileLines />
     
     <p className='text-[1vw] leading-tight mt-5 font-semibold '>{data.desc}</p>

     <div className='footer absolute bottom-0  w-full h-[5vw] left-0 '>
     <div className='flex item-center justify-between px-8 pb-1 text-white/50'>
          <h3>{data.filesize}</h3>
          <span className='w-6 h-6 bg-zinc-500 rounded-full flex items-center justify-center text-center text-black'>
               {data.close ? <p>X</p> :<FaDownload size='0.8rem'/>}
          
          </span>
     </div>
          {
               data.tag.isOpen &&
                    (<div className={` tag w-full pt-2 pb-2 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"} flex items-center justify-center  `}>
               <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
               </div>)    
          }
    
     </div>

     </motion.div>
  )
}

export default Card