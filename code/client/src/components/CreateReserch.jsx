import { useState } from "react";
import axios from "axios";
import { MdOutlineAddCircleOutline  } from "react-icons/md";

const CreateResearch = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState(null);

  const clearFields = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setPhoto(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category || !photo) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("photo", photo);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/research",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        alert("Research article created successfully");
        clearFields();
        document.getElementById("my_modal_3").close();
      }
    } catch (error) {
      console.error("Error creating research article:", error);
      alert("Error creating research article");
    }
  };

  return (
    <div>
      <button
        className="py-1 px-2 w-full flex justify-center items-center gap-3 rounded-lg text-white bg-purple-500"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Create Research
        <span>
          <MdOutlineAddCircleOutline />
        </span>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={clearFields}
            >
              ✕
            </button>
          </form>
          <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
              Create New Research
            </h2>
           
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="text-sm leading-7 text-gray-600"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="text-sm leading-7 text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="text-sm leading-7 text-gray-600"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  required
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="article">Article</option>
                  <option value="Guids">Guids</option>
                  <option value="caseStudy">Case Study</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="text-sm leading-7 text-gray-600"
                >
                  Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded border-0 bg-purple-500 py-2 px-6 text-lg text-white hover:bg-purple-600 focus:outline-none"
              >
                Submit
              </button>
            </form>
          
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CreateResearch;
