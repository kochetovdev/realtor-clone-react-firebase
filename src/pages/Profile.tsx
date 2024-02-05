import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });

  const onLogout = () => {
    auth.signOut();
    toast.success("You are successfully logout");
    navigate("/");
  };

  return (
    <>
      <section className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={formData.name as string}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              disabled
            />
            <input
              type="text"
              id="email"
              value={formData.email as string}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              disabled
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?{" "}
                <span className="ml-1 cursor-pointer text-red-600 hover:text-red-700 transition ease-in-out duration-200">
                  Edit
                </span>
              </p>
              <p
                className="text-blue-600 hover:text-blue-800 cursor-pointer transition duration-200 ease-in-out"
                onClick={onLogout}
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
