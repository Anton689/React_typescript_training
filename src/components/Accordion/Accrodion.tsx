import React from 'react';

type AccordionPropsType = {
    title: number
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

function Accordion2(props: AccordionPropsType) {
    if (props.collapsed) {
        return (<div>

            <AccordionTitle title={props.title}/>
        </div>);
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    }
}

type AccordionTitlePropsType = {
    title: number
}

function AccordionTitle(props: AccordionTitlePropsType) {
    if (props.title === 1) {
        return <h3>Menu</h3>;
    }
    if (props.title === 3) {
        return <h3>MENU</h3>;
    }
    return <h3>menu</h3>;

}

function AccordionBody() {
        return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;