import { Grid } from '@mui/material'
import React from 'react'
import blockPng from '../static/img/cube.png'
import { getTimeDiff } from '../utils/getTimeDiff'
import Link from './Link'

const BlockRow = (props) => {
    const {block,blockNumber} = props
    return (
        <div className='block'>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <div className='flex block__section-1 flex--jsutify-content__space--evenly' >
                        <div className='block__section-1--logo'>
                            <img src ={blockPng} height ='20'/>
                        </div>
                        <div className='block__section-1--blocknumber'> 
                            <Link to={`/block/${blockNumber}`} label ={blockNumber} />
                           
                        </div>
                        <div className='block__section-1--timeStamp'> 
                            {getTimeDiff(block.timestamp)}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div>Fee Recipient {block.miner}</div>
                </Grid>
                <Grid item xs={2}>
                    {block.transactionCount} txn
                </Grid>
                
            </Grid>
            
        </div>
    )
}

export default BlockRow