// import { BeakerIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import github from '../assets/_img/github-logo.png'
import linkedin from '../assets/_img/linkedin-logo.png'
import lichess from '../assets/_img/lichess-logo.avif'
const Index = () => {
    function imageLoader({ src }: any) {
        return src
    }
    return (
        <div className="min-h-screen p-10 ">
            <div className="flex flex-col space-y-10 tracking-widest">
                <div className="my-10 mx-auto w-9/12 pb-10 border-b border-black text-center text-6xl font-semibold ">    <h1 className="text-4xl font-black">Hello! it&apos;s Hamza,</h1>
                    <p className="text-xl font-medium">I&apos;m a full stack developer.</p></div>





                <div className=" w-full flex flex-col space-y-3">
                    <ul>
                        <li><b>Front-end :</b> HTML, CSS, SASS, JAVASCRIPT, TYPESCRIPT</li>
                        <li><b>Back-end :</b> PHP, NODEJS, SQL</li>
                        <li><b>Versionning :</b> GITHUB, GITLAB, BITBUCKET</li>
                        <hr />
                    </ul>
                    <ul>
                        <li><b>Framework/library (css) :</b> Bootstrap, Tailwind</li>
                        <li><b>Framework/library (js) :</b> Vuejs, Nuxtjs, jQuery</li>
                        <li><b>Framework (back) :</b> Laravel, Lumen</li>
                    </ul>
                    <p><b className="text-cyan-700">Some random things I am use to : </b>Conventional Commits, Jira, Docker, JWT, Redis, VueX, Axios, SEO, React, NextJS...</p>
                    <i className="text-gray-500">This portfolio has been made with NextJs.</i>

                </div>
                <div className="w-3/5 border-2 border-black mt-3 mb-10 rounded-full bg-black h-2"></div>
                <p className="font-light text-xl">When it comes to interact with humans, I use english, or french.</p>
                <div className="flex flex-row space-x-5  ">
                    <a href="https://github.com/HamzaInPerth" target="_blank" className="h-16 w-16" rel="noreferrer">

                        <Image loader={imageLoader} alt="Visit my github" src={github} />

                    </a>
                    <a href="https://www.linkedin.com/in/hamzafromparis" target="_blank" className="h-16 w-16" rel="noreferrer">
                        <Image loader={imageLoader} src={linkedin} alt="Visit my linkedin" width={500} height={500} />
                    </a>
                    <a href="https://lichess.org/@/hamzainparis" target="_blank" className="h-16 w-16" rel="noreferrer">
                        <Image loader={imageLoader} src={lichess} alt="Play chess with me" width={500} height={500} />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Index