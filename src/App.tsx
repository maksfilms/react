import React, {useState} from "react";
import "./App.css";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledRating />

            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)} }/>

           {/* <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={'List'} />


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
