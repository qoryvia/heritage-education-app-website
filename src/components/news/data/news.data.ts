export type EventType = "upcoming" | "past";

export type EventCategory =
  | "Arts & Culture"
  | "Music"
  | "Science & Innovation"
  | "Sports"
  | "Environment"
  | "Literature";

export interface SchoolEvent {
  id: number;
  slug: string;
  eventType: EventType;
  category: EventCategory;

  // Basic information
  title: string;
  excerpt: string;
  description: string;

  // Date and time
  day: string;
  month: string;
  year: string;
  startDate: string;
  startTime: string;
  endDate?: string;
  endTime?: string;

  // Location
  venue: string;
  address: string;

  // Images
  image: string;
  imageAlt: string;
  galleryImages: string[];

  // Detail page content
  highlights: string[];
  organizer: string;
  tags: string[];

  // Registration
  registration: {
    enabled: boolean;
    label: string;
    email: string;
    deadline?: string;
  };

  // SEO
  seoTitle: string;
  seoDescription: string;
}

export const newsHeroData = {
  eyebrow: "Life at Heritage",
  title: "Events",
  description:
    "Discover the activities, experiences, and celebrations that bring learning to life at Heritage International Public School. From creative exhibitions and cultural performances to scientific exploration and sporting competitions, explore events that encourage students to develop their interests, share their talents, and learn beyond the classroom.",
};

const schoolAddress = "Sapaha Road, Kasia, Kushinagar";
const schoolEmail = "hipskasia13@gmail.com";

export const eventsData: SchoolEvent[] = [
  // =====================================================
  // UPCOMING EVENTS
  // =====================================================
  {
    id: 1,
    slug: "student-art-exhibition",
    eventType: "upcoming",
    category: "Arts & Culture",

    title:
      "Student Art Exhibition and Creative Showcase: Celebrating Imagination, Creativity and Artistic Expression",

    excerpt:
      "Explore an inspiring collection of student artwork, paintings, crafts, and creative projects that showcase imagination, originality, and the many ways students express their ideas through visual arts.",

    description: `
      <p>The <strong>Student Art Exhibition and Creative Showcase</strong> celebrates imagination, originality, and the creative potential of students at Heritage International Public School. Through visual arts and hands-on creative activities, students can explore ideas, experiment with materials, and communicate their thoughts in distinctive ways.</p>

      <p>The exhibition brings together a variety of artistic work, including drawings, paintings, handmade crafts, illustrations, and other creative projects. Each piece provides an opportunity for students to share their perspectives, develop confidence in their abilities, and appreciate the different ways people express themselves through art.</p>

      <h2>Celebrating Student Creativity</h2>

      <p>Artistic activities encourage students to observe the world more closely, experiment with colours and forms, and translate ideas into visual expressions. Preparing work for an exhibition can also help students practise patience, planning, attention to detail, and the ability to develop an idea from an initial concept into a finished piece.</p>

      <p>The showcase provides a setting where students can appreciate one another's work, exchange ideas, and recognise the value of creativity as part of a balanced educational experience. It also gives families and visitors an opportunity to explore the artistic interests and efforts represented in the student displays.</p>

      <h2>What to Explore</h2>

      <ul>
        <li><strong>Paintings and drawings:</strong> Creative artwork exploring colours, shapes, observations, and imagination.</li>
        <li><strong>Craft projects:</strong> Handmade creations that demonstrate planning, patience, and practical artistic skills.</li>
        <li><strong>Visual storytelling:</strong> Illustrations and compositions through which students communicate ideas and experiences.</li>
        <li><strong>Creative exploration:</strong> Different materials, artistic approaches, and individual ways of expressing an idea.</li>
      </ul>

      <h2>Learning Through Art</h2>

      <p>Creative learning provides opportunities to strengthen observation, communication, independent thinking, and problem-solving. Students can learn to make artistic decisions, reflect on their work, and respond constructively to the ideas of others.</p>

      <p>The Student Art Exhibition is intended to celebrate participation and creative development, giving student work a place to be appreciated within the wider school community.</p>

      <p><strong>Visitors:</strong> Please contact the school to confirm the exhibition schedule and any visitor arrangements before planning a visit.</p>
    `,

    day: "05",
    month: "Nov",
    year: "2026",
    startDate: "2026-11-05",
    startTime: "10:00 AM",
    endDate: "2026-11-05",
    endTime: "02:00 PM",

    venue: "School Campus",
    address: schoolAddress,

    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Art materials and colourful artwork arranged for a creative exhibition",

    galleryImages: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=85",
    ],

    highlights: [
      "Student paintings, drawings, and original artwork",
      "Creative craft projects and visual displays",
      "Opportunities to appreciate student talent",
      "Artistic experimentation and self-expression",
      "Creative learning and collaboration",
    ],

    organizer: "Heritage International Public School",

    tags: [
      "Student Art",
      "Creative Learning",
      "Arts and Culture",
      "Student Activities",
      "School Exhibition",
    ],

    registration: {
      enabled: true,
      label: "Register Interest",
      email: schoolEmail,
    },

    seoTitle:
      "Student Art Exhibition and Creative Showcase | Heritage International Public School",

    seoDescription:
      "Explore the Student Art Exhibition and Creative Showcase at Heritage International Public School, Kasia, Kushinagar, featuring student artwork, crafts, and creative expression.",
  },

  {
    id: 2,
    slug: "annual-musical-evening",
    eventType: "upcoming",
    category: "Music",

    title:
      "Annual Musical Evening and Student Performances: An Exploration of Music, Rhythm and Creative Talent",

    excerpt:
      "Celebrate musical expression and student creativity through an evening dedicated to singing, instrumental music, stage performances, and the development of confidence through the performing arts.",

    description: `
      <p>The <strong>Annual Musical Evening and Student Performances</strong> celebrates the role of music and the performing arts in school life. Music gives students opportunities to explore creativity, develop listening skills, express emotions, and work together towards a shared performance.</p>

      <p>The programme is designed around student participation and creative expression. Depending on the final performance schedule, activities may include vocal presentations, instrumental performances, group music, and other stage-based contributions that allow students to share their interests and abilities.</p>

      <h2>A Celebration of Musical Expression</h2>

      <p>Preparing for a musical performance involves more than learning notes or rehearsing a song. Students can develop concentration, discipline, timing, coordination, and the confidence to present their work before an audience. Group performances also encourage communication, cooperation, and a shared sense of responsibility.</p>

      <p>The musical evening offers a way to appreciate the commitment involved in preparing a performance, from practising individual skills to coordinating with fellow participants. It also creates an opportunity for families and members of the school community to appreciate students' creative efforts.</p>

      <h2>Programme Highlights</h2>

      <ul>
        <li><strong>Vocal performances:</strong> Singing and group presentations that encourage musical expression.</li>
        <li><strong>Instrumental music:</strong> Opportunities to share musical skills and explore different sounds and rhythms.</li>
        <li><strong>Group performances:</strong> Collaborative activities that highlight teamwork and coordination.</li>
        <li><strong>Stage confidence:</strong> Experiences that help students become more comfortable presenting their abilities.</li>
      </ul>

      <h2>The Value of Performing Arts</h2>

      <p>Participation in the performing arts can complement academic learning by creating opportunities for imagination, self-expression, attentive listening, and collaboration. Rehearsals also help students understand how practice and preparation contribute to a shared outcome.</p>

      <p>The Annual Musical Evening celebrates these learning experiences and recognises the effort that goes into preparing for a performance.</p>

      <p><strong>Visitor information:</strong> Please contact the school to confirm the programme, entry arrangements, and performance timings before attending.</p>
    `,

    day: "12",
    month: "Nov",
    year: "2026",
    startDate: "2026-11-12",
    startTime: "04:00 PM",
    endDate: "2026-11-12",
    endTime: "07:00 PM",

    venue: "School Auditorium",
    address: schoolAddress,

    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Live music performance with stage lighting and an audience",

    galleryImages: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85",
    ],

    highlights: [
      "Vocal and musical presentations",
      "Instrumental music and rhythm",
      "Collaborative student performances",
      "Stage confidence and presentation skills",
      "Creative expression through music",
    ],

    organizer: "Heritage International Public School",

    tags: [
      "Music",
      "Performing Arts",
      "Student Talent",
      "Cultural Activities",
      "Musical Evening",
    ],

    registration: {
      enabled: true,
      label: "Register Interest",
      email: schoolEmail,
    },

    seoTitle:
      "Annual Musical Evening and Student Performances | Heritage International Public School",

    seoDescription:
      "Discover the Annual Musical Evening at Heritage International Public School, celebrating music, student performances, creativity, and the performing arts.",
  },

  {
    id: 3,
    slug: "science-innovation-exhibition",
    eventType: "upcoming",
    category: "Science & Innovation",

    title:
      "Science, Innovation and Learning Exhibition: Exploring Scientific Ideas, Student Projects and Discovery",

    excerpt:
      "Discover how scientific curiosity and classroom learning connect through an educational exhibition featuring student projects, practical demonstrations, exploration, and problem-solving.",

    description: `
      <p>The <strong>Science, Innovation and Learning Exhibition</strong> encourages students to explore scientific ideas, investigate questions, and communicate what they learn through projects and demonstrations. It provides an opportunity to connect concepts introduced in lessons with practical examples and individual or group investigations.</p>

      <p>Scientific learning involves asking questions, making observations, considering evidence, and refining ideas. Through project preparation, students can practise these skills while learning how to communicate a process or explain the reasoning behind a result.</p>

      <h2>Discovering Science Through Projects</h2>

      <p>Student projects can make scientific concepts more accessible by turning abstract ideas into models, experiments, displays, and explanations. Preparing a project encourages students to plan their work, organise information, make thoughtful choices, and communicate the purpose of their investigation.</p>

      <p>The exhibition celebrates curiosity and the willingness to explore different approaches to a question. It also gives students an opportunity to learn from one another and to appreciate the range of interests that can develop through science, technology, and innovation.</p>

      <h2>What Visitors Can Explore</h2>

      <ul>
        <li><strong>Scientific projects:</strong> Displays that explain scientific concepts, observations, and investigations.</li>
        <li><strong>Models and demonstrations:</strong> Practical ways of communicating how a process or idea works.</li>
        <li><strong>Innovation and design:</strong> Student approaches to identifying questions and developing possible solutions.</li>
        <li><strong>Learning presentations:</strong> Opportunities to explain research, methods, observations, and conclusions.</li>
      </ul>

      <h2>Skills Beyond the Classroom</h2>

      <p>Project-based learning can support critical thinking, research, collaboration, presentation skills, and the ability to evaluate information. Students can also learn that investigation often involves revisiting an idea, making adjustments, and considering what the available evidence supports.</p>

      <p>The Science, Innovation and Learning Exhibition celebrates the learning process as well as the completed project, encouraging curiosity and a thoughtful approach to discovery.</p>

      <p><strong>Visitor information:</strong> Please contact the school to confirm the exhibition programme, visiting arrangements, and timings.</p>
    `,

    day: "21",
    month: "Nov",
    year: "2026",
    startDate: "2026-11-21",
    startTime: "10:00 AM",
    endDate: "2026-11-21",
    endTime: "02:00 PM",

    venue: "School Science Exhibition Area",
    address: schoolAddress,

    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Scientific equipment arranged in a laboratory setting",

    galleryImages: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1581093458791-9d42e3c0c7ec?auto=format&fit=crop&w=1200&q=85",
    ],

    highlights: [
      "Student science projects and displays",
      "Practical demonstrations and models",
      "Scientific investigation and observation",
      "Innovation, design, and problem-solving",
      "Communication of ideas and findings",
    ],

    organizer: "Heritage International Public School",

    tags: [
      "Science",
      "Innovation",
      "STEM Learning",
      "Educational Exhibition",
      "Student Projects",
    ],

    registration: {
      enabled: true,
      label: "Register Interest",
      email: schoolEmail,
    },

    seoTitle:
      "Science, Innovation and Learning Exhibition | Heritage International Public School",

    seoDescription:
      "Learn about the Science, Innovation and Learning Exhibition at Heritage International Public School, featuring scientific exploration, student projects, and educational activities.",
  },

  {
    id: 4,
    slug: "inter-house-football-championship",
    eventType: "upcoming",
    category: "Sports",

    title:
      "Inter-House Football Championship: Building Teamwork, Sporting Skills, Fitness and Sportsmanship",

    excerpt:
      "Celebrate physical activity, teamwork, and healthy competition through a school football championship that encourages students to develop their sporting abilities and respect for fair play.",

    description: `
      <p>The <strong>Inter-House Football Championship</strong> provides students with an opportunity to participate in organised sporting activities and represent their respective school houses. Football combines physical movement, coordination, tactical thinking, communication, and cooperation towards a common goal.</p>

      <p>Taking part in a sporting competition can help students practise discipline, manage challenges, and develop a greater understanding of teamwork. Players learn to coordinate their efforts, communicate on the field, and respond to changing situations during a match.</p>

      <h2>The Spirit of School Sport</h2>

      <p>Sporting events are valuable learning experiences because success depends on more than individual ability. Preparation, cooperation, respect for teammates, and adherence to the rules all contribute to meaningful participation.</p>

      <p>By representing their houses, students have an opportunity to build connections with their peers, encourage one another, and experience the shared responsibility of team participation. The championship also provides an occasion to recognise effort, improvement, and positive sporting conduct.</p>

      <h2>Championship Focus</h2>

      <ul>
        <li><strong>Teamwork:</strong> Working together, communicating clearly, and supporting fellow players.</li>
        <li><strong>Sportsmanship:</strong> Respecting opponents, officials, rules, and the outcome of a match.</li>
        <li><strong>Physical activity:</strong> Developing movement, coordination, and an appreciation for an active lifestyle.</li>
        <li><strong>Personal development:</strong> Learning to prepare, persevere, cooperate, and respond constructively to challenges.</li>
      </ul>

      <h2>Learning Through Competition</h2>

      <p>A school sports event can reinforce lessons about fairness, responsibility, perseverance, and respect. Students can learn to celebrate collective achievements while recognising that participation, effort, and improvement are also important outcomes.</p>

      <p>The Inter-House Football Championship brings these values together through a shared sporting experience and helps make physical activity part of a balanced school environment.</p>

      <p><strong>Important:</strong> Contact the school to confirm participating teams, match timings, spectator arrangements, and any changes to the schedule.</p>
    `,

    day: "05",
    month: "Dec",
    year: "2026",
    startDate: "2026-12-05",
    startTime: "09:00 AM",
    endDate: "2026-12-05",
    endTime: "01:00 PM",

    venue: "School Sports Ground",
    address: schoolAddress,

    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Football players competing on a green playing field",

    galleryImages: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=85",
    ],

    highlights: [
      "Inter-house football competition",
      "Teamwork and coordination",
      "Sportsmanship and fair play",
      "Physical activity and fitness",
      "Team responsibility and perseverance",
    ],

    organizer: "Heritage International Public School",

    tags: [
      "Football",
      "School Sports",
      "Inter-House Competition",
      "Student Fitness",
      "Sportsmanship",
    ],

    registration: {
      enabled: true,
      label: "Register Interest",
      email: schoolEmail,
    },

    seoTitle:
      "Inter-House Football Championship | Heritage International Public School",

    seoDescription:
      "Discover the Inter-House Football Championship at Heritage International Public School, celebrating teamwork, sportsmanship, physical activity, and school spirit.",
  },

  // =====================================================
  // PAST EVENTS
  // =====================================================
  {
    id: 5,
    slug: "creative-arts-photography-exhibition",
    eventType: "past",
    category: "Arts & Culture",

    title:
      "Creative Arts and Photography Exhibition: Exploring Visual Storytelling, Artistic Perspectives and Imagination",

    excerpt:
      "Explore a creative celebration of visual art and photography, highlighting artistic observation, personal expression, and the many ways images can communicate ideas and experiences.",

    description: `
      <p>The <strong>Creative Arts and Photography Exhibition</strong> is centred on visual storytelling, artistic observation, and the expression of ideas through images and creative work. Art and photography provide ways to document experiences, notice details, and communicate perspectives that words alone may not fully express.</p>

      <p>The exhibition brings together examples of creative thinking and visual communication. Through artwork and photographic compositions, students can explore how colour, light, contrast, framing, and subject choice affect the way an image is understood.</p>

      <h2>Exploring Visual Perspectives</h2>

      <p>Creative activities encourage students to look carefully at their surroundings, develop their own interpretations, and make decisions about how to present an idea. Working on a visual project can involve planning, experimentation, revision, and reflection on the choices made during the creative process.</p>

      <p>An exhibition also creates an opportunity to appreciate different approaches to the same subject. Each person's perspective may draw attention to a different detail, emotion, pattern, or story, making the experience useful for discussion and creative learning.</p>

      <h2>Exhibition Themes</h2>

      <ul>
        <li><strong>Photography:</strong> Using composition and observation to communicate a visual story.</li>
        <li><strong>Fine arts:</strong> Exploring materials, colour, form, and personal interpretation.</li>
        <li><strong>Creative thinking:</strong> Developing original ideas and refining artistic work.</li>
        <li><strong>Visual communication:</strong> Understanding how images can convey messages and perspectives.</li>
      </ul>

      <h2>Developing Creative Confidence</h2>

      <p>Sharing creative work gives students an opportunity to reflect on their progress, explain their thinking, and appreciate the efforts of others. It also highlights that creativity can involve exploration and learning, rather than focusing only on a finished result.</p>

      <p>The exhibition celebrates visual expression as part of a broad educational experience and recognises the value of giving students opportunities to explore their interests.</p>
    `,

    day: "30",
    month: "Sep",
    year: "2026",
    startDate: "2026-09-30",
    startTime: "10:00 AM",
    endDate: "2026-09-30",
    endTime: "01:00 PM",

    venue: "School Exhibition Area",
    address: schoolAddress,

    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Colourful contemporary artwork displayed in a gallery",

    galleryImages: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
    ],

    highlights: [
      "Creative artwork and photography",
      "Visual storytelling and observation",
      "Different artistic perspectives",
      "Creative experimentation",
      "Reflection and appreciation of student work",
    ],

    organizer: "Heritage International Public School",

    tags: [
      "Arts",
      "Photography",
      "Creative Expression",
      "Visual Storytelling",
      "Past Event",
    ],

    registration: {
      enabled: false,
      label: "Registration Closed",
      email: schoolEmail,
    },

    seoTitle:
      "Creative Arts and Photography Exhibition | Heritage International Public School",

    seoDescription:
      "Explore the Creative Arts and Photography Exhibition at Heritage International Public School, celebrating artistic expression, visual storytelling, and creativity.",
  },

  {
    id: 6,
    slug: "environmental-awareness-conservation",
    eventType: "past",
    category: "Environment",

    title:
      "Environmental Awareness and Conservation Session: Understanding Nature, Sustainability and Responsible Everyday Choices",

    excerpt:
      "Explore an educational focus on the environment, conservation, and sustainable habits that help students understand their relationship with the natural world.",

    description: `
      <p>The <strong>Environmental Awareness and Conservation Session</strong> focuses on the relationship between people and the natural environment. Environmental learning helps students understand why natural resources matter, how human activities affect ecosystems, and why responsible everyday choices can make a difference.</p>

      <p>Through discussion and learning activities, students can explore environmental topics such as waste reduction, protecting green spaces, conserving water, reducing unnecessary consumption, and recognising the value of biodiversity.</p>

      <h2>Understanding Our Environment</h2>

      <p>Environmental awareness begins with observing the world around us. Local landscapes, plants, animals, water, soil, and air are all part of interconnected natural systems. Learning about these relationships can help students understand why changes in one area may affect other parts of the environment.</p>

      <p>Conservation also involves considering how resources are used and how avoidable waste can be reduced. Students can reflect on practical habits at school and at home, including keeping shared spaces clean and using water and materials responsibly.</p>

      <h2>Key Learning Areas</h2>

      <ul>
        <li><strong>Conservation:</strong> Understanding the importance of protecting natural resources and habitats.</li>
        <li><strong>Responsible consumption:</strong> Considering ways to reduce waste and make thoughtful choices.</li>
        <li><strong>Environmental observation:</strong> Recognising features of the natural world and the relationships between living things.</li>
        <li><strong>Sustainable habits:</strong> Identifying practical actions that support care for the environment.</li>
      </ul>

      <h2>Turning Awareness into Action</h2>

      <p>Environmental education is most useful when students can connect ideas with everyday situations. Small actions, such as reducing avoidable waste, caring for shared spaces, and using resources thoughtfully, can help build an attitude of responsibility.</p>

      <p>The session highlights the role education can play in developing informed, thoughtful learners who understand that environmental care is a shared responsibility.</p>
    `,

    day: "25",
    month: "Sep",
    year: "2026",
    startDate: "2026-09-25",
    startTime: "10:00 AM",
    endDate: "2026-09-25",
    endTime: "12:00 PM",

    venue: "School Campus",
    address: schoolAddress,

    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Green landscape with mountains and a natural environment",

    galleryImages: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85",
    ],

    highlights: [
      "Environmental awareness and observation",
      "Natural resources and conservation",
      "Waste reduction and responsible consumption",
      "Sustainable everyday habits",
      "Environmental responsibility",
    ],

    organizer: "Heritage International Public School",

    tags: [
      "Environment",
      "Conservation",
      "Sustainability",
      "Nature",
      "Past Event",
    ],

    registration: {
      enabled: false,
      label: "Registration Closed",
      email: schoolEmail,
    },

    seoTitle:
      "Environmental Awareness and Conservation Session | Heritage International Public School",

    seoDescription:
      "Learn about environmental awareness, conservation, and sustainable habits through the school activities of Heritage International Public School.",
  },

  {
    id: 7,
    slug: "music-rhythm-cultural-performances",
    eventType: "past",
    category: "Music",

    title:
      "Music, Rhythm and Cultural Performances: Celebrating Creative Expression, Musical Appreciation and Student Participation",

    excerpt:
      "Explore the role of music, rhythm, and performance in encouraging creativity, teamwork, confidence, and appreciation of the performing arts.",

    description: `
      <p>The <strong>Music, Rhythm and Cultural Performances</strong> programme celebrates creative expression through music and performance. Music gives students opportunities to listen closely, explore rhythm, develop performance skills, and communicate ideas and emotions through sound and movement.</p>

      <p>Performing arts can bring together individual interests and collaborative activities. Students participating in a musical presentation may work on timing, coordination, preparation, and communication while learning to contribute to a shared performance.</p>

      <h2>The Role of Music in Learning</h2>

      <p>Music encourages attentive listening, pattern recognition, memory, practice, and creative interpretation. Preparing for a performance also gives students a reason to revisit a skill, identify areas for improvement, and work towards a common goal with other participants.</p>

      <p>Group activities can help students appreciate the importance of listening to one another and coordinating individual contributions. These experiences provide opportunities to build confidence while respecting the different skills and interests of fellow participants.</p>

      <h2>Celebrating Performance and Culture</h2>

      <ul>
        <li><strong>Musical expression:</strong> Exploring rhythm, sound, voice, and performance.</li>
        <li><strong>Creative participation:</strong> Sharing personal interests and developing performance confidence.</li>
        <li><strong>Collaboration:</strong> Working with others towards a coordinated presentation.</li>
        <li><strong>Arts appreciation:</strong> Listening to and appreciating different approaches to musical expression.</li>
      </ul>

      <h2>Learning Through Participation</h2>

      <p>Participation in music and cultural activities complements classroom learning by creating space for expression, practice, collaboration, and reflection. Students can gain experience presenting their work and supporting others as they develop their abilities.</p>

      <p>The programme recognises the contribution performing arts can make to a broad school experience and celebrates the value of creative participation.</p>
    `,

    day: "23",
    month: "Sep",
    year: "2026",
    startDate: "2026-09-23",
    startTime: "11:00 AM",
    endDate: "2026-09-23",
    endTime: "01:00 PM",

    venue: "School Auditorium",
    address: schoolAddress,

    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Singer performing on stage with a microphone",

    galleryImages: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85",
    ],

    highlights: [
      "Musical expression and rhythm",
      "Performance and presentation skills",
      "Collaboration and coordination",
      "Arts appreciation",
      "Creative participation",
    ],

    organizer: "Heritage International Public School",

    tags: [
      "Music",
      "Culture",
      "Performing Arts",
      "Creative Learning",
      "Past Event",
    ],

    registration: {
      enabled: false,
      label: "Registration Closed",
      email: schoolEmail,
    },

    seoTitle:
      "Music, Rhythm and Cultural Performances | Heritage International Public School",

    seoDescription:
      "Explore music, rhythm, creative expression, and performing arts activities at Heritage International Public School.",
  },

  {
    id: 8,
    slug: "english-language-literature-celebration",
    eventType: "past",
    category: "Literature",

    title:
      "English Language and Literature Celebration: Developing Communication, Reading Appreciation and Creative Writing",

    excerpt:
      "Discover an educational celebration of language, reading, literature, and communication designed to encourage students to express ideas clearly and explore the power of words.",

    description: `
      <p>The <strong>English Language and Literature Celebration</strong> highlights the role of language in communication, learning, storytelling, and the exchange of ideas. Reading and language activities can help students broaden their vocabulary, understand different perspectives, and develop confidence in expressing their thoughts.</p>

      <p>Literature introduces readers to different characters, settings, experiences, and ways of understanding the world. Language activities also give students opportunities to organise information, communicate clearly, listen to others, and develop their own written and spoken expression.</p>

      <h2>Discovering the Power of Words</h2>

      <p>Reading, discussion, and creative writing can work together to build language skills. When students explore a text, they can consider its meaning, discuss the choices made by its author, and explain their own interpretations. These activities can encourage careful reading and thoughtful responses.</p>

      <p>Speaking and presentation activities provide another way to practise communication. Students can learn to organise their ideas, choose appropriate language, and present information to an audience with greater clarity and confidence.</p>

      <h2>Areas of Learning</h2>

      <ul>
        <li><strong>Reading and literature:</strong> Exploring texts, themes, characters, and different viewpoints.</li>
        <li><strong>Vocabulary and language:</strong> Developing an understanding of words, meanings, and effective expression.</li>
        <li><strong>Creative writing:</strong> Using imagination and structure to communicate ideas through written work.</li>
        <li><strong>Speaking and presentation:</strong> Practising clear communication, listening, and confidence when sharing ideas.</li>
      </ul>

      <h2>Building Confidence Through Communication</h2>

      <p>Language learning is strengthened when students have opportunities to read, write, speak, listen, ask questions, and reflect on feedback. These experiences can support communication across subjects and in everyday situations.</p>

      <p>The celebration recognises the value of reading and language as part of lifelong learning, providing students with opportunities to explore ideas and appreciate the many ways words can inform, connect, and inspire people.</p>
    `,

    day: "17",
    month: "Sep",
    year: "2026",
    startDate: "2026-09-17",
    startTime: "10:00 AM",
    endDate: "2026-09-17",
    endTime: "01:00 PM",

    venue: "School Auditorium",
    address: schoolAddress,

    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Audience attending an educational conference or presentation",

    galleryImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    ],

    highlights: [
      "Reading and literary appreciation",
      "Vocabulary and language development",
      "Creative writing and storytelling",
      "Speaking and presentation skills",
      "Clear communication and interpretation",
    ],

    organizer: "Heritage International Public School",

    tags: [
      "English",
      "Literature",
      "Reading",
      "Creative Writing",
      "Past Event",
    ],

    registration: {
      enabled: false,
      label: "Registration Closed",
      email: schoolEmail,
    },

    seoTitle:
      "English Language and Literature Celebration | Heritage International Public School",

    seoDescription:
      "Explore English language, literature, reading, creative writing, and communication activities at Heritage International Public School, Kasia, Kushinagar.",
  },
];