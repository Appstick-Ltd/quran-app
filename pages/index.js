import HomeLayout from "../layouts/home";
import surahs from "../data/suras";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <div className="container py-4">
                {surahs?.map((d, index) => (
                    <Link href={"/surah/" + d.id} className="card block" key={index}>
                        <div role="button" >
                            <h4>{d.id}. {d.name}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

Home.layout = HomeLayout
export default Home