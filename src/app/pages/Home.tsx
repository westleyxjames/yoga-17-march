import { Link } from "react-router";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { 
  Heart, Target, Users, TrendingDown, Brain, UserCheck, 
  Leaf, Video, Library, Star, CheckCircle, Award, Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

export function Home() {
  const goals = [
    {
      icon: <TrendingDown className="text-emerald-600" size={40} />,
      title: "Weight Loss",
      description: "Achieve your fitness goals with dynamic yoga sequences designed to boost metabolism and burn calories."
    },
    {
      icon: <Brain className="text-emerald-600" size={40} />,
      title: "Stress Relief",
      description: "Find inner peace and reduce anxiety through mindful breathing and relaxation techniques."
    },
    {
      icon: <Heart className="text-emerald-600" size={40} />,
      title: "Back Pain Relief",
      description: "Strengthen your core and improve posture with targeted yoga poses for a healthier spine."
    },
    {
      icon: <UserCheck className="text-emerald-600" size={40} />,
      title: "Beginners Welcome",
      description: "Start your yoga journey with gentle, easy-to-follow classes perfect for newcomers."
    },
    {
      icon: <Users className="text-emerald-600" size={40} />,
      title: "Seniors Program",
      description: "Stay active and flexible with specialized classes designed for mature practitioners."
    }
  ];

  const wellnessPrograms = [
    {
      icon: <Leaf className="text-emerald-600" size={36} />,
      title: "Meditation & Pranayama",
      description: "Master breathing techniques and meditation practices for mental clarity and emotional balance."
    },
    {
      icon: <Target className="text-emerald-600" size={36} />,
      title: "Detox & Lifestyle Programs",
      description: "Holistic programs combining yoga, nutrition, and lifestyle coaching for complete transformation."
    },
    {
      icon: <Brain className="text-emerald-600" size={36} />,
      title: "Mindfulness Sessions",
      description: "Cultivate present-moment awareness and reduce stress through guided mindfulness practices."
    }
  ];

  const mediaFeatures = [
    {
      icon: <Video className="text-emerald-600" size={36} />,
      title: "Video Classes",
      description: "Access hundreds of on-demand classes from beginner to advanced levels."
    },
    {
      icon: <Library className="text-emerald-600" size={36} />,
      title: "Pose Library",
      description: "Comprehensive guide to yoga asanas with detailed instructions and modifications."
    },
    {
      icon: <Star className="text-emerald-600" size={36} />,
      title: "Daily Yoga Tips",
      description: "Expert advice delivered daily to support your yoga journey."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1590421554129-19a2dff37230?w=150&h=150&fit=crop",
      text: "YogaFit transformed my life! I've lost 20 pounds and feel more energized than ever. The instructors are incredibly supportive."
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1758274535024-be3faa30f507?w=150&h=150&fit=crop",
      text: "As someone who sits at a desk all day, the back pain relief program has been a game-changer. My posture has improved dramatically."
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?w=150&h=150&fit=crop",
      text: "The stress relief sessions have helped me manage anxiety better than anything else I've tried. Truly life-changing!"
    }
  ];

  const pricingPlans = [
    {
      name: "Monthly Plan",
      price: "$49",
      period: "/month",
      features: [
        "Unlimited class access",
        "Live streaming sessions",
        "Video library access",
        "Community support"
      ]
    },
    {
      name: "Yearly Plan",
      price: "$499",
      period: "/year",
      features: [
        "Everything in Monthly",
        "2 months free",
        "Priority booking",
        "Personal wellness consultation",
        "Access to workshops"
      ],
      popular: true
    },
    {
      name: "Corporate Plan",
      price: "Custom",
      period: "pricing",
      features: [
        "On-site classes",
        "Flexible scheduling",
        "Employee wellness programs",
        "Progress tracking",
        "Dedicated instructor"
      ]
    }
  ];

  const blogPosts = [
    {
      title: "10 Yoga Poses for Better Sleep",
      excerpt: "Discover the most effective yoga poses to help you wind down and achieve restful, rejuvenating sleep every night.",
      image: "https://images.unsplash.com/photo-1590421554129-19a2dff37230?w=400&h=250&fit=crop",
      date: "January 25, 2026",
      author: "Dr. Maya Patel",
      category: "Sleep & Wellness"
    },
    {
      title: "The Science Behind Yoga and Mental Health",
      excerpt: "Explore how yoga practices positively impact brain chemistry and emotional well-being, backed by scientific research.",
      image: "https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?w=400&h=250&fit=crop",
      date: "January 22, 2026",
      author: "Dr. James Wilson",
      category: "Mental Health"
    },
    {
      title: "Nutrition Tips for Yoga Practitioners",
      excerpt: "Learn what to eat before and after yoga sessions to maximize your practice and support your body's recovery.",
      image: "https://images.unsplash.com/photo-1758274526087-9cd4077e0cf6?w=400&h=250&fit=crop",
      date: "January 20, 2026",
      author: "Lisa Anderson, RD",
      category: "Nutrition"
    },
    {
      title: "Yoga for Desk Workers: Combat Sedentary Lifestyle",
      excerpt: "Simple yoga stretches and exercises you can do at your desk to prevent pain and improve posture throughout the workday.",
      image: "https://images.unsplash.com/photo-1758274535024-be3faa30f507?w=400&h=250&fit=crop",
      date: "January 18, 2026",
      author: "David Martinez",
      category: "Workplace Wellness"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1590421554129-19a2dff37230?w=1920&h=1080&fit=crop"
            alt="Yoga meditation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Transform Your Life with YogaFit</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Discover the perfect balance of mind, body, and spirit through our expert-led yoga programs. 
              Join thousands who have already transformed their lives.
            </p>
            <div className="flex gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                  Explore Classes
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga for Goals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yoga for Your Goals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you want to lose weight, reduce stress, or improve flexibility, we have specialized programs for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{goal.icon}</div>
                  <CardTitle>{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{goal.description}</p>
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
              Comprehensive programs designed to nurture your complete well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wellnessPrograms.map((program, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{program.icon}</div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Engagement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎥 Media & Engagement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn anytime, anywhere with our comprehensive online resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">⭐ What Our Members Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who transformed their lives with YogaFit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <ImageWithFallback 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💳 Flexible Pricing Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your lifestyle and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-emerald-600 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-emerald-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="text-emerald-600" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Latest from Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert insights, tips, and inspiration for your yoga journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow overflow-hidden">
                <ImageWithFallback 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <Button variant="link" className="text-emerald-600 p-0">Read More →</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="mx-auto mb-6 text-emerald-200" size={60} />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Yoga Journey?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied members and experience the transformative power of yoga. 
            Try your first class free - no credit card required!
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View All Classes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
