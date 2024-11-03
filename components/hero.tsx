'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Users, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Master Your Government Exam Preparation
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              AI-powered learning platform designed specifically for government exam aspirants.
              Get personalized study plans, practice tests, and real-time analytics.
            </p>
            <div className="space-x-4">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur border-none text-white rounded-lg p-6"
            >
              <Users className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">50K+ Students</h3>
              <p className="text-sm text-blue-100">Joined our platform</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur border-none text-white rounded-lg p-6"
            >
              <Trophy className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">85% Success</h3>
              <p className="text-sm text-blue-100">Pass rate in exams</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}