import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Code,
  Palette,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Heart,
  Zap
} from "lucide-react";

export default function About() {
  const team = [
    { name: "Lead Developer", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "UI/UX Designer", icon: Palette, color: "from-pink-500 to-purple-500" },
    { name: "Frontend Specialist", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "Project Manager", icon: Target, color: "from-green-500 to-emerald-500" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Client First",
      description: "Your satisfaction is our top priority. We listen, understand, and deliver exactly what you need."
    },
    {
      icon: Zap,
      title: "Speed & Quality",
      description: "Fast delivery without compromising on quality. Professional websites in 3-5 days."
    },
    {
      icon: Target,
      title: "Affordable Excellence",
      description: "Premium quality websites at prices that won't break the bank. Starting from just ₹500."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discuss",
      description: "We start by understanding your vision, goals, and requirements. Share your ideas and we'll help shape them.",
      icon: "💬"
    },
    {
      step: "02",
      title: "Design",
      description: "Our designers create stunning mockups and prototypes that bring your vision to life before development.",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Develop",
      description: "Clean, efficient code that's responsive, fast, and SEO-friendly. Built with modern web technologies.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Deliver",
      description: "Thorough testing, final revisions, and smooth launch. Plus ongoing support whenever you need it.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/10 to-black" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20 border border-blue-500/30"
            >
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Meet Prime Studio</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-pink-200 bg-clip-text text-transparent">
                About Prime Studio
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
              Prime Studio is a team of <span className="text-white font-semibold">4 creative developers</span> passionate 
              about building fast, elegant, and responsive websites.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              We focus on giving every client a unique digital identity at an affordable price. 
              Whether you're a small business, freelancer, or entrepreneur, we're here to help you shine online.
            </p>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-white/10 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To design <span className="text-white font-semibold">professional, affordable, and modern websites</span> for everyone. 
                  We believe that every business and individual deserves a stunning online presence, 
                  regardless of budget constraints.
                </p>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Quality First</p>
                      <p className="text-sm text-gray-400">Never compromise on excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Client Success</p>
                      <p className="text-sm text-gray-400">Your growth is our goal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Innovation</p>
                      <p className="text-sm text-gray-400">Always learning, evolving</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Creative Team
            </h2>
            <p className="text-gray-400 text-lg">
              Four passionate professionals working together to create digital magic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <member.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What We Stand For
            </h2>
            <p className="text-gray-400 text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-gray-400 text-lg">
              How we transform your vision into reality
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex items-center gap-4 md:flex-shrink-0">
                        <div className="text-5xl">{step.icon}</div>
                        <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-pink-500/5" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Ready to take your online presence to the next level? Book a consultation with our team today.
              </p>
              <Link to={createPageUrl("Booking")}>
                <Button className="h-14 px-8 text-lg bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-blue-500/30 hover:shadow-pink-500/40 transition-all duration-300 group">
                  Book Your Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
