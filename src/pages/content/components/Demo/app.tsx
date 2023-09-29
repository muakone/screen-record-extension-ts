import { useEffect } from "react";
import Popup from "@pages/content/components/Popup";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return <div className="fixed inset-0 z-[9999] bg-black/[.2]">
    <Popup />
  </div>
}
