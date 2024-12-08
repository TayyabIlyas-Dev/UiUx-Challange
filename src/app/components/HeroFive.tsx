import React from 'react';

const HeroFive = () => {
  const blogs = [
    {
      image: "/blog2pic.png",
      title: "Going all-in with millennial design",
      time: "5 min",
      date: "12th Oct 2022",
    },
    {
      image: "/blog1pic.png",
      title: "Going all-in with millennial design",
      time: "5 min",
      date: "12th Oct 2022",
    },
    {
      image: "/blog3pic.png",
      title: "Going all-in with millennial design",
      time: "5 min",
      date: "12th Oct 2022",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 lg:px-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Blogs</h2>
      <p className="text-gray-600 mb-8">Find a bright idea to suit your taste with our great selection</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="  overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-60 rounded-lg object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
              <button className="text-black text-sm font-semibold underline py-3 rounded-lg transition-all duration-300 hover:scale-110">
             <a href="#">
          Read more
             </a>
            </button>
              <div className="flex items-center justify-center space-x-4 text-black text-sm">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5h7.5m-7.5 6h7.5m-7.5 6h7.5M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25-3.694-8.25-8.25-8.25z"
                    />
                  </svg>
                  {blog.time}
                </span>
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 7.5h7.5M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25-3.694-8.25-8.25-8.25z"
                    />
                  </svg>
                  {blog.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="text-black text-xl font-semibold underline py-12 rounded-lg transition-all duration-300 hover:scale-110">
             <a href="#">
          Veiw All Post
             </a>
            </button>
    </section>
  );
};

export default HeroFive;
