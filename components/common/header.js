import Link from "next/link";
import {Checkbox, Modal} from "antd";
import {useState} from "react";
import {useSettingsContext} from "../../context/settings";

const Header = () => {
    const [show, setShow] = useState(false)
    const {settings, setSettings} = useSettingsContext()

    const handleWordPronunciationUpdate = (lang, value) => {
        setSettings(settings => ({
            ...settings,
            word: {
                ...settings.word,
                pronunciation: {
                    ...settings.word.pronunciation,
                    [lang]: value
                }
            }
        }))
    }

    const handleWordTranslationUpdate = (lang, value) => {
        setSettings(settings => ({
            ...settings,
            word: {
                ...settings.word,
                translation: {
                    ...settings.word.translation,
                    [lang]: value
                }
            }
        }))
    }

    const handlePronunciationUpdate = (lang, value) => {
        setSettings(settings => ({
            ...settings,
            pronunciation: {
                ...settings.pronunciation,
                [lang]: value
            }
        }))
    }

    const handleTranslationUpdate = (lang, value) => {
        setSettings(settings => ({
            ...settings,
            translation: {
                ...settings.translation,
                [lang]: value
            }
        }))
    }

    return (
        <>
            <div className="bg-white h-16 border-b fixed top-0 w-full">
                <div className="container py-4">
                    <div className="flex justify-between">
                        <Link href="/">
                            <h4 className="text-lg font-medium text-gray-700">Quran</h4>
                        </Link>
                        <div className="flex">
                            <a role="button" onClick={() => setShow(true)}>Settings</a>
                        </div>
                    </div>
                </div>

            </div>
            <Modal open={show} onCancel={() => setShow(false)} title="Settings" footer={null}>
                <div className="flex flex-col">
                    <Checkbox
                        checked={settings?.word?.pronunciation?.english}
                        onChange={e => handleWordPronunciationUpdate('english', e.target.checked)}
                        className="text-lg mb-2 ml-2 mt-4 text-gray-700">
                        Word Pronunciation in English
                    </Checkbox>
                    <Checkbox
                        checked={settings?.word?.translation?.english}
                        onChange={e => handleWordTranslationUpdate('english', e.target.checked)}
                        className="text-lg mb-4 ml-0 text-gray-700">
                        Word Translation in English
                    </Checkbox>
                    <Checkbox
                        checked={settings?.pronunciation?.english}
                        onChange={e => handlePronunciationUpdate('english', e.target.checked)}
                        className="text-lg mb-2 ml-0 text-gray-700">Verse Pronunciation in English</Checkbox>
                    <Checkbox
                        checked={settings?.translation?.english}
                        onChange={e => handleTranslationUpdate('english', e.target.checked)}
                        className="text-lg mb-4 ml-0 text-gray-700">
                        Verse Translation in English
                    </Checkbox>
                </div>
            </Modal>
        </>

    )
}

export default Header