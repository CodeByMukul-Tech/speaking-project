import React, { useState, useEffect } from "react";

const PostStory = () => {
  const [story, setStory] = useState(""); // Store the story text
  const [image, setImage] = useState(null); // Store the uploaded image
  const [postTime, setPostTime] = useState(null); // Store the time when the story is posted
  const [message, setMessage] = useState(""); // Store the message after posting the story

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image file as base64 string
      };
      reader.readAsDataURL(file); // Read the uploaded file
    }
  };

  const handlePostStory = () => {
    if (story.trim() || image) {
      const currentTime = new Date().toLocaleTimeString(); // Get current time in string format
      setPostTime(currentTime); // Set the post time
      setMessage("Story Posted Successfully!");
      setStory(""); // Clear the input field after posting
      setImage(null); // Clear the image after posting
    } else {
      setMessage("Please write something or upload an image before posting.");
    }
  };

  useEffect(() => {
    if (postTime) {
      // Whenever the postTime changes, show the time of posting
      console.log(`Story posted at: ${postTime}`);
    }
  }, [postTime]); // This effect will run when postTime is updated

  return (
    <div>
      <h1>Post Your Story</h1>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)} // Update the story text
        placeholder="Write your story here..."
      ></textarea>

      {/* Image Upload */}
      <div>
        <input
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
        />
        {image && <img src={image} alt="uploaded preview" width="100" />}
      </div>

      <button onClick={handlePostStory}>Post Story</button>

      {message && <p>{message}</p>}
      {postTime && <p>Story posted at: {postTime}</p>}

      {/* Displaying the posted content */}
      {postTime && (
        <div>
          <h3>Posted Story:</h3>
          {image && <img src={image} alt="Posted Story" width="200" />}
          <p>{story}</p>
          <p>Posted at: {postTime}</p>
        </div>
      )}
    </div>
  );
};

export default PostStory;


// export default PostStory;
