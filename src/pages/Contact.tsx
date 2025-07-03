
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "General inquiries and support",
      contact: "hello@collegecore.com",
      action: "mailto:hello@collegecore.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team directly",
      contact: "(555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "Monday - Friday",
      contact: "9:00 AM - 6:00 PM EST",
      action: null
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in",
      contact: "Boston, MA",
      action: null
    }
  ];

  const socialCommunities = [
    {
      platform: "Instagram",
      handle: "@collegecore",
      description: "Daily tips and student spotlights",
      icon: Instagram,
      link: "https://instagram.com/collegecore"
    },
    {
      platform: "TikTok",
      handle: "@collegecore",
      description: "Quick college advice and trends",
      icon: MessageCircle,
      link: "https://tiktok.com/@collegecore"
    },
    {
      platform: "WhatsApp",
      handle: "CollegeCore Community",
      description: "Private group for announcements",
      icon: MessageCircle,
      link: "https://chat.whatsapp.com/collegecore"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                College<span className="text-blue-900">Core</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors">Home</Link>
              <Link to="/universities" className="text-gray-700 hover:text-blue-900 transition-colors">Universities</Link>
              <Link to="/book-session" className="text-gray-700 hover:text-blue-900 transition-colors">Book a Session</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors">About</Link>
              <Link to="/contact" className="text-blue-900 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about CollegeCore? Want to become a mentor? We're here to help you 
            navigate your college journey and would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                  {method.action ? (
                    <a 
                      href={method.action}
                      className="text-blue-900 hover:text-blue-700 font-semibold"
                    >
                      {method.contact}
                    </a>
                  ) : (
                    <div className="font-semibold text-gray-900">{method.contact}</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and FAQ */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ / Common Questions */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How do I become a mentor?</h4>
                    <p className="text-sm text-gray-600">
                      Current college students can apply through our mentor application process. 
                      We look for students with strong academic records and a passion for helping others.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What's included in a session?</h4>
                    <p className="text-sm text-gray-600">
                      Each 15-20 minute session includes personalized advice, Q&A time, and follow-up resources 
                      tailored to your specific college goals and questions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Is there a money-back guarantee?</h4>
                    <p className="text-sm text-gray-600">
                      Yes! If you're not satisfied with your session, we offer a full refund within 24 hours. 
                      Your success is our priority.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Can I schedule multiple sessions?</h4>
                    <p className="text-sm text-gray-600">
                      Absolutely! Many students work with multiple mentors or have follow-up sessions 
                      with the same mentor as they progress through their applications.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Communities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Join Our Social Communities</CardTitle>
                  <p className="text-gray-600">Connect with us on social media for daily tips and updates</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialCommunities.map((community, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <community.icon className="h-6 w-6 text-blue-900 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">{community.platform}</div>
                          <div className="text-sm text-gray-600">{community.description}</div>
                        </div>
                      </div>
                      <a 
                        href={community.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:text-blue-700 font-semibold text-sm"
                      >
                        Follow
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait to get the guidance you need. Book a session with one of our college mentors today.
          </p>
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800" asChild>
            <Link to="/book-session">Book Your First Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
