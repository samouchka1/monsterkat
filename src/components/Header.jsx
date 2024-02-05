import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faXTwitter, faTwitch, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';

import '/logo.png';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full h-full z-40 px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-6">
            <a href="/">
                <img src="logo.png" alt="logo" width="50" height="50" />
            </a>
            
            <div>
                <button className="text-neutral-50 text-2xl">
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="flex flex-col justify-center gap-4 absolute top-24 text-neutral-50 text-2xl pr-6">
                    <div className="opacity-80 hover:opacity-100 duration-200">
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} size="sm" />
                        </a>
                    </div>
                    <div className="opacity-80 hover:opacity-100 duration-200">
                        <a href="#">
                            <FontAwesomeIcon icon={faTiktok} size="sm" />
                        </a>
                    </div>
                    <div className="opacity-80 hover:opacity-100 duration-200">
                        <a href="#">
                            <FontAwesomeIcon icon={faXTwitter} size="sm" />
                        </a>
                    </div>
                    <div className="opacity-80 hover:opacity-100 duration-200">
                        <a href="#">
                        <FontAwesomeIcon icon={faTwitch} size="sm" />
                        </a>
                    </div>
                    <div className="opacity-80 hover:opacity-100 duration-200">
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} size="sm" />
                        </a>
                    </div>
                    <div className="opacity-80 hover:opacity-100 duration-200">
                        <a href="#">
                            <FontAwesomeIcon icon={faDiscord} size="xs" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header