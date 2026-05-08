import { Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030305] pt-10 pb-6 md:pt-16 md:pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:gap-12 md:mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                Geo<span className="text-blue-500">Sphere</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm">
              The leading geospatial platform for managing, analyzing, and monitoring spatial data with AI-powered insights.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Data Hub</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Analysis Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Live Monitoring</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} GeoSphere Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
