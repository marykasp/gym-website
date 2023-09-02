import Navbar from "@/components/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <div className="app bg-primary-100">
      <Navbar 
        setSelectedPage={setSelectedPage} 
        selectedPage={selectedPage} 
      />
    </div>
  )
}

export default App
