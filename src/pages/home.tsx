import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Accordion } from "@/components/Accordion";
import { CheckCircle2, Mail, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-72px)] bg-white flex flex-col justify-center overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center max-w-4xl"
          >
            <motion.div variants={fadeUp} className="bg-blue-50 text-[#2563a8] font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 border border-blue-100">
              AI-Powered Business Automation
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl text-[#1a2b45] leading-[1.1] mb-6">
              Turn Every Lead Into <br className="hidden md:block"/>
              <span className="italic text-[#2563a8]">Revenue.</span> On Autopilot.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              ClarevAI deploys intelligent automation that responds to leads instantly, answers every call, and sources profitable deals — so you never miss an opportunity again.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/#contact" 
                className="bg-[#1a2b45] text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-[#1a2b45]/90 transition-all shadow-md flex-1 sm:flex-none text-center"
              >
                Let's Talk About Your Business
              </Link>
              <Link 
                href="/services" 
                className="bg-white text-[#1a2b45] border border-border px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-50 transition-all flex-1 sm:flex-none text-center"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-border mt-auto bg-white/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
              <div className="px-4 text-center">
                <div className="text-3xl font-serif font-bold text-[#1a2b45]">340%</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">Faster Lead Response</div>
              </div>
              <div className="px-4 text-center">
                <div className="text-3xl font-serif font-bold text-[#1a2b45]">24/7</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">Always-On Coverage</div>
              </div>
              <div className="px-4 text-center">
                <div className="text-3xl font-serif font-bold text-[#1a2b45]">2x</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">Booked Appointments</div>
              </div>
              <div className="px-4 text-center">
                <div className="text-3xl font-serif font-bold text-[#1a2b45]">60%</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">Reduced Operating Cost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stripe */}
        <div className="h-[6px] w-full" style={{ background: "linear-gradient(90deg, #2563a8, #b8872a)" }} />
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="bg-[#1a2b45] py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-12 md:gap-24"
          >
            <div className="md:w-1/3 flex flex-col">
              <motion.div variants={fadeUp} className="text-[#7eb3e8] font-bold text-sm tracking-wider uppercase mb-4">
                The Problem
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl mb-6">
                Businesses Bleed Revenue Without Knowing It
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#a0aec0] text-lg leading-relaxed">
                Every unanswered call, slow lead response, and missed follow-up is money walking out the door.
              </motion.p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Speed-to-Lead is Everything", text: "78% of customers buy from the first business that responds. Waiting hours — or days — kills your close rate." },
                { title: "Missed Calls = Missed Revenue", text: "The average business misses 1 in 4 inbound calls. No answer means they call your competitor next." },
                { title: "Manual Sourcing is Slow & Risky", text: "Hours spent analyzing auction listings, running comps, and estimating profits — by hand, every time." },
                { title: "Follow-Up Falls Through Cracks", text: "Most deals are lost not at first contact — but in the follow-up that never happened. Automation fixes this." }
              ].map((card, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-[#213554] p-8 rounded-lg border-l-4 border-[#b8872a] shadow-lg">
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-[#a0aec0] leading-relaxed">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section className="bg-[#f2f3f5] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="text-[#2563a8] font-bold text-sm tracking-wider uppercase mb-4">
              Our Services
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45] mb-6">
              AI Systems Built to Perform While You Sleep
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
              Three powerful AI solutions — and a suite of custom assistants — designed to automate the work that costs you deals every day.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              { title: "AI Lead Response System", text: "Responds to every new lead instantly via SMS, email, or chat — qualifying, nurturing, and booking appointments automatically.", link: "/services#lead" },
              { title: "AI Receptionist", text: "Answers every inbound call 24/7, collects caller information, schedules bookings, and sends your team a full post-call report.", link: "/services#receptionist" },
              { title: "AI Auto Sourcing Agent", text: "Sources vehicles from auction, benchmarks against KBB & MMR, estimates profit, flags risk, and delivers a Deal Score™ for every unit.", link: "/services#auto" }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white border-t-[3px] border-t-[#2563a8] rounded-b-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <h3 className="text-2xl font-serif text-[#1a2b45] mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow mb-6">{service.text}</p>
                <Link href={service.link} className="text-[#2563a8] font-semibold hover:underline inline-flex items-center gap-1 w-max">
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-12">
            <Link href="/services" className="bg-[#1a2b45] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#1a2b45]/90 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="text-[#2563a8] font-bold text-sm tracking-wider uppercase mb-4">
              The Process
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45] mb-6">
              Up & Running in Days, Not Months
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
              No complex tech. No lengthy onboarding. We handle everything from setup to go-live.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            {[
              { num: "01", title: "Discovery Call", text: "We audit your current lead flow, identify gaps, and map the exact automations that will move the needle for your business." },
              { num: "02", title: "Build & Integrate", text: "Our team configures and connects your AI systems to your existing tools — CRM, calendar, phone, website — in days." },
              { num: "03", title: "Launch & Scale", text: "Your AI goes live. We monitor performance, tune responses, and keep optimizing as your business grows." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#f2f3f5] border border-border rounded-xl p-10 text-center relative overflow-hidden group hover:border-[#2563a8]/30 transition-colors">
                <div className="absolute top-[-20px] right-[-10px] text-8xl font-serif font-bold text-black/5 select-none pointer-events-none transition-transform group-hover:scale-110">
                  {step.num}
                </div>
                <h3 className="text-2xl font-serif text-[#1a2b45] mb-4 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="bg-[#e8eaed] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="text-[#2563a8] font-bold text-sm tracking-wider uppercase mb-4">
              Proof It Works
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45] mb-6">
              Real Results for Real Businesses
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
              Our clients don't just automate — they grow.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { stat: "340%", label: "Faster lead response time" },
              { stat: "2.4x", label: "More booked appointments" },
              { stat: "0", label: "Missed calls with AI Receptionist" },
              { stat: "87%", label: "Deal Score accuracy rate" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-lg shadow-sm text-center flex flex-col justify-center">
                <div className="text-4xl font-serif font-bold text-[#2563a8] mb-2">{stat.stat}</div>
                <div className="text-sm font-medium text-[#1a2b45]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { quote: "ClarevAI set up our lead response system in under a week. Within 30 days our contact rate went from 40% to over 85%. It's the best investment we've made.", author: "Marcus R., Owner", company: "Prestige Auto Group" },
              { quote: "The AI receptionist never misses a call. My team used to spend 2 hours a day on the phone just booking appointments. Now it's completely hands-free.", author: "Tanya J., Founder", company: "Elite Med Spa" },
              { quote: "The Auto Sourcing Agent paid for itself on the first deal. It caught a flood-damage risk flag I would have missed and saved me from a $6,000 mistake.", author: "Devon K., Independent Auto Dealer", company: "" }
            ].map((testimonial, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-r-lg border-l-[3px] border-l-[#b8872a] shadow-sm flex flex-col">
                <p className="text-[#1e2d3d] italic leading-relaxed flex-grow mb-6 text-lg">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-[#1a2b45]">{testimonial.author}</div>
                  {testimonial.company && <div className="text-sm text-muted-foreground">{testimonial.company}</div>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="text-[#2563a8] font-bold text-sm tracking-wider uppercase mb-4">
              FAQ
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45]">
              Common Questions
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Accordion items={[
              { question: "How quickly can ClarevAI be up and running?", answer: "Most clients are live within 5-10 business days. The Lead Response System and AI Receptionist can typically launch in under a week once we complete onboarding." },
              { question: "Do I need any technical knowledge to use this?", answer: "None at all. We handle the full setup, integration, and configuration. You get a working system — not a DIY tool to figure out on your own." },
              { question: "Will the AI sound robotic to my customers?", answer: "No. We customize the tone, language, and personality to match your brand. The AI Receptionist uses natural voice technology that most callers can't distinguish from a human agent." },
              { question: "How does the Auto Sourcing Deal Score work?", answer: "The Deal Score is a 0-100 composite rating calculated from KBB, MMR, estimated retail price, projected profit margin, repair costs, vehicle history, and risk flags. Scores above 75 indicate strong buys; below 50 signal elevated risk." },
              { question: "Can ClarevAI integrate with my existing CRM or tools?", answer: "Yes. We integrate with most major CRMs (GoHighLevel, HubSpot, Salesforce, etc.), calendaring tools (Google, Calendly), and phone systems. Custom integrations are available on request." }
            ]} />
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactSection />
    </div>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", business: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.business.trim()) e.business = "Business name is required.";
    if (!form.service) e.service = "Please select a service.";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    if (serverError) setServerError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-[#2563a8] py-20 px-6">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: headline + info */}
          <div className="text-white">
            <motion.div variants={fadeUp} className="text-[#7eb3e8] font-bold text-xs tracking-widest uppercase mb-4">
              Get In Touch
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Put AI to Work?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg leading-relaxed mb-10">
              Schedule a complimentary consultation. We'll identify exactly which AI systems will have the greatest impact on your business — at no cost and no obligation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-[#7eb3e8] flex-shrink-0" />
                <a href="mailto:hello@clarevai.com" className="hover:text-white transition-colors">hello@clarevai.com</a>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#7eb3e8] flex-shrink-0 mt-0.5" />
                <span>Free consultation — no pressure, no jargon</span>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#7eb3e8] flex-shrink-0 mt-0.5" />
                <span>Live within 5–10 business days</span>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#7eb3e8] flex-shrink-0 mt-0.5" />
                <span>No long-term contracts required</span>
              </div>
            </motion.div>
          </div>

          {/* Right: form card */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4" data-testid="contact-success">
                <CheckCircle2 className="w-14 h-14 text-[#2563a8]" />
                <h3 className="font-serif text-2xl font-bold text-[#1a2b45]">Message Received!</h3>
                <p className="text-[#5a6a7a] leading-relaxed">
                  Thanks for reaching out, <strong className="text-[#1a2b45]">{form.name}</strong>. We'll be in touch within one business day to schedule your consultation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", business: "", service: "", message: "" }); }}
                  className="mt-2 text-sm text-[#2563a8] font-semibold hover:underline"
                  data-testid="contact-reset-button"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate data-testid="contact-form" className="flex flex-col gap-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1a2b45] mb-1">Tell Us About Your Business</h3>
                  <p className="text-sm text-[#5a6a7a]">We'll get back to you within one business day.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1e2d3d] mb-1.5">Your Name</label>
                    <input
                      id="name" name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#1e2d3d] placeholder-[#aab4be] outline-none transition-colors focus:border-[#2563a8] focus:ring-2 focus:ring-[#2563a8]/20 ${errors.name ? "border-red-400" : "border-[#d0d5dc]"}`}
                      data-testid="input-name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1e2d3d] mb-1.5">Email Address</label>
                    <input
                      id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="jane@yourbusiness.com"
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#1e2d3d] placeholder-[#aab4be] outline-none transition-colors focus:border-[#2563a8] focus:ring-2 focus:ring-[#2563a8]/20 ${errors.email ? "border-red-400" : "border-[#d0d5dc]"}`}
                      data-testid="input-email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-[#1e2d3d] mb-1.5">Business Name</label>
                  <input
                    id="business" name="business" type="text" value={form.business} onChange={handleChange}
                    placeholder="Acme Auto Group"
                    className={`w-full px-4 py-2.5 rounded-md border text-sm text-[#1e2d3d] placeholder-[#aab4be] outline-none transition-colors focus:border-[#2563a8] focus:ring-2 focus:ring-[#2563a8]/20 ${errors.business ? "border-red-400" : "border-[#d0d5dc]"}`}
                    data-testid="input-business"
                  />
                  {errors.business && <p className="text-red-500 text-xs mt-1">{errors.business}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[#1e2d3d] mb-1.5">Service Interest</label>
                  <select
                    id="service" name="service" value={form.service} onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-md border text-sm outline-none transition-colors focus:border-[#2563a8] focus:ring-2 focus:ring-[#2563a8]/20 bg-white ${form.service ? "text-[#1e2d3d]" : "text-[#aab4be]"} ${errors.service ? "border-red-400" : "border-[#d0d5dc]"}`}
                    data-testid="select-service"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="lead-response">AI Lead Response System — $499/mo</option>
                    <option value="receptionist">AI Receptionist — $249/mo</option>
                    <option value="auto-sourcing">AI Auto Sourcing Agent — $1,000/mo</option>
                    <option value="multiple">Multiple Services / Bundle</option>
                    <option value="custom">Custom AI Assistant</option>
                    <option value="unsure">Not Sure Yet — Help Me Decide</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1e2d3d] mb-1.5">
                    Message <span className="text-[#5a6a7a] font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message" name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us a bit about your business and what you're hoping to improve..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-md border border-[#d0d5dc] text-sm text-[#1e2d3d] placeholder-[#aab4be] outline-none transition-colors focus:border-[#2563a8] focus:ring-2 focus:ring-[#2563a8]/20 resize-none"
                    data-testid="input-message"
                  />
                </div>

                {serverError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-2.5" data-testid="contact-server-error">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1a2b45] text-white py-3 rounded-md font-semibold text-sm hover:bg-[#2563a8] transition-colors shadow-sm mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                  data-testid="button-contact-submit"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>

                <p className="text-xs text-center text-[#5a6a7a]">
                  Or email us directly at{" "}
                  <a href="mailto:ncampbellus@gmail.com" className="text-[#2563a8] font-medium hover:underline">ncampbellus@gmail.com</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
