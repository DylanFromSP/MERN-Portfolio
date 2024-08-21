import React from 'react'

const InputProject = () => {
    
    const convertToBase64 = (e) => {
        console.log(e);
        const reader = new FileReader();
        
        reader.readAsDataURL(e.target.files[0]);
        
        reader.onload = () => {
          console.log(reader.result);
          setImage(reader.result);
        };
        
        reader.onerror = (error) => {
          console.log("Error: ", error);
        };
      };
    
      const uploadImage = async () => {
        try {
          const response = await fetch("/api/projects/uploadImage", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              base64: image,
            }),
          });
      
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };

  return (
    <div>
      {projects && projects.map((project) => (
          <p key={project._id}>{project.title}</p>
        ))}
        <input
          accept='image/*'
          type='file'
          onChange={convertToBase64}
        />
        {image && (
          <img
            width={100}
            height={100}
            src={image}
            alt="Selected"
          />
        )}
        <button onClick={uploadImage}>Upload</button>
    </div>
  )
}

export default InputProject
