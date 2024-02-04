import React from 'react';

import '/logo.png';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-40 px-10">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-6">
            <a href="/">
                <img src="logo.png" alt="logo" width="50" height="50" />
            </a>
            
            <div>
                <button className="text-neutral-50 text-2xl">
                </button>

                <ul className="absolute top-24 text-neutral-50 text-2xl">
                    <li>
                        <a href="#">
                            {/* <FontAwesomeIcon icon={faInstagram} /> */}
                        </a>
                    </li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header