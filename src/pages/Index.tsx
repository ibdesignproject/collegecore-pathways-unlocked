
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, TrendingUp, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
              <Link to="/" className="text-blue-900 font-medium">Home</Link>
              <Link to="/universities" className="text-gray-700 hover:text-blue-900 transition-colors">Universities</Link>
              <Link to="/book-session" className="text-gray-700 hover:text-blue-900 transition-colors">Book a Session</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The road to your dream is closer than you think.
            <span className="block text-blue-900">We'll walk it with you.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            CollegeCore connects high school students with college mentors who've walked the path before. 
            Get real guidance, insider insights, and affordable counseling from students who understand your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-4">
              <Link to="/book-session" className="flex items-center">
                Book a Session <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CollegeCore?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real guidance from real students who've been exactly where you are now.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Student-to-Student Advising</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get personalized college guidance at just $20 per session. 
                  Our peer mentors understand your budget constraints and provide real value.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Access to Real College Experiences</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn from students currently living the college experience. Get insider tips, 
                  honest reviews, and authentic perspectives on campus life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access comprehensive data from Common Data Sets including admission stats, 
                  GPA requirements, and what really matters in applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with college mentors who understand your path for just $20 per session.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
            <Link to="/book-session">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                College<span className="text-blue-900">Core</span>
              </h3>
              <p className="text-gray-600">
                Connecting high school students with college mentors for real guidance and support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/universities" className="text-gray-600 hover:text-blue-900">Universities</Link></li>
                <li><Link to="/book-session" className="text-gray-600 hover:text-blue-900">Book a Session</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-blue-900">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@collegecore.com
                </li>
                <li className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-4567
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-900">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-900">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.08v5.73a2.99 2.99 0 0 1-5.73 1.64l-1.46-1.05a4.98 4.98 0 0 1 8.25-5.51h.79V2h4.25a6.59 6.59 0 0 1 3.25 4.69z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">&copy; 2024 CollegeCore. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-500">Secured by</span>
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=40&fit=crop" alt="Stripe" className="h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
