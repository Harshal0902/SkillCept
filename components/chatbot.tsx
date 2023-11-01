import React, { useState } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";
import funfacts from "./funfacts";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import ChatbotImg from "../public/chatbot.png"
import de from '../locales/de/translationDe.json';
import en from '../locales/en/translationEn.json';
import fr from '../locales/fr/translationFr.json';
import hi from '../locales/hi/translationHi.json';
import ja from '../locales/ja/translationJa.json';
import ru from '../locales/ru/translationRu.json';

const locales = { en, de, fr, hi, ja, ru };

const theme = {
    background: "#F4F5F6",
    fontFamily: "Source Serif Pro",
    headerBgColor: "#C83CB9",
    headerFontColor: "#fff",
    headerFontSize: "18px",
    botBubbleColor: "#4984B8",
    botFontColor: "#fff",
    userBubbleColor: "#439fca",
    userFontColor: "#fff",
    innerHeight: "80%",
    fontWeight: "800"
};

function FunFact() {
    const randInt = Math.floor(Math.random() * 6);
    return <div>{funfacts[randInt]}</div>;
}

function Chatbot() {
    const [opened, setOpened] = useState(false);
    const [key, setKey] = useState(Math.random());
    const history = useRouter()

    const { locale } = history;
    const t = locale ? locales[locale] : locales['en'];

    const steps = [
        {
            id: '1',
            // message: "Hi, I am Study Bot. What is your name?",
            message: `${t.chatbotIntro}`,
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            // message: "Hi {previousValue}, how are you feeling today?",
            message: `${t.chatbotFeel}`,
            trigger: "expressions",
        },
        {
            id: "expressions",
            options: [
                { value: "veryHappy", label: "😀", trigger: "veryHappy" },
                { value: "happy", label: "🙂", trigger: "happy" },
                { value: "normal", label: "😐", trigger: "normal" },
                { value: "sad", label: "☹️", trigger: "sad" },
                { value: "angry", label: "😡", trigger: "angry" },
            ],
        },
        {
            id: "veryHappy",
            // message: "Great Me too 😍",
            message: `${t.veryHappy}`,
            trigger: "help",
        },
        {
            id: "happy",
            // message: "Hmm, Looks Like You are in good mood. Well I can make it great 😊",
            message: `${t.veryHappy}`,
            trigger: "help",
        },
        {
            id: "normal",
            // message: "Ooh, Are You Confused Sir/Mam ? Don't Worry I am here to Assist You 👻",
            message: `${t.normal}`,
            trigger: "help",
        },
        {
            id: "sad",
            // message: "I am sorry to here that 😟 . Well i would suggest to read our random Fun-fact or visit Fun Zone. You will feel better.🙂",
            message: `${t.sad}`,
            trigger: "help",
        },
        {
            id: "angry",
            // message: "😐 Oops, Did i do something wrong....But wait i am a bot i can't do that..🤥.  Well i suggest you to relax your mind, play some games,  watch some movies and eat a lot of healthy tasty food just like me..😝",
            message: `${t.angry}`,
            trigger: "help",
        },
        {
            id: "help",
            // message: "How can I help you?",
            message: `${t.help}`,
            trigger: "options",
        },
        {
            id: "options",
            options: [
                { value: "services", label: `${t.services}`, trigger: "services" },
                {
                    value: "funFact",
                    label: `${t.randomFunFact}`,
                    trigger: "funFact",
                },
                { value: "exit", label: `${t.exit}`, trigger: "end" },
            ],
        },
        {
            id: "services",
            // message: "Select one of these services",
            message: `${t.selectServices}`,
            trigger: "selectServices",
        },
        {
            id: "selectServices",
            options: [
                { value: "Subject", label: `${t.navLinkSubject}`, trigger: "selectedService" },
                { value: "Fun Zone", label: `${t.navLinkFunZone}`, trigger: "selectedService" },
                { value: "Contact Page", label: `${t.getInTouch}`, trigger: "selectedService" },
                { value: "goBack", label: `${t.goBack}`, trigger: "options" },
            ],
        },
        {
            id: "selectedService",
            // message: "opening {previousValue}",
            message: `${t.openingPrev}`,
            trigger: "end",
        },
        {
            id: "moreHelp",
            // message: "do you meed more help?",
            message: `${t.moreHelp}`,
            trigger: "moreHelp-yes",
        },
        {
            id: "moreHelp-yes",
            options: [
                { value: "yes", label: `${t.yes}`, trigger: "help" },
                { value: "no", label: `${t.no}`, trigger: "end" },
            ],
        },
        {
            id: "funFact",
            component: <FunFact />,
            asMessage: true,
            trigger: "moreHelp",
        },
        {
            id: "end",
            // message: "Thank you, see you again!",
            message: `${t.chatbotThank}`,
            end: true,
        },
    ];

    const handleEnd = ({ values }) => {
        switch (values[values.length - 1]) {
            case "Home":
                history.push("/");
                break;
            case "Subject":
                history.push("/subject");
                break;
            case "Fun Zone":
                history.push("/funzone");
                break;
            case "Contact Page":
                history.push("/contact");
                break;
            default:
                break;
        }
        setTimeout(() => {
            setKey(Math.random());
            setOpened(false);
        }, 1000);
    };

    return (
        <div className="chatbot">
            <ThemeProvider theme={theme}>
                <ChatBot
                    key={key}
                    steps={steps}
                    handleEnd={handleEnd}
                    opened={opened}
                    headerTitle={t.botName}
                    botAvatar="/chatbot.png"
                    avatarStyle={{ borderRadius: "100%" }}
                    floating={true}
                    floatingIcon={
                        <Image src="/chatbot.png" height="50" width="50" alt="chatBot icon" className="rounded-full" />
                    }
                    floatingStyle={{
                        backgroundColor: "#ffffff",
                        width: "60px",
                        height: "60px",
                        boxShadow: "2px 2px 20px -8px #111",
                    }}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
