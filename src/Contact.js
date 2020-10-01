import React from 'react';
import Button from '@material-ui/core/Button';
// @ts-ignore
import Obfuscate from 'react-obfuscate';

const Mail =  () => (<Obfuscate email="tim@teknologic.lv" />)
function Contact ()
{
    console.log(Mail)
    return(
        <div>

        <Obfuscate email="hello@coston.io" aria-label="Email Me">

        Hello World

        </Obfuscate>
        </div>
        );
    } export default Contact
