import auth from "@/styles/Auth.module.css"
import { google, facebook, apple } from "@/assets";

const mediaSocial = [
  {
    name: "google",
    img: google,
  },
  {
    name: "facebook",
    img: facebook,
  },
  {
    name: "apple",
    img: apple,
  },
]

const SocialLogin = () => {
  return (
    <>
      <div className="flex items-center justify-between my-3">
        <div className="h-[2px] flex-1 bg-orange-300" />
        <p className="mx-3">or continue with</p>
        <div className="h-[2px] flex-1 bg-orange-300" />
      </div>
      <div className="flex justify-between gap-10">
        {mediaSocial.map(data => (
          <div key={data.name} className={`${auth.box} bg-background`} title={`login with ${data.name}`}>
            <img src={data.img} alt={data.name} className="scale-50 lg:scale-75 2xl:scale-100" />
          </div>
        ))}
      </div>
    </>
  )
}

export default SocialLogin