import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3001/api/v1/register', formData); 
      setSuccess(response.data.message);
      navigate("/login")
    } catch (error) {
      setError(error.response.data.error || 'Something went wrong. Please try again.');
    }
  };

  return (
 
    <div className="py-6 h-screen justify-center items-center">
      <div className="flex flex-row rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        />
         <div className="w-full p-8 lg:w-1/2">
          <div className="flex gap-4 items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
            <div className="text-black py-3">
              <FaGoogle className="text-xl" />
            </div>
            <h1 className=" py-3 text-center text-gray-600 font-bold">
              Sign in with Google
            </h1>
          </div>
          <div className="flex gap-4 items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
            <div className="text-black py-3">
              <FaFacebook className="text-xl" />
            </div>
            <h1 className=" py-3 text-center text-gray-600 font-bold">
              Sign in with Facebook
            </h1>
          </div>
          <p className="py-3 text-center">OR</p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <p className="text-xs text-gray-500">
                  Forget Password?
                </p>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-8">
              <button className="bg-purple-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-purple-600">
                Signup
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <p>Already have an account? <Link to={"/login"} className="text-purple-500">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
