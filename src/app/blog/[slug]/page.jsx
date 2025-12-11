import { blogs } from "../../data/blogData";

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="p-20 text-center text-xl">Blog not found</div>;
  }

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 pb-10  pt-20 md:pt-30 lg:pt-40  bg-gray-50 min-h-screen">
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
        <main className="w-full lg:w-[70%] bg-white rounded-xl shadow-sm p-6 md:p-8">
          {/* HEADER */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">
              <span className="font-medium">{blog.category}</span>
              <span className="mx-2">•</span>
              <span>{blog.readTime}</span>
            </p>

            <h1 className="text-2xl   md:text-4xl lg:text-5xl  xl:text-5xl  font-semibold leading-tight  text-gray-900 mb-4 leading-tight">
              {blog.title}
            </h1>

            <p className="text-gray-600 text-sm">
              by <span className="font-medium">{blog.author}</span>
              <span className="mx-2">•</span>
              Updated {blog.updated}
            </p>
          </div>

          {/* ARTICLE IMAGE */}
          <div className="w-full my-6">
            <img
              src={blog.banner}
              alt={blog.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow"
            />
          </div>

          {/* CONTENT SECTIONS */}
          <div className="space-y-10 text-gray-700 leading-relaxed">
            {blog.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>

                {section.content?.map((para, i) => (
                  <p key={i} className="mb-4">
                    {para}
                  </p>
                ))}

                {section.list && (
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    {section.list.map((item, li) => (
                      <li key={li}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.contentAfterList?.map((para, i) => (
                  <p key={i} className="mb-4">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {/* FAQ SECTION */}
            {blog.faqs && (
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs</h2>
                <div className="space-y-6">
                  {blog.faqs.map((faq, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {i + 1}. {faq.q}
                      </h3>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* AUTHOR BIO */}
            <div className="border-t border-gray-200 pt-8 mt-12 flex items-start gap-4">
              <img
                src={blog.authorBio.image}
                alt={blog.authorBio.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900">
                  {blog.authorBio.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  {blog.authorBio.role}
                </p>
                <p className="text-gray-700">{blog.authorBio.bio}</p>
              </div>
            </div>
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="w-full lg:w-[30%] flex flex-col gap-6">
          {/* Subscribe Box */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">
              UI/UX Design Tips & Offers
            </h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
            <p className="text-xs mt-3 text-gray-500">
              By subscribing, you agree to our Privacy Policy. Unsubscribe
              anytime.
            </p>
          </div>

          {/* Rating & CTA */}
          <div className="bg-black text-white rounded-xl p-6 shadow-sm">
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
              Discover the Right UI/UX Design Agency
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Work with skilled professionals and gain the benefits of a global
              UI/UX design team.
            </p>
            <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Book a Call
            </button>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm text-blue-300">Certified Partner</span>
              </div>
            </div>
          </div>

          {/* Related Blogs */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-900 mb-4">
              More Related Blogs
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
              ].map((blog, i) => (
                <div
                  key={i}
                  className="pb-4 border-b border-gray-400 last:border-0"
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
                  <p className="text-xs text-gray-800">{blog.author}</p>
                  <p className="text-xs text-gray-700">{blog.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Links */}
        
        </aside>
      </div>
    </section>
  );
}
