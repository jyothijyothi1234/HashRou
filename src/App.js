import React, { Suspense, lazy } from "react";
import { HashRouter,  Route ,Routes} from "react-router-dom";


const Home=lazy(()=>import("./Home"))
const About=lazy(()=>import("./About"))
const Contact=lazy(()=>import("./Contact"))
const Pagefound=lazy(()=>import("./Pagesfound"))

function App() {
  return (
    <div className="App">

 <HashRouter>
 <Suspense  fallback={<h1>loadding!!!!...</h1>}>
  <Routes>
    <Route   path="/"  element={<Home />}/>
    <Route   path="/about" element={<About  />} />
    <Route path="/contat" element={<Contact  />} />
    <Route path="*" element={<Pagefound  />} />

  </Routes>
  </Suspense>

 </HashRouter>

    </div>
  );
}

export default App;
