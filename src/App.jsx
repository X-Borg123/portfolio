import { Navbar } from "@/components/layout/Navbar";
import { RootBase } from "./components/layout/RootBase";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <RootBase/>
      <Footer/>
    </div>
  );
}