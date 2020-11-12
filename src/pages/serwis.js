import React from 'react'
import styled from 'styled-components'

import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

const Hero = styled.div`
    margin: 120px 15em;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1440px){
        margin: 120px 4em;
    }
    @media only screen and (max-width: 768px){
        margin: 120px 2em;
    }
`
const H1 = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SubHead = styled.span`
    color: #545454;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`
const Heading = styled.span`
    color: #3E7094;
    font-size: 64px;
    font-weight: 800;
    @media only screen and (max-width: 768px){
        font-size: 32px;
    }
`

function SerwisPage() {
    
    return(
        <Layout>
            <Helmet>
                <title>Serwis ksero - wynajem kserokopiarek | SpeedCopy</title>
            </Helmet>
            <Nav/>
            <Hero>
                <H1>
                    <SubHead>Kserokopiarki</SubHead>
                    <Heading>Serwis</Heading>
                </H1>
            </Hero>
            <Footer/>
        </Layout>
    )
}

export default SerwisPage