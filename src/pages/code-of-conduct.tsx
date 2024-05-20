import React from "react";
import styles from '@/styles/pages/CodeOfConduct.module.scss';


export default function CodeOfConduct(){
    return(
        <div className= {styles.codeOfConduct}>
            <h1>Code Of Conduct</h1>
            <p>
                <strong>Purpose of a Code of Conduct.</strong> A Code of Conduct is used to set expectations 
                for one's behavior at a professional event such as Open SGF's regular meetings, 
                as well as to hold organizers accountable for a safe environment that is 
                conducive to learning, socializing, and networking. If you find this Code 
                of Conduct too restrictive, please do not join our group or attend our meetings.
            </p>

            <p>
                <strong>Open SGF Values.</strong> Open SGF is dedicated to providing a respectful, inclusive, 
                and harassment-free space for everyone. We value and honor what you bring to this group, 
                no matter your age, gender, gender identity and expression, sexual orientation, disability, 
                medical condition, pregnancy status, mental health, neuroatypicality, criminal history, 
                physical appearance, body size, race, ethnicity, national origin, citizenship status, 
                socioeconomic status, religion (or lack thereof), political affiliation, general lifestyle 
                choices, dietary preferences, or technology choices.
            </p>

            <p>
                <strong>Applicability.</strong> This Code of Conduct applies to all Open SGF organizers, 
                volunteers, sponsors, and participants. We reserve the right to remove 
                any person who does not adhere to the Code of Conduct.
            </p>

            <p>
                <strong>Untolerated Behaviors.</strong> We do not tolerate harassment of any kind, 
                including but not limited to the following behaviors, especially regarding 
                the above-mentioned Open SGF values:
            </p>

            <ul>
                <li>Intimidation or threats</li>
                <li>Inappropriate disruption of events</li>
                <li>Hurtful language</li>
                <li>Physical assault of any kind</li>
                <li>Inappropriate physical contact</li>
                <li>Unwanted sexual attention</li>
                <li>Sexual language or imagery</li>
                <li>Unwanted photography or video recording</li>
                <li>Bullying or stalking</li>
                <li>Possession of any kind of weapon</li>
            </ul>

            <p>
                <strong>Reporting Behaviors Inconsistent With Code of Conduct.</strong> Open SGF is a 
                “see-something, say-something” community. If you witness or are subject 
                to any behaviors listed above or those that appear inconsistent with our 
                stated values, you can make a report in one of the following ways:
            </p>

            <ul>
                <li>Submit an anonymous report through our <a href="https://docs.google.com/forms/d/e/1FAIpQLSceeSzpiXFvchwmP2gc-8RMp9mhQDm1GQ4E2KpYCNklBruZpA/viewform">
                    “Report an Issue”</a> form</li>
                <li>Reach out to an organizer. Organizers are recognizable via the “organizers” 
                    role in Discord
                </li>
            </ul>

            <p>
                <strong>Reporting Behaviors Inconsistent With Code of Conduct.</strong> It is the goal of Open SGF organizers to resolve 
                the reported issue as quickly as possible as to ensure the safety of all. 
                If we cannot immediately resolve the issue, we will do our best to set proper 
                expectations of when we will be able to. We will take any action we deem 
                appropriate, up to and including removal from our physical events and our online 
                communities. At minimum, anyone asked to stop engaging in a potentially unsafe 
                behavior is expected to comply immediately. Open SGF organizers can also help 
                you in contacting law enforcement, providing escorts, or otherwise assist those 
                experiencing harassment to feel safe at our events. If the person being reported 
                is an organizer, they will be expected to recuse themselves immediately from 
                handling your incident.
            </p>
        </div>
    )
}