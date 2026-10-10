import image1 from "../../../assets/images/gallery/1.jpg";
import image2 from "../../../assets/images/gallery/2.jpg";
import image3 from "../../../assets/images/gallery/3.jpg";
import image4 from "../../../assets/images/gallery/4.jpg";
import image5 from "../../../assets/images/gallery/5.jpg";
import image6 from "../../../assets/images/gallery/6.jpg";
import image7 from "../../../assets/images/gallery/7.jpg";
import image8 from "../../../assets/images/gallery/8.jpg";
import image9 from "../../../assets/images/gallery/9.jpg";
import image10 from "../../../assets/images/gallery/10.jpg";
import image11 from "../../../assets/images/gallery/11.jpg";
import image12 from "../../../assets/images/gallery/12.jpg";

export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "A Place to Learn and Grow",
    category: "Campus",
    image: image1.src,
    alt: "Bright educational classroom with desks and learning materials",
    description:
      "An inviting learning environment designed around student development.",
  },
  {
    id: 2,
    title: "Learning Together",
    category: "Classrooms",
    image: image2.src,
    alt: "Students participating in a collaborative learning session",
    description:
      "Learning experiences that encourage discussion and collaboration.",
  },
  {
    id: 3,
    title: "Curiosity and Discovery",
    category: "Academics",
    image: image3.src,
    alt: "Scientific equipment arranged in a laboratory",
    description: "Exploring scientific concepts through practical learning.",
  },
  {
    id: 4,
    title: "Creative Expression",
    category: "Arts & Culture",
    image: image4.src,
    alt: "Colourful art materials arranged for a creative activity",
    description:
      "Creative activities that encourage imagination and artistic expression.",
  },
  {
    id: 5,
    title: "Teamwork on the Field",
    category: "Sports",
    image: image5.src,
    alt: "Football being played on a green playing field",
    description:
      "Sporting activities that promote teamwork and active participation.",
  },
  {
    id: 6,
    title: "Music and Performance",
    category: "Events",
    image: image6.src,
    alt: "Live music performance with stage lighting",
    description: "Celebrating creativity through music and performing arts.",
  },
  {
    id: 7,
    title: "Learning Beyond the Classroom",
    category: "Student Life",
    image: image7.src,
    alt: "School-age children participating in an educational activity",
    description:
      "Experiences that complement academic learning and student growth.",
  },
  {
    id: 8,
    title: "A World of Books",
    category: "Academics",
    image: image8.src,
    alt: "Bookshelves filled with books in a library",
    description:
      "Reading and exploration as part of a lifelong learning journey.",
  },
  {
    id: 9,
    title: "Celebrating Achievements",
    category: "Events",
    image: image9.src,
    alt: "Students celebrating graduation and academic achievements",
    description:
      "Celebrating learning milestones, student accomplishments, and the joy of achievement.",
  },
  {
    id: 10,
    title: "Exploring the Natural World",
    category: "Student Life",
    image: image10.src,
    alt: "Green hills and a scenic natural landscape",
    description:
      "Discovering the environment and appreciating the natural world.",
  },
  {
    id: 11,
    title: "The Joy of Making Art",
    category: "Arts & Culture",
    image: image11.src,
    alt: "Colourful contemporary artwork displayed in an art gallery",
    description:
      "Artistic exploration through colour, composition, and creativity.",
  },
  {
    id: 12,
    title: "Learning Through Collaboration",
    category: "Classrooms",
    image: image12.src,
    alt: "Students learning and interacting in a school environment",
    description: "Shared learning experiences that encourage participation.",
  },
];
