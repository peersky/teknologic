import React from 'react';
import './Main.css'
import Page from './Home.js'
import Contact from './Contact.js'

import {
	Switch,
	Route,
} from 'react-router-dom';

import './TeknoLogic.css';

import * as Content from "./HomeContent.js"




const homePage =  () => (<Page sections = {Content.homePage} name='home'/>)
const servicesPage = () => (<Page sections = {Content.servicePage} name='services'/>)
const clientPage = () => (<Page sections={Content.clientPage} name='clients'/>)
const aboutPage = () => (<Page sections={Content.aboutPage} name='about'/>)
const careerPage = () => (<Page sections={Content.careerPage} name='careers'/>)
const Main = () => (

    <main>
	<Switch>
	<Route exact path='/' component={homePage}/>
	<Route exact path='/Home' component={homePage}/>
	<Route path='/Services' component={servicesPage}/>
	<Route path='/Clients' component={clientPage}/>
	<Route path='/Careers' component={careerPage}/>
	<Route path='/About' component={aboutPage}/>
	</Switch>
	</main>
    )
    export default Main;