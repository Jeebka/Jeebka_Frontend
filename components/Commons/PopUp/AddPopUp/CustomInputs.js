import {styled} from "@mui/material/styles";

export const CustomNameInput = styled('textarea')(({ theme, height, autoSize }) => ({
    width: '100%',
    padding: '2%',
    maxWidth: '100%',
    height: height,
    border: 'hidden',
    borderRadius: '5px',
    outline: 'none',
    autoSize: autoSize,
    resize: 'none',
    backgroundColor: '#f2f2f2'
}));