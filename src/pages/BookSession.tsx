
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, Calendar, ExternalLink, User } from "lucide-react";
import { Link } from "react-router-dom";
import LogoProcessor from "@/components/LogoProcessor";

const BookSession = () => {
  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      university: "Harvard University",
      major: "Computer Science",
      year: "Senior",
      rating: 4.9,
      reviews: 127,
      location: "Cambridge, MA",
      introduction: "Hey there! I'm Sarah, a senior at Harvard studying Computer Science. I've helped over 100 students with college applications, essays, and navigating the admissions process. I specialize in STEM applications and can share insights about Ivy League admissions.",
      specialties: ["College Applications", "Essay Review", "STEM Programs", "Ivy League"],
      calendlyLink: "https://calendly.com/sarah-chen-mentor",
      hourlyRate: 20
    },
    {
      id: 2,
      name: "Marcus Johnson",
      university: "Stanford University",
      major: "Business Administration",
      year: "Junior",
      rating: 4.8,
      reviews: 89,
      location: "Palo Alto, CA",
      introduction: "Hi! I'm Marcus, currently studying Business at Stanford. I'm passionate about helping students discover their potential and navigate the college journey. I focus on business school applications, entrepreneurship, and leadership development.",
      specialties: ["Business School Prep", "Leadership Development", "Entrepreneurship", "Career Guidance"],
      calendlyLink: "https://calendly.com/marcus-johnson-mentor",
      hourlyRate: 20
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      university: "MIT",
      major: "Bioengineering",
      year: "Graduate Student",
      rating: 5.0,
      reviews: 156,
      location: "Cambridge, MA",
      introduction: "Hello! I'm Emily, a graduate student in Bioengineering at MIT. With my experience in both undergraduate and graduate admissions, I can help you with technical program applications, research opportunities, and academic planning.",
      specialties: ["Graduate School Prep", "Research Programs", "Bioengineering", "Academic Planning"],
      calendlyLink: "https://calendly.com/emily-rodriguez-mentor",
      hourlyRate: 20
    },
    {
      id: 4,
      name: "David Kim",
      university: "University of California, Berkeley",
      major: "Economics & Political Science",
      year: "Senior",
      rating: 4.7,
      reviews: 73,
      location: "Berkeley, CA",
      introduction: "Hi everyone! I'm David, double majoring in Economics and Political Science at UC Berkeley. I love helping students with college planning, scholarship applications, and finding the right fit for their academic and career goals.",
      specialties: ["College Planning", "Scholarship Applications", "Economics Programs", "Public Policy"],
      calendlyLink: "https://calendly.com/david-kim-mentor",
      hourlyRate: 20
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
              <Link to="/book-session" className="text-blue-900 font-medium">Book a Session</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Meet Our Expert Mentors
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Connect with current college students who understand your journey. Book a personalized session for just $20.
          </p>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="shadow-lg border-none hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-blue-100 text-blue-900 text-lg font-semibold">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{mentor.name}</CardTitle>
                      <p className="text-blue-900 font-semibold">{mentor.university}</p>
                      <p className="text-gray-600">{mentor.major} • {mentor.year}</p>
                      <div className="flex items-center mt-2 space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{mentor.rating}</span>
                          <span className="ml-1 text-sm text-gray-500">({mentor.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{mentor.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {mentor.introduction}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-900">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      ${mentor.hourlyRate}/session
                    </div>
                    <Button 
                      className="bg-blue-900 hover:bg-blue-800"
                      onClick={() => window.open(mentor.calendlyLink, '_blank')}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose a mentor that matches your goals and book your personalized session today.
          </p>
          <p className="text-gray-400">
            All sessions are conducted via video call and include personalized advice, 
            application review, and follow-up resources.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookSession;
