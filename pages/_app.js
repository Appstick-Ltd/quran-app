import {Fragment} from "react";
import "@fontsource/noto-naskh-arabic";
import "../styles/app.scss"

const App = ({Component, pageProps}) => {
    let Layout = Component.layout || Fragment

    return (
        <>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
    )
}


export default App