import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  MessageCircle,
  ExternalLink,
  Send,
  Heart,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Social() {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@primestudio000",
      url: "https://instagram.com/primestudio000",
      icon: Instagram,
      color: "from-pink-500 to-purple-500",
      description: "Follow us for design inspiration, tips, and behind-the-scenes content",
      action: "Follow Us"
    },
    {
      name: "Email",
      handle: "primestudio149@gmail.com",
      url: "mailto:primestudio149@gmail.com",
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
      description: "Have a question? Drop us an email and we'll get back to you within 24 hours",
      action: "Send Email"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/10 to-black" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

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
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-blue-300 font-medium">Let's Connect</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-pink-200 bg-clip-text text-transparent">
                Connect With Us
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              Follow our journey, get inspired, and stay updated with our latest work
            </p>
          </motion.div>
        </section>

        {/* Social Links Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{social.name}</h3>
                    <p className="text-blue-400 mb-4">{social.handle}</p>
                    <p className="text-gray-400 mb-6">{social.description}</p>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button className={`w-full bg-gradient-to-r ${social.color} hover:opacity-90 text-white border-0 group`}>
                        {social.action}
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Info Card */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-white/10 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3>
                  <p className="text-gray-400">We'd love to hear from you!</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a href="mailto:primestudio149@gmail.com" className="hover:text-white transition-colors">
                      primestudio149@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-300">
                    <Instagram className="w-5 h-5 text-pink-400" />
                    <a href="https://instagram.com/primestudio000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      @primestudio000
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-300">
                    <span className="text-xl">📍</span>
                    <span>Based in India</span>
                  </div>
                </div>

                <div className="text-center">
                  <Link to={createPageUrl("Booking")}>
                    <Button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white border-0 h-12 px-8 text-lg group">
                      Book a Consultation
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* DM Us Section */}
        <section className="container mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative backdrop-blur-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-pink-400" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Have an Idea?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                DM us on Instagram with your project idea and let's create something amazing together!
              </p>
              <a
                href="https://instagram.com/primestudio000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 h-14 px-8 text-lg group">
                  <Send className="mr-2 w-5 h-5" />
                  Send Us a Message
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
