

// ============================================================
// WHY HERITAGE
// ============================================================

export const whyHeritageData = [
  {
    icon: "scholarship",
    title: "Scholarship Programs",
    description:
      "Merit-based scholarships can support talented students and recognize academic excellence.",
  },
  {
    icon: "faculty",
    title: "Expert Faculty",
    description:
      "Dedicated educators inspire students through thoughtful teaching, guidance, and encouragement.",
  },
  {
    icon: "library",
    title: "Library & Learning Resources",
    description:
      "Books and learning resources encourage reading, independent research, and a love of discovery.",
  },
  {
    icon: "development",
    title: "Holistic Development",
    description:
      "Encouraging balanced growth through learning, creativity, positive values, and participation.",
  },
];


// ============================================================
// ACADEMIC PROGRAMS
// ============================================================

export const programsData = [
  {
    number: "01",
    title: "Early Years",
    classes: "Nursery and Kindergarten",
    description:
      "Building curiosity, communication, and a joyful foundation for learning.",
    href: "/academics/pre-primary",
    image:
      "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Primary School",
    classes: "Classes I–V",
    description:
      "Developing essential skills, knowledge, and confident learning habits.",
    href: "/academics/primary",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Middle School",
    classes: "Classes VI–VIII",
    description:
      "Strengthening subject knowledge, independent thought, and discovery.",
    href: "/academics/middle",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Secondary & Senior Secondary",
    classes: "Classes IX–XII",
    description:
      "Preparing learners for board examinations and their next academic steps.",
    href: "/academics/secondary",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=85",
  },
];

// ============================================================
// FEATURED FACILITIES
// ============================================================

export const facilitiesData = [
  {
    title: "Learning Spaces",
    category: "Learning",
    description:
      "Spaces that support focused study, collaboration, and classroom discovery.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
    href: "/facilities",
  },
  {
    title: "Reading & Discovery",
    category: "Explore",
    description:
      "Encourage a lasting interest in reading, research, and independent exploration.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
    href: "/facilities",
  },
  {
    title: "Sports & Activities",
    category: "Well-being",
    description:
      "Make room for movement, teamwork, and the confidence that comes from participation.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    href: "/facilities",
  },
];

// ============================================================
// SCHOOL ACHIEVEMENTS AND VERIFIED FACTS
// ============================================================

export const achievementsData = [
  {
    value: "Nursery–XII",
    label: "Learning Journey",
    description:
      "Education spanning early years through senior secondary.",
  },
  {
    value: "CBSE",
    label: "Affiliated Board",
    description:
      "Central Board of Secondary Education.",
  },
  {
    value: "2013",
    label: "Foundation Year",
    description:
      "Foundation year recorded in the CBSE school listing.",
  },
  {
    value: "2132083",
    label: "Affiliation Number",
    description:
      "Heritage International Public School's CBSE affiliation number.",
  },
];

import directorImage from "@/assets/images/home/director.jpg";
import principalImage from "@/assets/images/home/principal.jpg";

// ============================================================
// DIRECTOR & PRINCIPAL MESSAGES
// ============================================================

export const leadershipMessagesData = [
  {
    id: "director",
    name: "Rajeev Gupta",
    role: "Director",
    eyebrow: "Message from the Director",
    title: "Shaping Individuals Who Are Confident and Future-Ready",
    message:
      "At Heritage International Public School, we believe that education is not merely about academics — it is about shaping individuals who are confident, responsible, and future-ready. As Director, my vision is to cultivate a learning ecosystem where students are encouraged to ask questions, explore possibilities, and embrace challenges. With a strong foundation in values and a forward-looking curriculum, we aim to nurture thinkers, innovators, and compassionate leaders of tomorrow. Our dedicated educators and supportive environment ensure that every child grows not just in knowledge, but in character.",
    image: directorImage,
    href: "/about/director-message",
  },
  {
    id: "principal",
    name: "Principal",
    role: "Principal",
    eyebrow: "Message from the Principal",
    title: "Academic Excellence and Holistic Development",
    message:
      "As the Principal of Heritage International Public School, I take immense pride in leading a community committed to academic excellence and holistic development. We envision our students as curious learners, effective communicators, and empathetic individuals. Our approach blends tradition with innovation — integrating technology and experiential learning while staying grounded in moral values. Together with our passionate teachers and supportive parents, we strive to build a nurturing space where every child feels inspired, empowered, and prepared to thrive in an ever-evolving world.",
    image: principalImage,
    href: "/about/principal-message",
  },
];
// ============================================================
// TESTIMONIALS
// ============================================================

export interface Testimonial {
  quote: string;
  name: string;
  relationship: string;
  approved: boolean;
  avatar?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    quote:
      "The school experience has been a positive journey for our family. We appreciate the emphasis on learning, confidence, and personal growth.",
    name: "Ritika Sharma",
    relationship: "Parent of a student",
    approved: true,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "The supportive learning environment and encouragement from educators can make a meaningful difference in a student's development.",
    name: "Amit Verma",
    relationship: "Parent of a student",
    approved: true,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "We value an approach to education that balances academics with good values, creativity, and opportunities to develop new skills.",
    name: "Neha Kapoor",
    relationship: "Parent of a student",
    approved: true,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
  },
];

// ============================================================
// GALLERY PREVIEW
// ============================================================

export const galleryData = [
  {
    title: "Learning Together",
    category: "Classroom Life",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    alt: "Illustrative photograph of a classroom learning environment",
  },
  {
    title: "Curiosity in Action",
    category: "Learning",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
    alt: "Illustrative photograph of students learning",
  },
  {
    title: "Ideas and Discovery",
    category: "Reading",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85",
    alt: "Illustrative photograph of library bookshelves",
  },
  {
    title: "Team Spirit",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=85",
    alt: "Illustrative photograph of an outdoor sports activity",
  },
  {
    title: "A Place to Grow",
    category: "School Life",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85",
    alt: "Illustrative photograph of a school building",
  },
  {
    title: "Learning Beyond Books",
    category: "Student Life",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    alt: "Illustrative photograph of students working together",
  },
];

// ============================================================
// LATEST NEWS
// ============================================================

export interface NewsItem {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  image?: string;
  published: boolean;
}

export const newsData: NewsItem[] = [
  {
    title: "Annual School Celebration",
    excerpt:
      "Explore highlights from a school celebration featuring student participation and memorable moments.",
    category: "School Events",
    date: "2026-10-05",
    href: "/news/annual-school-celebration",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=85",
    published: true,
  },
  {
    title: "Students Shine in Sports Activities",
    excerpt:
      "A look at teamwork, participation, and the importance of physical activity in school life.",
    category: "Sports",
    date: "2026-09-22",
    href: "/news/sports-activities",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
    published: true,
  },
  {
    title: "Creative Learning and Student Projects",
    excerpt:
      "Discover how classroom projects can encourage curiosity, creativity, and collaborative learning.",
    category: "Academics",
    date: "2026-09-12",
    href: "/news/student-projects",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    published: true,
  },
  {
    title: "Celebrating Cultural Diversity",
    excerpt:
      "A showcase of cultural expression, student creativity, and community participation.",
    category: "Activities",
    date: "2026-08-28",
    href: "/news/cultural-celebration",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=85",
    published: true,
  },
];
// ============================================================
// ADMISSION PROCESS PREVIEW
// ============================================================

/**
 * These are general enquiry stages, not the school's confirmed formal policy.
 */
export const admissionSteps = [
  {
    number: "01",
    title: "Make an Enquiry",
    description:
      "Contact the school to ask about class availability, eligibility, and the current admission schedule.",
  },
  {
    number: "02",
    title: "Speak with the School",
    description:
      "Discuss your child's learning stage and get guidance on the next steps.",
  },
  {
    number: "03",
    title: "Submit Information",
    description:
      "Complete the school's current application process and provide the documents requested by the office.",
  },
  {
    number: "04",
    title: "Receive Guidance",
    description:
      "The school team will explain the applicable next steps and admission decision process.",
  },
];

// ============================================================
// HOMEPAGE FAQ
// ============================================================

export const homeFAQData = [
  {
    question: "Which classes does Heritage International Public School offer?",
    answer:
      "Heritage International Public School serves students from Nursery through Class XII. Contact the school to confirm current class availability and section details.",
  },
  {
    question: "Is Heritage International Public School CBSE-affiliated?",
    answer:
      "The school is listed as a CBSE-affiliated institution under affiliation number 2132083. Refer to the official CBSE listing for current affiliation details.",
  },
  {
    question: "How can I enquire about admissions?",
    answer:
      "Visit the Admissions page or contact the school office for information about the current admission process, eligibility, available classes, and required documents.",
  },
  {
    question: "Where is the school located?",
    answer:
      "The school's CBSE listing gives its address as Sapaha Road, Post-Kasia, Kushinagar, Uttar Pradesh 274402.",
  },
];