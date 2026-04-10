import React, { useEffect, useRef, useState } from "react";

const Resume = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const contentRef = useRef(null);
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(false);
  const openModal = (text, title) => {
    setModalContent(text);
    setModalTitle(title);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  useEffect(() => {
    if (modalOpen) {
      const prevDocOverflow = document.documentElement.style.overflow;
      const prevBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prevDocOverflow || "";
        document.body.style.overflow = prevBodyOverflow || "";
      };
    }
  }, [modalOpen]);

  const updateFades = () => {
    const el = contentRef.current;
    if (!el) return;
    const atTop = el.scrollTop === 0;
    const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
    setShowTopFade(!atTop);
    setShowBottomFade(!atBottom);
  };

  useEffect(() => {
    if (modalOpen) {
      setTimeout(updateFades, 0);
    }
  }, [modalOpen]);
  return (
    <div id="resume" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-black sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-black block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-black font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      
      {/* First row - 3 cards */}
      <div className="first-row w-[100%] sm:w-full mt-5 flex flex-row flex-wrap gap-4 sm:gap-4 mx-auto justify-center">
        <div className="flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[90%] max-w-[420px] p-5 py-8 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-black rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Experience
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-black h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              {/* design */}
              <div
                role="button"
                tabIndex="0"
                onClick={() =>
                  openModal(
                    "Software Development Intern I — Oct 2024 – Apr 2025\n\nAs a software development intern at Autaza, I contributed across the stack with a strong focus on backend reliability and cloud infrastructure, building secure data flows and enabling production features.\n\nResponsibilities\n• Backend development with Django and PostgreSQL (business rules, data management)\n• Frontend development with React (dynamic, responsive interfaces)\n• Data pipelines: images via S3 → AI processing on EC2 → results stored in RDS\n• AWS infrastructure setup: EC2 instances and IAM access policies\n• End‑to‑end development with focus on cloud security and architecture\n\nCloud & DevOps\n• AWS (EC2, S3, RDS, IAM)\n\nKey Achievements\n• Effective full‑stack contributions with emphasis on backend reliability\n• Established secure cloud workflows for data processing at scale",
                    "Autaza - Software Development Intern I"
                  )
                }
                className="hoverable-card cursor-pointer flex flex-col gap-1 sm:gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg"
              >
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Professional Experience
                </h1>
                <span className="text-[.9rem] font-semibold text-black sm:text-base">
                  Autaza - Software Development Intern I
                </span>
                <span className="text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  October 2024 - April 2025
                </span>
                
                  <p className="text-[.9rem] text-justify break-words text-black line-clamp-3">
                    Full‑stack contributions with emphasis on backend using Django and PostgreSQL, plus frontend in React for dynamic, responsive interfaces.
                  </p>
                  <p className="text-[.9rem] text-justify break-words text-black mt-2 line-clamp-3">
                    Built data pipelines: images via S3, AI processing on EC2, and results stored in RDS. Managed AWS infrastructure (EC2, IAM) and worked end‑to‑end with a focus on cloud architecture and security.
                  </p>
                  <span className="text-[.9rem] text-black font-semibold">...</span>
                
              </div>
            </div>
          </fieldset>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[90%] max-w-[420px] p-5 py-8 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-black rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Experience
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-black h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              {/* design */}
              <div
                role="button"
                tabIndex="0"
                onClick={() =>
                  openModal(
                    "Software Development Intern III — May 2025 – Present\n\nIn May 2025, I was promoted to Intern III, expanding my scope to mobile‑oriented backend and infrastructure automation. I supported new mobile features with scalable APIs and improved delivery through automated pipelines.\n\nResponsibilities\n• Mobile backend support with Kotlin\n• Scalable API development using FastAPI (Python)\n• CI/CD automation for testing, builds, and deployments\n• Secure authentication and data flows\n\nCloud & DevOps\n• AWS (EC2, RDS, S3, Cognito)\n\nKey Achievements\n• Promotion to Intern III with ownership over mobile‑oriented backend services\n• Improved release reliability through automated pipelines and cloud integration",
                    "Autaza - Software Development Intern III"
                  )
                }
                className="hoverable-card cursor-pointer flex flex-col gap-1 sm:gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg"
              >
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Professional Experience
                </h1>
                <span className="text-[.9rem] font-semibold text-black sm:text-base">
                  Autaza - Software Development Intern III
                </span>
                <span className="text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  April 2025 - Present
                </span>
                  <p className="text-[.9rem] text-justify break-words text-black line-clamp-3">
                    Promoted to Intern III (May 2025) focusing on mobile backend support with Kotlin and scalable APIs using FastAPI.
                  </p>
                  <p className="text-[.9rem] text-justify break-words text-black mt-2 line-clamp-3">
                    Automated CI/CD pipelines and integrated AWS services (EC2, RDS, S3, Cognito) with secure authentication to deliver reliable, scalable app experiences.
                  </p>
                  <span className="text-[.9rem] text-black font-semibold">...</span>
                
              </div>
            </div>
          </fieldset>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[90%] max-w-[420px] p-5 py-8 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-black rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Experience
            </legend>
            <div className="relative">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-black h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              <div
                role="button"
                tabIndex="0"
                onClick={() =>
                  openModal(
                    "Promoted to Junior Software Developer after progressing from Intern N1 → N3, continuing on the same product with greater technical autonomy, feature ownership, and active involvement in architectural decisions. Work spans backend development and mobile integration, plus multi‑cloud infrastructure.\n\nResponsibilities\n• Backend development with Django and FastAPI (secure, scalable APIs)\n• Mobile feature support with Kotlin\n• Database modeling and administration (PostgreSQL)\n• Data processing and AI pipelines\n• CI/CD pipeline creation and maintenance\n• Production system analysis, optimization, and monitoring\n\nCloud & DevOps\n• AWS (EC2, S3, RDS, IAM, Cognito)\n• Google Cloud (Compute Engine, Cloud Storage, IAM)\n• Microsoft Azure (VMs, Storage, RBAC)\n• Infrastructure management, security, and deployment automation\n• Observability, logs, and scalability in production\n\nKey Achievements\n• Growth from intern to junior within the same product\n• Participation in architecture and backend services for the mobile app\n• Optimization of inference pipelines and cloud data flows\n• Support for computer‑vision AI applications in production",
                    "Autaza - Junior Software Developer"
                  )
                }
                className="hoverable-card cursor-pointer flex flex-col gap-1 sm:gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg"
              >
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Professional Experience
                </h1>
                <span className="text-[.9rem] font-semibold text-black sm:text-base">
                  Autaza - Junior Software Developer
                </span>
                <span className="text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  November 2025 - Present
                </span>
                <p className="text-[.9rem] text-justify break-words text-black line-clamp-3">
                  Promoted to Junior after progressing from Intern N1 → N3, working on the same product with increased technical autonomy, feature ownership, and involvement in architectural decisions. Backend in Django/FastAPI, mobile support in Kotlin, and PostgreSQL management.
                </p>
                <p className="text-[.9rem] text-justify break-words text-black mt-2 line-clamp-3">
                  Implement data and AI pipelines, maintain CI/CD, and optimize/monitor production systems. Multi‑cloud work across AWS, Google Cloud, and Azure focusing on security, observability, and scalability.
                </p>
                <span className="text-[.9rem] text-black font-semibold">...</span>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      {/* Second row - Education + About Me */}
      <div className="second-row w-[100%] sm:w-full mt-8 flex justify-center flex-row flex-wrap gap-2 sm:gap-2 mx-auto">
        <div className="flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[90%] max-w-[420px] p-5 py-8 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-black rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Education
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-black h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              {/* design */}
              <div
                role="button"
                tabIndex="0"
                onClick={() =>
                  openModal(
                    "I'm currently studying Software Development Multiplatform at FATEC - São José dos Campos. Exploring web, mobile, and desktop application development, along with APIs, microservices, databases, and cloud services. My tech journey started with a love for gaming and tinkering with Python since high school. Now, I'm honing skills in Java, JavaScript, and Python, as well as frameworks like React. I'm also learning cloud services like AWS. I'm excited to continue growing as a developer."
                  )
                }
                className="hoverable-card cursor-pointer flex flex-col gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg h-[240px]"
              >
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Development Multiplataform
                </h1>
                <span className="text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  FATEC - São José dos Campos, Brazil
                </span>
                <span className="text-[.9rem] font-semibold text-black sm:text-base">
                  Year 2023 - Year 2026
                </span>
                  <p className="text-[.9rem] text-justify text-black line-clamp-3">
                    I'm currently studying Software Development Multiplatform at FATEC - São José dos Campos. Exploring web, mobile, and desktop application development, along with APIs, microservices, databases, and cloud services. My tech journey started with a love for gaming and tinkering with Python since high school. Now, I'm honing skills in Java, JavaScript, and Python, as well as frameworks like React. I'm also learning cloud services like AWS. I'm excited to continue growing as a developer.
                  </p>
                  <span className="text-[.9rem] text-black font-semibold">...</span>
                
              </div>
            </div>
          </fieldset>
        </div>
        <div className="flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[90%] max-w-[420px] p-5 py-8 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-black rounded-3xl py-1 px-4 font-semibold text-xl text-black">
              About Me
            </legend>
            <div className="relative">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-black h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              <div
                role="button"
                tabIndex="0"
                onClick={() =>
                  openModal(
                    "Hello, my name is Filipe Colla, and I'm currently a dedicated software developer passionate about turning ideas into innovative solutions. I'm constantly seeking challenging opportunities to apply my experience and drive technological development. I have experience and adeptness in teamwork, as well as a keen interest in acquiring more knowledge in the field. I also enjoy playing games and have been programming bots in Python since I was young. I completed my high school education in 2022, and DSM was my first college experience."
                  )
                }
                className="hoverable-card cursor-pointer flex flex-col gap-1 sm:gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg h-[240px]"
              >
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">Filipe Colla</h1>
                <span className="text-[.9rem] font-semibold text-black sm:text-base"></span>
                <span className="text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  20 years old, currently living in São José dos Campos, Brazil.
                </span>
                  <p className="text-[.9rem] text-justify break-words text-black line-clamp-3">
                    Hello, my name is Filipe Colla, and I'm a dedicated software developer passionate about turning ideas into innovative solutions. I seek challenging opportunities to apply my experience and accelerate technological development, with strong teamwork and continuous learning.
                  </p>
                  <p className="text-[.9rem] text-justify break-words text-black mt-2 line-clamp-3">
                    I enjoy building tools and automation, and have been programming Python bots since early years. Currently, I’m deepening skills in system design, DevOps practices and modern backend architectures while exploring mobile and web ecosystems.
                  </p>
                  <span className="text-[.9rem] text-black font-semibold">...</span>
                
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      {modalOpen && (
        <div onClick={closeModal} onWheel={(e)=>e.preventDefault()} onTouchMove={(e)=>e.preventDefault()} className="fixed inset-0 bg-black/30 overscroll-none touch-none flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()} ref={contentRef} onScroll={updateFades} className="relative bg-white w-[95%] sm:w-[98%] max-w-[720px] rounded-lg border-2 border-black p-4 sm:p-6 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] max-h-[85vh] overflow-y-auto modal-scroll">
            <div className="flex items-center justify-between mb-3 pt-2 pb-2">
              <h2 className="text-lg sm:text-xl font-semibold text-black">{modalTitle || "Experience Details"}</h2>
              <button onClick={closeModal} className="px-3 py-1 border-2 border-black rounded-md font-semibold">Fechar</button>
            </div>
            <pre className="whitespace-pre-wrap break-words text-[.9rem] sm:text-[.95rem] text-black leading-relaxed mt-1">
              {modalContent}
            </pre>
            {showTopFade && (
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
            )}
            {showBottomFade && (
              <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
