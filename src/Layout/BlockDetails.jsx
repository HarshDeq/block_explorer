import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBlockDetailByBlockNumber } from '../utils/blocksMethods'

const BlockDetails = () => {
    const {blockNumber} = useParams()
    const [blockDetail, setBlockDetail] = useState(null)


    const getBlockDetail = async()=>{
        const block = await getBlockDetailByBlockNumber(blockNumber)

        setBlockDetail(block)
    }
    
    useEffect(()=>{
        if(blockNumber){
            getBlockDetail()
        }
    },[])

    console.log(blockDetail)

    return (
        <div>BlockDetails</div>
    )
}

export default BlockDetails