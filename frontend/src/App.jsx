import { useEffect, useState } from "react";
import ContactInfo from "./components/ContactInfo";
import ContactUsForm from "./components/ContactUsForm";
import { fetchContents } from "./services/services";

function App() {
  const [contents, setContents] = useState([]);

  const getContents = async () => {
    try {
      const contents = await fetchContents();
      setContents(contents);
    } catch (error) {
      console.error("Failed to fetch contents:", error);
    }
  };
  // function to fetch content info

  useEffect(() => {
    getContents();
  }, []);

  return (
    <main className="  flex flex-col pt-[50px] md:pt-[100px] h-screen text-[#1B1B1A] ">
      <h1 className=" px-4 font-semibold text-3xl md:text-4xl">
        {contents[0]?.pageHeader}
      </h1>
      <div className="flex flex-wrap mt-8  ">
        <ContactInfo content={contents[0]} />
        <ContactUsForm content={contents[0]} />
      </div>
    </main>
  );
}

export default App;
