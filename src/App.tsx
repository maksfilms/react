import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion'
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function hello() {
    debugger
    alert("Hello IT-KAMASUTRA")
}

//hello();

function App() {
    console.log("App rendering")
    return (
        <div className={"App"}>
            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Menu"}/>


            <Rating value={2} />

            <UncontrolledRating />

            {/*<Accordion titleValue={"Menu"} collapsed={true} />
            <Accordion titleValue={"Users"} collapsed={false}/>*/}
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
