import React from "react";

const BlogSecOne = () => {
  const posts = [
    {
      image: "/blogpagepic1.png",
      category: "Wood",
      date: "14 Oct 2022",
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      image: "/blogpagepic2.png",
      category: "Handmade",
      date: "14 Oct 2022",
      title: "Exploring new ways of decorating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum....",
    },
    {
        image: "/blogpagepic3.png",
        category: "Wood",
      date: "14 Oct 2022",
      title: "Handmade pieces that took time to make",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum....",
    },
  ];

  return (
    <section className="bg-white py-8 px-4 Poppin">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Posts Section */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-74 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                    <span>{post.date}</span>
                    <span className="border-l border-gray-300 pl-2">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-[#9F9F9F] text-sm mb-4">{post.description}</p>
                  <a
                    href="#"
                    className="text-black underline font-medium hover:scale-101 hover:underline-offset-4  transition-transform duration-200 ease-in-out"


                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <button className="px-4 py-2 bg-[#FFF9E5] hover:bg-[#FBEBB5] text-black rounded-md mx-1">1</button>
            <button className="px-4 py-2 bg-[#FFF9E5] hover:bg-[#FBEBB5] text-black rounded-md mx-1">2</button>
            <button className="px-4 py-2 bg-[#FFF9E5] hover:bg-[#FBEBB5] text-black rounded-md mx-1">3</button>
            <button className="px-4 py-2 bg-[#FFF9E5] hover:bg-[#FBEBB5] text-black rounded-md mx-1">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar Section */}
        <div>
          {/* Search Box */}
          <div className="bg-white p-6  mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Categories */}
          <div className="bg-white p-6  mb-6">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-[#9F9F9F]">
              <li className="flex justify-between py-2 px-3 hover:rounded-lg hover:shadow-md text-[#9F9F9F]">
                <span >Crafts</span>
                <span className="">2</span>
              </li>
              <li className="flex justify-between py-2 px-3 hover:rounded-lg hover:shadow-md  text-[#9F9F9F]">
                <span>Design</span>
                <span className="">8</span>
              </li>
              <li className="flex justify-between py-2 px-3 hover:rounded-lg hover:shadow-md text-[#9F9F9F]">
                <span>Handmade</span>
                <span className="">7</span>
              </li>
              <li className="flex justify-between py-2 px-3 hover:rounded-lg hover:shadow-md text-[#9F9F9F]">
                <span>Interior</span>
                <span className="">1</span>
              </li>
              <li className="flex justify-between py-2 px-3 hover:rounded-lg hover:shadow-md text-[#9F9F9F]">
                <span>Wood</span>
                <span className="">6</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {posts.map((post, index) => (
                <li key={index} className="flex space-x-4 cursor-pointer hover:rounded-lg hover:shadow-md px-2 py-2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-sm font-medium">{post.title}</h4>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSecOne;
