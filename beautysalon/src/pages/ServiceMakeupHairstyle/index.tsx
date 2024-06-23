import {Address, Footer, Header, Reviews, TeamWorkers} from "../../components";
import {DescriptionMakeupHairstyle, PricesMakeupHairstyle} from "../../features";

export const Service_makeup_hairstyle = () => {
    return (
        <div>
            <Header/>
            <DescriptionMakeupHairstyle/>
            <PricesMakeupHairstyle/>
            <TeamWorkers/>
            <Reviews/>
            <Address/>
            <Footer/>
        </div>
    );
};
