import {Route, Routes} from "react-router-dom";
import {
    MainPage,
    RegistrationPage,
    Service_cosmetology,
    Service_brows,
    Service_bodycare,
    Service_coloring,
    Service_haircuts,
    Service_manicure,
    Service_pedicure,
    Service_makeup_hairstyle,
    AutentificationPage,
    RecordingPage
} from "../pages";


const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<AutentificationPage/>}/>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/record" element={<RecordingPage/>}/>

            <Route path="/service_manicure" element={<Service_manicure/>}/>
            <Route path="/service_pedicure" element={<Service_pedicure/>}/>
            <Route path="/service_brows" element={<Service_brows/>}/>
            <Route path="/service_bodycare" element={<Service_bodycare/>}/>
            <Route path="/service_haircuts" element={<Service_haircuts/>}/>
            <Route path="/service_coloring" element={<Service_coloring/>}/>
            <Route path="/service_makeup_hairstyle" element={<Service_makeup_hairstyle/>}/>
            <Route path="/service_cosmetology" element={<Service_cosmetology/>}/>

        </Routes>
    )
}
export default AppRouter;