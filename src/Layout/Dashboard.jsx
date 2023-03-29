import React, { useEffect, useState } from 'react'
import BlockRow from '../Components/BlockRow'
import CustomCard from '../Components/CustomCard'
import { getBlocks } from '../utils/blocksMethods'


const Dashboard
 = () => {

     const [blocks,setBlocks] = useState({})
     const [arrOfBlockNumber,setArrOfBlockNumber] = useState([])

     const getData = async()=>{
         const response = await getBlocks(5)
         setArrOfBlockNumber(response.arrOfBlockNumber)
         setBlocks(response.blocks)
     }
	
     useEffect(()=>{

         if(!blocks.length){   
             getData()
         }
      
		
     },[])

     return (
         
         <CustomCard  className= 'dashboard'>
             <div className='dashboard__container'>
                 <div className='dashboard__container--header'>Latest Blocks</div>
                 <div className='dashboard__container_blocks__wapper'>
                     {
                         arrOfBlockNumber?.map(blockNumber=>(
                             <BlockRow key={blockNumber} block={blocks[blockNumber]} blockNumber ={blockNumber} />
                         ))
                     }                    
                 </div>
             </div>
         </CustomCard>
         
     )
 }

export default Dashboard

