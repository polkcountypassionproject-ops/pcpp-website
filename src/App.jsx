import React from "react";

export default function PCPPWebsite() {
  const logoSrc = "/pcpp-logo.png";
  const donateUrl =
    "https://www.zeffy.com/en-US/donation-form/polk-county-passion-project-community-service-fund";

  const [openBio, setOpenBio] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const [showHelpForm, setShowHelpForm] = React.useState(false);

  const services = [
    {
      title: "Home Repairs",
      text: "Helping neighbors with minor repairs, accessibility improvements, and practical projects that make homes safer and more livable.",
    },
    {
      title: "Yard Work",
      text: "Supporting families, seniors, and veterans with cleanup, basic landscaping help, and exterior improvement projects.",
    },
    {
      title: "More Programs to Come",
      text: "Additional programs and services are being developed to further meet the needs of the community as the organization grows.",
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
      role: "Secretary",
      image: "/Randy Henderson Picture_edited.jpg",
      bio: `Randy Henderson is a lifelong resident of Lake Wales and serves as Vice President of Polk County Passion Project, Inc. He is a graduate of Lake Wales High School (Class of 1998) and a former member of the Lake Wales Highlander Band.

Randy earned a Bachelor’s degree in Public Administration and Nonprofit Management from the University of Central Florida in 2003 and later completed a Juris Master degree in law from Florida State University in 2023. Since 2005, he has served as a Park Ranger at multiple national parks across the United States and currently serves as Chief Administrative Officer for the United States Park Police San Francisco Field Office.

He brings strong experience in nonprofit governance, public administration, and faith-informed leadership to Polk County Passion Project.`,
    },
    {
      name: "Lynnwood Yates",
      role: "Vice President / Treasurer",
      image: "/Lynnwood Yates.jpeg",
      bio: `Lynnwood Yates serves as Vice President and Treasurer of Polk County Passion Project, Inc., bringing a strong commitment to stewardship, accountability, and faithful service.

He plays a key role in overseeing the organization’s financial integrity, ensuring that resources are managed responsibly and aligned with the mission and values of the organization.

Through his role as Treasurer, Lynnwood supports the organization’s outreach efforts by helping ensure that every donation, grant, and expense is handled with diligence and integrity.`,
    },
    {
      name: "Geno Pyse",
      role: "Ministry Support Leader",
      image: "/Geno Pyse.jpg",
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
              <div className="text-sm text-slate-600">Serving God and Community</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#request-help">Request Help</a>
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
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
          <h1 className="max-w-3xl text-5xl font-bold">
            Restoring hope through practical help and compassionate service
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Polk County Passion Project serves the elderly, people with disabilities, veterans, and families with low income through hands-on community outreach, home repairs, and service projects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-[#C9A227] px-6 py-3 font-semibold text-slate-900"
            >
              Support Our Cause
            </a>
            <a
              href="#request-help"
              className="inline-block rounded-xl border border-white/30 px-6 py-3 font-semibold text-white"
            >
              Request Assistance
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F3A5F]">About Polk County Passion Project</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Polk County Passion Project exists to serve the elderly, people with disabilities, veterans, and families facing real everyday needs. Through volunteers, donations, and partnerships, the organization provides practical assistance that relieves burdens, restores dignity, and strengthens the community.
          </p>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F3A5F]">
            Core Service Areas
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3 justify-items-center">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-[#F2F2F2] p-8 text-center"
              >
                <h3 className="text-xl font-semibold text-[#1F3A5F]">
                  {service.title}
                </h3>
                <p className="mt-4 text-slate-700">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="request-help" className="bg-[#F8F8F8] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-[#1F3A5F]">Request Assistance</h2>
            <p className="mt-6 text-lg text-slate-700">
              If you are in need of assistance, you may submit a request for review. Polk County Passion Project serves the Lake Wales area in Polk County, Florida and focuses on helping elderly individuals, people with disabilities, veterans, and families facing hardship.
            </p>
          </div>

          <div className="mt-14 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl bg-[#F8F8F8] p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-[#1F3A5F]">Who May Apply?</h3>
                <p className="mt-3 text-slate-700">
                  Assistance requests may be submitted by elderly households, people with disabilities, veterans, and low-income families within our service area.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8F8F8] p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-[#1F3A5F]">Types of Assistance</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-left text-slate-700">
                  <li>Wheelchair ramps and accessibility</li>
                  <li>Minor home repairs</li>
                  <li>Yard cleanup</li>
                  <li>Painting and safety modifications</li>
                  <li>Other practical needs as reviewed</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-[#F8F8F8] p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-[#1F3A5F]">Review Process</h3>
                <p className="mt-3 text-slate-700">
                  Submitting a request does not guarantee approval. Each request is reviewed based on need, scope, volunteer capacity, safety, and available resources.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#1F3A5F] px-6 py-8 text-center text-white md:px-8">
              <div className="mx-auto max-w-3xl">
                <h3 className="text-2xl font-semibold">Help Request Form</h3>
                <p className="mt-3 text-white/80">
                  Open the intake form below to request assistance. The completed form is linked to polkcountypassionproject@gmail.com for review.
                </p>
                <button
                  type="button"
                  onClick={() => setShowHelpForm(!showHelpForm)}
                  className="mt-6 rounded-xl bg-[#C9A227] px-6 py-3 font-semibold text-slate-900"
                >
                  {showHelpForm ? "Hide Help Request Form" : "Open Help Request Form"}
                </button>
              </div>
            </div>

            {showHelpForm && (
              <div className="mt-8 rounded-3xl bg-[#F9F9F9] p-8 shadow-lg ring-1 ring-slate-200">
                <h3 className="text-center text-2xl font-semibold text-[#1F3A5F]">
                  Request for Assistance Intake Form
                </h3>
                <p className="mt-3 text-center text-sm text-slate-600">
                  Complete the form below and a member of Polk County Passion Project will review your request.
                </p>

                <form
                  action="https://formsubmit.co/polkcountypassionproject@gmail.com"
                  method="POST"
                  className="mt-6 grid gap-6 text-left"
                >
                  <input type="hidden" name="_subject" value="New PCPP Help Request Form" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Applicant Information</h4>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <input type="text" name="Full Name" required placeholder="Full Name" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                      <input type="date" name="Date of Request" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                    </div>
                    <div className="mt-4 grid gap-4">
                      <input type="text" name="Street Address" placeholder="Street Address" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                      <div className="grid gap-4 md:grid-cols-3">
                        <input type="text" name="City" placeholder="City" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                        <input type="text" name="State" placeholder="State" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                        <input type="text" name="Zip" placeholder="Zip Code" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <input type="tel" name="Phone" placeholder="Phone" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                        <input type="email" name="Email" placeholder="Email" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-medium text-slate-700">Phone Type</div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3"><input type="radio" name="Phone Type" value="Cell" />Cell</label>
                          <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3"><input type="radio" name="Phone Type" value="Home" />Home</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Household Information</h4>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <input type="number" name="Total Household Members" placeholder="Total Household Members" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                    </div>
                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {['Elderly (65+)', 'Disabled', 'Veteran', 'Low-Income Household'].map((option) => (
                        <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3">
                          <input type="checkbox" name="Household Qualifications" value={option} />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Type of Assistance Requested</h4>
                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {['Wheelchair Ramp / Accessibility', 'Minor Home Repairs', 'Yard Cleanup', 'Painting', 'Safety Modifications'].map((option) => (
                        <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3">
                          <input type="checkbox" name="Type of Assistance Requested" value={option} />
                          {option}
                        </label>
                      ))}
                      <input type="text" name="Other Assistance Requested" placeholder="Other (please explain)" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                    </div>
                    <textarea name="Description of Need" rows="6" placeholder="Description of Need" className="mt-4 rounded-xl border border-slate-300 bg-white px-4 py-3" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Urgency</h4>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      {['Emergency', 'Urgent (2–4 weeks)', 'Standard'].map((option) => (
                        <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3">
                          <input type="radio" name="Urgency" value={option} />
                          {option}
                        </label>
                      ))}
                    </div>
                    <textarea name="Urgency Details" rows="4" placeholder="If emergency or urgent, please explain" className="mt-4 rounded-xl border border-slate-300 bg-white px-4 py-3" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Property Information</h4>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3"><input type="radio" name="Property Status" value="Own" />Own</label>
                      <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3"><input type="radio" name="Property Status" value="Rent" />Rent</label>
                    </div>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <input type="text" name="Landlord Name" placeholder="Landlord Name (if applicable)" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                      <input type="tel" name="Landlord Phone Number" placeholder="Landlord Phone Number" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                    </div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3"><input type="radio" name="Permission for Volunteers to Work on Property" value="Yes" />Permission for volunteers to work on property: Yes</label>
                      <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3"><input type="radio" name="Permission for Volunteers to Work on Property" value="No" />Permission for volunteers to work on property: No</label>
                    </div>
                    <textarea name="Availability" rows="4" placeholder="Availability" className="mt-4 rounded-xl border border-slate-300 bg-white px-4 py-3" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Liability Waiver and Property Access</h4>
                    <div className="mt-4 space-y-3 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                      <label className="flex items-start gap-3 text-sm text-slate-700">
                        <input type="checkbox" name="Liability Acknowledgment" required className="mt-1" />
                        <span>I understand that volunteer-based services are provided as-is without warranties or guarantees and I release Polk County Passion Project, its board members, volunteers, partners, and affiliates from claims, damages, or liability related to the work performed.</span>
                      </label>
                      <label className="flex items-start gap-3 text-sm text-slate-700">
                        <input type="checkbox" name="Property Access Acknowledgment" required className="mt-1" />
                        <span>I grant permission for evaluation and project work on the property and confirm that I am the legal property owner or have authorization from the property owner.</span>
                      </label>
                      <div className="grid gap-4 md:grid-cols-2">
                        <input type="text" name="Owner/Landlord Name" placeholder="Owner/Landlord Name (if applicable)" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                        <input type="tel" name="Owner/Landlord Contact Number" placeholder="Owner/Landlord Contact Number" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Photo / Video Release and Safety</h4>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                        <div className="mb-3 text-sm font-medium text-slate-700">Photo / Video Release</div>
                        <div className="grid gap-2">
                          <label className="flex items-center gap-2"><input type="radio" name="Photo Consent" value="YES, I consent" />YES, I consent</label>
                          <label className="flex items-center gap-2"><input type="radio" name="Photo Consent" value="NO, I do not consent" />NO, I do not consent</label>
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                        <div className="mb-3 text-sm font-medium text-slate-700">Project Safety Acknowledgment</div>
                        <div className="grid gap-2">
                          {['Keep children supervised', 'Keep pets secured', 'Avoid entering active work zones'].map((option) => (
                            <label key={option} className="flex items-center gap-2"><input type="checkbox" name="Project Safety Acknowledgment" value={option} />{option}</label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Signature</h4>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <input type="text" name="Applicant Signature" placeholder="Type Full Name as Signature" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                      <input type="date" name="Signature Date" className="rounded-xl border border-slate-300 bg-white px-4 py-3" />
                    </div>
                  </div>

                  <button type="submit" className="mt-2 rounded-xl bg-[#1F3A5F] px-6 py-3 font-semibold text-white">
                    Submit Help Request
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Your information will be sent securely to polkcountypassionproject@gmail.com
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="volunteer" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-[#1F3A5F]">Volunteer With PCPP</h2>
            <p className="mt-6 text-lg text-slate-700">
              Make a real impact in your community. Join Polk County Passion Project in serving the elderly, people with disabilities, veterans, and families in need through hands-on service and compassionate outreach.
            </p>
          </div>

          <div className="mt-14 rounded-[2rem] bg-gradient-to-br from-[#F8F8F8] to-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-[#1F3A5F]">Why Volunteer?</h3>
                <p className="mt-3 text-slate-700">
                  Your time and skills directly impact lives. Every project completed brings safety, dignity, and hope to someone in need.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-[#1F3A5F]">Ways to Serve</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-left text-slate-700">
                  <li>Home repairs and accessibility projects</li>
                  <li>Yard cleanup and outdoor work</li>
                  <li>Community outreach and support</li>
                  <li>Administrative and event support</li>
                  <li>Prayer and encouragement ministry</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-[#1F3A5F]">Who Can Volunteer?</h3>
                <p className="mt-3 text-slate-700">
                  Individuals, families, church groups, skilled tradespeople, and anyone with a heart to serve the community.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#1F3A5F] px-6 py-8 text-center text-white md:px-8">
              <div className="mx-auto max-w-3xl">
                <h3 className="text-2xl font-semibold">Volunteer Application</h3>
                <p className="mt-3 text-white/80">
                  Start your application when you are ready. The form is linked to polkcountypassionproject@gmail.com and can be opened or hidden with one click.
                </p>
                <button
                  type="button"
                  onClick={() => setShowForm(!showForm)}
                  className="mt-6 rounded-xl bg-[#C9A227] px-6 py-3 font-semibold text-slate-900"
                >
                  {showForm ? "Hide Application" : "Open Volunteer Application"}
                </button>
              </div>
            </div>

            {showForm && (
              <div className="mt-8 rounded-3xl bg-[#F9F9F9] p-8 shadow-lg ring-1 ring-slate-200">
                <h3 className="text-center text-2xl font-semibold text-[#1F3A5F]">
                  Volunteer Application
                </h3>
                <p className="mt-3 text-center text-sm text-slate-600">
                  Complete the application below to volunteer with Polk County Passion Project.
                </p>

                <form
                  action="https://formsubmit.co/polkcountypassionproject@gmail.com"
                  method="POST"
                  className="mt-6 grid gap-6 text-left"
                >
                  <input type="hidden" name="_subject" value="New PCPP Volunteer Application" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Personal Information</h4>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <input type="text" name="Full Name" required placeholder="Full Name" className="rounded-xl border border-slate-300 px-4 py-3" />
                      <input type="date" name="Date Submitted" className="rounded-xl border border-slate-300 px-4 py-3" />
                      <input type="text" name="Nickname" placeholder="Nickname" className="rounded-xl border border-slate-300 px-4 py-3" />
                      <input type="date" name="Date of Birth" className="rounded-xl border border-slate-300 px-4 py-3" />
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <input type="email" name="Email" placeholder="Email Address" className="rounded-xl border border-slate-300 px-4 py-3" />
                      <input type="tel" name="Phone" placeholder="Phone Number" className="rounded-xl border border-slate-300 px-4 py-3" />
                    </div>

                    <input type="text" name="Address" placeholder="Street Address" className="mt-4 rounded-xl border border-slate-300 px-4 py-3" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Volunteer Information</h4>
                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {['General Volunteer','Skilled Trade','Event Volunteer','Administrative Support'].map((opt)=>(
                        <label key={opt} className="flex items-center gap-2">
                          <input type="checkbox" name="Volunteer Type" value={opt} /> {opt}
                        </label>
                      ))}
                    </div>

                    <textarea name="Skills" rows="4" placeholder="Skills / Experience" className="mt-4 rounded-xl border border-slate-300 px-4 py-3" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Availability</h4>
                    <div className="mt-4 grid gap-2 md:grid-cols-3">
                      {['Mon','Tue','Wed','Thu','Fri','Sat'].map((d)=>(
                        <label key={d} className="flex items-center gap-2">
                          <input type="checkbox" name="Days Available" value={d} /> {d}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1F3A5F]">Acknowledgment</h4>
                    <label className="flex items-start gap-2 mt-3">
                      <input type="checkbox" required />
                      <span>I agree to follow all Polk County Passion Project policies and safety guidelines.</span>
                    </label>
                  </div>

                  <button type="submit" className="mt-2 rounded-xl bg-[#1F3A5F] px-6 py-3 text-white">
                    Submit Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#F8F8F8] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F3A5F]">
            Project Gallery
          </h2>
          <p className="mt-6 text-lg text-slate-700">
            Our project gallery is currently being developed. As we continue serving the community, we will be sharing photos and stories that reflect the impact of each project.
          </p>
          <div className="mt-10 rounded-3xl bg-white p-10 shadow ring-1 ring-slate-200">
            <p className="text-xl font-semibold text-[#3A6B35]">
              Photos & Project Highlights Coming Soon
            </p>
            <p className="mt-4 text-slate-600">
              We look forward to showcasing the work being done to serve the elderly, people with disabilities, veterans, and families in need throughout Polk County.
            </p>
          </div>
        </div>
      </section>

      <section id="board" className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F3A5F]">Board Leadership</h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg text-slate-700">
            Meet the board members guiding Polk County Passion Project and helping
            lead its mission of service across the community.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member, index) => (
              <div key={member.name} className="rounded-2xl bg-white p-8 shadow text-center h-full">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mb-5 h-40 w-40 rounded-2xl object-cover ring-1 ring-slate-200"
                  />
                )}

                <h3 className="text-xl font-semibold text-[#1F3A5F]">
                  {member.name}
                </h3>
                <div className="mt-1 font-semibold text-[#3A6B35]">
                  {member.role}
                </div>

                <button
                  type="button"
                  className="mt-5 rounded-xl bg-[#C9A227] px-5 py-2 font-semibold text-slate-900"
                  onClick={() => setOpenBio(openBio === index ? null : index)}
                >
                  {openBio === index ? "Hide Bio" : "Meet the Board"}
                </button>

                {openBio === index && (
                  <p className="mt-6 whitespace-pre-line leading-7 text-slate-700 text-left">
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="bg-[#3A6B35] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold">Support the Mission</h2>
          <p className="mt-6 text-lg text-white/80">
            Donations help fund materials, tools, and volunteer service projects
            that directly assist people in need across Polk County.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur ring-1 ring-white/20">
              <div className="text-2xl font-bold text-[#C9A227]">$25.00</div>
              <div className="mt-2 font-semibold">Provide Supplies</div>
              <p className="mt-2 text-sm text-white/80">
                Helps cover basic project materials and small service needs.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur ring-1 ring-white/20">
              <div className="text-2xl font-bold text-[#C9A227]">$50.00</div>
              <div className="mt-2 font-semibold">Support Outreach</div>
              <p className="mt-2 text-sm text-white/80">
                Helps fund tools, fuel, and support costs for community service projects.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur ring-1 ring-white/20">
              <div className="text-2xl font-bold text-[#C9A227]">$100.00</div>
              <div className="mt-2 font-semibold">Fund a Project Need</div>
              <p className="mt-2 text-sm text-white/80">
                Helps support larger repair, cleanup, or assistance efforts for a family in need.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur ring-1 ring-white/20">
              <div className="text-2xl font-bold text-[#C9A227]">Sponsor a Project</div>
              <div className="mt-2 font-semibold">Make a Bigger Impact</div>
              <p className="mt-2 text-sm text-white/80">
                Give at a level that helps directly underwrite a full community service project.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-[#C9A227] px-8 py-4 text-lg font-semibold text-slate-900"
            >
              Donate Now
            </a>
            <p className="mt-4 text-sm text-white/75">
              100% Secure • Powered by Zeffy
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F3A5F]">Contact</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Left Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 text-left">
              <div className="text-sm font-semibold text-[#3A6B35] uppercase tracking-wide">Organization</div>
              <div className="mt-1 text-lg font-semibold text-[#1F3A5F]">Polk County Passion Project, Inc.</div>

              <div className="mt-6 text-sm font-semibold text-[#3A6B35] uppercase tracking-wide">Service Area</div>
              <div className="mt-1 text-lg font-semibold text-[#1F3A5F]">
                Serving the Lake Wales area in Polk County, Florida
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 text-left">
              <div className="text-sm font-semibold text-[#3A6B35] uppercase tracking-wide">Email</div>
              <a
                href="mailto:polkcountypassionproject@gmail.com"
                className="mt-1 block text-lg font-semibold text-[#1F3A5F] underline"
              >
                polkcountypassionproject@gmail.com
              </a>

              <div className="mt-6 text-sm font-semibold text-[#3A6B35] uppercase tracking-wide">Phone</div>
              <div className="mt-1 text-lg font-semibold text-[#1F3A5F]">863-458-1478</div>
            </div>
          </div>

          {/* Bottom Center Card */}
          <div className="mt-6 flex justify-center">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 max-w-xl w-full">
              <div className="text-sm font-semibold text-[#3A6B35] uppercase tracking-wide">Nonprofit Status</div>
              <div className="mt-1 text-lg font-semibold text-[#1F3A5F]">
                Registered 501(c)(3) nonprofit organization
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">
        © 2026 Polk County Passion Project, Inc. — Serving God and Community
      </footer>
    </div>
  );
}
