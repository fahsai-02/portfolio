/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface ProjectItem {
  title: string;
  date: string;
  description: string;
  tags: string[];
  linkUrl: string;
}

export interface InterestTimelineItem {
  title: string;
  year: string;
}

export interface LanguageData {
  nav: {
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    bio: string;
    stats: StatItem[];
    ctaViewWork: string;
    ctaDownloadCv: string;
  };
  skills: {
    title: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  education: {
    title: string;
    description: string;
  };
  interests: {
    title: string;
    subtitle: string;
    timeline: InterestTimelineItem[];
  };
  footer: {
    personalInfoTitle: string;
    description: string;
    columns: {
      title: string;
      links: string[];
    }[];
  };
}

export interface PortfolioConfig {
  en: LanguageData;
  th: LanguageData;
}

export const portfolioData: PortfolioConfig = {
  th: {
    nav: {
      skills: "ทักษะ",
      projects: "โปรเจกต์",
      contact: "คุยกันเถอะ",
    },
    hero: {
      name: "Nakagamon Saengdara",
      title: "I'm Fahsai, a Computer Engineering Student",
      bio: "Web page นี้เก็บข้อมูลประวัติการศึกษา และโปรเจคของดิฉันที่ใช้สำหรับฝึกฝน Skill เพิ่มเติมจากมหาวิทยาลัย",
      stats: [
        { value: "3", label: "โปรเจกต์" },
        { value: "3.7", label: "เกรดเฉลี่ย (GPA)" },
        { value: "0", label: "แฮกกาธอน" },
      ],
      ctaViewWork: "ดูผลงานของฉัน",
      ctaDownloadCv: "ดาวน์โหลด CV",
    },
    skills: {
      title: "My Skills",
      subtitle: "นี่คือทักษะต่างๆ ที่ฉันได้เรียนรู้และฝึกฝนในระหว่างการเรียนและการพัฒนาโปรเจกต์ต่างๆ เพื่อเสริมสร้างความรู้ของตนเอง",
      groups: [
        {
          category: "พัฒนาเว็บแอปพลิเคชัน (Web Development)",
          items: [
            { name: "Next.js" },
            { name: "React" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Node.js" },
          ],
        },
        {
          category: "ฐานข้อมูลและเครื่องมือพัฒนา (Database & Tools)",
          items: [
            { name: "Firebase" },
            { name: "MongoDB" },
            { name: "Git & GitHub" },
            { name: "Docker" },
          ],
        },
      ],
    },
    projects: {
      title: "My Projects",
      subtitle: "นี่คือโปรเจกต์บางส่วนที่ฉันได้ทำในช่วงชีวิตในรั้วมหาวิทยาลัย แต่ละโปรเจกต์ช่วยสอนแง่มุมใหม่ๆ ในการทำงานให้ฉันเสมอ",
      items: [
        {
          title: "Meow Eat",
          date: "3 มิ.ย. - 20 มิ.ย.",
          description: "เว็บจดบันทึกรายการอาหารที่ทานในแต่ละวัน โดยสามารถดูบันทึกแต่ละวัน ค่าอาหารเฉลี่ย และประมวลผลแคลอรีต่อวันของคุณได้",
          tags: ["Next.js", "TypeScript", "Tailwind CSS"],
          linkUrl: "https://meoweat.com",
        },
        {
          title: "Meow Eat (v2 Pro)",
          date: "1 ก.ค. - 30 ก.ค.",
          description: "เวอร์ชันอัปเกรดของเว็บจดบันทึกรายการอาหาร ที่เพิ่มระบบแนะนำเมนูอัจฉริยะด้วยเทคโนโลยีปัญญาประดิษฐ์ พร้อมฟีเจอร์คำนวณสารอาหารโดยละเอียด",
          tags: ["React", "Node.js", "MongoDB"],
          linkUrl: "https://meoweat.com",
        },
      ],
    },
    education: {
      title: "Education",
      description: "ย่อหน้าสั้นๆ เพื่อแนะนำว่าคุณทำอะไร คุณเป็นใคร มาจากไหน และทำไมคุณถึงสร้างเว็บไซต์นี้ขึ้นมา นี่เป็นส่วนที่ผู้เยี่ยมชมเว็บไซต์มีแนวโน้มจะอ่านครบถ้วนมากที่สุด ปัจจุบันกำลังศึกษาปริญญาตรีภาควิชาวิศวกรรมคอมพิวเตอร์ มุ่งเน้นการประยุกต์ใช้ซอฟต์แวร์สมัยใหม่และการสร้างแพลตฟอร์มที่เป็นมิตรต่อผู้ใช้งาน",
    },
    interests: {
      title: "Interests and hobbies",
      subtitle: "ส่วนสั้นๆ เพื่อเติมเต็มความเป็นตัวตนด้านอื่นๆ นอกเหนือจากเรื่องการเรียนและการทำโปรเจกต์ ใครคือผู้อยู่เบื้องหลังอย่างแท้จริง? พวกเขาชอบอะไรและมีบุคลิกอย่างไร? ส่วนแบบนี้สามารถมีเนื้อหาลึกขึ้นเพื่อแสดงตัวตนและสิ่งที่ขับเคลื่อนชีวิตได้เป็นอย่างดี",
      timeline: [
        { title: "Agency name", year: "2025" },
        { title: "Studio name", year: "2024" },
        { title: "Company name", year: "2023" },
      ],
    },
    footer: {
      personalInfoTitle: "Personal Information",
      description: "บรรยายสรุปสั้นๆ เกี่ยวกับเป้าหมาย ความสามารถ และแนวทางการทำงาน เพื่อให้เข้าใจทิศทางบริการและจิตวิญญาณการทำงานของคุณ",
      columns: [
        {
          title: "Contact me",
          links: ["Core features", "Pro experience", "Integrations"],
        },
        {
          title: "Learn more",
          links: ["Blog", "Case studies", "Customer stories", "Best practices"],
        },
        {
          title: "Support",
          links: ["Contact", "Support", "Legal"],
        },
      ],
    },
  },
  en: {
    nav: {
      skills: "Skills",
      projects: "Projects",
      contact: "Let's Talk",
    },
    hero: {
      name: "Nakagamon Saengdara",
      title: "I'm Fahsai, a Computer Engineering Student",
      bio: "This web page stores my education history and my projects used for practicing additional skills from university.",
      stats: [
        { value: "3", label: "Projects" },
        { value: "3.7", label: "GPA" },
        { value: "0", label: "Hackathons" },
      ],
      ctaViewWork: "View My Work",
      ctaDownloadCv: "Download CV",
    },
    skills: {
      title: "My Skills",
      subtitle: "Here are some of the skills I've worked on during my university years. Each one taught me something new and pushed me forward.",
      groups: [
        {
          category: "Web Development",
          items: [
            { name: "Next.js" },
            { name: "React" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Node.js" },
          ],
        },
        {
          category: "Database & Tools",
          items: [
            { name: "Firebase" },
            { name: "MongoDB" },
            { name: "Git & GitHub" },
            { name: "Docker" },
          ],
        },
      ],
    },
    projects: {
      title: "My Projects",
      subtitle: "Here are some of the projects I've worked on during my university years. Each one taught me something new.",
      items: [
        {
          title: "Meow Eat",
          date: "3 Jun - 20 Jun",
          description: "A daily food journal tracking app where users record eaten dishes, review daily records, and track average meal expenses easily.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS"],
          linkUrl: "https://meoweat.com",
        },
        {
          title: "Meow Eat (v2 Pro)",
          date: "1 Jul - 30 Jul",
          description: "An upgraded iteration of the meal logger utilizing AI elements to deliver customized meal forecasts, deep user records, and dynamic summaries.",
          tags: ["React", "Node.js", "MongoDB"],
          linkUrl: "https://meoweat.com",
        },
      ],
    },
    education: {
      title: "Education",
      description: "A little paragraph introduction that gives a sense of what you do, who you are, where you're from, and why you created this website. This is the most likely part of the page to be read in full. Currently pursuing a Bachelor of Engineering in Computer Science, discovering dynamic visual designs and fullstack programming interfaces.",
    },
    interests: {
      title: "Interests and hobbies",
      subtitle: "A little section to round out the professional purpose of this webpage. Who's the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it's nice to learn more about what makes someone tick.",
      timeline: [
        { title: "Agency name", year: "2025" },
        { title: "Studio name", year: "2024" },
        { title: "Company name", year: "2023" },
      ],
    },
    footer: {
      personalInfoTitle: "Personal Information",
      description: "Descriptive line about what your company does and how we create incredible visual experiences.",
      columns: [
        {
          title: "Contact me",
          links: ["Core features", "Pro experience", "Integrations"],
        },
        {
          title: "Learn more",
          links: ["Blog", "Case studies", "Customer stories", "Best practices"],
        },
        {
          title: "Support",
          links: ["Contact", "Support", "Legal"],
        },
      ],
    },
  },
};
