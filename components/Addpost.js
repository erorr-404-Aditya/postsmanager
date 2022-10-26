import React from "react";
import axios from "axios";
import { AllPostsManager } from "../context/allcontexts";

const Addpost = ({ setinsidepagenav }) => {
  var alldat = React.useContext(AllPostsManager);
  const { AllPostsData, setAllPostsData } = alldat;
  const successref = React.useRef(null);
  return (
    <>
      <div className="py-[5rem] px-[15rem] bg-slate-800 h-full">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            var nowdat = await axios
              .post("https://jsonplaceholder.typicode.com/posts", {
                title: e.currentTarget.querySelector("input#Title").value,
                body: e.currentTarget.querySelector("input#body").value,
                userId: 1,
              })
              .then((dat) => dat.data);
            successref.current.innerText =
              "Success Data - " + JSON.stringify(nowdat);
            setAllPostsData((d) => [nowdat, ...d]);
            setinsidepagenav(1);

            successref.current.style.opacity = 1;
          }}
        >
          <div className="mb-6">
            <label
              for="Title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="Title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="My Title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="body"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <input
              type="text"
              id="body"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="My description"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <div className="flex gap-6">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <div className="opacity-0 text-green-400" ref={successref}>
              <h3 className="">Success Data</h3>
              <h3 className="my-auto text-green-400 transition-all duration-200 opacity-0"></h3>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addpost;
