import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box, Button } from "@mui/material";
import { info } from "../../info/Info";



export default function Home({ innerRef }) {

   const handleDownloadResume = () => {
      const resumeUrl = 'https://drive.google.com/file/d/1iYW7Xt402JuSj1L7iWOgVMw3W-LKaqR0/view?usp=drive_link'; // Update with the correct path
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Kalindu_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>
            <Box display={'flex'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }} mt={'2rem'} className={Style.socialIcons}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
            <Box display={'flex'} justifyContent={'center'} mt={'1rem'}>
               <Button variant="contained" color="primary" onClick={handleDownloadResume} className={Style.downloadButton}>
                  Resume
               </Button>
            </Box>
         </Box>
      </Box>
   );
}
