import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const UserContactPopup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup}>
      <DialogTitle sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography variant='h5'>{title}</Typography>
        <Button onClick={()=>{setOpenPopup(false)}} color='success' variant='text' size='small'>
          <CloseIcon  />
        </Button>
      </DialogTitle>
      <DialogContent dividers sx={{p:0}}>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default UserContactPopup;