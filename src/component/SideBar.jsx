// components/Sidebar.jsx
export default function Sidebar() {
  return (
    <aside className="lg:w-1/3 p-6 md:p-8 lg:p-12 bg-white border-l border-gray-200">
      {/* Table of Content */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Table of content
        </h2>
        <nav className="space-y-2">
          {[
            'What Does "Effective ERP" Really Mean?',
            "The Role of UX in ERP System Design",
            "How to Design an Effective ERP System",
            "ERP UI/UX Design Best Practices",
            "Common ERP Design Challenges and How to Overcome Them",
            "What Makes a Good ERP System Design?",
            "Examples of Successful ERP UI/UX Design",
            "FAQs",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block text-gray-700 hover:text-blue-600 text-sm transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Share Section */}
      <div className="mb-8 pb-8 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Share this article
        </h2>
        <div className="flex space-x-3">
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <span className="text-gray-700">f</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <span className="text-gray-700">X</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <span className="text-gray-700">in</span>
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mb-8 pb-8 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          UI/UX design tips and offers straight to your inbox
        </h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors">
            Subscribe
          </button>
          <p className="text-xs text-gray-500">
            By subscribing, you agree to our Privacy policy. Unsubscribe
            anytime.
          </p>
        </div>
      </div>

      {/* Rating Section */}
      <div className="mb-8 flex items-center">
        <div className="flex text-yellow-400 mr-2">{"★".repeat(5)}</div>
        <span className="text-gray-700 font-medium">5.0</span>
      </div>

      {/* CTA Section */}
      <div className="mb-8 bg-orange-50 border-l-4 border-orange-400 p-5 rounded-r">
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          Discover the right UI/UX design agency for success
        </h2>
        <p className="text-gray-700 text-sm mb-4">
          Get a team of skilled professionals and get the benefits of a global
          UI/UX design agency.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
          Book a Call
        </button>
        <div className="mt-4 flex items-center">
          <div className="w-5 h-5 text-blue-500 mr-2">✓</div>
          <span className="text-sm text-blue-600 font-medium">
            Certified Partner
          </span>
        </div>
      </div>

      {/* Related Blogs */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          More related blog
        </h2>
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
              title:
                "15 Game-Changing Benefits of UX Design Subscriptions for Startups",
              author: "by Shahid Miah",
              date: "October 30, 2025",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="pb-4 border-b border-gray-100 last:border-0"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  {blog.category}
                </span>
                <span className="text-sm text-gray-500">{blog.time}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.author}</p>
              <p className="text-sm text-gray-500">{blog.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <nav className="flex flex-wrap gap-4 text-sm">
          {[
            "Services",
            "Case studies(9)",
            "Pricing",
            "Startups",
            "About us",
            "Blog",
            "Contact Us",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
