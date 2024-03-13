export const Login = () => {
  return (
    <div className="login h-lvh flex items-center justify-center">
      <div className="section  flex flex-col items-center  bg-white w-1/3 h-2/3 p-4 rounded-lg gap-2">
        <div className="font-bold text-lg ">Login Page</div>
        <div className="email  border w-60">
          <input
            type="email"
            placeholder="Username"
            className="rounded-lg p-1  outline-none"
          ></input>
        </div>
        <div className="password border w-60">
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg p-1  outline-none"
          ></input>
        </div>

        <div className=" cursor-pointer text-blue-800 text-sm">
          <a href="/">Forgotten Password?</a>
        </div>

        <div>
          <button className=" relative p-1 bg-green-300 mt-8 w-60 rounded-lg">
            Login
          </button>
        </div>

        <div className="cursor-pointer text-blue-800 text-sm">
          <a href="/"> or Sign up Using</a>
        </div>
      </div>
    </div>
  );
};
