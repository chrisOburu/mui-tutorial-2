import { Box } from "@mui/material"
import Post from "./Post";

function Feed() {
    return (
        <Box flex={4} p={2}>
            {Array.from({ length: 12 }).map((_, index) => (
                <Post key={index} />
            ))}
            
        </Box>
    );
}

export default Feed