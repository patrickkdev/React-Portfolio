import React from 'react'

interface Skill {
  name: string
  icon: string
}

const skills = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'Javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'Golang',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Flask',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
  },
  {
    name: 'Node',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Electron',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg'
  },
  {
    name: 'Github',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
]

const SkilLDisplay = () => {
  return (
    <div>
      <div className="skill-display">
        {
          skills.map((skill: Skill) => {
            return (
              <div key={skill.name} className="skill-display__item">
                <div className="skill-display__item__container">
                  <img src={skill.icon} alt="item_icon" className="skill-display__item__icon"/>
                  <p className="skill-display__item__name">{skill.name}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SkilLDisplay