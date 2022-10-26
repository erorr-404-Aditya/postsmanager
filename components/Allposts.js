import React from "react";

const Allposts = ({ AllPostsData }) => {
  return (
    <div className="bg-slate-800 drop-shadow-2xl px-9 pt-5  w-full h-[33.325rem] scrollbar-hide overflow-y-scroll">
      <ul>
        {AllPostsData.map((el) => (
          <li key={el.id}>
            <span className="cursor-default group w-fit relative flex text-slate-300 ml-1 text-xl">
              <h3 className="">{el.title}</h3>
              <span className=" group-hover:scale-x-100  scale-x-0 transition-all duration-300 absolute bottom-0 left-1/2 w-full bg-indigo-500 h-[1px] -translate-x-1/2"></span>
            </span>
            <h2 className="text-slate-500">{el.body}</h2>
            <hr class="my-5 mx-10 h-px bg-gray-200 border-0 dark:bg-gray-700" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Allposts;
