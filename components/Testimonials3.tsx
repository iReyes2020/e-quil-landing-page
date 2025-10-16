import Image from "next/image";
import { StaticImageData } from "next/image";
import config from "@/config";

// The list of your testimonials. It needs 3 items to fill the row.
const list: {
  username?: string;
  name: string;
  title: string;
  company: string;
  text: string;
  img?: string | StaticImageData;
  rating: number;
}[] = [
  {
    name: "Sarah Chen",
    title: "VP of People",
    company: "500-person SaaS Company",
    text: "This isn't just another dashboard. It's a strategic weapon. For the first time, I feel like I'm ahead of the problem, not just reacting to it. Our top-performer attrition has dropped significantly.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    title: "Head of HR",
    company: "Tech Scale-up",
    text: "The ability to see objective data on workload and burnout risk has been a game-changer in our leadership meetings. I can finally make a data-driven case for well-being initiatives.",
    rating: 5,
  },
  {
    name: "Jennifer Park",
    title: "Chief People Officer",
    company: "Growth-Stage Startup",
    text: "E-quil transformed how we approach employee retention. The predictive insights gave us the confidence to invest in the right interventions. ROI was clear within the first quarter.",
    rating: 5,
  },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }: { i: number }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-6 md:p-10 bg-brand-white rounded-2xl max-md:text-sm flex flex-col border border-brand-ocean/10">
        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, j) => (
            <span key={j} className="text-brand-teal text-lg">★</span>
          ))}
        </div>
        
        <blockquote className="relative flex-1">
          <p className="text-brand-ocean/80 leading-relaxed">
            "{testimonial.text}"
          </p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-brand-ocean/10">
          <div className="w-full">
            <div className="font-medium text-brand-ocean md:mb-0.5">
              {testimonial.name}
            </div>
            <div className="mt-0.5 text-sm text-brand-ocean/70">
              {testimonial.title}
            </div>
            <div className="mt-0.5 text-xs text-brand-ocean/60">
              {testimonial.company}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials" className="bg-brand-white">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-brand-ocean">
              Trusted by Leading HR Teams
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-brand-ocean/70">
            See how E-quil is transforming burnout prevention and employee retention
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials3;
