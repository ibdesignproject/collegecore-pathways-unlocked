
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
        avgGPA: "4.17",
        satRange: "1520-1580",
        actRange: "35-36",
        acceptanceRate: "4%",
        classRankTop10: "95%"
      },
      admissionFactors: ["Essays", "Research Experience", "Recommendations", "Extracurriculars", "STEM Activities"]
    },
    {
      name: "Cornell University",
      shortName: "Cornell",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      stats: {
        avgGPA: "4.07",
        satRange: "1470-1550",
        actRange: "33-35",
        acceptanceRate: "9%",
        classRankTop10: "89%"
      },
      admissionFactors: ["Academic Rigor", "Essays", "Leadership", "Community Service", "Recommendations"]
    },
    {
      name: "University of Illinois Urbana-Champaign",
      shortName: "UIUC",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      stats: {
        avgGPA: "3.83",
        satRange: "1340-1510",
        actRange: "29-34",
        acceptanceRate: "45%",
        classRankTop10: "67%"
      },
      admissionFactors: ["Academic Performance", "Essays", "Extracurriculars", "Work Experience", "Recommendations"]
    },
    {
      name: "UC Berkeley",
      shortName: "Berkeley",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      stats: {
        avgGPA: "4.18",
        satRange: "1415-1570",
        actRange: "32-35",
        acceptanceRate: "11%",
        classRankTop10: "95%"
      },
      admissionFactors: ["Academic Excellence", "Personal Insight Essays", "Leadership", "Community Impact", "Diversity"]
    },
    {
      name: "UC San Diego",
      shortName: "UCSD",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      stats: {
        avgGPA: "4.08",
        satRange: "1340-1520",
        actRange: "30-35",
        acceptanceRate: "24%",
        classRankTop10: "87%"
      },
      admissionFactors: ["Academic Achievement", "Personal Qualities", "Extracurriculars", "Essays", "Special Talents"]
    },
    {
      name: "University of Pennsylvania",
      shortName: "UPenn",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
      stats: {
        avgGPA: "4.04",
        satRange: "1510-1570",
        actRange: "34-36",
        acceptanceRate: "6%",
        classRankTop10: "92%"
      },
      admissionFactors: ["Academic Excellence", "Leadership", "Essays", "Recommendations", "Demonstrated Interest"]
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
                      <div className="text-sm text-gray-600">Avg GPA</div>
                      <div className="font-bold text-gray-900">{university.stats.avgGPA}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="text-sm text-gray-600">SAT Range</div>
                      <div className="font-bold text-gray-900">{university.stats.satRange}</div>
                    </div>
                  </div>

                  {/* Additional Stats */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">ACT Range:</span>
                      <span className="font-semibold">{university.stats.actRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Top 10% Class Rank:</span>
                      <span className="font-semibold">{university.stats.classRankTop10}</span>
                    </div>
                  </div>

                  {/* Admission Factors */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Admission Factors</h4>
                    <div className="flex flex-wrap gap-2">
                      {university.admissionFactors.map((factor, idx) => (
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
