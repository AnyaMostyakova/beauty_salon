import {Address, Footer, Header, Reviews, TeamWorkers} from "../../components";
import {DescriptionBrows, PricesBrows} from "../../features";

export const Service_brows = () => {
    return (
        <div>
            <Header/>
            <DescriptionBrows/>
            <PricesBrows/>
            <TeamWorkers/>
            <Reviews/>
            <Address/>
            <Footer/>
        </div>
    );
};
