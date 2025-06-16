
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl mb-8">Ready to transform your business with AI? Let's talk!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-400">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>
                <Button type="submit" className="bg-green-500 hover:bg-green-600 w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-400">Contact Information</h2>
              <div className="space-y-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-green-400" size={24} />
                      <CardTitle className="text-white text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">contact@indservices.com</p>
                    <p className="text-gray-300">support@indservices.com</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-blue-400" size={24} />
                      <CardTitle className="text-white text-lg">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-300">+91 87654 32109</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-yellow-400" size={24} />
                      <CardTitle className="text-white text-lg">Office</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      123 Tech Park, Sector 62<br />
                      Noida, Uttar Pradesh 201301<br />
                      India
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-purple-400" size={24} />
                      <CardTitle className="text-white text-lg">Business Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our AI solutions. 
            Schedule a free consultation today!
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-lg px-8 py-3">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
