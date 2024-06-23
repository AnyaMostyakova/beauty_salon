import {Address, Footer, Header, Reviews, TeamWorkers} from "../../components";
import {Changes, RecordLower, RecordUpper, Services} from "../../features";


export const MainPage = () => {
    return (
        <div>
            <Header/>
            <RecordUpper/>
            <Services/>
            <Changes/>
            <RecordLower/>
            <TeamWorkers/>
            <Reviews/>
            <Address/>
            <Footer/>
        </div>
    );
};
