import React from "react";

export default function PCPPWebsite() {
  const logoSrc = "/pcpp-logo.png";
  const donateUrl =
    "https://www.zeffy.com/en-US/donation-form/polk-county-passion-project-community-service-fund";

  const [openBio, setOpenBio] = React.useState(null);

  const services = [
    {
      title: "Home Repairs",
      text:
        "Helping neighbors with minor repairs, accessibility improvements, and practical projects that make homes safer and more livable.",
    },
    {
      title: "Yard Work",
      text:
        "Supporting families, seniors, and veterans with cleanup, basic landscaping help, and exterior improvement projects.",
    },
    {
      title: "Vehicle Assistance",
      text:
        "Providing limited support for transportation-related needs when reliable mobility affects work, health, and daily life.",
    },
  ];

  const projectGallery = [
    {
      title: "Community Yard Cleanup",
      category: "Exterior Service Project",
      image: "/project-1.jpg",
      description:
        "Use this card to showcase a completed yard cleanup, landscaping assistance project, or volunteer workday. Add a short summary explaining who was helped, what was completed, and why it mattered.",
      details:
        "Example: Lake Wales, FL • 12 volunteers • Debris removal, trimming, mulch refresh",
    },
    {
      title: "Home Repair Assistance",
      category: "Home Improvement Project",
      image: "/project-2.jpg",
      description:
        "Use this card for repair work such as ramps, flooring, exterior painting, accessibility improvements, or safety-related repairs. Keep the description to 2–4 sentences for easy reading.",
      details:
        "Example: Repaired entry access and completed exterior touch-up work for a local resident",
    },
    {
      title: "Volunteer Service Day",
      category: "Outreach & Volunteerism",
      image: "/project-3.jpg",
      description:
        "Use this area to highlight volunteers in action. This makes the site easy to update later—just replace the image file, title, and project notes below.",
      details:
        "Example: Church and community volunteers serving together on a Saturday outreach project",
    },
  ];

  const boardMembers = [
    {
      name: "Johnny G. Hembree",
      role: "Founder & President",
      image: "/Johnny G Hembree.jpg",
      bio: `Johnny G. Hembree is the founder and president of Polk County Passion Project, Inc., a Florida-based 501(c)(3) nonprofit serving Polk County communities through hands-on outreach. His work focuses on practical, dignity-centered services such as landscaping, home improvements, and property maintenance for elderly individuals, people with disabilities, veterans, and families facing financial hardship.

Johnny provides organizational leadership, compliance oversight, project planning, and volunteer coordination. His approach emphasizes stewardship, accountability, and Christ-centered service, ensuring that each project strengthens both homes and the surrounding community.`,
    },
    {
      name: "Randy Henderson",
      image: "/Randy Henderson Picture_edited.jpg",
      role: "Secretary",
      bio: `Randy Henderson is a lifelong resident of Lake Wales and serves as Vice President of Polk County Passion Project, Inc. He is a graduate of Lake Wales High School (Class of 1998) and a former member of the Lake Wales Highlander Band.

Randy earned a Bachelor’s degree in Public Administration and Nonprofit Management from the University of Central Florida in 2003 and later completed a Juris Master degree in law from Florida State University in 2023. Since 2005, he has served as a Park Ranger at multiple national parks across the United States and currently serves as Chief Administrative Officer for the United States Park Police San Francisco Field Office.

He brings strong experience in nonprofit governance, public administration, and faith-informed leadership to Polk County Passion Project.`,
    },
    {
      name: "Lynnwood Yates",
      image: "/Lynnwood Yates.jpeg",
      role: "Vice President / Treasurer",
      bio: `Lynnwood Yates serves as Vice President and Treasurer of Polk County Passion Project, Inc., bringing a strong commitment to stewardship, accountability, and faithful service.

He plays a key role in overseeing the organization’s financial integrity, ensuring that resources are managed responsibly and aligned with the mission and values of the organization.

Through his role as Treasurer, Lynnwood supports the organization’s outreach efforts by helping ensure that every donation, grant, and expense is handled with diligence and integrity.`,
    },
    {
      name: "Geno Pyse",
      image: "/Geno Pyse.jpg",
      role: "Ministry Support Leader",
      bio: `Geno Pyse is an ordained minister and accomplished author with more than thirty published books available through Amazon. He holds a Master of Arts in Discipleship and Spiritual Formation from North Greenville University and has served in pastoral leadership, youth ministry, prayer ministry, and jail ministry.

Geno’s calling centers on helping people know Jesus Christ and grow deeper in their walk with Him. His ministry and writing reflect a commitment to biblical truth, spiritual growth, and practical discipleship.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src={logoSrc}
              alt="Polk County Passion Project logo"
              className="h-14 w-14 rounded-full object-contain ring-1 ring-slate-200"
            />
            <div>
              <div className="text-2xl font-semibold text-[#1F3A5F]">
                Polk County Passion Project
              </div>
              <div className="text-sm text-slate-600">
                Serving God and Community
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#volunteer">Volunteer</a>
            <a href="#board">Board</a>
            <a href="#donate">Donate</a>
            <a href="#gallery">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#C9A227] px-4 py-2 font-semibold text-slate-900"
            >
              Donate
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#1F3A5F] via-[#254972] to-[#3A6B35] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="max-w-3xl text-5xl font-bold">
            Restoring hope through practical help and compassionate service
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Polk County Passion Project serves individuals and families through
            hands-on community outreach, home repairs, and service projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-[#C9A227] px-6 py-3 font-semibold text-slate-900"
            >
              Support Our Cause
            </a>
            <a
              href="#volunteer"
              className="inline-block rounded-xl border border-white/30 px-6 py-3 font-semibold text-white"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-[#1F3A5F]">About PCPP</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Polk County Passion Project exists to serve people facing real everyday
          needs. Through volunteers, donations, and partnerships, the
          organization helps with practical projects that relieve burdens and
          strengthen the community.
        </p>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#1F3A5F]">
            Core Service Areas
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl bg-[#F2F2F2] p-8">
                <h3 className="text-xl font-semibold text-[#1F3A5F]">
                  {service.title}
                </h3>
                <p className="mt-4 text-slate-700">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteer" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1F3A5F]">
                Volunteer With PCPP
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Join Polk County Passion Project in serving the community through
                hands-on outreach, practical help, and Christ-centered
                compassion. Complete the volunteer application below and it will
                be sent to{" "}
                <a
                  href="mailto:polkcountypassionproject@gmail.com"
                  className="underline"
                >
                  polkcountypassionproject@gmail.com
                </a>
                .
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl bg-[#F2F2F2] p-5">
                  <div className="font-semibold text-[#1F3A5F]">
                    Ways to Serve
                  </div>
                  <p className="mt-2 text-slate-700">
                    Project workdays, cleanup projects, repairs, prayer support,
                    community outreach, administration, and fundraising support.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#F2F2F2] p-5">
                  <div className="font-semibold text-[#1F3A5F]">
                    Who Can Apply
                  </div>
                  <p className="mt-2 text-slate-700">
                    Individuals, church groups, community volunteers, skilled
                    tradespeople, and supporters who want to help strengthen
                    Polk County.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#F2F2F2] p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-2xl font-semibold text-[#1F3A5F]">
                Volunteer Application
              </h3>
              <form
                action="https://formsubmit.co/polkcountypassionproject@gmail.com"
                method="POST"
                className="mt-6 grid gap-4"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New PCPP Volunteer Application"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="Full Name"
                    required
                    placeholder="Full Name"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1F3A5F]"
                  />
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="Email Address"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1F3A5F]"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="tel"
                    name="Phone"
                    placeholder="Phone Number"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1F3A5F]"
                  />
                  <input
                    type="text"
                    name="City"
                    placeholder="City"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1F3A5F]"
                  />
                </div>

                <input
                  type="text"
                  name="Skills or Experience"
                  placeholder="Skills or Experience"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1F3A5F]"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <select
                    name="Area of Interest"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1F3A5F]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Area of Interest
                    </option>
                    <option>Home Repairs</option>
                    <option>Yard Work</option>
                    <option>Vehicle Assistance</option>
                    <option>Administrative Support</option>
                    <option>Fundraising</option>
                    <option>Prayer / Outreach</option>
                    <option>General Volunteer Support</option>
                  </select>
                  <input
                    type="text"
                    name="Availability"
                    placeholder="Availability"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1F3A5F]"
                  />
                </div>

                <textarea
                  name="Why I Want to Volunteer"
                  rows="5"
                  placeholder="Tell us how you would like to help"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1F3A5F]"
                />

                <button
                  type="submit"
                  className="mt-2 rounded-xl bg-[#1F3A5F] px-6 py-3 font-semibold text-white"
                >
                  Submit Volunteer Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#F8F8F8] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#1F3A5F]">
                Project Gallery
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-slate-700">
                Showcase completed projects, volunteer workdays, before-and-after
                improvements, and community impact stories. Each gallery card is
                designed so you can easily swap in a new photo, project title,
                short description, and quick details later.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-sm text-slate-600 ring-1 ring-slate-200">
              Update tip: Replace <span className="font-semibold">project-1.jpg</span>,{" "}
              <span className="font-semibold">project-2.jpg</span>, and{" "}
              <span className="font-semibold">project-3.jpg</span> in the public
              folder.
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projectGallery.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-3xl bg-white shadow ring-1 ring-slate-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-7">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#3A6B35]">
                    {project.category}
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold text-[#1F3A5F]">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-700">
                    {project.description}
                  </p>
                  <div className="mt-5 rounded-2xl bg-[#F2F2F2] px-4 py-3 text-sm text-slate-600">
                    {project.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="board" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-[#1F3A5F]">Board Leadership</h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          Meet the board members guiding Polk County Passion Project and helping
          lead its mission of service across the community.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {boardMembers.map((member, index) => (
            <div key={member.name} className="rounded-2xl bg-white p-8 shadow">
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="mb-5 h-40 w-40 rounded-2xl object-cover ring-1 ring-slate-200"
                />
              )}

              <h3 className="text-xl font-semibold text-[#1F3A5F]">
                {member.name}
              </h3>
              <div className="mt-1 font-semibold text-[#3A6B35]">
                {member.role}
              </div>

              <button
                className="mt-5 rounded-xl bg-[#C9A227] px-5 py-2 font-semibold text-slate-900"
                onClick={() => setOpenBio(openBio === index ? null : index)}
              >
                {openBio === index ? "Hide Bio" : "Meet the Board"}
              </button>

              {openBio === index && (
                <p className="mt-6 whitespace-pre-line leading-7 text-slate-700">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="donate" className="bg-[#3A6B35] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">Support the Mission</h2>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Donations help fund materials, tools, and volunteer service projects
            that directly assist people in need across Polk County.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 className="text-2xl font-semibold">Suggested Giving Levels</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    amount: "$25",
                    title: "Provide Supplies",
                    text: "Helps cover basic project materials and small service needs.",
                  },
                  {
                    amount: "$50",
                    title: "Support Outreach",
                    text: "Helps fund tools, fuel, and support costs for community service projects.",
                  },
                  {
                    amount: "$100",
                    title: "Fund a Project Need",
                    text: "Helps support larger repair, cleanup, or assistance efforts for a family in need.",
                  },
                  {
                    amount: "Sponsor a Project",
                    title: "Make a Bigger Impact",
                    text: "Give at a level that helps directly underwrite a full community service project.",
                  },
                ].map((item) => (
                  <a
                    key={item.amount}
                    href={donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur"
                  >
                    <div className="text-2xl font-bold text-[#C9A227]">
                      {item.amount}
                    </div>
                    <div className="mt-2 font-semibold">{item.title}</div>
                    <p className="mt-2 text-sm text-white/80">{item.text}</p>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Donate Online</h3>
              <div className="mt-6 overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
                <iframe
                  src={donateUrl}
                  title="Zeffy Donation Form"
                  className="h-[900px] w-full rounded-xl border-0"
                />
              </div>
              <div className="mt-4 text-sm text-white/75">
                If the donation form does not display on your website platform,
                visitors can still use the direct Donate buttons above.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-[#1F3A5F]">Contact</h2>
        <p className="mt-6 text-lg text-slate-700">
          Polk County Passion Project, Inc.
          <br />
          <a
            href="mailto:polkcountypassionproject@gmail.com"
            className="underline"
          >
            polkcountypassionproject@gmail.com
          </a>
          <br />
          www.polkcountypassionproject.org
        </p>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">
        © 2026 Polk County Passion Project, Inc. — Serving God and Community
      </footer>
    </div>
  );
}
