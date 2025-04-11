"use client"

import React, { useState } from 'react'
import Card from './Card'

const CardsPage = () =>
{
  const [switchScreen, setSwitchScreen] = useState<boolean>(false);

  const handleSwitch = () =>
  {
    setSwitchScreen(!switchScreen);
  }

  const jobsArr =
  [
   {
    jobName: "Web Developer Codestack Office of the Superintendent",
    jobDescription: "Meet with customers, Project Lead, and/or development team to gather requirements and provide input/suggestions for new project functionality. Develop web applications utilizing current departmental programming techniques and standards. Design normalized databases with proper naming convention standards or field names and types. Test, debug, demonstrate, and train staff and/or customers on web applications. Document and comment in application code and in database stored procedures and functions. Communicate daily with the development team and Project Lead regarding status and timeline of assigned web development workload. Ability to work outside of normal work days and office hours to meet installation deadlines. Schedule, coordinate and review work with development team and Project Lead. Report under the Project Lead. Performs other related duties as assigned.",
    jobRequirements: "Ability to work well independently, and as a team member. Possess a strong and demonstrable commitment to customer satisfaction. Ability to work well with staff, school personnel, students, outside agencies, and customers. Ability to communicate verbally and in writing. Expertise in HTML, HTML5 JavaScript, CSS, jQuery, AJAX, JSON, Web API, and Bootstrap. Experience with Backbone.js is desirable. Understanding of object-oriented programming. Proficiency in C#, Model View Controller (MVC) architecture, Razor, Dependency Injection, and Visual Studio. Proficiency in Microsoft SQL Server and Transact-SQL. Knowledge of the rules of database normalization. Ability to design a well-structured relational database multiple related tables. Ability to write, insert, update, and delete statements as well as stored procedures, functions, and complex queries that join several tables. Knowledge of database indexes as well as experience in using indexes to increase query performance.",
    skillsNeeded: "I need to learn MVC, jQuery, HTML5, TransactSQL, AJAX, Razor, Transact-SQL, and Backbone.js",
    hyperlink: "https://edjoinprodstoragewest.blob.core.windows.net/jobdescriptions/699/Web%20Developer%20CodeStack%202409-20210414105846.pdf",
    whyWorkThere: "I find the individuals at codestack to be extremely supportive and around them I feel more motivated than ive been in any work setting",
    whatToAchieve: "At Codestack my hope would be to find a position im truly passionate for, and challenge myself to learn and create more than I have so far, with a hope for a permanent position over time"
   },
   {
    jobName: "Junior Software Developer - Embrace Education (Remote - Hybrid)",
    jobDescription: "Embrace is looking for a Junior Software Developer to join their software development team. In this role, you will collaborate with other developers to maintain and expand their web application. Part of these responsibilities include writing and debugging code, so we are looking for applicants familiar with PHP, JavaScript, HTML, and CSS. You must have excellent problem solving skills, be self-motivated, and flexible. This position offers the ability to learn from senior members of the team and advance your career with a growing company.",
    jobRequirements: "1+ years experience writing code in PHP, JavaScript, HTML, and CSS, 1+ years experience using SQL to update and retrieve data, Excellent online communication skills, Able to work independently, as part of a team, or under direction of management",
    skillsNeeded: "I would need to learn PHP and better work on my online communication skills",
    hyperlink: "https://www.ziprecruiter.com/ojob/embrace-education/junior-software-developer?lvk=BuTpDBCmrYSnqwOF5CVOJw.--NktZtUuOg&zrclid=958b0536-db4f-44e6-a5df-33273260d3c2",
    whyWorkThere: "It would be a good starting point",
    whatToAchieve: "I would want to overall improve my skills as a developer and as a person"
   },
   {
    jobName: "Jr. Software Engineer, Node and Angular - Saviance Technologies (Remote)",
    jobDescription: "As a Jr. Engineer, you will be responsible for helping to build and maintain the technology that powers their offering. This role is for someone excited about the early stage and passionate about solving real health challenges with Generative AI technology. This role reports to the Lead Engineer.",
    jobRequirements: "2+ years of software development experience building mobile + web applications, with a minimum of one year of experience in a 0-1 product environment, 1+ years of experience building healthcare patient & provider workflow products, robust experience with EMR/EHR integrations, Familiarity with AI technologies to advance application development and outcomes, experience applying AI in a healthcare setting, Understanding of relational databases, data modeling, and data management tools such as SQL and/or Postgres, Experience working with external Engineering teams",
    skillsNeeded: "I need to finish this current year and one more year of development, one year in product development, one year building healthcare workflow products, experience with EMR/EHR integrations,familiarity with AI and how to apply it in a healthcare setting, experience working with external Engineering teams",
    hyperlink: "https://www.ziprecruiter.com/jobs/saviance-technologies-c120f01e/jr-software-engineer-node-and-angular-fc1bf209?zrclid=3423e34b-a6b2-4693-92b2-a8048059034a&lvk=gW2G6xXEjNPNqnGHYWehWw.--NkBMlsbFg",
    whyWorkThere: "It seems like a difficult place with lots of chances for learning",
    whatToAchieve: "Better my skills and widen my skillset"
   },
   {
    jobName: "Junior Software Engineer, Cosmos Hub - Interchain Labs (Remote)",
    jobDescription: "Looking for a Junior Software Engineer to help build and maintain the core components of the Cosmos Hub. This is an opportunity to work on open-source infrastructure that supports one of the world's most widely adopted blockchain ecosystems. The ideal candidate is curious, eager to learn, and committed to writing clear and maintainable code. They care about decentralization and trust minimization and believe that good software design and thorough testing accelerate development rather than slow it down. They thrive in a collaborative, public development environment and are excited about contributing to an open-source community.",
    jobRequirements: "Software engineering experience (academic, professional, or open-source). Proficiency in Go or a similar programming language. Strong problem-solving skills and ability to work in a collaborative environment. Interest in blockchain technology and the Cosmos ecosystem. Time zone requirement: Must be within NYC ± 3 hours for effective collaboration.",
    skillsNeeded: "Need experience with Go, need to learn more about blockchain to hopefully find an interest in it",
    hyperlink: "https://www.ziprecruiter.com/ojob/interchain-labs/junior-software-engineer-cosmos-hub?lvk=umylNE6J_0au5bfrYphH_Q.--NlPXLchtc&zrclid=2cd0f9d1-6fa4-472f-9bf1-6f03ba825a39",
    whyWorkThere: "Benefits dont look bad, and I could learn new skills",
    whatToAchieve: "Learn what skills I can"
   },
   {
    jobName: "Software Engineer, Full Stack - Zip Recruiting (Hybrid)",
    jobDescription: "Looking for engineers who know how to write evolvable, properly instrumented, and efficient code as part of a growing distributed system. They are working on mobile-first web applications and need people who can build fast and intuitive experiences.",
    jobRequirements: "2+ years of experience in full stack software development Comprehensive computer science fundamentals in coding, object-oriented programming, data structures, and algorithms Experience in client side development using ReactJS, Javascript, AngularJS, or other modern programming language Experience building and developing large-scale user facing web applications",
    skillsNeeded: "Need additional year of experience, need to learn AngularJS",
    hyperlink: "https://www.ziprecruiter.com/jobs/ziprecruiter-a231a1f4/software-engineer-full-stack-337930b7?zrclid=f715023b-05d4-499c-839a-65fae3bc0093&lvk=hwgl32RTP2J7yXQ1o5EmTw.--Nlj61mNa7",
    whyWorkThere: "Chance to better develop my frontend or backend capabilities, and better my teamwork skills",
    whatToAchieve: "Come out with improved web development skills and teamwork skills"
   },
  ]

  return (
    <>
      <div className="hidden">
        &quot;&apos;Hello&apos;&quot;
      </div>

      <div>
        <button onClick={handleSwitch} className={`flex flex-col items-center justify-center w-full h-[100vh] text-white ${switchScreen ? "hidden" : ""}`}>
          <h1 className="text-7xl pb-[100px] text-shadow-blue-800 text-shadow-[0px_0px_50px_rgba(0,0,0,0.6)]">Jobs that Interest you</h1>
          <p className="text-4xl opacity-[60%] text-shadow-white text-shadow-[0px_0px_30px_rgba(0,0,0,0.6)]">Click Anywhere to Continue</p>
        </button>
      </div>

      <div className={`flex justify-around py-[40px] ${switchScreen ? "" : "hidden"}`}>
        <div className="grid grid-cols-2 gap-[30px]">
            {
                jobsArr.map((job, index) => (
                <Card
                    key={index}
                    jobNameText={job.jobName}
                    jobDescriptionText={job.jobDescription}
                    jobRequirementsText={job.jobRequirements}
                    skillsNeededText={job.skillsNeeded}
                    hyperlinkText={job.hyperlink}
                    whyWorkThereText={job.whyWorkThere}
                    whatToAchieveText={job.whatToAchieve}
                />
                ))
            }
        </div>
      </div>
    </>
  )
}

export default CardsPage