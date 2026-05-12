import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F8FAFC] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden border border-teal-500/10">

        <Image
  src="/hospital.png"
  alt="hospital"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>

<div className="absolute inset-0 bg-[#1E3A8A]/25" />

<div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/75 via-[#1E3A8A]/35 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_30%)]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl px-10 pt-[170px] pb-20 md:px-16 md:pt-[190px] flex flex-col justify-center min-h-screen">

          {/* LOGO */}
          <div className="absolute top-8 left-8 z-30">

            <div className="bg-[#1E3A8A]/35 backdrop-blur-md px-5 py-3 rounded-2xl border border-teal-400/10 inline-flex shadow-2xl">

              <Image
                src="/logo.png"
                alt="logo"
                width={180}
                height={50}
                priority
                className="object-contain brightness-125 w-auto h-auto"
              />

            </div>

          </div>

          {/* HEADLINE */}
          <h2 className="text-6xl md:text-7xl font-black leading-tight max-w-5xl tracking-tight">

            Smart Hospital

            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-blue-400">
              Operations Platform
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-10 text-slate-200 text-2xl leading-10 max-w-3xl">
            Streamline OPD, IPD Workflow,Bed Intelligence,Performance & insights
            <br />
            Smart Operations . Faster Discharge . Enhance patient experience
          </p>

          {/* HERO BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-14">

            <div className="flex flex-wrap gap-6 mt-8 text-sm md:text-base text-white/90">
  
  <div className="flex items-center gap-2">
    <span className="text-teal-400 text-lg">✓</span>
    <span>Real-time Discharge Tracking</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-teal-400 text-lg">✓</span>
    <span>WhatsApp Notifications</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-teal-400 text-lg">✓</span>
    <span>OPD + IPD Management</span>
  </div>

</div>

            <a
              href="https://wa.me/919270229127"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Book Free Demo
            </a>

            <a
              href="tel:+919270229127"
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      {/* CHALLENGE + SOLUTION */}
      <section className="grid md:grid-cols-2 border-x border-b border-teal-500/10">

        {/* CHALLENGE */}
        <div className="p-10 bg-gradient-to-br from-[#EFF6FF] to-[#ECFEFF] text-[#1E293B] border-r border-teal-500/10">

          <h2 className="text-4xl font-bold mb-6 text-[#1E3A8A]">
            The Healthcare Challenge
          </h2>

          <p className="text-slate-600 mb-8 leading-8">
            Hospitals face increasing pressure to deliver high-quality care while managing complex operations.
          </p>

          <div className="space-y-5 text-lg text-slate-700">

            <div>• Long patient wait times</div>
            <div>• Manual & repetitive processes</div>
            <div>• Communication gaps</div>
            <div>• Delayed discharges</div>
            <div>• Resource underutilization</div>
            <div>• Low patient satisfaction</div>

          </div>

          <div className="mt-10 bg-teal-500/10 border border-teal-400/20 p-5 rounded-2xl text-teal-700 shadow-lg">
            MediFlow solves these challenges with automation, visibility and real-time coordination.
          </div>

        </div>

        {/* SOLUTION */}
        <div className="p-10 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#0F172A]">

          <h2 className="text-4xl font-bold mb-8">
            Our Solution
          </h2>

          <p className="text-slate-200 mb-12 leading-8">
            MediFlow is an all-in-one SaaS platform that helps hospitals manage OPD, IPD and Discharge workflows seamlessly.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

            <Feature title="OPD Management" icon="🩺" />
            <Feature title="IPD Management" icon="🛏️" />
            <Feature title="Discharge Center" icon="📄" />
            <Feature title="Communication" icon="💬" />
            <Feature title="Analytics" icon="📊" />
            <Feature title="WhatsApp" icon="🟢" />

          </div>

        </div>

      </section>

      {/* PRICING SECTION */}
      <section className="bg-[#F8FAFC] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-slate-900">
              Simple & Transparent Pricing
            </h2>

            <div className="w-32 h-1 bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] mx-auto mt-5 rounded-full" />

            <p className="text-slate-600 mt-6 text-lg">
              Flexible plans designed for clinics, hospitals & healthcare chains.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* BASE */}
            <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300">

              <h3 className="text-2xl font-bold text-slate-900">
                Base
              </h3>

              <div className="mt-6">

                <span className="text-5xl font-bold text-slate-900">
                  ₹ 2,499
                </span>

                <span className="text-slate-500 text-lg">
                  /month
                </span>

              </div>

              <div className="space-y-4 mt-10 text-slate-700">

                <div>✓ OPD Management</div>
                <div>✓ IPD Management</div>
                <div>✓ Basic Reports</div>
                <div>✓ WhatsApp Notifications (Add Ons)</div>

              </div>

              <a
                href="https://wa.me/919270229127?text=Hi%20MediFlow%2C%20I%20want%20to%20know%20more%20about%20the%20Base%20plan."
                target="_blank"
                className="mt-12 w-full inline-flex items-center justify-center py-4 rounded-2xl bg-gradient-to-r from-[#14B8A6] to-[#0EA5E9] text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>

            </div>

            {/* STARTUP */}
            <div className="relative bg-white border-2 border-[#1E3A8A] rounded-3xl p-10 shadow-2xl scale-105">

              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Most Popular
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Startup
              </h3>

              <div className="mt-6">

                <span className="text-5xl font-bold text-slate-900">
                  ₹ 3,499
                </span>

                <span className="text-slate-500 text-lg">
                  /month
                </span>

              </div>

              <div className="space-y-4 mt-10 text-slate-700">

                <div>✓ All Base Features</div>
                <div>✓ Discharge Command Center</div>
                <div>✓ Advanced Reports</div>
                <div>✓ Priority Support</div>

              </div>

              <a
                href="https://wa.me/919270229127?text=Hi%20MediFlow%2C%20I%20want%20a%20demo%20for%20the%20Startup%20plan."
                target="_blank"
                className="mt-12 w-full inline-flex items-center justify-center py-4 rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                Book Demo
              </a>

            </div>

            {/* ENTERPRISE */}
            <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300">

              <h3 className="text-2xl font-bold text-slate-900">
                Enterprise
              </h3>

              <div className="mt-6">

                <span className="text-5xl font-bold text-slate-900">
                  Custom
                </span>

              </div>

              <div className="space-y-4 mt-10 text-slate-700">

                <div>✓ All Features</div>
                <div>✓ Custom Integrations</div>
                <div>✓ Dedicated Support</div>
                <div>✓ Onboarding & Training</div>

              </div>

              <a
                href="https://wa.me/919270229127?text=Hi%20MediFlow%2C%20I%20want%20enterprise%20pricing%20details."
                target="_blank"
                className="mt-12 w-full inline-flex items-center justify-center py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                Contact Sales
              </a>

            </div>

          </div>

        </div>

      </section>

            {/* FOOTER */}
      <section className="relative overflow-hidden border-x border-b border-teal-500/10">

        <div className="absolute inset-0">

          <Image
            src="/Healthcareteam.png"
            alt="team"
            fill
            sizes="100vw"
            className="object-cover opacity-55"
          />

        </div>

        <div className="relative z-10 p-14 bg-gradient-to-r from-[#1E3A8A]/80 via-[#2563EB]/65 to-[#0F172A]/70">

          <h2 className="text-5xl font-black max-w-2xl leading-tight">

            Let’s Build the Future
            <br />

            of{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
              Healthcare Together
            </span>

          </h2>

          <p className="mt-6 text-slate-200 text-lg max-w-2xl leading-8">
            Empower your hospital with MediFlow and deliver exceptional care every day.
          </p>
          <p className="mt-4 text-teal-200 text-sm tracking-wide uppercase">
            Trusted Digital Workflow Platform for Modern Hospitals
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <a
              href="https://wa.me/919270229127"
              target="_blank"
              className="bg-gradient-to-r from-teal-500 to-blue-700 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl"
            >
              Book a Demo
            </a>

            <a
              href="tel:+919270229127"
              className="border border-white/15 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-md"
            >
              Call +91 92702 29127
            </a>

          </div>

          {/* TERMS & PRIVACY */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">

            {/* PRIVACY POLICY */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold text-white mb-6">
                Privacy Policy
              </h3>

              <div className="space-y-4 text-slate-200 leading-7">

                <p>
                  MediFlow values patient privacy and healthcare data security.
                </p>

                <p>
                  All hospital and patient information is handled securely with controlled access and encrypted infrastructure wherever applicable.
                </p>

                <p>
                  We do not sell customer or patient data to third parties.
                </p>

                <p>
                  Hospitals are responsible for maintaining proper internal access control and compliance practices.
                </p>

                <p>
                  By using MediFlow, users agree to responsible and lawful usage of the platform.
                </p>

              </div>

            </div>

            {/* TERMS & CONDITIONS */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold text-white mb-6">
                Terms & Conditions
              </h3>

              <div className="space-y-4 text-slate-200 leading-7">

                <p>
                  MediFlow is a SaaS platform designed for healthcare workflow management.
                </p>

                <p>
                  Subscription plans are billed monthly or annually as agreed during onboarding.
                </p>

                <p>
                  Hospitals are responsible for accuracy of uploaded patient and operational data.
                </p>

                <p>
                  Unauthorized access attempts, misuse or reverse engineering of the platform are strictly prohibited.
                </p>

                <p>
                  MediFlow reserves the right to improve platform features, pricing and policies over time.
                </p>

              </div>

            </div>

          </div>

          {/* QUICK LINKS */}
          
          <div className="mt-14 flex flex-wrap gap-6 items-center text-slate-200">

            <span>🌐 www.themediflow.com</span>
            <span>✉ service@themediflow.com</span>
            <span>📞 +91 92702 29127</span>

          </div>

                    <div className="mt-10 border-t border-white/10 pt-6 text-slate-300 text-sm">
            © 2026 MediFlow. All rights reserved.
          </div>

        </div>

      </section>

    </main>
  );
}

function Feature({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-teal-400/10 rounded-3xl p-6 text-center hover:border-teal-300/40 hover:bg-white/15 transition-all duration-300 shadow-lg">

      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-300/20 mx-auto mb-5 flex items-center justify-center text-2xl shadow-lg">
        {icon}
      </div>

      <h3 className="font-semibold text-lg text-white">
        {title}
      </h3>

    </div>
  );
}