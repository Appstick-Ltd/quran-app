import HomeLayout from "../../layouts/home";
import surahs from "../../data/suras";
import {useEffect, useState} from "react";
import {useSettingsContext} from "../../context/settings";
import axios from "axios";

const Surah = ({surah}) => {
    const [verses, setVerses] = useState([])
    // useEffect(() => {
    //     let find = surahs?.find(d => d.id === surah.id)
    //     console.log(JSON.stringify(find.verses))
    // }, [])

    useEffect(() => {
        axios.get(`/surah/${surah.id}.json`).then(({data}) => {
            setVerses(data)
        })
    }, [])

    return (
        <div className="container py-8">
            <div className="mb-4">
                <h3 className="text-2xl text-gray-700">{surah?.name}</h3>
            </div>
            {verses?.map((verse, index) => <Verse verse={verse} key={index}/>)}
        </div>
    )
}
Surah.layout = HomeLayout
export default Surah


const Verse = ({verse}) => {
    const [show, setShow] = useState(false)
    const {settings} = useSettingsContext()

    return (
        <div className="card">
            <div className="flex flex-wrap flex-row-reverse">
                {verse?.words?.map((word, index) => (
                    <div className="pl-4" key={index}>
                        <span className="text-5xl leading-[75px] text-gray-700 text-right">{word.word}</span>
                        {settings?.word?.pronunciation?.english &&
                            <p className="text-lg md:text-xl text-gray-700 mb-2">{word.pronunciation["en"]}</p>}
                        {settings?.word?.translation?.english &&
                            <p className="text-lg md:text-xl text-gray-700 mb-2">{word.translation["en"]}</p>}
                    </div>
                ))}
            </div>
            {settings?.pronunciation?.english &&
                <p className="text-lg text-gray-700 mb-2">{verse.pronunciation["en"]}</p>}
            {settings?.translation?.english &&
                <p className="text-lg text-gray-700 mb-2">{verse.translation["en"]}</p>}
            <div className="transition-all duration-100 overflow-hidden" style={{height: show ? 'auto' : 0}}>
                <table className="w-full hidden md:table">
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
                <div className="md:hidden">
                    {verse?.words?.map((word, index) => (
                        <div className="border mb-4" key={index}>
                            <div className="border-b p-4">
                                <p className="text-3xl text-right">{word["ar"]}</p>
                            </div>
                            <div className="border-b p-4">
                                <p className="text-lg text-right">{word["en"]}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-lg text-right">{word["bn"]}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export async function getStaticProps({params: {id}}) {
    const surah = surahs?.find(surah => surah.id === +id)
    return {
        props: {
            surah: {
                id: surah.id,
                name: surah.name,
            }
        }
    };
}

export async function getStaticPaths() {
    const paths = surahs.map((c) => {
        return {params: {id: c.id.toString()}}; // Route is something like "this-is-my-post"
    });

    return {
        paths,
        fallback: true,
    };
}