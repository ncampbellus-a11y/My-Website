import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Minus, PhoneCall, Target, Car } from "lucide-react";
import { Accordion } from "@/components/Accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Pricing() {
  return (
    <div className="w-full flex flex-col">
      {/* PAGE HEADER */}
      <section className="bg-[#1a2b45] text-white pt-24 pb-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="text-[#7eb3e8] font-bold text-sm tracking-wider uppercase mb-4">
              Transparent Pricing
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl mb-6">
              Simple, Straightforward AI Pricing
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#a0aec0] text-xl leading-relaxed">
              Invest in the systems that match your goals. No hidden fees. No long-term lock-in.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #2563a8, #b8872a)" }} />
      </section>

      {/* PRICING CARDS */}
      <section className="px-6 relative -mt-16 z-20 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-lg border border-border p-8 flex flex-col h-full mt-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-[#1a2b45]">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-2xl font-serif text-[#1a2b45] mb-3">AI Receptionist</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">Never miss another inbound call. Your AI answers, qualifies, schedules, and reports.</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-[#1a2b45]">$249</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-xs text-muted-foreground mb-8">Setup fee may apply</p>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {[
                  "Answers 100% of inbound calls, 24/7",
                  "Collects caller info and intent",
                  "Books and confirms appointments",
                  "Post-call summary reports",
                  "FAQ handling and call routing",
                  "Fully branded to your business"
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="text-[#b8872a] mt-0.5 shrink-0" size={16} />
                    <span className="text-[#1e2d3d]">{f}</span>
                  </li>
                ))}
              </ul>
              
              <a href="mailto:hello@clarevai.com" className="w-full block text-center border-2 border-[#1a2b45] text-[#1a2b45] font-semibold py-3 rounded-md hover:bg-gray-50 transition-colors">
                Get Started
              </a>
            </motion.div>

            {/* Card 2 - FEATURED */}
            <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-2xl border-2 border-[#2563a8] p-8 flex flex-col h-full relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2563a8] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                Most Popular
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#2563a8]">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-serif text-[#1a2b45] mb-3">AI Lead Response</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">Respond to every lead instantly — qualify, nurture, and book appointments on autopilot.</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-[#1a2b45]">$499</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-xs text-muted-foreground mb-8">Setup fee may apply</p>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {[
                  "Instant SMS, email, and chat response",
                  "Smart lead qualification questions",
                  "Automated appointment scheduling",
                  "Follow-up sequences until conversion",
                  "Performance reporting dashboard",
                  "CRM and calendar integration"
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="text-[#2563a8] mt-0.5 shrink-0" size={16} />
                    <span className="text-[#1e2d3d]">{f}</span>
                  </li>
                ))}
              </ul>
              
              <a href="mailto:hello@clarevai.com" className="w-full block text-center bg-[#1a2b45] text-white font-semibold py-3 rounded-md hover:bg-[#1a2b45]/90 transition-colors">
                Get Started
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-lg border border-border p-8 flex flex-col h-full mt-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-[#1a2b45]">
                <Car size={24} />
              </div>
              <h3 className="text-2xl font-serif text-[#1a2b45] mb-3">AI Auto Sourcing</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">Auction intelligence that finds, scores, and de-risks every vehicle purchase before you bid.</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-[#1a2b45]">$1,000</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-xs text-muted-foreground mb-8">Setup fee may apply</p>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {[
                  "Multi-platform auction sourcing",
                  "KBB & MMR price benchmarking",
                  "Retail price and profit projection",
                  "Repair cost estimates by condition",
                  "Full vehicle history analysis",
                  "Risk flags and Deal Score (0-100)"
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="text-[#2563a8] mt-0.5 shrink-0" size={16} />
                    <span className="text-[#1e2d3d]">{f}</span>
                  </li>
                ))}
              </ul>
              
              <a href="mailto:hello@clarevai.com" className="w-full block text-center border-2 border-[#1a2b45] text-[#1a2b45] font-semibold py-3 rounded-md hover:bg-gray-50 transition-colors">
                Get Started
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CUSTOM BANNER */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-[#1a2b45] rounded-xl p-10 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          >
            <div className="max-w-2xl">
              <h3 className="text-3xl font-serif mb-4">Customized AI Assistants</h3>
              <p className="text-[#a0aec0] text-lg leading-relaxed">
                Need something built around your specific workflow? We design and deploy bespoke AI systems — from internal ops automation to custom chatbots and lead nurture sequences. Pricing varies by scope.
              </p>
            </div>
            <a 
              href="mailto:hello@clarevai.com?subject=Custom AI Assistant Inquiry" 
              className="whitespace-nowrap border-2 border-white text-white px-8 py-3.5 rounded-md font-medium hover:bg-white hover:text-[#1a2b45] transition-colors"
            >
              Schedule a Call to Discuss
            </a>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-white py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="text-[#2563a8] font-bold text-sm tracking-wider uppercase mb-4">
              Compare Plans
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45]">
              What's Included in Each
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-border font-serif text-lg text-[#1a2b45] min-w-[250px]">Feature</th>
                  <th className="p-4 border-b-2 border-border font-serif text-lg text-[#1a2b45] text-center w-[180px]">AI Receptionist<br/><span className="text-sm text-muted-foreground font-sans font-normal">($249/mo)</span></th>
                  <th className="p-4 border-b-2 border-[#2563a8] font-serif text-lg text-[#2563a8] text-center w-[180px]">Lead Response<br/><span className="text-sm text-[#2563a8]/70 font-sans font-normal">($499/mo)</span></th>
                  <th className="p-4 border-b-2 border-border font-serif text-lg text-[#1a2b45] text-center w-[180px]">Auto Sourcing<br/><span className="text-sm text-muted-foreground font-sans font-normal">($1,000/mo)</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["24/7 Availability", true, true, true],
                  ["Inbound Call Handling", true, false, false],
                  ["Appointment Scheduling", true, true, false],
                  ["Lead Qualification", false, true, false],
                  ["SMS & Email Outreach", false, true, false],
                  ["CRM Integration", true, true, false],
                  ["Auction Sourcing", false, false, true],
                  ["KBB/MMR Benchmarking", false, false, true],
                  ["Deal Score", false, false, true],
                  ["Risk Flag Analysis", false, false, true],
                  ["Reporting & Analytics", true, true, true],
                  ["Onboarding Support", true, true, true]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 border-b border-border text-[#1e2d3d] font-medium">{row[0]}</td>
                    <td className="p-4 border-b border-border text-center">
                      {row[1] ? <Check className="mx-auto text-[#2563a8]" size={20} /> : <Minus className="mx-auto text-gray-300" size={20} />}
                    </td>
                    <td className="p-4 border-b border-border text-center bg-blue-50/30">
                      {row[2] ? <Check className="mx-auto text-[#2563a8]" size={20} /> : <Minus className="mx-auto text-gray-300" size={20} />}
                    </td>
                    <td className="p-4 border-b border-border text-center">
                      {row[3] ? <Check className="mx-auto text-[#2563a8]" size={20} /> : <Minus className="mx-auto text-gray-300" size={20} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* PRICING FAQ */}
      <section className="bg-[#e8eaed] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="text-[#2563a8] font-bold text-sm tracking-wider uppercase mb-4">
              Pricing FAQ
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45]">
              Questions About Pricing
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Accordion items={[
              { question: "Are there any setup fees?", answer: "A one-time setup fee may apply depending on the complexity of your integration and customization requirements. This will always be discussed and agreed upon before any work begins." },
              { question: "Can I combine multiple services?", answer: "Absolutely. Many clients run two or three services together — for example, the AI Lead Response System and AI Receptionist pair very naturally. Contact us and we'll discuss a bundled arrangement that fits your budget." },
              { question: "Is there a long-term contract?", answer: "No long-term contracts are required. All services are billed monthly and you can cancel with 30 days notice. We believe our results speak for themselves." },
              { question: "How is the Customized AI Assistant priced?", answer: "Custom engagements are scoped individually based on your workflow complexity, number of integrations, and ongoing support needs. We'll provide a clear, itemized proposal after a discovery call — no surprises." }
            ]} />
          </motion.div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#2563a8] py-24 px-6 text-white text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl mb-6">
            Ready to Get Started?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/90 text-xl leading-relaxed mb-10">
            Reach out and we'll help you find the right solution for your business — and make sure it's running smoothly from day one.
          </motion.p>
          <motion.a 
            variants={fadeUp}
            href="mailto:hello@clarevai.com" 
            className="bg-white text-[#2563a8] px-10 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us Today
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
