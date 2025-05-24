import React, { useState } from "react";

// create your contact page now and validate the form
const ContactPage = () => {
  // Validate forms
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextArea] = useState("");
  const [nameError, setErrorName] = useState("");
  const [emailError, setErrorEmail] = useState("");
  const [textError, setErrorText] = useState("");

  const handleOnchangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleOnchangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleOnchangeText = (e) => {
    e.preventDefault();
    setTextArea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setErrorName("Please fill out the input fields");
    }
    if (email.trim() === "") {
      setErrorEmail("Please fill out the input fields");
    }
    if (textarea.trim() === "") {
      setErrorText("Please fill out the input fields");
    }else {
    setErrorName("");
    setErrorEmail("")
    setErrorText("")
    }
    
  };

  return (
    <div>
      <div className="w-11/12 container mx-auto">
        <form className="w-[250px] md:w-[500px]  p-3 mx-auto my-9 rounded-2xl flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-semibold ">Contact Us</h1>
          <hr className="border-t-4 w-25 mb-3 border-orange-400" />
          <input
            type="text"
            placeholder="Name"
            className="w-full h-[45px] bg-orange-300 p-2 rounded-lg my-2 block"
            id="email"
            value={name}
            onChange={handleOnchangeName}
          />
          <p className="text-red-500">{nameError}</p>

          <input
            type="email"
            placeholder="Email"
            className="w-full h-[45px] bg-orange-300 p-2  rounded-lg my-2 block"
            id="email"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <p className="text-red-500">{emailError}</p>

          <textarea
            placeholder="What you wanna say"
            className="w-full h-[140px] bg-orange-300 p-2 rounded-lg my-2 block"
            id="password"
            value={textarea}
            onChange={handleOnchangeText}
          />
          <p className="text-red-500">{textError}</p>

          {/* attach the error message here ***later */}
          <button
            onClick={handleSubmit}
            className="w-[100px] h-[40px] bg-orange-400 rounded-lg text-white font-bold block my-2 hover:bg-orange-300 ease-in duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
