import Image, { ImageLoader } from 'next/image'
import { ImgHTMLAttributes } from 'react'
import workData from './workData'

function MyWorks() {
    let delay = 300

    function imageLoader({src}: any) {
        return src
    }
    return (
        <div className="flex flex-wrap mx-3 lg:mx-10">
            {workData.map(function (work, key) {
                return <div key={key} className="w-full sm:w-1/2 xl:w-1/3 mx-2 sm:mx-0 my-2 group flex flex-col  "  >
                    <div className="text-black sm:m-2 h-full ease-in-out duration-500 shadow flex flex-col justify-between ">
                        {/* BODY */}
                        <div className="flex flex-col justify-between h-full z-40 relative overflow-hidden">

                            {/* OVERLAY */}
                            <div className="absolute h-full w-full group-hover:opacity-0 group-hover:pointer-events-none group-hover:scale-x-0 group-hover:skew-x-12 group-hover:rotate-180 group-hover:delay-0 delay-700 transition-all duration-700 px-10 py-5 ease-in-out bg-white flex flex-col justify-center">
                                <Image loader={imageLoader} src={work.logo} alt={work.name} className="object-contain" />
                            </div>

                            {/* CONTENT */}
                            <div className="h-full cursor-default p-5 text-xl bg-white font-extralight text-gray-600">
                                <span className="transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 delay-300">{work.description}</span>
                            </div>

                            {/* FOOTER */}
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-end bg-white pb-10">
                                    <a href={work.link} target="_blank" rel="noreferrer" className="scale-0 group-hover:scale-100 group-hover:delay-1000 transition-all  duration-700 ease-in-out my-3 mx-5">
                                        <span className="hover:bg-white hover:text-black border hover:border-gray-400 transition-all duration-500 ease-in-out bg-custom-blue text-white py-2 px-4">
                                            Visit →
                                        </span>
                                    </a>
                                </div>
                                <div className="w-full flex-wrap items-center justify-end bg-slate-50 px-3 h-12  flex flex-row border-t border-gray-300">
                                    {work.details.map((detail, index) => {
                                        return <div key={index} style={{ transitionDelay: `${index ? (index * 150 + delay) : delay}ms` }} className=" opacity-0 group-hover:opacity-100 rotate-180  group-hover:rotate-0 group-hover:-mt-4 group-hover:mb-0 -mb-24 delay-300 duration-1000 transition-all  ease-in-out">
                                            <a href={detail.link} target="_blank" rel="noreferrer" className="rounded-full shadow-xl">
                                                <div className="h-12 w-12 mx-1 p-3 bg-white rounded-full shadow-xl border border-gray-300 saturate-12 cursor-pointer">
                                                    <Image loader={imageLoader} src={detail.picture} alt={detail.alt} />
                                                </div>
                                            </a>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}


export default MyWorks