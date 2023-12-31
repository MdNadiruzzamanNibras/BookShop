import { useForm, SubmitHandler } from "react-hook-form"
import { createUser } from "../redux/user/userslice";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router";
interface RegistrationInput {
    name?: string;
  email: string;
  password: string;
}

const Registration = () => {
  const navigate = useNavigate()
    const {
    register,
    handleSubmit,
  
    formState: { errors },
    } = useForm<RegistrationInput>()
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<RegistrationInput> = (data:RegistrationInput) => {
        
      dispatch(createUser({ email: data.email, passward: data.password }))
    navigate("/")
    }
    return (
        <div className="container mx-auto">
            <div className="md:flex md:justify-center md:items-center h-screen ">
                <div className="w-96 bg-base-200 shadow-lg py-6 px-6 h-fit">
            <h2 className="text-center text-2xl mb-11 font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
     
     
     
      <div>
                             <label className="label">
    <span className="text-base text-black font-bold">Name</span>
    
  </label>
                            <input type="text" placeholder="Your Name" className="text-center py-2 w-72 my-2 focus:outline-none rounded" {...register('name', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.name && <p className="text-lg text-red-600">This field is required</p>}
      </div>
      <div>
                             <label className="label">
    <span className="text-base text-black font-bold">Email</span>
    
  </label>
                            <input type="email" placeholder="Your Email" className="text-center py-2 w-72 my-2 focus:outline-none rounded" {...register('email', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <p className="text-lg text-red-600">This field is required</p>}
      </div>
       <div>
                            <label className="label">
    <span className=" text-base text-black font-bold">Password</span>
    
  </label>
                            <input type="password" placeholder="Password" className="text-center py-2 w-72 my-2 focus:outline-none  rounded"  {...register('password', { required: true })} />
     
      {errors.password && <p className="text-lg text-red-600">This field is required</p>}
      </div>
      <div className="flex justify-center ">
                            <input className="px-14 cursor-pointer py-2 text-white mt-8 bg-black hover:text-black hover:bg-white" type="submit" />
      </div>
    </form>
        </div>
             </div>
        </div>
    );
};

export default Registration;