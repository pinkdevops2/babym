import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | babyMD</title>
      </Head>
      <main className="min-h-screen bg-[#f0ebea] flex items-center justify-center">
        <div className="w-full bg-white p-6  relative">
          {/* Header Title */}
          <div className="mb-6 relative">
            <h1 className="text-xl font-bold leading-tight text-black">
              Raising a baby takes a village;
welcome to
              <br />
              <span className="text-[#5d3fd3] underline decoration-[#5d3fd3]">yours</span>
            </h1>
            <p className=" text-gray-700 mt-2">
              You deserve care that&rsquo;s as thoughtful as your parenting. From cozy clinics to expert pediatricians and holistic support, we&rsquo;re here for every milestone, worry, and wonder.
            </p>

            {/* Icon (top right corner) */}
            <div className="absolute top-0 right-0">
              <svg width="20" height="20" viewBox="0 0 100 100">
                <circle cx="10" cy="10" r="5" fill="#f28c8c" />
                <circle cx="30" cy="10" r="5" fill="#5d3fd3" />
                <circle cx="20" cy="30" r="5" fill="#f28c8c" />
              </svg>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            {['Name', 'Email', 'Phone'].map((field) => (
              <div key={field}>
                <label className=" block mb-1">{field}:</label>
                <input
                  type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'}
                  className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-1"
                />
              </div>
            ))}

            {/* Dropdown */}
            <div>
              <label className=" block mb-1">My question is about:</label>
              <select className="w-full border-b border-black bg-transparent focus:outline-none focus:border-[#5d3fd3] pb-1">
                <option value="">Select</option>
                <option>Appointments</option>
                <option>Health Advice</option>
                <option>Follow Up</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className=" block mb-1">Message:</label>
              <textarea
                rows={3}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#5d3fd3] hover:bg-[#4b2eb6] text-white font-semibold  py-2 rounded-full flex justify-center items-center gap-2 transition"
            >
              SUBMIT FORM
              <div className="flex space-x-1">
                <span>▶</span>
                <span>▶</span>
              </div>
            </button>
          </form>
          <Head>
        <title>Join Us | babyMD</title>
      </Head>
      <main className="flex items-center justify-center">
        <div className="w-full bg-white rounded-xl space-y-6">

          {/* Title Section */}
          <div className="relative">
            <h1 className="text-xl font-bold text-black">
              Grow <span className="italic text-[#5d3fd3]">with us</span>
            </h1>
            <p className="mt-2 text-gray-700 ">
              Looking to join a bunch of enthusiasts passionate about shaping brighter futures for little humans?
              We’d love to hear from you! Mail us at <a href="mailto:hiring@babymd.in" className="text-[#5d3fd3] underline">hiring@babymd.in</a>.
            </p>

            {/* Placeholder for top-right bee */}
            <div className="absolute top-0 right-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">

              Bee
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-[#eaf6ff] rounded-xl p-4 space-y-4 relative">
            <h2 className="font-semibold  text-gray-800">
              Pediapulse Health Services Private Limited
            </h2>

            {/* Placeholder for small bee */}
            <div className="absolute top-2 right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px] text-gray-500">
              Bee
            </div>

            <div className=" text-gray-700 space-y-2">
              <div className="flex items-start gap-2">
                <span>🏠</span>
                <p>
                  Address: Wework, Prestige Atlanta,<br />
                  80 Feet Road, Koramangala,<br />
                  Bengaluru, Karnataka-560034
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <p>Email: help@babymd.in</p>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <p>Phone: +91 70707 08220</p>
              </div>
            </div>

            {/* Image Frame Placeholder */}
            <div className="w-full mt-4 aspect-[4/3] bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 ">
              Image goes here
            </div>
          </div>
        </div>
      </main>
          
        </div>
      </main>
    </>
  );
}