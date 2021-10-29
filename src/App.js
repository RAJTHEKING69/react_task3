import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Banner from './Component/BANNER/Banner'
import Header from './Component/Header/Header'
import './App.css'
import Footer from './Component/Footer/Footer'

function App() {
    return (
        <div>
            <div>
            <Header/>
            </div>
            <div>
                <Banner/>
            </div>
             <div>
                 <Footer/>
             </div>
        </div>
    )
}

export default App
