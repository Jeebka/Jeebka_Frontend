import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Add } from "@mui/icons-material";

function AddLinkButton(props) {
  return (
    <Button
      variant="contained"
      className="AddLinkbutton"
      onClick={props.onClickButton}
      endIcon={<AddCircleIcon />}
    >
      Add Link
    </Button>
  );
}

export default AddLinkButton;
