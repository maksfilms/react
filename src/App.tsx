import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion'
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/Accordion";


function hello() {
    debugger
    alert("Hello IT-KAMASUTRA")
}

//hello();

function App() {
    console.log("App rendering")
    return (
        <div>
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Menu"}/>

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
