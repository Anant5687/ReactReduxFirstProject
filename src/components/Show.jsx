import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import style from './show.module.css'
import { useSelector } from 'react-redux';

export default function Show() {
const selector = useSelector(state=>state.slice.value)
  return (
    <>
    <Card sx={{ display: 'flex', marginTop:'50px'}} className={style.card}>
      <Box sx={{ display: 'flex', flexDirection: 'column',  flexGrow: 1 }} >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{ marginLeft:'150px', color:"#ff6a00"}}>
            Balance Inquiry
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{marginTop:'20px', marginLeft:'150px',  color:'#994949'}}>
           Digikull bank of India
          </Typography>
          <Typography component="div" variant="h5" sx={{marginTop:'40px', color:"blue"}}>
            Your Balance:   {selector}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJWQY6rVgMFV6Zap6uriLpxc5twBuvSkf0g&usqp=CAU
        "  
        alt="Live from space album cover"
      />
    </Card>
    </>
  );
}