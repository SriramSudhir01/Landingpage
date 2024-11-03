'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Start Your Success Journey Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful candidates who transformed their preparation with us.
          </p>
          <Button size="lg" variant="secondary">
            Sign Up Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}