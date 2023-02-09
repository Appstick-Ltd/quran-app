import {Fragment, useEffect, useState} from "react";
import "@fontsource/noto-naskh-arabic";
import "../styles/app.scss"
import SettingsContext from "../context/settings";
import Head from "next/head";

const App = ({Component, pageProps}) => {
    let Layout = Component.layout || Fragment

    const [settings, setSettings] = useState({
        word: {
            pronunciation: {
                english: false,
            },
            translation: {
                english: false
            }
        },
        pronunciation: {
            english: true,
        },
        translation: {
            english: true
        }
    })

    useEffect(() => {
        let settings = localStorage.getItem('settings')
        if (!!settings) {
            try {
                setSettings(JSON.parse(settings))
            } catch (e) {

            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings))
    }, [settings])

    return (
        <>
            <Head>
                <title>The Holy Quran</title>
                <link rel='manifest' href='/manifest.json' />
            </Head>
            <SettingsContext.Provider value={{settings, setSettings}}>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </SettingsContext.Provider>
        </>

    )
}


export default App