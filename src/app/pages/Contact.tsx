import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="text-emerald-600" size={32} />,
      title: "Phone",
      details: ["+1-823-992-0223"],
      link: "tel:+18239920223"
    },
    {
      icon: <Mail className="text-emerald-600" size={32} />,
      title: "Email",
      details: ["trainer@yogafit.com"],
      link: "mailto:trainer@yogafit.com"
    },
    {
      icon: <MapPin className="text-emerald-600" size={32} />,
      title: "Location",
      details: ["123 Wellness Avenue", "Los Angeles, CA 90001", "United States"]
    },
    {
      icon: <Clock className="text-emerald-600" size={32} />,
      title: "Hours",
      details: [
        "Monday - Friday: 6:00 AM - 9:00 PM",
        "Saturday - Sunday: 8:00 AM - 7:00 PM"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-emerald-100">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <CardTitle>{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.link ? (
                    <a href={info.link} className="text-gray-600 hover:text-emerald-600 transition-colors">
                      {info.details.map((detail, i) => (
                        <div key={i}>{detail}</div>
                      ))}
                    </a>
                  ) : (
                    <div className="text-gray-600">
                      {info.details.map((detail, i) => (
                        <div key={i} className="text-sm">{detail}</div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input 
                    id="subject" 
                    placeholder="I'm interested in..." 
                    required 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    required 
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Studio</h2>
              <Card className="overflow-hidden h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.191055827162!2d-118.24368492346677!3d34.05223747315453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1706000000000!5m2!1sen!2s"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="YogaFit Location"
                ></iframe>
              </Card>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  <strong className="text-gray-900">Address:</strong><br />
                  123 Wellness Avenue<br />
                  Los Angeles, CA 90001<br />
                  United States
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-900">Parking:</strong><br />
                  Free parking available in our dedicated lot. Street parking also available.
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-900">Public Transport:</strong><br />
                  Metro Red Line - Civic Center Station (5 min walk)<br />
                  Bus Lines: 10, 33, 53, 720
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our classes and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Do I need to book classes in advance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we recommend booking classes in advance to secure your spot, especially for popular time slots. 
                  You can book online through our website or mobile app up to one week in advance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What should I bring to class?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide yoga mats and props, but you're welcome to bring your own mat if you prefer. 
                  Wear comfortable, breathable clothing and bring water. We have locker rooms with showers available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is there a cancellation policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Classes can be cancelled up to 2 hours before the start time without penalty. 
                  Late cancellations or no-shows will be deducted from your class package.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I try a class before committing to a membership?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely! Your first class is completely free with no obligation. We also offer weekly and monthly 
                  trial passes so you can explore different class styles before choosing a membership plan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer private sessions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer one-on-one private sessions and small group training. Private sessions are customized 
                  to your specific goals and schedule. Contact us for pricing and availability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help. Call us or visit the studio for a personal tour and consultation.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+18239920223">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                <Phone className="mr-2" size={20} />
                Call Now
              </Button>
            </a>
            <a href="mailto:trainer@yogafit.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Mail className="mr-2" size={20} />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
