"use client";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-purple-600 my-4">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Official Launch March 2024</h2>
            <p className="text-xl text-gray-400">
              Join and invite teachers and students for an exciting adventure.
            </p>
          </div>

          {/* Testimonials */}
          <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              slidesToSlide={1}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              // customTransition="all .5"
              transitionDuration={2000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {/* 1st testimonial */}
              <div
                className="flex flex-col h-full p-6 bg-gray-800 mr-4"
                data-aos="fade-up"
              >
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image
                      className="rounded-full"
                      src={TestimonialImage01}
                      width={48}
                      height={48}
                      alt="Testimonial 01"
                    />
                    <svg
                      className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                      viewBox="0 0 24 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote
                  className="text-lg text-gray-400 grow"
                  style={{ textAlign: "justify" }}
                >
                  — Amazing Interface. Spark-AI interface is user friendly and
                  doesn't take time. It is good and simple.
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">
                    Dr. Ejaz Tayab
                  </cite>{" "}
                  -{" "}
                  <a
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Karachi Institute of Technology and Economics(KIET).
                  </a>
                </div>
              </div>

              {/* 2nd testimonial */}
              <div
                className="flex flex-col h-full p-6 bg-gray-800 mr-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image
                      className="rounded-full"
                      src={TestimonialImage02}
                      width={48}
                      height={48}
                      alt="Testimonial 02"
                    />
                    <svg
                      className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                      viewBox="0 0 24 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote
                  className="text-lg text-gray-400 grow"
                  style={{ textAlign: "justify" }}
                >
                  — Excellent Future. I think this platform han an excellent
                  future.{" "}
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">
                    Dr. Hisham ul Haq
                  </cite>{" "}
                  -{" "}
                  <a
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Dept
                  </a>
                </div>
              </div>

              {/* 3rd testimonial */}
              <div
                className="flex flex-col h-full p-6 bg-gray-800 mr-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image
                      className="rounded-full"
                      src={TestimonialImage03}
                      width={48}
                      height={48}
                      alt="Testimonial 03"
                    />
                    <svg
                      className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                      viewBox="0 0 24 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote
                  className="text-lg text-gray-400 grow"
                  style={{ textAlign: "justify" }}
                >
                  — Homework Enthusiasm. The students are really excited to use
                  the Spark-AI for their homework.{" "}
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">
                    Hassan Ahmed Qureshi
                  </cite>{" "}
                  -{" "}
                  <a
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Dept
                  </a>
                </div>
              </div>

              {/* 4th testimonial */}
              <div
                className="flex flex-col h-full p-6 bg-gray-800 mr-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image
                      className="rounded-full"
                      src={TestimonialImage03}
                      width={48}
                      height={48}
                      alt="Testimonial 03"
                    />
                    <svg
                      className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                      viewBox="0 0 24 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote
                  className="text-lg text-gray-400 grow"
                  style={{ textAlign: "justify" }}
                >
                  — Spark-AI is going to rule the education world.{" "}
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">
                    Muhammad Ali
                  </cite>{" "}
                  -{" "}
                  <a
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Dept
                  </a>
                </div>
              </div>
            </Carousel>
        </div>
      </div>
    </section>
  );
}
