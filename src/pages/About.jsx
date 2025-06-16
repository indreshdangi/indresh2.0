
import React from 'react';
import { Users, Target, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">IND SERVICES</div>
          <nav>
            <ul className="flex space-x-4">
              {['Home', 'About', 'Tools', 'Reviews', 'Trends', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-green-400">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-green-900 to-blue-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About IND SERVICES</h1>
          <p className="text-xl mb-8">Leading the future of AI innovation and implementation</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-400">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                IND SERVICES was founded with a vision to bridge the gap between cutting-edge AI technology 
                and practical business solutions. We are a team of dedicated professionals who specialize in 
                testing, reviewing, and implementing AI tools that drive real business value.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With years of experience in the AI industry, we understand the challenges businesses face 
                when adopting new technologies. Our mission is to make AI accessible, understandable, and 
                profitable for organizations of all sizes.
              </p>
              <Button className="bg-green-500 hover:bg-green-600">
                Learn More About Our Services
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="pb-2">
                  <Users className="text-green-400 mb-2" size={32} />
                  <CardTitle className="text-white text-lg">50+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">Happy Clients</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="pb-2">
                  <Award className="text-blue-400 mb-2" size={32} />
                  <CardTitle className="text-white text-lg">200+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">AI Tools Tested</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="pb-2">
                  <Target className="text-yellow-400 mb-2" size={32} />
                  <CardTitle className="text-white text-lg">95%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">Success Rate</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="pb-2">
                  <Clock className="text-purple-400 mb-2" size={32} />
                  <CardTitle className="text-white text-lg">24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">Support Available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-green-400">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We stay at the forefront of AI technology, constantly exploring new tools and 
                  methodologies to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-blue-400">Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our clients trust us to deliver consistent, high-quality results. We pride ourselves 
                  on thorough testing and honest reviews.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-yellow-400">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, from our detailed analysis to our 
                  customer service and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Our diverse team of AI experts, researchers, and business strategists work together to 
            bring you the most comprehensive AI solutions in the industry.
          </p>
          <Button className="bg-green-500 hover:bg-green-600">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
