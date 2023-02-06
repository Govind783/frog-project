import React from 'react'
import Faq from "react-faq-component";
import "../styles/Faq.css"

const FaqComponent = () => {

    const data = {
        title: "",
        rowContentTextSize: "10px",
        rows: [
            {
                title: "What is Lorem Ipsum?",
                content: `
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                `
            },


            {
                title: "How to get amet Dolor?",
                content:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            },

            {
                title: "What is Lorem Ipsum?",
                content: `
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                `
            },


            {
                title: "How to get amet Dolor?",
                content:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            },

            {
                title: "What is Lorem Ipsum?",
                content: `
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                `
            },


            {
                title: "How to get amet Dolor?",
                content:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            },




        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: "white",
        rowTitleColor: "white",
        position: "relative",
        textAlign: "left",
        bgColor: "black",
        fill: "white",
        rowContentColor: "white",
        arrowColor: "white",
        titleTextSize: "3rem",
        rowTitleTextSize: '1.6rem',
        rowContentTextSize: "15px"
    };

    const config = {
        animate: true,
        // arrowIcon: "V",
        // tabFocus: true

        expandIcon: "+",
        collapseIcon: "-",
        transitionDuration: "1s",
    };

    return (
        <div className='faqParent'>
            <div className='faqHeadingTextHold'>
                <h1 className='faqTitle text-left mb-4'>FREQUENTLY ASKED QUESTIONS</h1>
                <p className='faqLine'></p>
            </div>

            <div className=' text-left wid popinsFont'>

                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                    className="relative text-left popinsFont"
                />
            </div>

            <br />
            <br />

           


        </div>
    )
}

export default FaqComponent