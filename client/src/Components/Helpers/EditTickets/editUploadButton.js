import React from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';

class EditUploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.timer = React.createRef();
    this.state = {
      loading: false,
      success: false,

    };
  }

  componentDidMount() {
    clearTimeout(this.timer.current);
  }

  componentWillUnmount() {
    clearTimeout(this.timer.current);
  }

  onChange = e => {
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);

      this.setState({ loading: true, success: false })
      this.timer.current = window.setTimeout(() => {
        this.setState({ loading: false, success: true })
      }, 2000);
    }
    };

  _handleReaderLoaded = e => {
    let binaryString = e.target.result;
    this.props.setFiles(
      btoa(binaryString)
    );
  };


  render() {

    const success = this.state.success
    const loading = this.state.loading

    const Input = styled('input')({
      display: 'none',
    });
  
    const buttonSx = {
      ...(success && {
        bgcolor: green[500],
        '&:hover': {
          bgcolor: green[700],
        },
      }),
    };

    return (
             <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{position: 'relative', mt: 2, ml: 2 }}>
        <label htmlFor="icon-button-file">
          <input
            hidden
            type="file"
            name="image"
            id="icon-button-file"
            accept=".jpg, .jpeg, .png"
            onChange={e => this.onChange(e)}
          />
          {success ?
            <Box sx={{ mr: 1 }}>
              <Button variant="contained" sx={buttonSx} disabled={loading} aria-label="upload picture" component="span" size='small' endIcon={<PhotoCameraIcon />}>
                <CheckIcon />
              </Button>
            </Box>
            :
            <Button variant="contained" sx={buttonSx} disabled={loading} aria-label="upload picture" component="span" size='small' endIcon={<PhotoCameraIcon />}>
              Upload
            </Button>
          }

        </label>
                         {loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            color: green[500],
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                )}
      </Box>
      </Box>
    );
  }
}

export default EditUploadButton;