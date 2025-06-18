/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import { ProjectCard } from './index.js';
import { web_link } from '../assets/index.js';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>我的工作</p>
        <h2 className={styles.sectionHeadText}>项目展示.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]"
        >
          以下是我在职业生涯中完成的主要项目，涵盖了物联网系统、
          教育平台、智能设备控制、政务服务等多个领域。每个项目都
          体现了我在前端开发、系统架构和用户体验优化方面的专业能力。
          <br />
          <br />
        </motion.p>
      </div>
      <h2 className="divider text-black mt-20 font-black text-3xl">
        <span className="ml-[20px] mr-[20px]">2021 - 至今</span>
      </h2>
      <div className="mt-20 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');