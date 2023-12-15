// import { BeakerIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import github from '../assets/_img/github-logo.png'
import linkedin from '../assets/_img/linkedin-logo.png'
import lichess from '../assets/_img/lichess.png'
// import buyMeCoffee from '../assets/_img/buy-me-a-coffee.png'
import me from '../assets/_img/me.jpg'
const Index = () => {
    function imageLoader({ src }: any) {
        return src
    }
    const links = [
        {
            picture: github,
            alt: "my github",
            link: 'https://github.com/HamzaInPerth',
        },
        // {
        //     picture: linkedin,
        //     alt: "my linkedin",
        //     link: 'https://www.linkedin.com/in/hamzafromparis',
        // },
        {
            picture: lichess,
            alt: "Play chess with me",
            link: 'https://lichess.org/@/hamzainparis',
        },
    ]
    return (
        <div className="min-h-screen p-10  tracking-widest leading-loose">
            <div className="flex flex-col space-y-10 justify-center items-center">
                <Image loader={imageLoader} alt="hamza" layout="fixed" objectFit="contain" className="rounded-full mx-auto" height={200} width={200} src={me} />
                <div className="my-10 mx-auto w-9/12 pb-10 border-b border-black text-center text-6xl font-semibold">
                    <h1 className="text-4xl font-black  tracking-widest leading-relaxed">My name is Hamza,</h1>
                    <p className="text-xl font-medium">I&apos;m a full stack developer.</p></div>
                <div className=" w-full flex flex-col space-y-3">
                    <ul>
                        <li><b>Front-end :</b> HTML, CSS, SASS, JAVASCRIPT, TYPESCRIPT</li>
                        <li><b>Back-end :</b> PHP, NODEJS, SQL</li>
                        <li><b>Versionning :</b> GITHUB, GITLAB, BITBUCKET</li>
                        <hr />
                    </ul>
                    <ul>
                        <li><b>Framework front :</b> Bootstrap, Tailwind, Vuejs, Nuxtjs, jQuery</li>
                        <li><b>Framework back :</b> Laravel, Lumen</li>
                    </ul>
                    <p><b className="text-cyan-700">Some random things I am use to : </b>Conventional Commits, Jira, Docker, JWT, Redis, VueX, Pinia, Axios, SEO, React, NextJS, Googling stuffs...</p>
                    <i className="text-gray-500">This portfolio has been made with NextJs.</i>
                    <div className="m-auto">
                        <Link href="/works">
                            <a className="font-semibold text-xl tracking-widest px-4 py-2 bg-black border-2 border-black hover:bg-white hover:text-black rounded-lg transition-all ease-in-out duration-300 text-white">Check out my Works</a>
                        </Link>
                    </div>
                </div>
                <div className="w-3/5 border-2 border-black mt-3 mb-10 rounded-full bg-black h-2"></div>
                <p className="font-light text-xl">When it comes to interact with humans, I use english, or french.</p>

                <div className="flex flex-wrap w-full overflow-hidden h-auto">
                    {links.map(function (element, index) {
                        return <div key={index} className="block h-24 m-3 relative">
                            <a href={element.link} target="_blank"><Image
                                placeholder='blur'
                                loader={imageLoader}
                                src={element.picture}
                                alt={element.alt}
                                objectFit="cover"
                                // width={200}
                                height={100}
                                layout="fixed"
                            /></a>
                        </div>
                    })}
                </div>
            </div>
        </div >
    )
}

export default Index
