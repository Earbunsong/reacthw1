import Profile from "./components/Profile";
import Artical from "./components/Artical";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Feedback from "./components/Feedback";
export default function App() {
  let isMale  = true;
  return (
 <>

   <Nav />
   <main>
    <div className="d-flex justify-content-evenly" >
    <Artical/>
   <Artical/>
   <Artical/>
   <Artical/>
   <Artical/>
    </div>
    <Feedback/>
   </main>
   <footer>
     <Footer/>
   </footer>
 </>
  );
}

