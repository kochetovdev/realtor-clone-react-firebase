import { User, getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });

  const handleChangeDetail = () => {
    setChangeDetail(!changeDetail);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth = getAuth();

    try {
      if (auth.currentUser?.displayName !== formData.name) {
        await updateProfile(auth.currentUser as User, {
          displayName: formData.name,
        });

        const docRef = doc(db, "users", auth.currentUser?.uid as string);
        await updateDoc(docRef, { name: formData.name });
      }
      toast.success("Profile details updated");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  };

  const handleSendData: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    changeDetail &&
      handleSubmit(event as unknown as ChangeEvent<HTMLFormElement>);

    handleChangeDetail();
  };

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
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
              value={formData.name as string}
              onChange={handleChange}
              disabled={!changeDetail}
            />
            <input
              type="text"
              id="email"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              value={formData.email as string}
              onChange={handleChange}
              disabled={!changeDetail}
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?{" "}
                <span
                  className="ml-1 cursor-pointer text-red-600 hover:text-red-700 transition ease-in-out duration-200"
                  onClick={handleSendData}
                >
                  {changeDetail ? "Apply change" : "Edit"}
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
