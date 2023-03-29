import { web3_instance } from './constants';


export const getBlocks=async(numberOfBlock=5)=>{
 
    console.log(web3_instance)
    const latestBlockNumber = await web3_instance.eth.getBlockNumber()

    const arrOfBlocks = {}

    for(let blockNumber = latestBlockNumber ;blockNumber> latestBlockNumber-numberOfBlock;blockNumber--){
        const block = await getBlockDetailByBlockNumber(blockNumber)
        const transactionCount = await getBlockTransactionCount(blockNumber)
        arrOfBlocks[blockNumber] = {...block , transactionCount}
    }

    return {
        arrOfBlockNumber:Object.keys(arrOfBlocks).reverse(),
        blocks:arrOfBlocks
    }

}

const getBlockTransactionCount =async (blockNumber)=>{
    return await web3_instance.eth.getBlockTransactionCount(blockNumber)
}


export const getBlockDetailByBlockNumber =async(blockNumber)=>{
    const blockDetails =  await web3_instance.eth.getBlock(blockNumber)
    const transactionCount = await getBlockTransactionCount(blockNumber)

    return {...blockDetails, transactionCount}
}