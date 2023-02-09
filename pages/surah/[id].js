import HomeLayout from "../../layouts/home";
import {useRouter} from "next/router";
import surahs from "../../data/suras";

const Surah = () => {
    const {query} = useRouter()
    const surah = surahs?.find(surah => surah.id === +query?.id)
    console.log(surah)

    return (
        <div className="container py-8">
            {surah && surah.verses?.map((verse, index) => (
                <div className="card" key={index}>
                    <p className="text-3xl md:text-5xl text-gray-700 text-right mb-4">{verse.verse}</p>
                    <p className="text-xl md:text-2xl text-gray-700 mb-2">{verse.translations["en"]}</p>
                    <p className="text-xl md:text-2xl text-gray-700">{verse.translations["bn"]}</p>
                </div>
            ))}
        </div>
    )
}
Surah.layout = HomeLayout
export default Surah