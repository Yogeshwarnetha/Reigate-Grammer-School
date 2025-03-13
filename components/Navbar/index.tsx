"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from "next/image";
import BrandLogo from '@/public/images/Asset 3.png';
import './index.css';

const aboutUsItems = [
  { title: 'Our School', href: '/about/ourschool' },
  { title: 'Senior Leadership Team', href: '/about/senior-leadership' },
  { title: 'Pastoral Care', href: '/about/pastrol-care' },
  { title: 'Location', href: '/about/locations' },
];

const schoolLifeItems = [
  { title: "Facilities", href: "/school-life/facilities" },
  { title: "Boarding", href: "/school-life/schedule" },
  { title: "Transportation", href: "/school-life/transporation" },
  { title: "School Policies", href: "/school-life/virtual-tour" },
];

const admissionsItems = [
  { title: 'Application Process', href: '/admission/apply' },
  { title: 'Register Now', href: '/admission/register-now' },
  { title: 'Fees & Financial Aid', href: '/admission/fee-structure' },
  { title: 'Open Days Visits', href: '/admission/open-days' },
];

const academicsItems = [
  { title: 'Our Approach', href: '/academics/our-approach' },
  { title: 'Early Years and Primary School', href: '/academics/early-years' },
  { title: 'Secondary School', href: '/academics/secondary-school' },
  { title: 'Sixth Form', href: '/academics/sixth-form' },
];

const activitiesItems = [
  { title: 'Adventure Sports and Physical Pursuits', href: '/co-curricular/adventure-sports' },
  { title: 'Performing Arts & Expression', href: '/co-curricular/arts-expression' },
  { title: 'Service & Community', href: '/co-curricular/service-community' },
  { title: 'Technology, Innovation and Academia ', href: '/co-curricular/technology-innovation' },
];

const newsEventsItems = [
  { title: 'Events', href: '/news' },
  { title: 'PR Releases and Media ', href: '/news/updates' },
  { title: 'Blogs', href: '/news/newsletters' },
];

const careerItems = [
  { title: 'Working at RGIS KL', href: '/careers/vacancies' },
  { title: 'Current Openings', href: '/careers/working-with-us' },
  { title: 'Apply Now', href: '/careers/benefits' },
];

const mainMenuItems = [
  {
    title: 'About Us',
    isSpecial: true,
    items: aboutUsItems,
  },
  {
    title: 'School Life',
    isSpecial: true,
    items: schoolLifeItems,
  },
  {
    title: 'Admissions',
    isSpecial: true,
    items: admissionsItems,
  },
  {
    title: 'Academics',
    isSpecial: true,
    items: academicsItems,
  },
  {
    title: 'Co-Curricular',
    isSpecial: true,
    items: activitiesItems,
  },
  {
    title: 'News & Events',
    isSpecial: true,
    items: newsEventsItems,
  },
  {
    title: 'Careers',
    isSpecial: true,
    items: careerItems,
  },
];

const TopBar = () => (
  <div className="top-navbar py-1 px-4">
    <div className="mx-24 flex justify-end space-x-4 text-sm">
      <a href="/parents" className="top-nav-button">Parents</a>
      <a href="/staff" className="top-nav-button">Students</a>
    </div>
  </div>
);

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="right-0 w-[300px] sm:w-[400px] bg-white max-h-screen overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-[var(--school-primary)]">Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          {mainMenuItems.map((item) => (
            <div key={item.title} className="space-y-2">
              <h2 className="font-semibold text-2xl text-[var(--school-primary)]">{item.title}</h2>
              <div className="flex flex-col space-y-2 pl-4">
                {item.items.map((subItem) => (
                  <a
                    key={subItem.title}
                    href={subItem.href}
                    className="text-gray-600 uppercase hover:text-[var(--school-accent)]"
                    onClick={() => setOpen(false)}
                  >
                    {subItem.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNavigation = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="hidden md:flex">
      <ul className="flex space-x-1 px-4 rounded">
        {mainMenuItems.map((item, index) => (
          <li 
            key={item.title} 
            className={`relative group ${index === mainMenuItems.length - 1 ? 'dropdown-last' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="menu-button-wrapper">
              <button className="text-white text-md hover:text-white hover:bg-[var(--school-secondary)] px-4 py-2 rounded-md">
                {item.title}
              </button>
              
              {(activeMenu === index) && (
                <div className={`dropdown-menu mt-1 z-50 ${index >= mainMenuItems.length - 2 ? 'dropdown-align-right' : ''}`}>
                  <div className="bg-white p-4 shadow-lg rounded-md min-w-[250px]">
                    <ul className="space-y-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <a
                            href={subItem.href}
                            className="block text-lg text-gray-600 hover:text-[var(--school-accent)] transition-colors py-1"
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="navbar-main-container sticky top-0 z-50 w-full">
      <TopBar />
      <div className="container-fluid navbar-logo-list">
        <div className="flex items-center justify-between w-full px-4 ml-10">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Image
                src={BrandLogo}
                alt="School Logo"
                className="brand-logo rounded"
              />
            </a>
          </div>

          <div className="hidden md:flex justify-end flex-1 mr-10">
            <DesktopNavigation />
          </div>

          <div className="flex items-center">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;