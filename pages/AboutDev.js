import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect, useRef, useMemo, useContext } from "react";
import { AllPostsManager } from "../context/allcontexts";
import Allposts from "../components/allposts";
import AboutDev from "../components/AboutDev";
import Addpost from "../components/Addpost";
import { useRouter } from "next/router";

export default function Home() {
  var router = useRouter();
  var alldat = useContext(AllPostsManager);
  const { AllPostsData, setAllPostsData } = alldat;
  const [insidepagenav, setinsidepagenav] = useState(3);
  useEffect(() => {
    (async () => {
      var axres = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((dat) => dat.data);
      setAllPostsData(axres);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>All Post -PostInit</title>
        <meta name="description" content="A Post Saver App!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[100vw] h-[100vh] overflow-hidden flex justify-center ">
        <div>
          <div
            style={{
              "-webkit-box-shadow": "17px 2px 45px -1px rgba(0,0,0,0.75)",
              "-mozBoxShadow": "17px 2px 45px -1px rgba(0,0,0,0.75)",
              boxShadow: "17px 2px 45px -1px rgba(0,0,0,0.75)",
            }}
            className=" rounded-t-2xl  h-[37.575rem] overflow-hidden w-[75vw] mt-[7rem] bg-slate-800"
          >
            <div className="pl-[50%] bg-blue-800 text-3xl p-4  text-slate-300 flex justify-between  items-center">
              <h3 className="-translate-x-[50%]">{`About Dev`}</h3>
              <div className="group relative p-[7px]">
                <img className="" src="/dots-y.svg" alt="" />
                <div className=" top-0 right-0 w-[9rem] rounded-lg group-hover:flex hidden absolute z-[1] text-xs font-medium bg-slate-800 flex-col">
                  <span
                    className={`p-2 rounded-lg cursor-pointer ${
                      insidepagenav == 1 ? "bg-slate-500 text-slate-800" : ""
                    } hover:bg-slate-300 hover:text-slate-800`}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    All Posts
                  </span>
                  <span
                    className={`p-2 rounded-lg cursor-pointer ${
                      insidepagenav == 2 ? "bg-slate-500 text-slate-800" : ""
                    } hover:bg-slate-300 hover:text-slate-800`}
                    onClick={() => {
                      router.push("/Addpost");
                    }}
                  >
                    Add New Post
                  </span>
                  <span
                    className={`p-2 rounded-lg cursor-pointer ${
                      insidepagenav == 3 ? "bg-slate-500 text-slate-800" : ""
                    } hover:bg-slate-300 hover:text-slate-800`}
                    onClick={() => {
                      router.push("AboutDev");
                    }}
                  >
                    About Dev
                  </span>
                </div>
              </div>
            </div>
            <h2 id="slidertext">
              Aditya Kumar
              <span>Aditya Kumar </span>
              <span>Aditya Kumar </span>
              <span>Web & App Developer</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
