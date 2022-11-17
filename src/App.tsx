import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";


export function App() {
  return (
    <div className="min-h-screen w-screen py-5 px-10 gap-x-16 gap-y-5 bg-purple-900 flex flex-wrap">

      <Aside />
      <Main />
      <Footer />

    </div>
  )
}
