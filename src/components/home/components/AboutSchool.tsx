import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const aboutImage =
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85";

export default function AboutSchool() {
  return (
    <section className="bg-white px-6 py-14 sm:py-16 xl:px-40">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* School image */}
<div
  role="img"
  aria-label="Illustrative photograph of a school building"
  className="h-full min-h-[280px] rounded-lg bg-cover bg-center sm:min-h-[380px] lg:min-h-[560px]"
  style={{
    backgroundImage: `url("${aboutImage}")`,
  }}
/>

        {/* About content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#002147]">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Where Learning Is a Journey and Futures Are Shaped
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              <strong className="font-semibold text-slate-800">
                Heritage International Public School
              </strong>
              , nestled in the vibrant city of{" "}
              <strong className="font-semibold text-slate-800">
                Durg, Chhattisgarh
              </strong>
              , stands as a beacon of excellence in school education. As a
              proud{" "}
              <strong className="font-semibold text-slate-800">
                CBSE-affiliated institution
              </strong>
              , we are dedicated to nurturing well-rounded individuals through
              a balanced blend of academics, ethics, and innovation.
            </p>

            <p>
              Founded with a mission to instill{" "}
              <strong className="font-semibold text-slate-800">
                knowledge, discipline, and compassion
              </strong>
              , Heritage offers a transformative educational experience where{" "}
              <strong className="font-semibold text-slate-800">
                traditional values meet modern learning
              </strong>
              . Our commitment to excellence is reflected in our{" "}
              <strong className="font-semibold text-slate-800">
                smart classrooms
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                well-equipped science and computer labs
              </strong>
              , and a{" "}
              <strong className="font-semibold text-slate-800">
                sprawling sports complex
              </strong>{" "}
              designed to develop both mind and body.
            </p>

            <p>
              At Heritage, we believe education goes beyond textbooks. Our
              environment encourages{" "}
              <strong className="font-semibold text-slate-800">
                critical thinking, creativity, and leadership
              </strong>
              , ensuring that each child grows into a{" "}
              <strong className="font-semibold text-slate-800">
                confident, responsible, and globally aware citizen
              </strong>
              . With a dedicated team of{" "}
              <strong className="font-semibold text-slate-800">
                experienced educators
              </strong>{" "}
              and a strong parent-school partnership, we strive every day to{" "}
              <strong className="font-semibold text-slate-800">
                unlock the full potential of every student
              </strong>
              .
            </p>
          </div>

          <p className="mt-5 border-l-2 border-[#002147] pl-4 text-sm font-medium italic leading-6 text-[#002147] sm:text-base">
            Welcome to a school where learning is a journey, character is
            built, and futures are shaped — welcome to Heritage International
            Public School.
          </p>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#002147] transition-colors hover:text-[#00152e]"
          >
            Discover Our School
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}