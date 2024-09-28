import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
        <div className="text-xl font-bold">MyWebsite</div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
          <a
            href="#login"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Website</h1>
        <p className="text-lg mb-8">Your journey starts here.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We are passionate about helping you achieve your goals. Learn more
          about our mission and values.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

        {/* Contact Form */}
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-left text-lg mb-2">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-lg mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-lg mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Google Map */}
        <div className="mt-10">
          <iframe
            className="w-full h-64 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509931!2d144.95592781561794!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779fbeae2e34d9!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1636439769132!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}
