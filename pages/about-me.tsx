import React from 'react'

class AboutMe extends React.Component {
    constructor(props: any) {
        super(props)

    }
    render() {
        return (
            <>
                <div className="my-10 mx-auto w-10/12 pb-10 border-b border-black text-center text-6xl font-semibold min-h-screen">
                    About me
                </div>
            </>
        )
    };
}
export default AboutMe;