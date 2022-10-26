import "../styles/globals.css";
import AllContextProv from "../context/AllContextProv";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AllContextProv>
        <Component {...pageProps} />
      </AllContextProv>
    </>
  );
}

export default MyApp;
