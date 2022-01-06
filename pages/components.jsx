import Footer from "../components/Footer"
import Header from "../components/Header"
import Chapters from "../components/Chapters"



export default function components() {

    return (
        <div>
            <Header />

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Chapters 
                            chapter= 'Capítulo 1'
                            open= "https://www.youtube.com/"
                            download= "https://www.facebook.com/"
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <Chapters 
                            chapter= 'Capítulo 2'
                            open= "https://www.instagram.com/?hl=es-la"
                            download= "https://twitter.com/?lang=es"
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <Chapters 
                            chapter= 'Capítulo 3'
                            open= "https://co.linkedin.com/"
                            download= "https://vimeo.com/es"
                        />
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}
