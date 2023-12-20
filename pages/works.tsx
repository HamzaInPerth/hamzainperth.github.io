import MyWorks from '../components/Works/MyWorks'

const Works = () => {
    return (
        <div>
            <div className="my-10 mx-auto w-9/12 pb-10 border-b border-black text-center text-6xl text-slate-200 font-semibold ">My works</div>
            <p className="text-slate-200 text-center">Some public and deployed project I did work on. I'm sorry if some links are broken.</p>
            <MyWorks />
        </div>
    )
}

export default Works