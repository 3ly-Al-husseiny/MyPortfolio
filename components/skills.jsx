"use client"

import { useRef, useEffect, useState } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaNpm, FaWordpress, FaBootstrap, FaDatabase, FaServer, FaCode, FaShieldAlt, FaCloud } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiRedux,
  SiJest,
  SiWebpack,
  SiVercel,
  SiFirebase,
  SiFramer,
  SiSass,
  SiCsharp,
  SiDotnet,
  SiDocker,
  SiJquery,
  SiMicrosoftsqlserver,
  SiAzuredevops,
  SiVisualstudio,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { MdDesignServices, MdArchitecture, MdSecurity } from "react-icons/md"
import { BiNetworkChart, BiSolidAlgorithm } from "react-icons/bi"
import { BsWindowStack, BsDiagram3Fill } from "react-icons/bs"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={36} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={36} /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={36} /> },
    { name: "C#", icon: <SiCsharp className="text-[#9B4F96]" size={36} /> },
    { name: "ASP.NET MVC", icon: <SiDotnet className="text-[#512BD4]" size={36} /> },
    { name: "ASP.NET API", icon: <SiDotnet className="text-[#512BD4]" size={36} /> },
    { name: "SQL Server", icon: <SiMicrosoftsqlserver className="text-[#CC2927]" size={36} /> },
    { name: "UI/UX Design", icon: <MdDesignServices className="text-purple-500" size={36} /> },
  ]

  const technologies = [
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" size={24} /> },
    { name: "jQuery", icon: <SiJquery className="text-[#0769AD]" size={24} /> },
    { name: "OOP", icon: <BsDiagram3Fill size={24} /> },
    { name: "EF Core", icon: <FaDatabase className="text-[#512BD4]" size={24} /> },
    { name: "LINQ", icon: <FaCode className="text-[#512BD4]" size={24} /> },
    { name: "SOLID", icon: <MdArchitecture size={24} /> },
    { name: "Clean Code", icon: <FaCode size={24} /> },
    { name: "Clean Architecture", icon: <MdArchitecture className="text-[#FF9900]" size={24} /> },
    { name: "Data Structures", icon: <BiSolidAlgorithm size={24} /> },
    { name: "Algorithms", icon: <BiSolidAlgorithm className="text-[#00B4D8]" size={24} /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={24} /> },
    { name: "GitHub", icon: <FaGithub size={24} /> },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" size={24} /> },
    { name: "Vercel", icon: <SiVercel size={24} /> },
    { name: "BOM/DOM", icon: <BsWindowStack size={24} /> },
    { name: "CI/CD", icon: <SiAzuredevops size={24} /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" size={24} /> },
    { name: "Security", icon: <FaShieldAlt className="text-[#4CAF50]" size={24} /> },
    { name: "Cloud Computing", icon: <FaCloud className="text-[#4285F4]" size={24} /> },
    { name: "Networking", icon: <BiNetworkChart size={24} /> },
    { name: "Bootstrap Studio", icon: <FaBootstrap className="text-[#7952B3]" size={24} /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in both frontend and backend development. 
            Here's an overview of my technical skills and expertise as a Full Stack Developer.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Core Skills with icons */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">Core Competencies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="font-medium text-center">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Other technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

