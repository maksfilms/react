import React, {useState} from "react";
import "./App.css";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/Accordion";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className={"App"}>
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"}/>


            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<UncontrolledRating />*/}

            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{ props.title }</h1>
}


export default App;
