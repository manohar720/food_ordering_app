import { CONTACT_IMG_URL } from "../utils/constant";
const Contact = () => {
  return (
    <div className="contact-container ">
      <div className="contact-info  flex flex-col justify-center items-center gap-5 bg-white w-1/3 float-end m-8 p-4">
        <div className="text-2xl font-medium">Contact Us</div>
        <div className=" border w-60">
          <input
            type="text"
            placeholder="Full Name"
            className="name h-8 outline-none p-1"
          ></input>
        </div>
        <div className="w-60 border">
          <input
            type="email"
            placeholder="Email"
            className="email h-8 p-1 outline-none"
          ></input>
        </div>
        <div className="w-60 border">
          <input
            type="number"
            placeholder="Mobile Number"
            className=" h-8 p-1 outline-none"
          ></input>
        </div>
        <div className="w-60 border">
          {" "}
          <textarea
            placeholder="Type your message here"
            className="p-1"
          ></textarea>
        </div>
        <div className="bg-blue-600  text-lg text-center rounded-xl p-1 w-1/3">
          {" "}
          <button type="summit" className="text-white">
            Summit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
