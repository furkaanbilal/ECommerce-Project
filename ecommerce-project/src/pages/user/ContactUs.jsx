import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mt-3">
            We'd Love to <span className="text-orange-500">Hear From You</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Have a question, suggestion, or need assistance? Fill out the form
            below or contact us directly. We're always here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex items-start gap-5 bg-[#18181b] p-6 rounded-2xl border border-zinc-800 hover:border-orange-500 transition">
              <Mail className="text-orange-500" size={30} />

              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400 mt-2">As-Souq@furkaanstore.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5 bg-[#18181b] p-6 rounded-2xl border border-zinc-800 hover:border-orange-500 transition">
              <Phone className="text-orange-500" size={30} />

              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400 mt-2">+91 0198700131</p>
              </div>
            </div>

            <div className="flex items-start gap-5 bg-[#18181b] p-6 rounded-2xl border border-zinc-800 hover:border-orange-500 transition">
              <MapPin className="text-orange-500" size={30} />

              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400 mt-2">Kashmir , Srinagar</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#18181b] p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-3xl font-bold mb-8">
              Send a <span className="text-orange-500">Message</span>
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-xl px-4 py-3 outline-none resize-none focus:border-orange-500"
              ></textarea>

              <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
