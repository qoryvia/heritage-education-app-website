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
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    alt: "Bright educational classroom with desks and learning materials",
    description:
      "An inviting learning environment designed around student development.",
  },
  {
    id: 2,
    title: "Learning Together",
    category: "Classrooms",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=85",
    alt: "Students participating in a collaborative learning session",
    description:
      "Learning experiences that encourage discussion and collaboration.",
  },
  {
    id: 3,
    title: "Curiosity and Discovery",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    alt: "Scientific equipment arranged in a laboratory",
    description:
      "Exploring scientific concepts through practical learning.",
  },
  {
    id: 4,
    title: "Creative Expression",
    category: "Arts & Culture",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
    alt: "Colourful art materials arranged for a creative activity",
    description:
      "Creative activities that encourage imagination and artistic expression.",
  },
  {
    id: 5,
    title: "Teamwork on the Field",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=85",
    alt: "Football being played on a green playing field",
    description:
      "Sporting activities that promote teamwork and active participation.",
  },
  {
    id: 6,
    title: "Music and Performance",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
    alt: "Live music performance with stage lighting",
    description:
      "Celebrating creativity through music and performing arts.",
  },
  {
    id: 7,
    title: "Learning Beyond the Classroom",
    category: "Student Life",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
    alt: "School-age children participating in an educational activity",
    description:
      "Experiences that complement academic learning and student growth.",
  },
  {
    id: 8,
    title: "A World of Books",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
    alt: "Bookshelves filled with books in a library",
    description:
      "Reading and exploration as part of a lifelong learning journey.",
  },
{
  id: 9,
  title: "Celebrating Achievements",
  category: "Events",
  image:
    "https://images.pexels.com/photos/7713343/pexels-photo-7713343.jpeg?auto=compress&cs=tinysrgb&w=1200",
  alt: "Students celebrating graduation and academic achievements",
  description:
    "Celebrating learning milestones, student accomplishments, and the joy of achievement.",
},
  {
    id: 10,
    title: "Exploring the Natural World",
    category: "Student Life",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
    alt: "Green hills and a scenic natural landscape",
    description:
      "Discovering the environment and appreciating the natural world.",
  },
  {
    id: 11,
    title: "The Joy of Making Art",
    category: "Arts & Culture",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=85",
    alt: "Colourful contemporary artwork displayed in an art gallery",
    description:
      "Artistic exploration through colour, composition, and creativity.",
  },
  {
    id: 12,
    title: "Learning Through Collaboration",
    category: "Classrooms",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
    alt: "Students learning and interacting in a school environment",
    description:
      "Shared learning experiences that encourage participation.",
  },
];