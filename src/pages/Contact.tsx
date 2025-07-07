
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import LogoProcessor from "@/components/LogoProcessor";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 College Ave, Suite 400\nNew York, NY 10001"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@collegecore.com"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Fri: 9am - 5pm EST"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <LogoProcessor 
                  originalSrc="/lovable-uploads/746c5949-bbcb-4899-8630-0088239dc95d.png"
                  alt="CollegeCore" 
                  className="h-16 w-auto object-contain" 
                />
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

      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We'd love to hear from you! Whether you have questions about our services, 
            want to become a mentor, or just want to say hello, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {contactInfo.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <item.icon className="h-6 w-6 text-blue-900 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Send us a Message
          </h2>
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Name
                  </Label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Email
                  </Label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <Button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with college mentors who understand your path for just $20 per session.
          </p>
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800" asChild>
            <Link to="/book-session">Book a Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
