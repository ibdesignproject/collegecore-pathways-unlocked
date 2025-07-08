
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import LogoProcessor from "@/components/LogoProcessor";

const BookSession = () => {
  const mentors = [
    {
      id: 1,
      name: "Sarthak Ahuja",
      university: "University of Illinois Urbana-Champaign (UIUC)",
      major: "Computer Science",
      year: "Rising Freshman",
      introduction: "Hi! I'm Sarthak Ahuja, a rising freshman majoring in computer science at UIUC. I'm passionate about technology for a difference and supporting all of you highschool students through your journey to college.",
      specialties: ["Computer Science", "College Applications", "Technology"],
      calendlyLink: "https://calendly.com/sarthak-ahuja-mentor",
      hourlyRate: 20
    },
    {
      id: 2,
      name: "Pranav Patlola",
      university: "Cornell University",
      major: "Computer Science",
      year: "Rising Sophomore",
      introduction: "Hi! I'm Pranav Patlola, a rising sophomore majoring in computer science at Cornell University. I'm passionate about sharing my knowledge in robotics, programming, and innovation to others. Through mentoring, I hope to inspire students to explore, create, and grow in the tech world.",
      specialties: ["Computer Science", "Robotics", "Programming", "Innovation"],
      calendlyLink: "https://calendly.com/pranav-patlola-mentor",
      hourlyRate: 20
    },
    {
      id: 3,
      name: "Brian Jing",
      university: "UC San Diego (UCSD)",
      major: "Data Science",
      year: "Incoming Sophomore",
      introduction: "Hi, my name is Brian Jing and I'm an incoming sophomore at UC San Diego studying data science! I'm in Muir college at San Diego and currently doing a fellowship at a company called Klarbook. Please don't hesitate to reach out if you have any questions about UCSD or college in general.",
      specialties: ["Data Science", "UCSD", "College Applications"],
      calendlyLink: "https://calendly.com/brian-jing-mentor",
      hourlyRate: 20
    },
    {
      id: 4,
      name: "Tanvi Thodati",
      university: "University of Texas at Austin (UTA)",
      major: "Neuroscience and Plan II",
      year: "Graduate (2021)",
      introduction: "Hi there! My name is Thanvi, and I graduated from the University of Texas at Austin in 2021. I majored in Neuroscience and Plan II, with a minor in Anthropology. I was also a pre-medical student. I know applying to and planning for college can be overwhelming, and I always encourage students to just focus on being themselves and taking this time to really explore what they're interested in! Confidence and curiosity goes a long way!",
      specialties: ["Neuroscience", "Pre-Med", "Anthropology", "College Planning"],
      calendlyLink: "https://calendly.com/tanvi-thodati-mentor",
      hourlyRate: 20
    },
    {
      id: 5,
      name: "Pranith Bollampally",
      university: "San Diego State University (SDSU)",
      major: "Computer Science",
      year: "Incoming Sophomore",
      introduction: "Hi! I'm Pranith Bollampally, an incoming sophomore majoring in Computer Science at San Diego State University. I'm passionate about artificial intelligence and software development, and I enjoy building creative tech solutions and working on projects that make a real-world impact.",
      specialties: ["Computer Science", "AI", "Software Development"],
      calendlyLink: "https://calendly.com/pranith-bollampally-mentor",
      hourlyRate: 20
    },
    {
      id: 6,
      name: "Vishal Bansal",
      university: "UC Berkeley (UCB)",
      major: "Tech",
      year: "Recent Graduate",
      introduction: "HI! I'm Vishal Bansal, and I recently graduated from UC Berkley, I am a passionate tech enthusiast and am excited to support you in your college decision making and application journey.",
      specialties: ["Technology", "UC Berkeley", "College Applications"],
      calendlyLink: "https://calendly.com/vishal-bansal-mentor",
      hourlyRate: 20
    },
    {
      id: 7,
      name: "Khushi Bansal",
      university: "UC Berkeley (UCB)",
      major: "General",
      year: "Recent Graduate",
      introduction: "Hi! I'm Khushi Bansal, and I recently graduated from UC Berkley, and I can't wait to support all of you through college core!",
      specialties: ["UC Berkeley", "College Applications", "General Guidance"],
      calendlyLink: "https://calendly.com/khushi-bansal-mentor",
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
            Meet Our Student Mentors
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Connect with current college students volunteering to help you succeed. Book a personalized session for just $3.
          </p>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {mentor.introduction}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-900 text-xs">
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
            Choose a mentor that matches your goals and book your personalized session today for just $3.
          </p>
          <p className="text-gray-400">
            All sessions are conducted via video call and include personalized advice, 
            application review, and follow-up resources from current college students.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookSession;
