import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOFf/OnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';


function App() {
    console.log("App rendering")
    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={1} />*/}
            {/*<Accordion title={3} collapsed={true}/>*/}
            {/*<Accordion title={2} collapsed={false}/>*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
            <OnOff />
            <OnOff />
            <UnControlledAccordion title={3}/>
            <UnControlledAccordion title={2}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{ props.title }</h1>
}


export default App;
