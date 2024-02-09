import Image from 'next/image'
const Loading = ()=>{
    return(
        <main className="w-full h-[100vh] flex flex-wrap content-center justify-center items-center bg-[#bc004b]">
            <span className="flex w-full text-[#f4a620] text-[80px] justify-center">loading...</span>
        </main>

    )
}
export default Loading;