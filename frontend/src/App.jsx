import { useEffect, useState } from "react";
import ContactInfo from "./components/ContactInfo";
import ContactUsForm from "./components/ContactUsForm";
import { fetchContentInfo } from "./services/services";

function App() {
  const [content, setContents] = useState({});

  // function to fetch content info
  const getContent = async () => {
    try {
      const contentInfo = await fetchContentInfo();
      setContents(contentInfo);
    } catch (error) {
      console.error("Failed to fetch content info:", error);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <main className="  flex flex-col pt-[50px] md:pt-[100px] h-screen text-[#1B1B1A] ">
      <h1 className=" px-4 font-semibold text-3xl md:text-4xl">
        {content?.pageHeader}
      </h1>
      <div className="flex flex-wrap mt-8  ">
        <ContactInfo content={content} />
        <ContactUsForm content={content} />
      </div>
    </main>
  );
}

export default App;
