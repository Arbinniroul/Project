import { Link, Navigate, useNavigate } from 'react-router-dom'; // Import the Link component from react-router-dom
import { Sprout } from 'lucide-react';

export function Footer() {
  const navigate=useNavigate();
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-centec cursor-pointer" onClick={()=> navigate('/home')}>
            <Sprout className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary">
              ClimateGrow
            </span>
          </div>
          <nav className="mt-8">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/about" // Use Link component for navigation
                  className="text-muted-foreground hover:text-primary transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact" // Use Link component for navigation
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy" // Use Link component for navigation
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
          <p className="mt-8 text-center text-muted-foreground">
            © {new Date().getFullYear()} ClimateGrow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
