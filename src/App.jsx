import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './components/ProjectCard'

export default function App(){
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Qutaiba Mohamed</h1>
        <p className="mt-2 text-lg">Fullstack Web Developer – First Year High School – Zarqa, Jordan</p>
        <p className="mt-4 text-sm">React · MUI · TypeScript · Redux Toolkit · Tailwind CSS · Node.js · Express · MongoDB</p>
      </header>

      <section className="mb-10">
        <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-2xl font-semibold mb-3">About Me</motion.h2>
        <p>Aspiring fullstack web developer passionate about creating exceptional user experiences and building secure websites.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {['React','Material UI','TypeScript','Redux Toolkit','Tailwind CSS','Node.js','Express','MongoDB (Mongoose)','REST APIs','CRUD'].map(s => (
            <div key={s} className="p-3 bg-white rounded-lg shadow-sm text-center">{s}</div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          <ProjectCard
            title="E-commerce Store"
            desc="An online store built with TypeScript, React, Tailwind CSS, and Material UI. Features include: user registration and login with secure data, managing favorites, storing purchases, and browsing available products. Fully integrated with a database for persistent storage and smooth user experience."
            link="https://my-shop-weld-tau.vercel.app/"
          />
          <ProjectCard
            title="Task App"
            desc="Task management app — Under Development."
            link="#"
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <ul className="space-y-2">
          <li>Email: <a className="text-blue-600" href="mailto:qutaibah0mohmmed@gmail.com">qutaibah0mohmmed@gmail.com</a></li>
          <li>WhatsApp: <a className="text-blue-600" href="https://wa.me/962797917763" target="_blank" rel="noreferrer">+962 7 9791 7763</a></li>
          <li>GitHub: <a className="text-blue-600" href="https://github.com/abuNassem" target="_blank" rel="noreferrer">github.com/abuNassem</a></li>
          <li>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/qutaibah-mohamed-188162357/" target="_blank" rel="noreferrer">LinkedIn Profile</a></li>
          <li>
            <a href="/files/cv.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Download CV
            </a>
          </li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        Created by Qutaiba • Ready for Job Applications
      </footer>
    </div>
  )
}