import React from 'react'
import ap from "../images/ap.png"
import ap1 from "../images/ap1.png"
import ap2 from "../images/ap2.png"
import ap3 from "../images/ap3.png"
import grh from "../images/grh.jpg"

function Speaker() {
    return (
        <div>
            <div className="container">
                <h1 style={{"text-align": "center", "margin-bottom": "50px"}}>The Speaker - <span style={{color:"orange", "text-decoration": "underline"}}>Atulya Nimaai Das</span></h1>
                <img src={ap1} className="ap-image" alt="image" />
                <p style={{"margin-right":"10px", "margin-left":"10px", "text-justify":"inter-word", "text-align":"justify", "margin-top": "50px", "margin-bottom": "50px", "font-size": "20px", "line-height":"1.6"}} class="appara"><span style={{ "font-weight": "bold", color:"orange"}}>Atulya Nimaai Das</span> (Aditya Harit) was born in Jaipur, Rajasthan in 1985. After completing his
                graduation from Rajasthan University, he went on to complete his post-graduation in Masters
                of Business Administration (MBA) &amp; Diploma in Media management from Asian Business
                School, Noida. He had his inclination towards social service right from the school days and this
                motivated him to start working with a Jaipur based NGO from as early as college days.
                In 2007, he joined a spiritual NGO, dedicated to the propagation of the knowledge of Bhagavad
                Gita &amp; other Vedic texts, and started imbibing the knowledge of the Vedic scriptures. To
                practically experience the ways of Vedic life, he led ascetic life for 6 years living in a gurukul.
                <span style={{ "font-weight": "bold"}}> Since 2013 he has been teaching this knowledge in schools, colleges, corporates, villages and
                many more. He addressed audiences in different cities like Delhi, Gurgaon, Faridabad, Indore,
                Ahmedabad, Jaipur, etc. Over the past 7 years, he delivered more than 100+ talks and has
                spoken for more than 125+ hours on different topics related to Holistic growth through
                Bhagavad Gita. </span>
                He has recently added another laurel to his credit by becoming the author of <span style={{ "font-weight": "bold", color: "orange"}}>“Holistic Success
                through Bhagavad Gita”.</span> The book talks about how to develop a complete personality and
                achieve holistic success in life. This book is mostly catering to the youth of Indian society.
                He has been actively propagating this knowledge on the social media platform through his
                Youtube channel &amp; Facebook Page - <span style={{ "font-weight": "bold", color:"purple"}}>“Divine Shiksha”</span> with 7500 active followers. His online
                series “5 minutes daily dose on Bhagvad Gita is appreciated widely by his listeners” and has
                been successfully transforming the thought process of the youth.</p>
            </div>
        </div>
    )
}

export default Speaker;
