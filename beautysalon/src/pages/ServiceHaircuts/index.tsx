import {Address, Footer, Header, Reviews, TeamWorkers} from "../../components";
import {DescriptionHaircuts, PricesHaircuts} from "../../features";

export const Service_haircuts = () => {
    return (
        <div>
            <Header/>
            <DescriptionHaircuts/>
            <PricesHaircuts/>
            <TeamWorkers/>
            <Reviews/>
            <Address/>
            <Footer/>
        </div>
    );
};
