import React, { useState } from "react";

const News = () => {
  // set up the news section and validate the form here
  // Validate form
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

const handleOnchange =(e)=>{
        e.preventDefault()
        setEmail(e.target.value)
        }


const handleSubmit = (e)=>{
        e.preventDefault()

        if ( !email.trim()){
        setError("Please fill out the input fields")
    }
    console.log(email)
    setEmail("")
    }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-10">
          <p className="text-3xl font-semibold">
            Join our Newsletter and Get{" "}
            <span className="text-orange-400">20% off</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-20 mb-8">
          <div className="leading-relaxed">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              dicta rerum ut eum nostrum eos. Eius placeat quasi non, distinctio
              quae voluptatum, harum in voluptate, consequuntur inventore cum.
              Doloribus, vero.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Subscribe to our news letter</h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 rounded text-black border-2 border-black"
                value={email} onChange={handleOnchange}
              />
              <p className="text-red-900">{error}</p>
              <button onClick={handleSubmit} className="bg-orange-300 text-white py-2 rounded font-semibold hover:bg-orange-400 ease-in duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
