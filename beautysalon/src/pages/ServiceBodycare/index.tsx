import {Address, Footer, Header, Reviews, TeamWorkers} from "../../components";
import {DescriptionBodyCare, PricesBodyCare} from "../../features";

export const Service_bodycare = () => {
    return (
        <div>
            <Header/>
            <DescriptionBodyCare/>
            <PricesBodyCare/>
            <TeamWorkers/>
            <Reviews/>
            <Address/>
            <Footer/>
        </div>
    );
};
