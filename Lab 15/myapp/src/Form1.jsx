
import React, { useState } from "react";

const Form1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div>
      <h3>Form with useState</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>Typed Name: {formData.name}</p>
      <p>Typed Email: {formData.email}</p>
    </div>
  );
};

export default Form1;
