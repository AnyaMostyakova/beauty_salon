import {Address, Footer, Header, Reviews, TeamWorkers} from "../../components";
import {DescriptionManicure, PricesManicure} from "../../features";

export const Service_manicure = () => {
    return (
        <div>
            <Header/>
            <DescriptionManicure/>
            <PricesManicure/>
            <TeamWorkers/>
            <Reviews/>
            <Address/>
            <Footer/>
        </div>
    );
};
