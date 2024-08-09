import axios from "axios";
import { useEffect, useState } from "react";

const Forum = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/getTopUsers"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div className="h-full flex lg:flex-row flex-col gap-6 my-6 w-full">
        <div className=" lg:w-2/3 w-full flex gap-4 flex-col">
          <div className="h-fit w-full border shadow-xl rounded-xl flex  gap-4 justify-start items-center p-4">
            <div className="h-10 w-10 rounded-full bg-zinc-700"></div>
            <div className="flex w-full flex-col">
              <h1>Name</h1>
              <div className="flex w-full gap-4 justify-between items-center">
                <div className="flex gap-4">
                  <p>views</p>
                  <p>Comments</p>
                </div>
                
                  <h1>Added x hr ago</h1>
               
              </div>
            </div>
          </div> <div className="h-fit w-full border shadow-xl rounded-xl flex  gap-4 justify-start items-center p-4">
            <div className="h-10 w-10 rounded-full bg-zinc-700"></div>
            <div className="flex w-full flex-col">
              <h1>Name</h1>
              <div className="flex w-full gap-4 justify-between items-center">
                <div className="flex gap-4">
                  <p>views</p>
                  <p>Comments</p>
                </div>
                
                  <h1>Added x hr ago</h1>
               
              </div>
            </div>
          </div> <div className="h-fit w-full border shadow-xl rounded-xl flex  gap-4 justify-start items-center p-4">
            <div className="h-10 w-10 rounded-full bg-zinc-700"></div>
            <div className="flex w-full flex-col">
              <h1>Name</h1>
              <div className="flex w-full gap-4 justify-between items-center">
                <div className="flex gap-4">
                  <p>views</p>
                  <p>Comments</p>
                </div>
                
                  <h1>Added x hr ago</h1>
               
              </div>
            </div>
          </div> <div className="h-fit w-full border shadow-xl rounded-xl flex  gap-4 justify-start items-center p-4">
            <div className="h-10 w-10 rounded-full bg-zinc-700"></div>
            <div className="flex w-full flex-col">
              <h1>Name</h1>
              <div className="flex w-full gap-4 justify-between items-center">
                <div className="flex gap-4">
                  <p>views</p>
                  <p>Comments</p>
                </div>
                
                  <h1>Added x hr ago</h1>
               
              </div>
            </div>
          </div> <div className="h-fit w-full border shadow-xl rounded-xl flex  gap-4 justify-start items-center p-4">
            <div className="h-10 w-10 rounded-full bg-zinc-700"></div>
            <div className="flex w-full flex-col">
              <h1>Name</h1>
              <div className="flex w-full gap-4 justify-between items-center">
                <div className="flex gap-4">
                  <p>views</p>
                  <p>Comments</p>
                </div>
                
                  <h1>Added x hr ago</h1>
               
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col gap-8">
          <div className="h-fit flex flex-col gap-4 p-2  border rounded-xl shadow-lg w-full">
            <h1 className="text-xl text-center font-semibold">
              Top user of The Week
            </h1>
            {users.map((user, index) => (
              <div key={index} className="h-fit bg-zinc-100 p-2 rounded-lg">
                <h1>
                  {user.firstname} {user.lastname}
                </h1>
                <p>Email : {user.email}</p>
              </div>
            ))}
          </div>
          <div className="h-fit p-2 border rounded-lg shadow-lg w-full">
            <h1 className="text-xl text-center font-semibold">Hot Questions</h1>
            <div className="p-2">
              <p>Question....</p>
              <p>Question....</p>
              <p>Question....</p>
              <p>Question....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
