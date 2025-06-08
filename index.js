#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";

try {

  // Resume data
  const resumeData = {
    name: 'Anupreet Srivastava',
    title: 'Full Stack Developer | B.Tech CSE - 2025',
    contact: {
      email: 'anupreet.2003@gmail.com',
      phone: '8826260623',
      portfolio: 'https://anupreet-portfolio.netlify.app/',
      linkedin: 'https://linkedin.com/in/anupreet1213',
      github: 'https://github.com/Anupreet1213',
    },
    experience: [
      {
        role: 'Full Stack Developer Trainee',
        company: 'Code Quotient',
        period: 'Nov 2024 – Feb 2025',
        details: ['MERN stack training, full-stack projects with auth & REST APIs'],
      },
      {
        role: 'Frontend Intern',
        company: 'Siono.ai',
        period: 'June – Aug 2024',
        details: ['Built Job Dashboard UI with Next.js', 'Bug fixes & UI/UX enhancements'],
      },
    ],
    projects: [
      {
        name: 'Runic Vault – Game Store',
        tech: 'MERN, Redux, Stripe',
        details: ['Afull-stack game store built using the MERN stack with secure payment integration via Stripe'],
        github: 'https://github.com/Anupreet1213/RunicVault',
      },
      {
        name: 'Stroke.io – Content Platform',
        tech: 'Next.js, ConvexDB, Kinde',
        details: ['Built a high-speed digital content editing platform enabling users to efficiently edit, organize, and manage digital content — improved load times by 40%'],
        github: 'https://github.com/Anupreet1213/stroke.io',
      },
      {
        name: 'Reclaim Green – Carbon Calculator',
        tech: 'React, Firebase, ML',
        details: ['Web app to calculate carbon footprints at both individual and industry levels'],
        github: 'https://github.com/AmanApT/CEmission',
      },
    ],
    education: [
      {
        degree: 'B.Tech in Computer Science',
        institution: 'United College of Engineering & Research',
        period: '2021 – 2025',
      },
    ],
    skills: {
      languages: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript'],
      stack: ['React.js', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Next.js'],
      tools: ['Git', 'Figma', 'Tailwind', 'Bootstrap', 'UI/UX'],
    },
    achievements: [
      'Silver Elite – NPTEL Java DSA 2023',
      'Top 30 – Lablab.ai Int’l Hackathon 2023',
      '1st Rank – Web Dev Contest (Inter-College) 2022',
    ],
  };

  const formatSection = (title, content) => {
    return `${chalk.bold.cyan(title)}\n${content}\n`;
  };

  const contactSection = () => {
    const { email, phone, portfolio, linkedin, github } = resumeData.contact;
    return formatSection('📬 Contact:', [
      `${chalk.cyan('Email:')} ${email}`,
      `${chalk.cyan('Phone:')} ${phone}`,
      `${chalk.cyan('Portfolio:')} ${portfolio}`,
      `${chalk.cyan('LinkedIn:')} ${linkedin}`,
      `${chalk.cyan('GitHub:')} ${github}`,
    ].join('\n'));
  };

  const experienceSection = () => {
    const items = resumeData.experience.map(
      (exp) => `${chalk.bold(exp.role)} @ ${exp.company}\n${chalk.dim(exp.period)}\n${exp.details.map((d) => `  • ${d}`).join('\n')}`
    );
    return formatSection('💼 Experience:', items.join('\n\n'));
  };

  const projectsSection = () => {
    const items = resumeData.projects.map(
      (proj) => `${chalk.bold(proj.name)} (${proj.tech})\n${proj.details.map((d) => `  • ${d}`).join('\n')}\n  GitHub: ${proj.github}`
    );
    return formatSection('🚀 Projects:', items.join('\n\n'));
  };

  const educationSection = () => {
    const items = resumeData.education.map(
      (edu) => `${chalk.bold(edu.degree)} @ ${edu.institution}\n${chalk.dim(edu.period)}`
    );
    return formatSection('📚 Education:', items.join('\n\n'));
  };

  const skillsSection = () => {
    const { languages, stack, tools } = resumeData.skills;
    return formatSection('🧠 Skills:', [
      `${chalk.cyan('Languages:')} ${languages.join(', ')}`,
      `${chalk.cyan('Stack:')} ${stack.join(', ')}`,
      `${chalk.cyan('Tools:')} ${tools.join(', ')}`,
    ].join('\n'));
  };

  const achievementsSection = () => {
    const items = resumeData.achievements.map((ach) => `  • ${ach}`);
    return formatSection('🏅 Achievements:', items.join('\n'));
  };

  const header = `
${chalk.bold.green('=====================================')}
${chalk.bold.green(resumeData.name)}
${chalk.white(resumeData.title)}
${chalk.bold.green('=====================================')}
`;

  const resumeOutput = [
    header,
    contactSection(),
    experienceSection(),
    projectsSection(),
    educationSection(),
    skillsSection(),
    achievementsSection(),
  ].join('\n');
  
  console.log(
    boxen(resumeOutput, {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'green',
      backgroundColor: 'black',
    })
  );

} catch (error) {
  console.error(chalk.red('Error displaying resume:'), error.message);
  process.exit(1);
}