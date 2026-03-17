import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { 
  Dumbbell, Heart, Brain, Users, Video, Library, Calendar, 
  Target, Leaf, Star, Clock, CheckCircle, Award 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Link } from "react-router";

export function Services() {
  const yogaClasses = [
    {
      icon: <Dumbbell className="text-emerald-600" size={36} />,
      title: "Weight Loss Yoga",
      description: "Dynamic power yoga sequences designed to boost metabolism, burn calories, and tone your body.",
      duration: "60 minutes",
      level: "Intermediate",
      schedule: "Mon, Wed, Fri - 6:00 AM & 6:00 PM"
    },
    {
      icon: <Brain className="text-emerald-600" size={36} />,
      title: "Stress Relief & Relaxation",
      description: "Gentle restorative practices focusing on breathing techniques and deep relaxation.",
      duration: "75 minutes",
      level: "All Levels",
      schedule: "Tue, Thu - 7:00 PM, Sun - 10:00 AM"
    },
    {
      icon: <Heart className="text-emerald-600" size={36} />,
      title: "Therapeutic Yoga for Back Pain",
      description: "Specialized program targeting spine health, core strength, and posture improvement.",
      duration: "60 minutes",
      level: "All Levels",
      schedule: "Mon, Wed, Fri - 10:00 AM"
    },
    {
      icon: <Users className="text-emerald-600" size={36} />,
      title: "Yoga for Beginners",
      description: "Perfect introduction to yoga with fundamental poses, breathing, and alignment principles.",
      duration: "60 minutes",
      level: "Beginner",
      schedule: "Sat, Sun - 9:00 AM"
    },
    {
      icon: <Target className="text-emerald-600" size={36} />,
      title: "Seniors Yoga",
      description: "Gentle, chair-supported practices designed for mature practitioners and mobility challenges.",
      duration: "45 minutes",
      level: "Beginner",
      schedule: "Tue, Thu - 2:00 PM"
    },
    {
      icon: <Leaf className="text-emerald-600" size={36} />,
      title: "Vinyasa Flow",
      description: "Dynamic flowing sequences that build strength, flexibility, and cardiovascular endurance.",
      duration: "75 minutes",
      level: "Intermediate-Advanced",
      schedule: "Mon-Fri - 7:00 AM"
    }
  ];

  const wellnessPrograms = [
    {
      icon: <Brain className="text-emerald-600" size={40} />,
      title: "Meditation & Pranayama",
      description: "Learn ancient breathing techniques and meditation practices for mental clarity and stress reduction.",
      features: [
        "Guided meditation sessions",
        "Breathwork workshops",
        "Mindfulness training",
        "Stress management techniques"
      ],
      duration: "4-week program"
    },
    {
      icon: <Leaf className="text-emerald-600" size={40} />,
      title: "Detox & Lifestyle Programs",
      description: "Comprehensive wellness program combining yoga, nutrition guidance, and healthy habits.",
      features: [
        "Personalized nutrition plans",
        "Daily yoga practices",
        "Lifestyle coaching",
        "Group support sessions"
      ],
      duration: "8-week program"
    },
    {
      icon: <Heart className="text-emerald-600" size={40} />,
      title: "Mindfulness Sessions",
      description: "Develop present-moment awareness and emotional intelligence through guided practices.",
      features: [
        "Body scan meditation",
        "Walking meditation",
        "Mindful eating workshops",
        "Emotional regulation techniques"
      ],
      duration: "6-week program"
    }
  ];

  const onlineServices = [
    {
      icon: <Video className="text-emerald-600" size={40} />,
      title: "Live Video Classes",
      description: "Join real-time classes from anywhere with interactive instruction and community engagement.",
      features: [
        "50+ live weekly classes",
        "Interactive Q&A with instructors",
        "Real-time feedback and adjustments",
        "Community chat and support"
      ]
    },
    {
      icon: <Library className="text-emerald-600" size={40} />,
      title: "On-Demand Library",
      description: "Access hundreds of pre-recorded classes available anytime to fit your schedule.",
      features: [
        "500+ video classes",
        "All levels and styles",
        "10-90 minute options",
        "Downloadable for offline viewing"
      ]
    },
    {
      icon: <Calendar className="text-emerald-600" size={40} />,
      title: "Pose Library & Tutorials",
      description: "Comprehensive guide to yoga poses with detailed instructions and modifications.",
      features: [
        "200+ pose breakdowns",
        "Video demonstrations",
        "Alignment tips",
        "Modification options"
      ]
    }
  ];

  const corporateServices = [
    {
      title: "On-Site Workplace Classes",
      description: "Bring yoga to your office with customized programs that fit your team's schedule and space.",
      benefits: [
        "Reduce employee stress and burnout",
        "Improve focus and productivity",
        "Boost team morale and cohesion",
        "Flexible scheduling options"
      ]
    },
    {
      title: "Virtual Corporate Wellness",
      description: "Remote yoga classes and wellness programs perfect for distributed teams.",
      benefits: [
        "Convenient for remote workers",
        "Record sessions for on-demand access",
        "Scalable for any team size",
        "Monthly wellness workshops"
      ]
    },
    {
      title: "Employee Wellness Programs",
      description: "Comprehensive wellness initiatives with progress tracking and health coaching.",
      benefits: [
        "Customized wellness goals",
        "Progress monitoring dashboard",
        "Health and nutrition guidance",
        "Quarterly wellness challenges"
      ]
    }
  ];

  const trialClasses = [
    {
      name: "Single Trial Class",
      price: "Free",
      description: "Experience any class of your choice",
      features: [
        "One complimentary class",
        "Full studio access",
        "Meet our instructors",
        "No credit card required"
      ]
    },
    {
      name: "Week Trial Pass",
      price: "$25",
      description: "Unlimited classes for 7 days",
      features: [
        "Unlimited class access",
        "Try multiple styles",
        "Use all amenities",
        "Personal orientation session"
      ]
    },
    {
      name: "Month Trial Pass",
      price: "$39",
      description: "Full month unlimited access",
      features: [
        "Unlimited classes",
        "Online & in-studio",
        "Wellness consultation",
        "Discount on membership"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758274526087-9cd4077e0cf6?w=1920&h=1080&fit=crop"
            alt="Yoga services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-emerald-100">
              Discover a comprehensive range of yoga classes and wellness programs designed for every body and every goal.
            </p>
          </div>
        </div>
      </section>

      {/* Yoga Classes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yoga Classes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse selection of yoga styles, each designed to meet specific goals and fitness levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yogaClasses.map((yogaClass, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{yogaClass.icon}</div>
                  <CardTitle>{yogaClass.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{yogaClass.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock size={16} className="text-emerald-600" />
                      <span>{yogaClass.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Star size={16} className="text-emerald-600" />
                      <span>{yogaClass.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar size={16} className="text-emerald-600" />
                      <span className="text-xs">{yogaClass.schedule}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">Book Class</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Programs Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌿 Wellness Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs that go beyond the mat to transform your entire lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wellnessPrograms.map((program, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{program.icon}</div>
                  <CardTitle>{program.title}</CardTitle>
                  <p className="text-sm text-emerald-600 font-semibold">{program.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="text-emerald-600 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎥 Online Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practice yoga anytime, anywhere with our comprehensive digital platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onlineServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="text-emerald-600 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Services Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💼 Corporate Yoga Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Invest in your team's wellness with customized corporate yoga programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="text-emerald-600 flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">Request Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Classes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Try Before You Commit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the YogaFit difference with our flexible trial options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trialClasses.map((trial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{trial.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-emerald-600">{trial.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{trial.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {trial.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="mx-auto mb-6" size={60} />
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join us today and discover which program is perfect for your wellness journey. 
            First class is always free!
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Book Free Class
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Schedule
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
