
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MessageCircle, Users, Calendar, BookOpen, TrendingUp, Star } from "lucide-react";

const Community = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Discussion Forums",
      description: "Connect with peers, ask questions, and share experiences in topic-specific forums."
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Join virtual study sessions and collaborative learning groups with fellow students."
    },
    {
      icon: Calendar,
      title: "Weekly Events",
      description: "Attend exclusive webinars, Q&A sessions, and college prep workshops."
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access exclusive guides, templates, and tools for college applications."
    }
  ];

  const upcomingEvents = [
    {
      title: "Ivy League Application Workshop",
      date: "Dec 15, 2024",
      time: "7:00 PM EST",
      host: "Sarah Chen (MIT) & David Kim (UPenn)",
      attendees: 89
    },
    {
      title: "UC System Deep Dive",
      date: "Dec 18, 2024",
      time: "8:00 PM PST",
      host: "Emily Rodriguez (UC Berkeley)",
      attendees: 67
    },
    {
      title: "Engineering Programs Q&A",
      date: "Dec 20, 2024",
      time: "6:00 PM CST",
      host: "Aisha Patel (UIUC) & Jake Thompson (UCSD)",
      attendees: 45
    }
  ];

  const recentDiscussions = [
    {
      title: "How important are extracurriculars for T20 schools?",
      author: "Alex M.",
      replies: 23,
      likes: 67,
      category: "Admissions"
    },
    {
      title: "Scholarship application strategies that actually work",
      author: "Maria L.",
      replies: 31,
      likes: 89,
      category: "Financial Aid"
    },
    {
      title: "Transferring from community college - my journey",
      author: "Jordan K.",
      replies: 15,
      likes: 42,
      category: "Transfer"
    },
    {
      title: "STEM research opportunities for high schoolers",
      author: "Ryan P.",
      replies: 19,
      likes: 56,
      category: "Research"
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
                College<span className="text-blue-600">Core</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/universities" className="text-gray-700 hover:text-blue-600 transition-colors">Universities</Link>
              <Link to="/book-session" className="text-gray-700 hover:text-blue-600 transition-colors">Book a Session</Link>
              <Link to="/community" className="text-blue-600 font-medium">Community</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Join Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the CollegeCore Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with thousands of students on their college journey. Share experiences, 
            get support, and access exclusive resources in our vibrant community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Join Community - Free
            </Button>
            <Button size="lg" variant="outline">
              Browse as Guest
            </Button>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Get</h2>
            <p className="text-xl text-gray-600">Exclusive access to resources and connections</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
              <p className="text-gray-600">Exclusive workshops and Q&A sessions for community members</p>
            </div>
            <Button variant="outline">View All Events</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-blue-100 text-blue-800">Workshop</Badge>
                    <div className="text-right text-sm text-gray-600">
                      <div>{event.date}</div>
                      <div>{event.time}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <strong>Host:</strong> {event.host}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees} registered
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Register
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Discussions</h2>
              <p className="text-gray-600">Join the conversation on hot topics</p>
            </div>
            <Button variant="outline">View All Forums</Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {recentDiscussions.map((discussion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="text-xs">
                      {discussion.category}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {discussion.replies}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        {discussion.likes}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {discussion.title}
                  </h3>
                  <p className="text-sm text-gray-600">by {discussion.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Growing Community</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Universities Represented</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Successful Applications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Weekly Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get instant access to forums, events, resources, and connect with students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Join for Free
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <Link to="/book-session">Book a 1-on-1 Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
