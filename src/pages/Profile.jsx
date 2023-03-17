import UserLayout from "@/components/layout/UserLayout"
import styles from "@/styles/Styles.module.css"
import { NavLink } from "react-router-dom"
import { AppContext } from "@/context/AppContext"
import { useContext, useEffect, useState, useRef } from "react"
import { useMutation } from "react-query"
import axiosInstance from "@/helpers/api"
import Cookies from "js-cookie"

const Profile = () => {
  const { userData, updateUserData } = useContext(AppContext);
  const [name, setName] = useState(userData.name)
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNum || "");
  const [isEditing, setIsEditing] = useState(false);
  const [picture, setPicture] = useState(userData.photo);
  const inputRef = useRef(null);
  const token = Cookies.get("auth_token") || sessionStorage.getItem("auth_token")
  const { mutate: updateUser, isLoading, error } = useMutation(
    async (body) => {
      const response = await axiosInstance.put('/user/update', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response?.data?.data;
    },
    {
      onSuccess: (data) => {
        updateUserData({
          photo: data.picture,
          name: data.name,
          phoneNum: data.phoneNumber,
          balance: 100000,
        })
        setIsEditing(false)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  );

  function handleProfileButtonClick() {
    inputRef.current.click();
  };

  function handleProfileImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    updateUser({ name, picture, phoneNumber })
  }

  return (
    <UserLayout>
      <div className="text-white">
        <h2 className="text-h3 font-bold">My Profile</h2>
        <p className="text-h5 font-semibold">Manage and protect your account</p>
        <div className="mt-10 flex justify-between">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-3">
              <img src={picture} alt="photo" className="h-24 w-24 rounded-full" />
              <div>
                <h3 className="text-h5">{userData.username}</h3>
                <button type="button" onClick={handleProfileButtonClick} className={`text-h6 ${styles.link}`}>Change Profile</button>
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  className="sr-only hidden"
                  onChange={handleProfileImageChange}
                />
              </div>
            </div>
            <div className="flex gap-5 justify-center items-center mt-5 text-h5">
              <div className="text-right flex flex-col">
                <label htmlFor="username">Username</label>
                <label htmlFor="name">Name</label>
                <label htmlFor="email">Email</label>
                <label htmlFor="phone number">Phone Number</label>
              </div>
              <div className="text-left flex flex-col font-semibold">
                <p>{userData.username}</p>
                <div className="flex gap-4">
                  {isEditing ?
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-dark" />
                    :
                    <>
                      <p>{name}</p>
                      <button onClick={() => setIsEditing(true)} className={`text-h5 font-semibold ${styles.link}`}>Change</button>
                    </>
                  }
                </div>
                <p>{userData.email}</p>
                <div className="flex gap-4">
                  {isEditing ?
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="text-dark" />
                    :
                    <>
                      {userData.phoneNum && <p>{phoneNumber}</p>}
                      <button onClick={() => setIsEditing(true)} className={`text-h5 font-semibold ${styles.link}`}>
                        {userData.phoneNum ? "Change" : "Add Phone Number"}
                      </button>
                    </>
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-14 w-full gap-4">
              {error && <p className="text-red-500">Terjadi kesalahan, Coba lagi</p>}
              <button className="text-dark bg-orange-500 px-14 py-2 rounded-lg text-h6 font-bold min-w-[35%]">
                {isLoading ?
                  <svg className="animate-spin h-7 w-7  text-dark text-center mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  :
                  "Save"}
              </button>
            </div>
          </form>

          <div className="w-1/4">
            <h3 className="text-h5">Your Studio Hub Account</h3>
            <div className="bg-gray-footer font-bold px-6 py-7 rounded-lg">
              <div className="flex justify-between items-center">
                Current wallet balance
                <span className="text-h5 font-semibold">Rp {userData.balance.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex flex-col text-center mt-12 gap-3 text-dark">
                <NavLink to="/topup-menu" className="bg-orange-500 w-full py-3">Add My Wallet</NavLink>
                <NavLink to="/history" className="bg-orange-500 w-full py-3">See my History details</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}

export default Profile