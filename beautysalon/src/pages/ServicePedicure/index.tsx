import {Address, Footer, Header, Reviews, TeamWorkers} from "../../components";
import {DescriptionPedicure, PricesPedicure} from "../../features";

export const Service_pedicure = () => {
    return (
        <div>
            <Header/>
            <DescriptionPedicure/>
            <PricesPedicure/>
            <TeamWorkers/>
            <Reviews/>
            <Address/>
            <Footer/>
        </div>
    );
};
