import React, { useState, useRef } from "react";
import axios from "axios";

const hostUrl = 'http://localhost:4000/api/upload';

export const Uploader = React.forwardRef(({ currentRowId }, ref) => {
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState();
  const filePicker = ref;
  
  const handleUpload = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('file', filePicker.current.files[0]);  
      try {
        const response = await axios.post(`${hostUrl}?currentRowId=${currentRowId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        if (response.status === 200) {
          setUploaded(response.data);
          console.log('Image uploaded:', response.data);
        } else {
          console.error('Failed to upload image');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.warn('No image selected');
    }
  };

  return (
    <div className="form-container">
      <form
        action=""
        className="upload-form"
        encType="multipart/form-data"
        onClick={() => filePicker.current.click()}
      >
        <input type="file" ref={filePicker} accept="image/*" className="input-field" hidden
          onChange={({ target: { files } }) => {
            if (files) {
              setImage(URL.createObjectURL(files[0]))
            }
          }}
        />
        {image
          ? <img src={image} alt="no image" style={{width: '130px', height: '170px', borderRadius: '3px'}}/>
          : 'Pick!'
        }
      </form>
      <button onClick={handleUpload} className="form-button">Upload</button>
    </div>
  );
})