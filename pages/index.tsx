// import { BeakerIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import github from '../assets/_img/logo-github-white.png'
import linkedin from '../assets/_img/linkedin-logo.png'
import lichess from '../assets/_img/lichess.png'
// import buyMeCoffee from '../assets/_img/buy-me-a-coffee.png'
import me from '../assets/_img/me.jpg'

const allSKills = [
    {
        type: 'Back End',
        values: ["PHP", "SQL", "Laravel", "NodeJs", "ExpressJs", "NestJs", "Docker", "CI/CD", "API"]
    },
    {
        type: 'Front End',
        values: ["Javascript", "Typescript", "Vue.Js", "React", "React-Native", "jQuery", "NextJs", "NuxtJs", "HTML", "CSS", "SASS", "Bootstrap", "Tailwind"]
    },

    {
        type: 'Others',
        values: ["Linux", "Jira", "Git", "SEO", "Security best practice", "Agile Development", "Technical Documentation"]
    }
]
const Index = () => {
    const imageLoader = ({ src }: { src: string }): string => src
    const links = [
        {
            picture: github,
            alt: "my github",
            link: 'https://github.com/HamzaInPerth',
        },
        {
            picture: linkedin,
            alt: "my linkedin",
            link: 'https://www.linkedin.com/in/hamzafromparis',
        },
        {
            picture: lichess,
            alt: "Play chess with me",
            link: 'https://lichess.org/@/hamzainparis',
        },
    ]
    return (
        <div className="min-h-screen p-10 tracking-widest leading-loose text-slate-200">
            <div className="flex flex-col space-y-10 justify-center items-center">
                <Image loader={imageLoader} alt="hamza" layout="fixed" objectFit="contain" className="rounded-full mx-auto" height={200} width={200} src={me} />
                <div className="my-10 mx-auto w-9/12 pb-10 border-b border-black text-center text-6xl font-semibold">
                    <h1 className="text-4xl font-black  tracking-widest leading-relaxed">Hamza</h1>
                    <p className="text-xl font-medium">Software Engineer</p></div>



                <div className="mx-auto p-6 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Skills</h1>
                    {allSKills.map((skills, key) =>
                    (<div key={key} className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">{skills.type}</h2>
                        <ul className="flex flex-row flex-wrap">
                            {skills.values.map(skill => (<li className="m-3" key={skill.replace(/\s/g, '')}>{skill}</li>))}
                        </ul>
                    </div>))
                    }
                </div>
            </div>

            <div className=" w-full flex flex-col space-y-3">
                <p><b className="text-cyan-700">Some random things I am use to : </b>Conventional Commits, Jira, Docker, JWT, Redis, VueX, Pinia, Axios, SEO, React, NextJS, Googling stuffs...</p>
                <i className="text-gray-500">This portfolio has been made with NextJs.</i>
                <div className="m-auto">
                    <Link href="/works">
                        <a className="font-semibold text-xl tracking-widest px-4 py-2 bg-black border-2 border-black hover:bg-white hover:text-black rounded-lg transition-all ease-in-out duration-300 text-white">Check out my Works</a>
                    </Link>
                </div>
            </div>
            <div className="w-3/5 border-2 border-black mt-3 mb-10 rounded-full bg-slate-400 h-2"></div>
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
    )
}

export default Index
