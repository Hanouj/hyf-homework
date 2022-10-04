import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import './TodoList.css'


export default function Page() {
    return(
        <>
        <Header/>
        <div className="wrapper">
        
           <Main/>
            <Footer/>
        </div>
        </>
    )
}
