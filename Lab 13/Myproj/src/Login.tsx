import React, { useState } from "react";

function NovellLoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    city: "",
    server: "",
    role: "",
    singleSignOn: {
      mail: false,
      payroll: false,
      selfService: false,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        singleSignOn: {
          ...formData.singleSignOn,
          [name]: checked,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      city: "",
      server: "",
      role: "",
      singleSignOn: { mail: false, payroll: false, selfService: false },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2>Login Form by 23BCE1237</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>City of Employment:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label>Web server:</label>
          <select name="server" value={formData.server} onChange={handleChange}>
            <option value="">-- Choose a server --</option>
            <option value="Server1">Server1</option>
            <option value="Server2">Server2</option>
            <option value="Server3">Server3</option>
          </select>
        </div>
        <div>
          <label>Please specify your role:</label>
          <div>
            <input type="radio" name="role" value="Admin" checked={formData.role === "Admin"} onChange={handleChange} /> Admin
            <input type="radio" name="role" value="Engineer" checked={formData.role === "Engineer"} onChange={handleChange} /> Engineer
            <input type="radio" name="role" value="Manager" checked={formData.role === "Manager"} onChange={handleChange} /> Manager
            <input type="radio" name="role" value="Guest" checked={formData.role === "Guest"} onChange={handleChange} /> Guest
          </div>
        </div>
        <div>
          <label>Single Sign-on to the following:</label>
          <div>
            <input type="checkbox" name="mail" checked={formData.singleSignOn.mail} onChange={handleChange} /> Mail
            <input type="checkbox" name="payroll" checked={formData.singleSignOn.payroll} onChange={handleChange} /> Payroll
            <input type="checkbox" name="selfService" checked={formData.singleSignOn.selfService} onChange={handleChange} /> Self-service
          </div>
        </div>
        <div>
          <button type="submit">Login</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default NovellLoginForm;
