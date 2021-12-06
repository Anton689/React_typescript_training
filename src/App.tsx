import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accrodion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={1} />*/}
            <Accordion title={3} collapsed={true}/>
            <Accordion title={2} collapsed={false}/>
            <Rating value={3} />
            <Rating value={0} />
            <Rating value={2} />
            <Rating value={4} />
            <div>Hello</div>
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
