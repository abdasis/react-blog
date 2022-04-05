import React from 'react'
import { Link } from 'react-router-dom'
import "./MobileNavigation.css"
const MobileNavigation = () => {
    return (
        <div>
            <div className="navigation d-block d-sm-none">
                <ul>
                    <li className={'list active'}>
                        <a href={''}>
                            <span className={'icon'}>
                                <ion-icon name={'home-outline'}></ion-icon>
                            </span>
                            <span className="text">Home</span>
                        </a>
                    </li>

                    <li className={'list'}>
                        <a href={''}>
                            <span className={'icon'}>
                                <ion-icon name="terminal-outline"></ion-icon>
                            </span>
                            <span className="text">Codingan</span>
                        </a>
                    </li>

                    <li className={'list'}>
                        <a href={''}>
                            <span className={'icon'}>
                                <ion-icon name="people-circle-outline"></ion-icon>
                            </span>
                            <span className="text">Profile</span>
                        </a>
                    </li>

                    <li className={'list'}>
                        <a href={''}>
                            <span className={'icon'}>
                                <ion-icon name="document-text-outline"></ion-icon>
                            </span>
                            <span className="text">Tulisan</span>
                        </a>
                    </li>

                    <li className={'list'}>
                        <a href={''}>
                            <span className={'icon'}>
                                <ion-icon name="library-outline"></ion-icon>
                            </span>
                            <span className="text">Portofolio</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavigation
