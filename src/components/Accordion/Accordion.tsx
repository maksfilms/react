import React from "react";


type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onClick: (value: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    debugger
        return <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} value={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
}



type AccordionTitlePropsType = {
    title: string
    onClick: (value: boolean) => void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => {props.onClick(!props.value)}}>{props.title}</h3>
}





function AccordionBody() {
    console.log("AccordionBody rendering")

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
