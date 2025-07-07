
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import LogoProcessor from "@/components/LogoProcessor";

const BookSession = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server.
    console.log("Form submitted", { name, email, phone, message, date, time, service });
    // Reset form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setDate("");
    setTime("");
    setService("");
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
                  originalSrc="/lovable-uploads/63b6b9ee-5908-441f-8f3e-1a50cf6e8409.png"
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
            Book a Session with Our Expert Mentors
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Get personalized guidance and support from experienced college students.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-none">
            <CardHeader className="bg-blue-900 text-white p-6">
              <CardTitle className="text-2xl font-bold">
                One-on-One Mentoring Session
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 mr-2 text-blue-900" />
                <span className="text-3xl font-bold text-gray-900">$20</span>
                <span className="text-gray-600"> / session</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Personalized mentoring session with a current college student. Get answers
                to your questions, receive application advice, and gain insider insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Book Your Session
          </h2>
          <Card className="shadow-lg border-none">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <Label htmlFor="service" className="block text-gray-700 text-sm font-bold mb-2">
                    Service
                  </Label>
                  <Select onValueChange={setService}>
                    <SelectTrigger className="w-full text-left shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="College Counseling">College Counseling</SelectItem>
                      <SelectItem value="Essay Review">Essay Review</SelectItem>
                      <SelectItem value="Career Guidance">Career Guidance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                    Date
                  </Label>
                  <Input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
                    Time
                  </Label>
                  <Input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <Button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Book Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BookSession;
