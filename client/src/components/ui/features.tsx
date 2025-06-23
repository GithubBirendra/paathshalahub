import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Calendar, LayoutDashboard } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Engage with multimedia content, quizzes, and hands-on projects designed to enhance your learning experience.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals and academic experts with years of real-world experience.",
      color: "bg-purple-500"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Study at your own pace with 24/7 access to course materials and flexible deadlines.",
      color: "bg-green-500"
    },
    {
      icon: LayoutDashboard,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and personalized progress reports.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Paathshala?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with proven educational methods to deliver an exceptional learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;