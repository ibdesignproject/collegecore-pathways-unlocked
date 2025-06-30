
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, TrendingUp, Users } from "lucide-react";

const Universities = () => {
  const universities = [
    {
      name: "Massachusetts Institute of Technology",
      shortName: "MIT",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      stats: {
        satRange: "1540-1580",
        actRange: "35-36",
        acceptanceRate: "4%",
        classRankTop10: "100%",
        gpaData: "Not Published",
        testPolicy: "Required"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Test Scores", "Interview", "Extracurriculars", "Volunteer Work", "Work Experience"],
        considered: [],
        notConsidered: ["Alumni Relation"]
      }
    },
    {
      name: "Harvard University",
      shortName: "Harvard",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      stats: {
        satRange: "~1535 avg",
        actRange: "~35 avg",
        acceptanceRate: "3%",
        classRankTop10: "94%",
        gpaData: "58% have 4.0+",
        testPolicy: "Optional"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Interview", "Volunteer Work", "Work Experience"],
        considered: ["Test Scores", "Alumni Relation"],
        notConsidered: []
      }
    },
    {
      name: "Stanford University",
      shortName: "Stanford",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      stats: {
        satRange: "1500-1570",
        actRange: "34-35",
        acceptanceRate: "4%",
        classRankTop10: "95%",
        gpaData: "63% have 4.0+",
        testPolicy: "Optional"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Interview"],
        considered: ["Test Scores", "Alumni Relation", "Volunteer Work", "Work Experience"],
        notConsidered: []
      }
    },
    {
      name: "Cornell University",
      shortName: "Cornell",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      stats: {
        satRange: "1560 avg",
        actRange: "35 avg",
        acceptanceRate: "7%",
        classRankTop10: "99.5%",
        gpaData: "Not Included",
        testPolicy: "Required"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "Essays", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Class Rank", "GPA"],
        considered: ["Test Scores", "Interview", "Alumni Relation", "Volunteer Work", "Work Experience"],
        notConsidered: []
      }
    },
    {
      name: "University of Pennsylvania",
      shortName: "UPenn",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      stats: {
        satRange: "1570 avg",
        actRange: "36 avg",
        acceptanceRate: "6%",
        classRankTop10: "100%",
        gpaData: "58% have 4.0+",
        testPolicy: "Optional"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Character/Personal Qualities"],
        important: ["Class Rank", "Extracurriculars", "Talent/Ability", "Volunteer Work", "Work Experience"],
        considered: ["Test Scores", "Alumni Relation"],
        notConsidered: ["Interview"]
      }
    },
    {
      name: "UC Berkeley",
      shortName: "Berkeley",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      stats: {
        satRange: "Not Considered",
        actRange: "Not Considered",
        acceptanceRate: "11%",
        classRankTop10: "100%",
        gpaData: "37% have 4.0+, 51% above 3.75",
        testPolicy: "Not Considered"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays"],
        important: ["Extracurriculars", "Character/Personal Qualities", "Volunteer Work", "Work Experience"],
        considered: ["Talent/Ability"],
        notConsidered: ["Class Rank", "Test Scores", "Recommendations", "Interview", "Alumni Relation"]
      }
    },
    {
      name: "UCLA",
      shortName: "UCLA",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      stats: {
        satRange: "Not Considered",
        actRange: "Not Considered",
        acceptanceRate: "9%",
        classRankTop10: "100%",
        gpaData: "52.4% have 4.0+, 80.8% above 3.75",
        testPolicy: "Not Considered"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays"],
        important: ["Extracurriculars", "Talent/Ability", "Character/Personal Qualities", "Volunteer Work", "Work Experience"],
        considered: ["Class Rank"],
        notConsidered: ["Test Scores", "Recommendations", "Interview", "Alumni Relation"]
      }
    },
    {
      name: "UC San Diego",
      shortName: "UCSD",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      stats: {
        satRange: "Not Considered",
        actRange: "Not Considered",
        acceptanceRate: "24%",
        classRankTop10: "100%",
        gpaData: "27.3% have 4.0+, 52.5% above 3.75",
        testPolicy: "Not Considered"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays"],
        important: ["Extracurriculars", "Talent/Ability", "Character/Personal Qualities", "Volunteer Work"],
        considered: ["Class Rank", "Work Experience"],
        notConsidered: ["Test Scores", "Recommendations", "Interview", "Alumni Relation"]
      }
    },
    {
      name: "University of Illinois Urbana-Champaign",
      shortName: "UIUC",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      stats: {
        satRange: "1510 avg",
        actRange: "30-36",
        acceptanceRate: "45%",
        classRankTop10: "99%",
        gpaData: "Not Included",
        testPolicy: "Optional"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA"],
        important: ["Test Scores", "Essays", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities"],
        considered: ["Volunteer Work", "Work Experience"],
        notConsidered: ["Class Rank", "Recommendations", "Interview", "Alumni Relation"]
      }
    },
    {
      name: "University of Texas at Austin",
      shortName: "UT Austin",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      stats: {
        satRange: "~1410 avg",
        actRange: "~31 avg",
        acceptanceRate: "31%",
        classRankTop10: "78%",
        gpaData: "93% in top half of class",
        testPolicy: "Optional"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "Class Rank", "GPA", "Essays"],
        important: ["Test Scores", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities", "Volunteer Work", "Work Experience"],
        considered: [],
        notConsidered: ["Interview", "Alumni Relation"]
      }
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
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/universities" className="text-blue-600 font-medium">Universities</Link>
              <Link to="/book-session" className="text-gray-700 hover:text-blue-600 transition-colors">Book a Session</Link>
              <Link to="/community" className="text-gray-700 hover:text-blue-600 transition-colors">Community</Link>
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
            Explore Top Universities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get insider insights and data-driven statistics from Common Data Sets. 
            Connect with current students who can share their real experiences.
          </p>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={university.image} 
                    alt={university.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      {university.stats.acceptanceRate} acceptance
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {university.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="text-sm text-gray-600">Test Policy</div>
                      <div className="font-bold text-gray-900 text-xs">{university.stats.testPolicy}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="text-sm text-gray-600">Top 10% Class</div>
                      <div className="font-bold text-gray-900">{university.stats.classRankTop10}</div>
                    </div>
                  </div>

                  {/* Test Score Stats */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">SAT Range:</span>
                      <span className="font-semibold text-sm">{university.stats.satRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ACT Range:</span>
                      <span className="font-semibold text-sm">{university.stats.actRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GPA Data:</span>
                      <span className="font-semibold text-sm">{university.stats.gpaData}</span>
                    </div>
                  </div>

                  {/* Admission Factors */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Very Important Factors</h4>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {university.admissionFactors.veryImportant.slice(0, 4).map((factor, idx) => (
                        <Badge key={idx} className="text-xs bg-red-100 text-red-800 hover:bg-red-200">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Important Factors</h4>
                    <div className="flex flex-wrap gap-1">
                      {university.admissionFactors.important.slice(0, 3).map((factor, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link to="/book-session" className="flex items-center justify-center">
                      Book a Session with a {university.shortName} Student
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            Don't See Your Dream School?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We have mentors from over 100+ universities. Contact us to connect with a student from your target school.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Universities;
