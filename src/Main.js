import './Main.css'
import particlesIMG from './particlesIMG'
import {Patrocinios} from "./components/Patrocinios";
import Footer from "./components/Footer";

function InitialScreen() {
    const divStyleBanner = {
        width: '100%',
        margin: 0,
        height: "100vh"
    };
    const divStylePatrocinadores = {
        background: 'white',
    };
  return (
      <>
        <div style={divStyleBanner}>
            <canvas id="CANVAS">
            </canvas>
        </div>
          <div style={divStylePatrocinadores}>
              <Patrocinios/>
          </div>
        <Footer/>
      </>

  )
}

export default InitialScreen