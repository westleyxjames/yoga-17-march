import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Heart, Target, Users, Award, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

export function AboutUs() {
  const values = [
    {
      icon: <Heart className="text-emerald-600" size={40} />,
      title: "Compassion",
      description: "We believe in creating a nurturing, judgment-free environment where everyone feels welcome and supported on their wellness journey."
    },
    {
      icon: <Target className="text-emerald-600" size={40} />,
      title: "Excellence",
      description: "Our certified instructors are committed to providing the highest quality instruction and personalized attention to each student."
    },
    {
      icon: <Users className="text-emerald-600" size={40} />,
      title: "Community",
      description: "We foster a supportive community where members inspire and encourage each other to reach their fullest potential."
    },
    {
      icon: <Award className="text-emerald-600" size={40} />,
      title: "Integrity",
      description: "We honor the ancient traditions of yoga while making it accessible and relevant to modern practitioners."
    }
  ];

  const team = [
    {
      name: "Dr. Maya Patel",
      role: "Founder & Lead Instructor",
      image: "https://images.unsplash.com/photo-1590421554129-19a2dff37230?w=300&h=300&fit=crop",
      bio: "With over 20 years of experience, Maya combines traditional yoga wisdom with modern wellness science."
    },
    {
      name: "James Wilson",
      role: "Senior Yoga Instructor",
      image: "https://images.unsplash.com/photo-1758274535024-be3faa30f507?w=300&h=300&fit=crop",
      bio: "Specializing in therapeutic yoga and injury prevention, James helps students heal through mindful movement."
    },
    {
      name: "Lisa Anderson",
      role: "Meditation & Mindfulness Coach",
      image: "https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?w=300&h=300&fit=crop",
      bio: "Lisa brings a decade of meditation practice to help students find inner peace and mental clarity."
    },
    {
      name: "David Martinez",
      role: "Vinyasa Flow Instructor",
      image: "https://images.unsplash.com/photo-1758274526087-9cd4077e0cf6?w=300&h=300&fit=crop",
      bio: "Known for his dynamic classes, David helps students build strength, flexibility, and confidence."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Members" },
    { number: "15+", label: "Expert Instructors" },
    { number: "50+", label: "Weekly Classes" },
    { number: "8", label: "Years of Excellence" }
  ];

  const milestones = [
    {
      year: "2018",
      title: "YogaFit Founded",
      description: "Started with a vision to make yoga accessible to everyone in our community."
    },
    {
      year: "2019",
      title: "Expanded Facilities",
      description: "Opened our second studio to accommodate growing demand and offer more class varieties."
    },
    {
      year: "2021",
      title: "Virtual Classes Launched",
      description: "Introduced online streaming to reach students nationwide during the pandemic."
    },
    {
      year: "2023",
      title: "Corporate Wellness Program",
      description: "Launched partnerships with local businesses to bring yoga to the workplace."
    },
    {
      year: "2025",
      title: "10,000+ Members",
      description: "Celebrated reaching 10,000 active members and multiple awards for excellence."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758274526087-9cd4077e0cf6?w=1920&h=1080&fit=crop"
            alt="Yoga class"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About YogaFit</h1>
            <p className="text-xl text-emerald-100">
              Empowering individuals to transform their lives through the ancient wisdom of yoga and modern wellness practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  YogaFit was born from a simple yet powerful vision: to make the transformative practice of yoga accessible 
                  to everyone, regardless of age, fitness level, or background. Founded in 2018 by Dr. Maya Patel, a certified 
                  yoga therapist with over two decades of experience, our journey began in a small studio with just a handful 
                  of passionate students.
                </p>
                <p>
                  What started as intimate classes focused on traditional Hatha yoga has evolved into a comprehensive wellness 
                  center offering diverse yoga styles, meditation programs, and holistic health services. Our growth has been 
                  driven by one constant: an unwavering commitment to our students' well-being and transformation.
                </p>
                <p>
                  Today, YogaFit serves over 10,000 members across our physical studios and online platform. We've cultivated 
                  a vibrant community where beginners feel welcomed, experienced practitioners find new challenges, and everyone 
                  discovers the profound benefits of consistent practice.
                </p>
                <p>
                  Our mission extends beyond the mat. We believe yoga is not just exercise—it's a complete lifestyle that 
                  nurtures physical health, mental clarity, emotional balance, and spiritual growth. Through our classes, 
                  workshops, and community events, we're creating lasting positive change in people's lives.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1767605565789-5b18cdbbf6ae?w=800&h=1000&fit=crop"
                alt="Yoga studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the YogaFit experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to spread wellness and mindfulness
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="text-emerald-600" size={20} />
                        {milestone.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certified instructors are passionate about helping you achieve your wellness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="mx-auto mb-6" size={60} />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-emerald-100 mb-8">
              To empower individuals to live healthier, happier, and more balanced lives through the transformative 
              practice of yoga. We're committed to creating an inclusive, supportive community where everyone can 
              discover their full potential and experience the profound benefits of mindful movement and meditation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
                <p className="text-emerald-100 text-sm">Making yoga available to everyone, everywhere</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality</h3>
                <p className="text-emerald-100 text-sm">Maintaining the highest standards in teaching</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-emerald-100 text-sm">Building connections that support growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
