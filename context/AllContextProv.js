import { AllPostsManager } from "./allcontexts";

import React, { useEffect, useState } from "react";

const AllContextProv = (props) => {
  const [AllPostsData, setAllPostsData] = useState([]);
  return (
    <AllPostsManager.Provider
      value={{
        AllPostsData,
        setAllPostsData,
      }}
    >
      {props.children}
    </AllPostsManager.Provider>
  );
};

export default AllContextProv;
