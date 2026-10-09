export type FacilityIcon =
  | "classroom"
  | "science"
  | "computer"
  | "library"
  | "sports"
  | "transport"
  | "canteen"
  | "medical"
  | "activities"
  | "security";

export interface SchoolFacility {
  id: number;
  icon: FacilityIcon;
  title: string;
  description: string;
}

export const facilitiesHeroData = {
  eyebrow: "A Better Learning Environment",
  title: "Our School Facilities",
  description:
    "At Heritage International Public School, we strive to provide a supportive learning environment with facilities that encourage academic growth, creativity, physical well-being, and student safety.",
};

export const facilitiesData: SchoolFacility[] = [
  {
    id: 1,
    icon: "classroom",
    title: "Smart Classrooms",
    description:
      "Digital interactive boards and multimedia learning tools for enhancing student learning.",
  },
  {
    id: 2,
    icon: "science",
    title: "Science Laboratories",
    description:
      "Well-equipped Physics, Chemistry, and Biology laboratories for hands-on experiments.",
  },
  {
    id: 3,
    icon: "computer",
    title: "Computer Lab",
    description:
      "High-speed systems with modern software to develop strong computer literacy skills.",
  },
  {
    id: 4,
    icon: "library",
    title: "Library",
    description:
      "A vast collection of academic books, references, journals, and e-learning resources.",
  },
  {
    id: 5,
    icon: "sports",
    title: "Sports Facilities",
    description:
      "Indoor and outdoor sports facilities including football, cricket, badminton, and athletics.",
  },
  {
    id: 6,
    icon: "transport",
    title: "Transport",
    description:
      "Safe, GPS-enabled school buses with trained drivers covering major routes.",
  },
  {
    id: 7,
    icon: "canteen",
    title: "Healthy Canteen",
    description:
      "Hygienic canteen serving nutritious meals and snacks for students and staff.",
  },
  {
    id: 8,
    icon: "medical",
    title: "Medical Room",
    description:
      "First-aid and emergency medical support with a trained nurse available on campus.",
  },
  {
    id: 9,
    icon: "activities",
    title: "Activity Room",
    description:
      "Dedicated space for music, art, dance, drama, and extracurricular activities.",
  },
  {
    id: 10,
    icon: "security",
    title: "CCTV Surveillance",
    description:
      "Entire campus covered with high-security CCTV cameras for student safety.",
  },
];

export const facilitiesCTAData = {
  eyebrow: "Discover Heritage",
  title: "See What Makes Our School Special",
  description:
    "Have questions about our facilities or the school environment? Contact our team to learn more about Heritage International Public School.",
  buttonText: "Contact Our School",
  buttonHref: "/contact",
};