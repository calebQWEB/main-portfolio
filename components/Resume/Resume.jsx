import React from 'react'
import './resume.css'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import { useEffect } from 'react'
import resume from '../../assets/Curriculum-vitae.pdf'

const Resume = () => {
    const { ref, inView } = useInView({
        threshold: 0.8
    })
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            })
        }

        if (!inView) {
            animation.start({
                x: 100,
                opacity: 0
            })
        }
    })
    return (
        <motion.main className='resume-section' initial={{ scale: 0.5, opacity: 0.5 }} animate={{ scale: 1, opacity: 1, transition: { type: 'tween', duration: 1 } }} exit={{ opacity: 0, transition: { duration: 1 } }}>
            <article className='resume-article'>
                <div className='article-header'>
                    <h1>My Resume</h1>
                    <span>Caleb ochai</span>
                    <p>Software developer specializing particularly in building the frontend of web applications and websites, using a variety of tools like Html, Css or SASS, Bootstrap, JavaScript and react.js.</p>
                </div>

                <div className='career-objective'>
                    <h2>Career Objectives</h2>
                    <p>I am currently and actively looking for a role where i can use my skills to the advantage of the company, while having the scope to develop my own skills.</p>
                </div>

                <div className='experience'>
                    <h2>Experience</h2>
                    <h3 className='experience__in'>Experience in the Software field</h3>
                    <p>In the one year of experience that I currently have in the software field, I have created dozens of projects, utilizing all my skills.</p>
                    <Link to='/work' style={{ textDecoration: 'none' }}><span>See my work</span></Link>

                    <h3 className='experience__outside'>Experience outside the software field</h3>
                    <ul>
                        <li><h4>Intern at the Gwagwalada area council, Abuja</h4>
                            <p>As an intern I was posted to the area of pension and i was responsible for calculation the amount of pension to be allocated to each pensioner, though I didn't handle the money directly. I learnt a great deal about teamwork as I was working with several other employees.</p></li>

                        <li><h4>POS attendant</h4>
                            <p>I worked in Enugu state, Nigeria as a POS attendant where I dealt with large sums of money very often in millions, seeing as the location of the office was in AKWATA, one of the largest fish markets in Nigeria. I was responsible for counting and depositing large sums of money into the account of customers, we were very cautious about counterfiet currency, so we counted each note manually (by hand) where I developed a skill of knowing which note is counterfeit just by looking, and I also improved my team working ability.</p></li>
                    </ul>
                </div>

                <div className='download-button' ref={ref}>
                    <a href={resume} download='Caleb-Ochai-resume'><motion.button className='download' animate={animation} whileHover={{ scale: 1.05, transition: { type: 'tween', yoyo: Infinity } }}>Download CV</motion.button></a>
                </div>
            </article>
        </motion.main>
    )
}

export default Resume