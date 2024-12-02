import React, { useState } from "react";

const ProfileForm = () => {
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., send to backend)
    alert("Profile Created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Profile</h2>
      <input
        type="text"
        placeholder="First Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setProfileImage(e.target.files[0])}
      />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default ProfileForm;
