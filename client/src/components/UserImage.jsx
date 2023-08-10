import { Box } from "@mui/material";

const UserImage = ({ image, size="100px"}) => {
    return (
        <Box width={size} height={size}>
            <img 
                style={{ objectFit: "scale-down", borderRadius: "50%"}}
                width={size}
                height="100px"
                alt="user"
                src={`http://localhost:3001/assets/${image}`}
            />
        </Box>
    );
}

export default UserImage;