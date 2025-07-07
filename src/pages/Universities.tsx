
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, TrendingUp, Users, BookOpen, Award } from "lucide-react";
import LogoProcessor from "@/components/LogoProcessor";

const Universities = () => {
  const universities = [
    {
      name: "Massachusetts Institute of Technology",
      shortName: "MIT",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      acceptanceRate: "4%",
      stats: {
        satRange: "1540-1580",
        satMath: "790-800",
        satEBRW: "750-780",
        actRange: "35-36",
        classRankTop10: "100%",
        gpaData: "Not Published",
        testPolicy: "Required",
        testSubmission: "Required for Class of 2029"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Class Rank", "Test Scores", "Interview", "Extracurriculars", "Volunteer Work", "Work Experience"],
        considered: [],
        notConsidered: ["Alumni Relation"]
      }
    },
    {
      name: "Harvard University",
      shortName: "Harvard",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      acceptanceRate: "3%",
      stats: {
        satRange: "~1535 avg",
        satMath: "~780",
        satEBRW: "~755",
        actRange: "~35 avg",
        classRankTop10: "94%",
        gpaData: "58% have 4.0+",
        testPolicy: "Optional",
        testSubmission: "35% SAT, 16% ACT"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Class Rank", "Interview", "Volunteer Work", "Work Experience"],
        considered: ["Test Scores", "Alumni Relation"],
        notConsidered: []
      }
    },
    {
      name: "Stanford University",
      shortName: "Stanford",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      acceptanceRate: "4%",
      stats: {
        satRange: "1500-1570",
        satMath: "~790",
        satEBRW: "~760",
        actRange: "34-35",
        classRankTop10: "95%",
        gpaData: "63% have 4.0+",
        testPolicy: "Optional",
        testSubmission: "41% SAT, 15% ACT"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Class Rank", "Interview"],
        considered: ["Test Scores", "Alumni Relation", "Volunteer Work", "Work Experience"],
        notConsidered: []
      }
    },
    {
      name: "Yale University",
      shortName: "Yale",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      acceptanceRate: "5%",
      stats: {
        satRange: "1530-1570",
        satMath: "~790",
        satEBRW: "~760",
        actRange: "~35",
        classRankTop10: "97%",
        gpaData: "~68% have 4.0",
        testPolicy: "Optional",
        testSubmission: "49% SAT, 17% ACT"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Class Rank", "Interview", "Extracurriculars", "Volunteer Work", "Work Experience"],
        considered: ["Test Scores", "Alumni Relation"],
        notConsidered: []
      }
    },
    {
      name: "Princeton University",
      shortName: "Princeton",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      acceptanceRate: "4%",
      stats: {
        satRange: "~1550 avg",
        satMath: "~790",
        satEBRW: "~760",
        actRange: "~35",
        classRankTop10: "100%",
        gpaData: "66% have 4.0+",
        testPolicy: "Optional",
        testSubmission: "50% SAT, 17% ACT"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Class Rank", "Interview", "Volunteer Work", "Work Experience"],
        considered: ["Test Scores", "Alumni Relation"],
        notConsidered: []
      }
    },
    {
      name: "Brown University",
      shortName: "Brown",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      acceptanceRate: "5%",
      stats: {
        satRange: "~1540 avg",
        satMath: "~780",
        satEBRW: "~760",
        actRange: "~35",
        classRankTop10: "97%",
        gpaData: "61% have 4.0+",
        testPolicy: "Optional",
        testSubmission: "47% SAT, 20% ACT"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Class Rank", "Volunteer Work", "Work Experience"],
        considered: ["Test Scores", "Interview", "Alumni Relation"],
        notConsidered: []
      }
    },
    {
      name: "Dartmouth College",
      shortName: "Dartmouth",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      acceptanceRate: "6%",
      stats: {
        satRange: "~1540 avg",
        satMath: "~780",
        satEBRW: "~760",
        actRange: "~35",
        classRankTop10: "98%",
        gpaData: "65% have 4.0+",
        testPolicy: "Optional",
        testSubmission: "54% SAT, 14% ACT"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA", "Essays", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities"],
        important: ["Class Rank", "Interview", "Volunteer Work", "Work Experience"],
        considered: ["Test Scores", "Alumni Relation"],
        notConsidered: []
      }
    },
    {
      name: "Cornell University",
      shortName: "Cornell",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      acceptanceRate: "7%",
      stats: {
        satRange: "1560 avg",
        satMath: "800",
        satEBRW: "770",
        actRange: "35 avg",
        classRankTop10: "99.5%",
        gpaData: "Not Included",
        testPolicy: "Required",
        testSubmission: "44.95% SAT, 14.6% ACT"
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
      acceptanceRate: "6%",
      stats: {
        satRange: "1570 avg",
        satMath: "800",
        satEBRW: "770",
        actRange: "36 avg",
        classRankTop10: "100%",
        gpaData: "58% have 4.0+, 31% above 3.7",
        testPolicy: "Optional",
        testSubmission: "51% SAT, 19% ACT"
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
      acceptanceRate: "11%",
      stats: {
        satRange: "Not Considered",
        satMath: "N/A",
        satEBRW: "N/A",
        actRange: "Not Considered",
        classRankTop10: "100%",
        gpaData: "37% have 4.0+, 51% above 3.75",
        testPolicy: "Not Considered",
        testSubmission: "Test scores not considered"
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
      acceptanceRate: "9%",
      stats: {
        satRange: "Not Considered",
        satMath: "N/A",
        satEBRW: "N/A",
        actRange: "Not Considered",
        classRankTop10: "100%",
        gpaData: "52.4% have 4.0+, 80.8% above 3.75",
        testPolicy: "Not Considered",
        testSubmission: "Test scores not considered"
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
      acceptanceRate: "24%",
      stats: {
        satRange: "Not Considered",
        satMath: "N/A",
        satEBRW: "N/A",
        actRange: "Not Considered",
        classRankTop10: "100%",
        gpaData: "27.3% have 4.0+, 52.5% above 3.75",
        testPolicy: "Not Considered",
        testSubmission: "Test scores not considered"
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
      acceptanceRate: "45%",
      stats: {
        satRange: "1510 avg",
        satMath: "790",
        satEBRW: "740",
        actRange: "30-36",
        classRankTop10: "99%",
        gpaData: "Not Included",
        testPolicy: "Optional",
        testSubmission: "44% SAT, 20% ACT"
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
      acceptanceRate: "31%",
      stats: {
        satRange: "~1410 avg",
        satMath: "~700",
        satEBRW: "~710",
        actRange: "~31 avg",
        classRankTop10: "78%",
        gpaData: "93% in top half of class",
        testPolicy: "Optional",
        testSubmission: "33% SAT, 5% ACT"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "Class Rank", "GPA", "Essays"],
        important: ["Test Scores", "Recommendations", "Extracurriculars", "Talent/Ability", "Character/Personal Qualities", "Volunteer Work", "Work Experience"],
        considered: [],
        notConsidered: ["Interview", "Alumni Relation"]
      }
    },
    {
      name: "San Diego State University",
      shortName: "SDSU",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      acceptanceRate: "38%",
      stats: {
        satRange: "Not Considered",
        satMath: "N/A",
        satEBRW: "N/A",
        actRange: "Not Considered",
        classRankTop10: "N/A",
        gpaData: "Mean GPA ~3.85, 39.5% have 4.0+, 73% above 3.75",
        testPolicy: "Not Considered",
        testSubmission: "Test scores not considered"
      },
      admissionFactors: {
        veryImportant: ["Academic Rigor", "GPA"],
        important: ["Extracurriculars", "Talent/Ability", "Character/Personal Qualities", "Volunteer Work", "Work Experience"],
        considered: [],
        notConsidered: ["Class Rank", "Test Scores", "Essays", "Recommendations", "Interview", "Alumni Relation"]
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
              <Link to="/" className="flex items-center">
                <LogoProcessor 
                  originalSrc="/lovable-uploads/63b6b9ee-5908-441f-8f3e-1a50cf6e8409.png"
                  alt="CollegeCore" 
                  className="h-16 w-auto object-contain" 
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors">Home</Link>
              <Link to="/universities" className="text-blue-900 font-medium">Universities</Link>
              <Link to="/book-session" className="text-gray-700 hover:text-blue-900 transition-colors">Book a Session</Link>
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
            Explore Top Universities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get insider insights and data-driven statistics from Common Data Sets. 
            Connect with current students who can share their real experiences for just $20 per session.
          </p>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border-blue-100">
                <div className="relative">
                  <img 
                    src={university.image} 
                    alt={university.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-900 text-white hover:bg-blue-800">
                      {university.acceptanceRate} acceptance
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-blue-900 border-blue-900">
                      $20/session
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {university.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center justify-center mb-2">
                        <BookOpen className="h-5 w-5 text-blue-900" />
                      </div>
                      <div className="text-sm text-gray-600">Test Policy</div>
                      <div className="font-bold text-gray-900 text-xs">{university.stats.testPolicy}</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="h-5 w-5 text-blue-900" />
                      </div>
                      <div className="text-sm text-gray-600">Top 10% Class</div>
                      <div className="font-bold text-gray-900 text-xs">{university.stats.classRankTop10}</div>
                    </div>
                  </div>

                  {/* Detailed Test Score Stats */}
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Academic Profile</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">SAT Range:</span>
                        <span className="font-semibold">{university.stats.satRange}</span>
                      </div>
                      {university.stats.satMath !== "N/A" && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600">SAT Math:</span>
                            <span className="font-semibold">{university.stats.satMath}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">SAT EBRW:</span>
                            <span className="font-semibold">{university.stats.satEBRW}</span>
                          </div>
                        </>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">ACT Range:</span>
                        <span className="font-semibold">{university.stats.actRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">GPA Data:</span>
                        <span className="font-semibold text-xs">{university.stats.gpaData}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Test Submission:</span>
                        <span className="font-semibold text-xs">{university.stats.testSubmission}</span>
                      </div>
                    </div>
                  </div>

                  {/* Admission Factors */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                        <Award className="h-4 w-4 mr-1 text-red-600" />
                        Very Important Factors
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {university.admissionFactors.veryImportant.slice(0, 4).map((factor, idx) => (
                          <Badge key={idx} className="text-xs bg-red-100 text-red-800 hover:bg-red-200 border-red-200">
                            {factor}
                          </Badge>
                        ))}
                        {university.admissionFactors.veryImportant.length > 4 && (
                          <Badge className="text-xs bg-red-100 text-red-800">
                            +{university.admissionFactors.veryImportant.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                        <Users className="h-4 w-4 mr-1 text-blue-600" />
                        Important Factors
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {university.admissionFactors.important.slice(0, 3).map((factor, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-blue-200 text-blue-800">
                            {factor}
                          </Badge>
                        ))}
                        {university.admissionFactors.important.length > 3 && (
                          <Badge variant="outline" className="text-xs border-blue-200 text-blue-800">
                            +{university.admissionFactors.important.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {university.admissionFactors.considered.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Considered Factors</h4>
                        <div className="flex flex-wrap gap-1">
                          {university.admissionFactors.considered.slice(0, 3).map((factor, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {factor}
                            </Badge>
                          ))}
                          {university.admissionFactors.considered.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{university.admissionFactors.considered.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white" asChild>
                    <Link to="/book-session" className="flex items-center justify-center">
                      Book $20 Session with {university.shortName} Student
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
      <section className="bg-blue-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See Your Dream School?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We have mentors from over 100+ universities. Contact us to connect with a student from your target school. All sessions are just $20.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Universities;
