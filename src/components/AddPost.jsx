import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';

function AddPost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        className='flex justify-center items-center'
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} bgcolor={'background.default'} color={'text.primary'} borderRadius={5} p={3}>
          <Typography variant="h6" color='gray' textAlign="center">Create Post</Typography>
          <Box className="flex items-center gap-2 mb-5">
            <Avatar sx={{ bgcolor: 'red' }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Typography fontWeight={500} variant='span'>John Doe</Typography>
          </Box>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            multiline
            rows={3}
            defaultValue="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
            <Button>
              Post
            </Button>
            <Button sx={{ width: '100%' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}

export { AddPost }