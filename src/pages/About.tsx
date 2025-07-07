
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Target, Users, TrendingUp } from "lucide-react";
import LogoProcessor from "@/components/LogoProcessor";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Harvard graduate passionate about democratizing college access. Previously worked in education policy."
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      bio: "Stanford CS graduate who believes in the power of peer-to-peer learning and mentorship."
    },
    {
      name: "Michael Chen",
      role: "Head of Community",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "MIT graduate focused on building supportive communities for students navigating college admissions."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Accessibility",
      description: "College guidance shouldn't be a luxury. We make expert advice affordable and accessible to all students."
    },
    {
      icon: Users,
      title: "Peer Connection",
      description: "Real experiences from real students. Our mentors have walked the path you're about to take."
    },
    {
      icon: Target,
      title: "Personalized Guidance",
      description: "Every student's journey is unique. We provide tailored advice that fits your specific goals and circumstances."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Make informed decisions backed by comprehensive data from Common Data Sets and real student experiences."
    }
  ];

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
              <Link to="/about" className="text-blue-900 font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission: Making College Dreams Accessible
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              CollegeCore was born from a simple belief: every student deserves access to quality college guidance, 
              regardless of their background or financial situation. We're here to bridge the gap between 
              where you are and where you want to be.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop" 
                alt="Students collaborating" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">The Problem We're Solving</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Traditional college counseling is expensive, often costing thousands of dollars, 
                  putting it out of reach for many families who need it most.
                </p>
                <p>
                  Generic advice doesn't work. Every student has unique circumstances, dreams, 
                  and challenges that require personalized guidance.
                </p>
                <p>
                  Current students have the most relevant, up-to-date insights about college life, 
                  applications, and what really matters in admissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              CollegeCore started when our founders realized that the college admissions process 
              had become increasingly complex and expensive, leaving many deserving students behind.
            </p>
            <p>
              Having navigated the admissions process themselves at top universities, they recognized 
              that the most valuable insights came not from expensive consultants, but from peers 
              who had recently gone through the same journey.
            </p>
            <p>
              What began as informal mentoring among friends has grown into a platform connecting 
              thousands of high school students with college mentors who understand their struggles, 
              dreams, and the realities of college life.
            </p>
            <p>
              Today, CollegeCore serves students from all backgrounds, providing affordable access 
              to personalized guidance, real insights, and a supportive community that believes 
              in every student's potential.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Passionate educators and innovators dedicated to your success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-blue-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-900 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">10,000+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">College Mentors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">85%</div>
              <div className="text-gray-600">Acceptance Rate to Top Choice</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">$50M+</div>
              <div className="text-gray-600">In Scholarships Earned</div>
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

export default About;
