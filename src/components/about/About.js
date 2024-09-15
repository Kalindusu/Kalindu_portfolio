import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}> $</span> cat
                about{firstName} </p>
            <p>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}> $</span> cd skills
            </p>
            
            <p style={{color: info.baseColor}}> Professional Skills</p>
            <ul className="styled-list"> 
                {info.skills.professional.map((proficiency, index) =>  <li  key={index}><span style={{color: info.baseColor}}> ❇️</span> <></>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Personal Skills</p>
            <ul>
                {info.skills.softskills.map((skill, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{skill.emoji}</Box>{skill.label}</li>
                ))}
            </ul>
        </>;
    }
    function courses() {
        return <>
            <p><span style={{color: info.baseColor}}> $</span> cd education & certifications  
            </p>
                 <p style={{color: info.baseColor}}> Education</p>
            <ul >
                {info.achive.education.map((edu, index) => <li key={index}><span style={{color: info.baseColor}}> ❇️</span> <></>{edu}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Certifications</p>
            <ul>
                {info.achive.certification.map((certify, index) => <li key={index}><span style={{color: info.baseColor}}> ❇️</span> <></>{certify}</li>)}
            </ul>
           
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
            soft skills & hobbies</p>
            <p><span style={{color: info.baseColor}}>soft skills & hobbies <span
                className={Style.green}>(main)</span> $</span> ls</p>
                  
                 <p style={{color: info.baseColor}}> Hobbies</p>
            <ul>
                {info.hobyskill.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={courses()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}