import UserLayout from "@/components/layout/UserLayout"
import styles from "@/styles/Styles.module.css"
import { NavLink } from "react-router-dom"
import { AppContext } from "@/context/AppContext"
import { useContext } from "react"

const Profile = () => {
  const { userData } = useContext(AppContext);
  return (
    <UserLayout>
      <div className="text-white">
        <h2 className="text-h3 font-bold">My Profile</h2>
        <p className="text-h5 font-semibold">Manage and protect your account</p>
        <div className="mt-10 flex justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-white h-24 w-24 rounded-full" ></div>
              <div>
                <h3 className="text-h5">{userData.username}</h3>
                <button className={`text-h6 ${styles.link}`}>Change Profile</button>
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
                  <p>{userData.name}</p>
                  <button className={`text-h5 font-semibold ${styles.link}`}>Change</button>
                </div>
                <p>{userData.email}</p>
                <div className="flex gap-4">
                  {userData.phoneNum && <p>{userData.phoneNum}</p>}
                  <button className={`text-h5 font-semibold ${styles.link}`}>
                    {userData.phoneNum ? "Change" : "Add Phone Number"}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-14">
              <button className="text-dark bg-orange-500 text-center px-14 py-2 rounded-lg text-h6 font-bold">Save</button>
            </div>
          </div>

          <div className="w-1/4">
            <h3 className="text-h5">Your Studio Hub Account</h3>
            <div className="bg-yellow-500 text-dark font-bold px-6 py-7 rounded-lg">
              <div className="flex justify-between items-center">
                Current wallet balance
                <span className="text-h5 font-semibold">Rp {userData.balance.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex flex-col text-center mt-12 gap-3">
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