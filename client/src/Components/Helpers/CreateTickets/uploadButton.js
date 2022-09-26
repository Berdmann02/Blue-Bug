import React from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.timer = React.createRef();
    this.state = {
      // base64Data: 'hello'
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

  //   handleButtonClick = (e) => {
  //     if (!this.loading) {
  //         // setSuccess(false);
  //         // setLoading(true);
  //         this.setState({ loading: true, success: false })
  //         this.timer.current = window.setTimeout(() => {
  //             // setSuccess(true);
  //             // setLoading(false);
  //             this.setState({ loading: false, success: true })
  //         }, 2000);
  //     }
  // };

  onChange = e => {
    // console.log("file uploaded: ", e.target.files[0]);
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

    // if (!this.loading) {
    //   // setSuccess(false);
    //   // setLoading(true);
    //   this.setState({ loading: true, success: false })
    //   this.timer.current = window.setTimeout(() => {
    //     // setSuccess(true);
    //     // setLoading(false);
    //     this.setState({ loading: false, success: true })
    //   }, 2000);
    // }
  // };

  _handleReaderLoaded = e => {
    // console.log("file uploaded 2: ", e);
    let binaryString = e.target.result;
    // // this.props.setBase64Data({
    // //   base64Data: btoa(binaryString)
    // // });
    this.props.setFiles(
      // base64Data: btoa(binaryString)
      // files: 
      // btoa(binaryString)
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
            <Box sx={{position: 'relative', mt: 2 }}>
        {/* <input
          // multiple
          type="file"
          name="image"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={e => this.onChange(e)}
        /> */}

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

        {/* <p>base64 string: {this.props.files.files}</p> */}
        {/* <br /> */}
        {/* {base64Data != null && <img src={`data:image;base64,${base64Data}`} />} */}
      </Box>
      </Box>
    );
  }
}

export default UploadButton;



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import CircularProgress from '@mui/material/CircularProgress';
// import { green } from '@mui/material/colors';
// import Button from '@mui/material/Button';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
// import CheckIcon from '@mui/icons-material/Check';
// import { styled } from '@mui/material/styles';
// import { getFilledInputUtilityClass, Typography } from '@mui/material';
// import FileBase64 from 'react-file-base64';


// export default function CircularIntegration({ files, setFiles }) {
//     const [loading, setLoading] = React.useState(false);
//     const [success, setSuccess] = React.useState(false);
//     const timer = React.useRef();

//     const Input = styled('input')({
//         display: 'none',
//     });

//     const buttonSx = {
//         ...(success && {
//             bgcolor: green[500],
//             '&:hover': {
//                 bgcolor: green[700],
//             },
//         }),
//     };

//     React.useEffect(() => {
//         return () => {
//             clearTimeout(timer.current);
//         };
//     }, []);

//     const handleButtonClick = (e) => {
//         if (!loading) {
//             setSuccess(false);
//             setLoading(true);
//             timer.current = window.setTimeout(() => {
//                 setSuccess(true);
//                 setLoading(false);
//             }, 2000);
//         }
//         // if (e) {
//         //     setFiles(e.target.value[0]);
//         // }
//     };

//     // const handleUpload = (e) => {
//     //     setFiles(files);
//     //     console.log(files);
//     // }
//     console.log(files);

//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Box sx={{position: 'relative', mt: 2 }}>
//             {/* <Box sx={{ mt: 2 }}> */}

//                 <label htmlFor="icon-button-file">
//                     <Input value={files} accept="image/*" id="icon-button-file" type="file" multiple onChange={handleButtonClick} />
//                     {/* <FileBase64
//                         multiple={ true }
//                         // onDone={ ({ base64 }) => setFiles({ ...files, image: base64 }) } 
//                         onDone={({ base64 }) => setFiles({ ...files, image: base64 })}
//                         // onDone={handleUpload} 
//                         /> */}
//                     {success ?
//                         <Box sx={{ mr: 1}}>
//                             <Button variant="contained" sx={buttonSx} disabled={loading} aria-label="upload picture" component="span" size='small' endIcon={<PhotoCameraIcon />}>
//                                 <CheckIcon />
//                             </Button>
//                         </Box>
//                         :
//                         <Button variant="contained" sx={buttonSx} disabled={loading} aria-label="upload picture" component="span" size='small' endIcon={<PhotoCameraIcon />}>
//                             Upload
//                         </Button>
//                     }

//                 </label>
//                 {loading && (
//                     <CircularProgress
//                         size={24}
//                         sx={{
//                             color: green[500],
//                             position: 'absolute',
//                             top: '50%',
//                             left: '50%',
//                             marginTop: '-12px',
//                             marginLeft: '-12px',
//                         }}
//                     />
//                 )}
//             </Box>
//         </Box>
//     );
// }
