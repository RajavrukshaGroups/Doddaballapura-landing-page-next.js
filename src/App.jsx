import DoddaballapurPlotsPage from "./components/PlotsSaleInDoddaballapur/DoddaballapurPlotsPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ContactFormPopup from "./components/ContactFormPopup"

function App() {
  return (
    <>
      <Navbar/>
      {/* <ContactFormPopup/> */}
      <main>
       <DoddaballapurPlotsPage/>
      </main>
      <Footer />
    </>
  );
}

export default App;