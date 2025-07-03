
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, DollarSign, Star, MapPin, BookOpen } from "lucide-react";

const BookSession = () => {
  const mentors = [
    {
      name: "Sarah Chen",
      university: "MIT",
      year: "Junior",
      major: "Computer Science",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Passionate about helping students navigate STEM admissions. Got into MIT with a focus on research and coding projects.",
      rating: 4.9,
      sessionsCompleted: 127,
      price: 20,
      availability: "Mon-Fri 7-9 PM EST",
      specialties: ["STEM Applications", "Research Experience", "Coding Projects", "Interview Prep"],
      calendlyLink: "https://calendly.com/sarah-chen-collegecore"
    },
    {
      name: "Marcus Johnson",
      university: "Cornell University",
      year: "Senior",
      major: "Business Administration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Transferred from community college to Cornell. Specializing in business school applications and scholarship strategies.",
      rating: 4.8,
      sessionsCompleted: 89,
      price: 20,
      availability: "Tue, Thu, Sat 6-10 PM EST",
      specialties: ["Business School Apps", "Transfer Applications", "Scholarships", "Community College Path"],
      calendlyLink: "https://calendly.com/marcus-johnson-collegecore"
    },
    {
      name: "Emily Rodriguez",
      university: "UC Berkeley",
      year: "Sophomore",
      major: "Psychology & Pre-Med",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "First-generation college student who navigated the UC system successfully. Passionate about pre-med and psychology paths.",
      rating: 5.0,
      sessionsCompleted: 156,
      price: 20,
      availability: "Daily 8-10 PM PST",
      specialties: ["UC Applications", "Pre-Med Track", "First-Gen Support", "Psychology Programs"],
      calendlyLink: "https://calendly.com/emily-rodriguez-collegecore"
    },
    {
      name: "David Kim",
      university: "UPenn",
      year: "Junior",
      major: "Economics & Finance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Wharton student with experience in finance internships. Helps with Ivy League applications and business-focused essays.",
      rating: 4.9,
      sessionsCompleted: 203,
      price: 20,
      availability: "Mon, Wed, Fri 7-9 PM EST",
      specialties: ["Ivy League Apps", "Wharton Business", "Finance Career Prep", "Essay Writing"],
      calendlyLink: "https://calendly.com/david-kim-collegecore"
    },
    {
      name: "Aisha Patel",
      university: "UIUC",
      year: "Senior",
      major: "Engineering",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      bio: "Engineering student with internship experience at top tech companies. Focuses on technical program applications.",
      rating: 4.8,
      sessionsCompleted: 91,
      price: 20,
      availability: "Weekends 10 AM - 4 PM CST",
      specialties: ["Engineering Programs", "Tech Internships", "State School Excellence", "Women in STEM"],
      calendlyLink: "https://calendly.com/aisha-patel-collegecore"
    },
    {
      name: "Jake Thompson",
      university: "UCSD",
      year: "Junior",
      major: "Bioengineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      bio: "Bioengineering student passionate about research and innovation. Helps with STEM applications and research positioning.",
      rating: 4.7,
      sessionsCompleted: 67,
      price: 20,
      availability: "Tue, Thu 8-10 PM PST",
      specialties: ["Bioengineering", "Research Applications", "UC System", "Lab Experience"],
      calendlyLink: "https://calendly.com/jake-thompson-collegecore"
    }
  ];

  const handleBookSession = (calendlyLink: string, mentorName: string) => {
    // In a real implementation, this would integrate with Calendly
    window.open(calendlyLink, '_blank');
    console.log(`Booking session with ${mentorName}`);
  };

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
              <Link to="/book-session" className="text-blue-900 font-medium">Book a Session</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book a Session with College Mentors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with current college students for personalized guidance. 15-20 minute Zoom calls 
            designed to answer your questions and provide real insights about college life and applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-blue-900" />
              15-20 minute sessions
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-blue-900" />
              Flexible scheduling
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-blue-900" />
              $20 per session
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-100"
                    />
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white">
                      {mentor.university}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {mentor.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {mentor.year} • {mentor.major}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Rating and Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{mentor.rating}</span>
                      <span className="ml-1 text-sm text-gray-600">
                        ({mentor.sessionsCompleted} sessions)
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-900">${mentor.price}</div>
                      <div className="text-xs text-gray-600">per session</div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {mentor.bio}
                  </p>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-900" />
                    {mentor.availability}
                  </div>

                  {/* Book Button */}
                  <Button 
                    className="w-full bg-blue-900 hover:bg-blue-800" 
                    onClick={() => handleBookSession(mentor.calendlyLink, mentor.name)}
                  >
                    Book Session with {mentor.name.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, secure, and effective mentoring sessions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Choose & Schedule</h3>
              <p className="text-gray-600">
                Select your mentor and book a convenient time slot through our integrated scheduling system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Secure Payment</h3>
              <p className="text-gray-600">
                Pay securely for your $20 session. Your payment is protected and processed safely.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Get Guidance</h3>
              <p className="text-gray-600">
                Join your Zoom session and get personalized advice from someone who's been where you want to go.
              </p>
            </div>
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
            Connect with college mentors who understand your path for just $20 per session.
          </p>
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800" asChild>
            <Link to="/book-session">Book Your Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BookSession;
