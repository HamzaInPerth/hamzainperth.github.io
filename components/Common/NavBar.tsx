// import { BeakerIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react';

import Link from 'next/link'
interface INavBarProps {
    darkMode: boolean
}

class NavBar extends React.Component {
    constructor(props: INavBarProps) {
        super(props)
    }

    state = {
        active: false
    }

    toggleMenu = (active: boolean) => {
        this.setState({ active })
    }

    componentDidMount() {
        console.log('mounted')
    }




    // componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState, this.state)
    // }

    render() {
        // const { darkMode } = this.props
        const { active } = this.state
        let darkMode = false
        return (
            <div className={` h-sceeen relative  border-r ${darkMode ? 'bg-black text-white' : 'text-black'}`} style={{ zIndex: '100' }}>
                <div className="fixed md:sticky z-50 bg-white md:m-0 m-2 rounded-full md:border-0 border-2 border-black">
                    <button className="md:hidden block p-2" onClick={() => this.toggleMenu(!active)}>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6" >
                            <path className={`transition-all ease-in-out  ${active ? 'opacity-0 pointer-events-none scale-150' : 'opacity-100 scale-100'}`} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            <path className={`transition-all ease-in-out ${active ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-150'}`} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <div className={`wrap-menu-items ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'}`}>
                    <ul>
                        <li onClick={() => this.toggleMenu(false)}><Link href="/"><a>Home</a></Link></li>
                        <li onClick={() => this.toggleMenu(false)}><Link href="/works"><a>Works</a></Link></li>
                        <li onClick={() => this.toggleMenu(false)}><Link href="/contact"><a>Contact</a></Link></li>
                    </ul>
                </div>
            </div>)
    }
}

export default NavBar