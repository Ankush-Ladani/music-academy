"use client";
import Link from "next/link";
// import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

const courseData = {
  courses: [
    {
      id: 1,
      title: "Guitar Fundamentals",
      slug: "guitar-fundamentals",
      description:
        "Learn the basics of playing guitar with our comprehensive beginner's course.",
      price: 99.99,
      instructor: "John Doe",
      isFeatured: true,
      image: "/courses/guitar.jpg",
    },
    {
      id: 2,
      title: "Piano for Beginners",
      slug: "piano-for-beginners",
      description:
        "Start your musical journey with foundational piano skills taught by expert instructors.",
      price: 109.99,
      instructor: "Jane Smith",
      isFeatured: false,
      image: "/courses/piano.jpg",
    },
    {
      id: 3,
      title: "Advanced Vocal Techniques",
      slug: "advanced-vocal-techniques",
      description:
        "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
      price: 119.99,
      instructor: "Emily Johnson",
      isFeatured: true,
      image: "/courses/vocalist.jpg",
    },
    {
      id: 4,
      title: "Drumming Mastery",
      slug: "drumming-mastery",
      description:
        "Master the drums with our comprehensive course covering all skill levels.",
      price: 129.99,
      instructor: "Mike Brown",
      isFeatured: false,
      image: "/courses/drumming.jpg",
    },
    {
      id: 5,
      title: "Jazz Improvisation",
      slug: "jazz-improvisation",
      description:
        "Learn the art of jazz improvisation with this course designed for all levels.",
      price: 139.99,
      instructor: "Chris Davis",
      isFeatured: false,
      image: "/courses/jazz.jpg",
    },
    {
      id: 6,
      title: "Music Production Fundamentals",
      slug: "music-production-fundamentals",
      description:
        "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
      price: 149.99,
      instructor: "Alex Wilson",
      isFeatured: true,
      image: "/courses/music-prod.jpg",
    },
    {
      id: 7,
      title: "Songwriting Essentials",
      slug: "songwriting-essentials",
      description:
        "Learn the essentials of songwriting to express your musical creativity.",
      price: 159.99,
      instructor: "Samantha Miller",
      isFeatured: false,
      image: "/courses/song-writing.jpg",
    },
    {
      id: 8,
      title: "Electronic Music Production",
      slug: "electronic-music-production",
      description:
        "Create compelling electronic music with our course designed for beginners to advanced users.",
      price: 169.99,
      instructor: "Luke Harris",
      isFeatured: true,
      image: "/courses/music-prod.jpg",
    },
    {
      id: 9,
      title: "Classical Music History",
      slug: "classical-music-history",
      description:
        "Explore the rich history of classical music from its origins to the present day.",
      price: 179.99,
      instructor: "Grace Lee",
      isFeatured: false,
      image: "/courses/classical-music.jpg",
    },
    {
      id: 10,
      title: "Blues Guitar Techniques",
      slug: "blues-guitar-techniques",
      description:
        "Discover the techniques of blues guitar to add soul and depth to your playing.",
      price: 189.99,
      instructor: "Ethan Moore",
      isFeatured: true,
      image: "/courses/blues.jpg",
    },
  ],
};

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
