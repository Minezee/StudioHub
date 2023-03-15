import auth from "@/styles/Auth.module.css"
import { useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

const Payment = ({ setActiveStep }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setActiveStep(3)
  }

  return (
    <div className="w-full text-white">
      <h3 className="text-orange-500 text-h5 sm:text-h4">Masukan Password Akun Anda</h3>
      <p className="sm:text-h6">Masukan akun yang sedang anda gunakan untuk melanjutkan pembayaran.</p>
      <div className='flex flex-col sm:flex-row gap-10 sm:gap-0 sm:justify-between'>
        <form onSubmit={handleSubmit} className="w-full sm:w-2/5 text-white mt-14">
          <div className="w-full flex flex-col">
            <label htmlFor="email" className="text-h6">Email</label>
            <input
            type="email"
            className={auth.input}
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="text-h6 mt-9">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                className={auth.input}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute right-2 pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <AiFillEyeInvisible className="h-7 w-7 text-orange-500" />
                ) : (
                  <AiFillEye className="h-7 w-7 text-orange-500" />
                )}
              </div>
            </div>
          </div>
          <button type="submit" className={`${auth.btn} bg-orange-500`}>Pay</button>
        </form>
        <div className="w-full sm:w-1/3 text-h5 font-bold text-white space-y-7">
          <div className="flex justify-between">
            Total Payment
            <span className="text-orange-500">Rp 68.434</span>
          </div>
          <div className="flex justify-between">
            Payment Within
            <span className="text-orange-500">Studio Hub Wallet</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment