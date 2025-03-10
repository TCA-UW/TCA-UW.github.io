import React from 'react';
import "../css/Members.css";
import Lucas from "../assets/headshots/lucas.png";
import Akshai from "../assets/headshots/akshai.png";
import Sumedh from "../assets/headshots/sumedh.png";
import Chris from "../assets/headshots/chris.png";
import Evan from "../assets/headshots/evan.png";
import Nico from "../assets/headshots/nico.png";

const Members = () => {
    return (
        <div className="members-container">
            <div className="levelOrganization">
                <h1>Executive Team</h1>
            </div>
            <table>
                <tr>
                    <td><a href="https://www.linkedin.com/in/akshaisrin/"><img src={Akshai} id="bigImage" alt="Akshai Srinivasan"/></a></td>
                    <td><a href="https://www.linkedin.com/in/sumedh910/"><img src={Sumedh} id="bigImage" alt="Sumedh Chinta"/></a></td>
                    <td><a href="https://www.linkedin.com/in/christopher-chen-56b889342/"><img src={Chris} id="bigImage" alt="Christopher Chen"/></a></td>
                    <td><a href="https://www.linkedin.com/in/lucas-varotto-353bb729a/"><img src={Lucas} id="bigImage" alt="Lucas Varotto"/></a></td>
                </tr>
                <tr>
                    <td><p>Akshai Srinivasan</p></td>
                    <td><p>Sumedh Chinta</p></td>
                    <td><p>Christopher Chen</p></td>
                    <td><p>Lucas Varotto</p></td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="https://www.linkedin.com/in/evan-myers-011227298/"><img src={Evan} id="bigImage" alt="Evan Myers" /></a></td>
                    <td><a href="https://www.linkedin.com/in/nicosusanto/"><img src={Nico} id="bigImage" alt="Nico Susanto"/></a></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><p>Evan Myers</p></td>
                    <td><p>Nico Susanto</p></td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
}

export default Members;


