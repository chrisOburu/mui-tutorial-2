import { Mail, Notifications, Star } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography, Menu, MenuItem } from "@mui/material"
import { useState } from "react";

function Navbar() {
  const [open , setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <Toolbar className="flex justify-between">
        <Star sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} className="font-bold">Star Lizard</Typography>
        <Box className="bg-white px-2 rounded-sm w-[40%]">
          <InputBase placeholder="Search..." />
        </Box>
        {/* display only on screen larger than sm */}
        <Box className="gap-4 items-center" sx={{ display: { xs: "none", sm: "flex" }}}> 
          <Badge badgeContent={4} color="primary">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={() => setOpen(true)}
           className="w-7 h-7"
            src="https://images.pexels.com/photos/30600294/pexels-photo-30600294.jpeg?cs=srgb&dl=pexels-moment-s-photography-2149154854-30600294.jpg&fm=jpg" />
        </Box>
        {/* <Box className="flex items-center gap-2"> */}
        <Box onClick={() => setOpen(true)} className="gap-4 items-center" sx={{ display: { xs: "flex", sm: "none" }}}> 
          <Avatar  className="w-7 h-7" src="https://images.pexels.com/photos/30600294/pexels-photo-30600294.jpeg?cs=srgb&dl=pexels-moment-s-photography-2149154854-30600294.jpg&fm=jpg" />
          <Typography variant="span">John</Typography>
        </Box>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar