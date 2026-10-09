export type AcademicStageIcon =
  | "earlyYears"
  | "primary"
  | "middle"
  | "secondary"
  | "seniorSecondary";

export type LearningIcon =
  | "curiosity"
  | "practical"
  | "collaboration"
  | "development";

export interface AcademicStage {
  id: number;
  icon: AcademicStageIcon;
  title: string;
  level: string;
  description: string;
  focusAreas: string[];
}

export interface LearningPillar {
  id: number;
  icon: LearningIcon;
  title: string;
  description: string;
}

export const academicsHeroData = {
  eyebrow: "Learning at Heritage",
  title: "Academics That Inspire Growth",
  description:
    "Discover an educational environment that encourages curiosity, builds strong foundations, and helps students develop the knowledge, skills, and confidence to move forward in their learning journey.",
  buttonText: "Explore Academics",
  buttonHref: "#academic-stages",
};

export const academicStagesData: AcademicStage[] = [
  {
    id: 1,
    icon: "earlyYears",
    title: "Early Years",
    level: "Foundational Learning",
    description:
      "A supportive introduction to school life that encourages exploration, communication, creativity, and the development of early learning habits.",
    focusAreas: [
      "Language and communication",
      "Early numeracy",
      "Creative exploration",
      "Social interaction",
    ],
  },
  {
    id: 2,
    icon: "primary",
    title: "Primary Education",
    level: "Building Strong Foundations",
    description:
      "Learning experiences focused on strengthening essential academic skills while encouraging curiosity, participation, and a positive attitude towards learning.",
    focusAreas: [
      "Reading and writing",
      "Mathematical thinking",
      "Environmental awareness",
      "Creative activities",
    ],
  },
  {
    id: 3,
    icon: "middle",
    title: "Middle School",
    level: "Expanding Knowledge",
    description:
      "Opportunities to develop subject knowledge, practise independent thinking, ask questions, and connect classroom learning with real-world ideas.",
    focusAreas: [
      "Subject-based learning",
      "Critical thinking",
      "Research and projects",
      "Teamwork and communication",
    ],
  },
  {
    id: 4,
    icon: "secondary",
    title: "Secondary Education",
    level: "Developing Academic Confidence",
    description:
      "A learning experience that encourages deeper subject understanding, consistent study habits, analytical thinking, and preparation for future academic goals.",
    focusAreas: [
      "Conceptual understanding",
      "Problem-solving",
      "Study skills",
      "Assessment preparation",
    ],
  },
  {
    id: 5,
    icon: "seniorSecondary",
    title: "Senior Secondary",
    level: "Preparing for the Future",
    description:
      "A stage focused on developing greater academic independence, making informed educational choices, and preparing for further study and future opportunities.",
    focusAreas: [
      "Advanced subject learning",
      "Independent study",
      "Academic planning",
      "Career awareness",
    ],
  },
];

export const learningPillarsData: LearningPillar[] = [
  {
    id: 1,
    icon: "curiosity",
    title: "Curiosity and Exploration",
    description:
      "Encouraging students to ask questions, explore new ideas, and take an active interest in their learning.",
  },
  {
    id: 2,
    icon: "practical",
    title: "Learning by Doing",
    description:
      "Connecting concepts with activities, projects, demonstrations, and practical learning opportunities.",
  },
  {
    id: 3,
    icon: "collaboration",
    title: "Communication and Collaboration",
    description:
      "Developing the ability to share ideas, listen thoughtfully, participate in group activities, and work towards common goals.",
  },
  {
    id: 4,
    icon: "development",
    title: "Personal Development",
    description:
      "Supporting confidence, responsibility, perseverance, and the development of positive learning habits.",
  },
];

export const academicsCTAData = {
  eyebrow: "Your Child's Learning Journey",
  title: "Discover Learning at Heritage",
  description:
    "Connect with our school to learn more about academic programmes, available grade levels, and the learning environment at Heritage International Public School.",
  buttonText: "Contact Our School",
  buttonHref: "/contact",
};