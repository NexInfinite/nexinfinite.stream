import React, { Component } from "react";
import ParticlesContainer from "./Particles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitch, faPaypal, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {Animated} from "react-animated-css";
import logo from "./images/logo.png"


class Home extends Component{
    render(){
        return (
            <div onScroll={this.handleScroll}>
                <div id="particles">
                    <ParticlesContainer />
                </div>
                <img src={logo} alt="NexInfinite" id="logo"></img>
                <br></br>
                <Animated animationIn="fadeIn" animationInDelay="6200">
                    <h2>I am a 16 year old male who enjoys programming and playing games. I've been working with Python for 4+ years. 
                        I have made many Discord bots which you can check out from my GitHub.</h2>
                </Animated>
                <br></br>
                <table align="center">
                    <tr>
                        <td id="iconTableTd">
                            <Animated animationIn="fadeIn" animationInDelay="4200">
                                <a href="https://github.com/NexInfinite" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
                                </a>
                            </Animated>
                        </td>
                        <td id="iconTableTd">
                            <Animated animationIn="fadeIn" animationInDelay="4700">
                                <a href="https://twitch.tv/nex_infinite" target="_blank">
                                    <FontAwesomeIcon icon={faTwitch} size="3x" color="white" />
                                </a>
                            </Animated>
                        </td>
                        <td id="iconTableTd">
                            <Animated animationIn="fadeIn" animationInDelay="5200">
                                <a href="https://www.paypal.com/paypalme/julianjones663" target="_blank">
                                    <FontAwesomeIcon icon={faPaypal} size="3x" color="white" />
                                </a>
                            </Animated>
                        </td>
                        <td id="iconTableTd">
                            <Animated animationIn="fadeIn" animationInDelay="5700">
                                <a href="https://www.youtube.com/channel/UCkjW3_C1LPQ5BKS8yvom2lw" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} size="3x" color="white" />
                                </a>
                            </Animated>
                        </td>
                    </tr>
                </table>
            </div>
        )
    };
}


export default Home;
