import {Address, Footer, Header, Reviews, TeamWorkers} from "../../components";
import {DescriptionCosmetology, PricesCosmetology} from "../../features";

export const Service_cosmetology = () => {
    return (
        <div>
            <Header/>
            <DescriptionCosmetology/>
            <PricesCosmetology/>
            <TeamWorkers/>
            <Reviews/>
            <Address/>
            <Footer/>
        </div>
    );
};
