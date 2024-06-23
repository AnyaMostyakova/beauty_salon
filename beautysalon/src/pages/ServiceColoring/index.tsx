import {Address, Footer, Header, Reviews, TeamWorkers} from "../../components";
import {DescriptionColoring, PricesColoring} from "../../features";

export const Service_coloring = () => {
    return (
        <div>
            <Header/>
            <DescriptionColoring/>
            <PricesColoring/>
            <TeamWorkers/>
            <Reviews/>
            <Address/>
            <Footer/>
        </div>
    );
};
