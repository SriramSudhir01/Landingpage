import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue-400">Our Story</Link></li>
            <li><Link href="/team" className="hover:text-blue-400">Team</Link></li>
            <li><Link href="/careers" className="hover:text-blue-400">Careers</Link></li>
            <li><Link href="/press" className="hover:text-blue-400">Press</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/materials" className="hover:text-blue-400">Study Materials</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
            <li><Link href="/success-stories" className="hover:text-blue-400">Success Stories</Link></li>
            <li><Link href="/faqs" className="hover:text-blue-400">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
            <li><Link href="/refund" className="hover:text-blue-400">Refund Policy</Link></li>
            <li><Link href="/cookies" className="hover:text-blue-400">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            <li><Link href="/support" className="hover:text-blue-400">Support</Link></li>
            <li><Link href="/social" className="hover:text-blue-400">Social Media</Link></li>
            <li><Link href="/newsletter" className="hover:text-blue-400">Newsletter</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}