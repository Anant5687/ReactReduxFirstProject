import React from 'react'
import { Button } from '@mui/material'
import { creditMoney, debitMoney } from '../conterSlice/counterSlice';
import { useDispatch } from 'react-redux';

const BuTton = () => {
    const dispatch =  useDispatch();
    const click1 = () =>{
        dispatch(creditMoney())
        console.log("Clicked")
    }
    const click2 = () =>{
        dispatch(debitMoney())
        console.log("Clicked")
    }
    return (
        <div>
            <Button variant='contained'
                style={{ marginTop: '280px', marginLeft: '420px' , borderRadius:"3rem" }}
                onClick={()=>click1()}>
               Credit 10,000 USD
            </Button>
            <Button variant='contained' color='error' onClick={()=>click2()}
                style={{ marginTop: '280px', marginLeft: '400px' , borderRadius:"3rem"}}>
                Debit 10000 USD
            </Button>
        </div>
    )
}

export default BuTton
