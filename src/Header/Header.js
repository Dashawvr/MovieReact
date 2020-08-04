import React, {useContext} from "react";
import Logo from "../icons/cinema.png";
import {links} from "../Constants";
import './Header.scss';

import { User } from '../User/User';
import  { Link } from "react-router-dom";

import {ThemeContext} from "styled-components";
import Switch from "react-switch";
import { shade } from 'polished';

export const Header = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext);


    return (
        <div className='my-header'>
            <img src={Logo} className='my-header-logo'/>
            <div className="my-header-links-wrapper">
                {
                    links.map((item,key)=> {
                        return (
                            <div key={key} className="nav-item">

                                <Link to={item.link}>
                                    <div className="my-header-links-wrapper-link nav-link">{item.name}</div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <Switch
                checked={title === 'dark'}
                onChange={toggleTheme}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors.secondary}
                offColor={shade(0.4, colors.primary)}
            />
            <User/>
        </div>
    );

}