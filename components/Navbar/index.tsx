"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from "next/image";
import BrandLogo from '@/images/Asset 3.png';
import './index.css';

const aboutUsItems = {
  column1: [
    { title: 'Our School', href: '/about/ourschool' },
    { title: 'Welcome from Principal', href: '/about/principal' },
    { title: 'Mission and Vision', href: '/about/mission-vision' },
    { title: 'Senior Leadership Team', href: '/about/history' },
],
column2: [
    { title: 'Go Beyond Philosophy', href: '/about/leadership' },
    { title: 'Pastoral Care', href: '/about/board' },
    { title: 'Our Location', href: '/about/academic-team' },
],
column3: [
    { title: 'Transportation Services', href: '/about/vision' },
    { title: 'Career Opportunities', href: '/about/mission' },
    { title: 'RGS UK', href: '/about/principles' },
],
};

const schoolLifeItems = {
  column1: [
      { title: "Term Dates And Calendar", href: "/school-life/termdate-calender" },
      { title: "Facilities", href: "/school-life/facilities" },
      { title: "Boarding", href: "/school-life/schedule" }
    ],
    column2: [
      { title: "Uniform", href: "/school-life/facilities" },
      { title: "School Hours", href: "/school-life/campus" },
      { title: "School Policies", href: "/school-life/virtual-tour" }
    ],
    column3: [],

};

const admissionsItems = {
  column1: [
    { title: 'How to Apply', href: '/admission/apply' },
    { title: 'Application Process', href: '/admissions/process' },
    { title: 'Entry Requirements', href: '/admissions/requirements' },
  ],
  column2: [
    { title: 'Fees Structure', href: '/admission/fee-structure' },
    { title: 'Financial Aid', href: '/admissions/aid' },
    { title: 'Scholarships', href: '/admissions/scholarships' },
  ],
  column3: [
    { title: 'Visit Us', href: '/admissions/visit' },
    { title: 'Open Days', href: '/admissions/open-days' },
    { title: 'Book a Tour', href: '/admissions/book-tour' },
  ],
};

const academicsItems = {
  column1: [
    { title: 'Curriculum', href: '/academics/curriculum' },
    { title: 'Teaching Approach', href: '/academics/approach' },
    { title: 'Learning Support', href: '/academics/support' },
  ],
  column2: [
    { title: 'Primary School', href: '/academics/primary-school' },
    { title: 'Secondary School', href: '/academics/secondary-school' },
    { title: 'Sixth Form', href: '/academics/sixth-form' },
  ],
  column3: [
    { title: 'Examination Results', href: '/academics/results' },
    { title: 'University Placements', href: '/academics/university' },
    { title: 'Academic Excellence', href: '/academics/excellence' },
  ],
};

const activitiesItems = {
  column1: [
    { title: 'Sports', href: '/activities/sports' },
    { title: 'Sports Teams', href: '/activities/teams' },
    { title: 'Sports Facilities', href: '/activities/facilities' },
  ],
  column2: [
    { title: 'Arts & Music', href: '/activities/arts' },
    { title: 'Performing Arts', href: '/activities/performing' },
    { title: 'Visual Arts', href: '/activities/visual' },
  ],
  column3: [
    { title: 'Clubs & Societies', href: '/activities/clubs' },
    { title: 'Student Leadership', href: '/activities/leadership' },
    { title: 'Community Service', href: '/activities/community' },
  ],
};

const newsEventsItems = {
  column1: [
    { title: 'Latest News', href: '/news' },
    { title: 'School Updates', href: '/news/updates' },
    { title: 'Newsletters', href: '/news/newsletters' },
  ],
  column2: [
    { title: 'Upcoming Events', href: '/events' },
    { title: 'Calendar', href: '/events/calendar' },
    { title: 'Past Events', href: '/events/past' },
  ],
  column3: [
    { title: 'School Blog', href: '/blog' },
    { title: 'Student Stories', href: '/blog/stories' },
    { title: 'Media Gallery', href: '/blog/gallery' },
  ],
};

const mainMenuItems = [
  {
    title: 'About Us',
    isSpecial: true,
    items: aboutUsItems,
    heading: 'Discover Our School',
  },
  {
    title: 'School Life',
    isSpecial: true,
    items: schoolLifeItems,
    heading: 'Life at Our School',
  },
  {
    title: 'Admissions',
    isSpecial: true,
    items: admissionsItems,
    heading: 'Join Our Community',
  },
  {
    title: 'Academics',
    isSpecial: true,
    items: academicsItems,
    heading: 'Academic Excellence',
  },
  {
    title: 'Co-Curricular',
    isSpecial: true,
    items: activitiesItems,
    heading: 'Beyond the Classroom',
  },
  {
    title: 'News & Events',
    isSpecial: true,
    items: newsEventsItems,
    heading: 'Stay Connected',
  },
];

const TopBar = () => (
  <div className="top-navbar py-1 px-4">
    <div className="container mx-auto flex justify-end space-x-4 text-sm">
      <a href="/parents" className="top-nav-button">Parents</a>
      <a href="/staff" className="top-nav-button">Staff</a>
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
              <h2 className="font-semibold text-lg text-[var(--school-primary)]">{item.title}</h2>
              <div className="flex flex-col space-y-2 pl-4">
                {Object.values(item.items).flat().map((subItem: any) => (
                  <a
                    key={subItem.title}
                    href={subItem.href}
                    className="text-gray-600 capitalize hover:text-[var(--school-accent)]"
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

const DesktopNavigation = () => (
  <NavigationMenu className="hidden md:flex">
    <NavigationMenuList className="px-4 rounded">
      {mainMenuItems.map((item) => (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger className="text-white hover:text-white hover:bg-[var(--school-secondary)]">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[800px] bg-white p-6">
              <h2 className="text-lg font-semibold text-[var(--school-primary)] mb-4">{item.heading}</h2>
              <div className="grid grid-cols-10 gap-6">
                <div className="col-span-4">
                  <ul className="space-y-2">
                    {item.items.column1.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-[var(--school-accent)] transition-colors"
                          >
                            {subItem.title}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="space-y-2">
                    {item.items.column2.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-[var(--school-accent)] transition-colors"
                          >
                            {subItem.title}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="space-y-2">
                    {item.items.column3.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-[var(--school-accent)] transition-colors"
                          >
                            {subItem.title}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

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