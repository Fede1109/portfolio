import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants/constants'
import { fadeIn, textVariant} from '../utils/motion'

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti, porro vitae ipsa quos libero. Quidem reprehenderit qui libero magni suscipit in. Libero, earum suscipit animi quasi ipsam modi esse!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum possimus animi perspiciatis natus non molestias repellendus aliquid iste. A, dolor fuga culpa doloremque neque quo omnis minima id explicabo eligendi!
    </motion.p>
    </>
  )
}

export default About