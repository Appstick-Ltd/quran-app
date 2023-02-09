import HomeLayout from "../../layouts/home";
import {useRouter} from "next/router";
import surahs from "../../data/suras";
import {useState} from "react";

const Surah = () => {
    const {query} = useRouter()
    const surah = surahs?.find(surah => surah.id === +query?.id)
    console.log(surah)

    return (
        <div className="container py-8">
            {surah && surah.verses?.map((verse, index) => <Verse verse={verse} key={index}/>)}
        </div>
    )
}
Surah.layout = HomeLayout
export default Surah


const Verse = ({verse}) => {
    const [show, setShow] = useState(false)

    return (
        <div className="card">
            <p className="text-3xl md:text-5xl text-gray-700 text-right mb-4">{verse.verse}</p>
            <p className="text-xl md:text-2xl text-gray-700 mb-2">{verse.translations["en"]}</p>
            <p className="text-xl md:text-2xl text-gray-700">{verse.translations["bn"]}</p>
            <div className="flex justify-end">
                <button onClick={() => setShow(!show)}>Show</button>
            </div>
            <div className="transition-all duration-100 overflow-hidden" style={{height: show ? 'auto' : 0}}>
                <table className="w-full">
                    <tbody>
                    {verse?.words?.map((word, index) => (
                        <tr key={index}>
                            <td className="border border-slate-300 text-gray-700 text-xl p-2">{word["bn"]}</td>
                            <td className="border border-slate-300 text-gray-700 text-xl p-2">{word["en"]}</td>
                            <td className="border border-slate-300 text-gray-700 p-2 text-right text-4xl">{word["ar"]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}