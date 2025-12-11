export default function BlogPage() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-10 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* LEFT SIDEBAR */}
        {/* <aside className="w-full lg:w-[22%] bg-white border border-gray-200 rounded-xl p-6 h-fit lg:sticky lg:top-24">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Table of content
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li className="text-purple-600 cursor-pointer hover:text-purple-700">
              What Does "Effective ERP" Really Mean?
            </li>
            <li className="cursor-pointer hover:text-purple-600">
              The Role of UX in ERP System Design
            </li>
            <li className="cursor-pointer hover:text-purple-600">
              How to Design an Effective ERP System
            </li>
            <li className="cursor-pointer hover:text-purple-600">
              ERP UI/UX Design Best Practices
            </li>
            <li className="cursor-pointer hover:text-purple-600">
              Common ERP Design Challenges
            </li>
            <li className="cursor-pointer hover:text-purple-600">
              What Makes a Good ERP System Design?
            </li>
            <li className="cursor-pointer hover:text-purple-600">
              Examples of Successful ERP UI/UX Design
            </li>
            <li className="cursor-pointer hover:text-purple-600">FAQs</li>
          </ul>

        
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="font-semibold mb-3 text-gray-900">
              Share this article
            </p>

            <div className="flex gap-4 text-gray-600">
              {["f", "X", "in"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <span className="font-bold text-gray-700">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </aside> */}

        {/* MAIN CONTENT */}
          <main className="w-full lg:w-[55%] bg-white rounded-xl p-6 md:p-8">
            {/* Article Header */}
            <div>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">ERP system, Design process</span>
                <span className="mx-2">•</span>
                <span>12 minutes to read</span>
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                How to Design an Effective ERP System
              </h1>

              <div className="text-gray-600 mb-6">
                by <span className="font-medium">Shahid Miah</span>
                <span className="mx-2">•</span>
                Updated December 9, 2025
              </div>
            </div>

            {/* Article Image */}
            <div className="w-full my-8">
              <div className="w-full h-64 md:h-80 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">ERP System Design Image</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {/* What is an ERP System? */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What is an ERP System?
                </h2>
                <p className="mb-4">
                  Have you ever paid for an ERP system, but your team still ends
                  up using spreadsheets? Or maybe they avoid it because it feels
                  too confusing, too slow, or just too much?
                </p>
                <p className="mb-4">
                  This occurs very frequently when firms operate ERP systems that
                  lack a user focus.
                </p>
                <p className="mb-4">
                  ERP (Enterprise Resource Planning) systems help businesses run
                  smoothly. They take control of money, inventory, HR, and supply
                  chains in one place. But simply buying an ERP system is not
                  enough—if it's too complex, it can slow everything down.
                </p>
                <p className="mb-4">
                  Think of it as the brain of your company. It connects
                  departments and keeps everything aligned. Good design improves
                  teamwork, reduces errors, and supports better decisions.
                </p>
                <p>In this guide, you'll learn what makes a great ERP design.</p>
              </section>

              {/* What Does "Effective ERP" Mean? */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  What Does "Effective ERP" Really Mean?
                </h2>

                <p className="mb-4">
                  A good ERP isn't measured by how many features it has, but by
                  how useful those features are.
                </p>

                <p className="mb-4">Here’s what makes an ERP system effective:</p>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Integrates all business processes in one place</li>
                  <li>Easy to use for everyone, even non-technical users</li>
                  <li>Scales with company growth</li>
                  <li>Provides clean, clear data for better decisions</li>
                </ul>

                <p className="mb-4">
                  Effective ERP design focuses on real user needs—not just
                  technical specs.
                </p>

                <p>
                  It should feel simple, flexible, and fast. When done right, it
                  becomes a competitive advantage.
                </p>
              </section>

              {/* Role of UX */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  The Role of UX in ERP System Design
                </h2>

                <p className="mb-4">
                  Many ERP projects ignore UX. But poor UX is one of the biggest
                  reasons ERP systems fail.
                </p>

                <p className="mb-4">
                  When a system is hard to use, people avoid it, misuse it, or
                  make errors—creating frustration and business losses.
                </p>

                <p className="mb-4">
                  Great UX makes daily tasks faster and smoother, reduces training
                  time, and improves productivity.
                </p>

                <p>
                  Every user—finance, HR, warehouse, management—has different
                  needs. Smart UX ensures the system works for all of them.
                </p>
              </section>

              {/* FAQs */}
              {/* <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  FAQs
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      1. What does ERP system design mean?
                    </h3>
                    <p>
                      ERP system design defines how the software works, how it
                      feels, and how it solves problems. Good design connects
                      tools, teams, and steps into one seamless flow.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      2. How do you design an ERP system that works?
                    </h3>
                    <p>
                      Start by understanding users—how they work, what slows them
                      down, and where mistakes happen. Then design clear steps and
                      intuitive screens that guide them effortlessly.
                    </p>
                  </div>
                </div>
              </section> */}

              {/* Author Bio */}
              {/* <div className="border-t border-gray-200 pt-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

                  <div>
                    <h3 className="font-bold text-gray-900">Shahid Miah</h3>
                    <p className="text-gray-600 text-sm mb-2">CEO at Wavespace</p>
                    <p className="text-gray-700">
                      I help founders and enterprises turn ideas into digital
                      products, driving $10B+ in funding, 100M+ users, and 400%
                      conversion uplifts.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </main>

        {/* RIGHT SIDEBAR */}
        <aside className="w-full lg:w-[23%] space-y-6">
          {/* Subscribe Box */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-xl text-gray-900 mb-4">
              UI/UX design tips and offers
            </h3>

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Subscribe
            </button>

            <p className="text-xs mt-3 text-gray-500">
              By subscribing, you agree to our Privacy Policy. Unsubscribe
              anytime.
            </p>
          </div>

          {/* Rating & CTA */}
          <div className="bg-black text-white p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ★
                  </span>
                ))}
              </div>
              <span className="font-medium text-lg ml-2">5.0</span>
            </div>

            <h3 className="font-bold text-2xl mb-3">
              Discover the right UI/UX design agency
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              Work with skilled professionals and gain the benefits of a global
              UI/UX design team.
            </p>

            <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500">
              Book a Call
            </button>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm text-blue-300">Certified Partner</span>
              </div>
            </div>
          </div>

          {/* Related Blogs */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-xl text-gray-900 mb-4">
              More related blogs
            </h3>

            <div className="space-y-6">
              {[
                {
                  category: "UI UX",
                  time: "07 Min",
                  title: "8 UX Design Principles Everyone Should Know (2025)",
                  author: "by Shahid Miah",
                  date: "October 30, 2025",
                },
                {
                  category: "UI UX",
                  time: "25 minutes",
                  title: "Enterprise UX Design: A Practical Guide for 2025",
                  author: "by Shahid Miah",
                  date: "December 9, 2025",
                },
                {
                  category: "UI UX",
                  time: "12 minutes",
                  title: "15 Benefits of UX Design Subscriptions for Startups",
                  author: "by Shahid Miah",
                  date: "October 30, 2025",
                },
              ].map((blog, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-100 last:border-0"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-600">
                      {blog.category}
                    </span>
                    <span className="text-sm text-gray-500">{blog.time}</span>
                  </div>

                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {blog.title}
                  </h4>

                  <p className="text-xs text-gray-600">{blog.author}</p>
                  <p className="text-xs text-gray-500">{blog.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Links */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "Services",
                "Case studies(9)",
                "Pricing",
                "Startups",
                "About us",
                "Blog",
                "Contact Us",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-600 hover:text-purple-600"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
