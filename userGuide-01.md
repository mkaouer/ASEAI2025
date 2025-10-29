# ASEAI 2025 Website User Guide

**Website URL:** Available after deployment to GitHub Pages  
**Purpose:** Promote and provide information about the 1st African Winter School on Software Engineering & AI  
**Access:** Public website

## Powered by Manus

This website is built with cutting-edge web technologies for optimal performance and user experience. The frontend leverages **React 19** with **TypeScript** for type-safe component development, styled with **Tailwind CSS 4** and **shadcn/ui** component library for a modern, accessible interface. The build system uses **Vite** for lightning-fast development and optimized production builds. **Deployment:** Auto-scaling infrastructure with global CDN via GitHub Pages ensures worldwide accessibility and fast loading times.

## Using Your Website

The website provides comprehensive information about the ASEAI 2025 winter school through an intuitive single-page design. Visitors can navigate using the top menu bar to jump directly to any section. The hero section immediately presents key details: event dates, location, and registration options. Click "Register Now" to access the registration form, or click "Learn More" to visit the official event page.

The program schedule is organized into three interactive tabs representing each day of the event. Click on "Day 1", "Day 2", or "Day 3" tabs to view the complete schedule for that day, including session times, speaker names, and presentation formats. The speakers section displays all plenary speakers with their photos, affiliations, and roles, providing a visual directory of world-class experts attending the event.

## Managing Your Website

To update website content, edit the data files in the `client/src/data/` directory using the Code panel in the Management UI. The `speakers.ts` file contains all speaker information, `program.ts` holds the schedule, and `sponsors.ts` manages sponsor details. After making changes, the website rebuilds automatically when you push updates to GitHub.

Access the Dashboard panel to monitor website traffic and visitor analytics after deployment. The Settings panel allows you to configure website metadata and environment variables. Use the Code panel to download all project files or browse the complete file structure.

## Next Steps

Talk to Manus AI anytime to request changes or add features. Ready to share your winter school with the world? Follow the deployment guide in DEPLOYMENT.md to publish your website to GitHub Pages and make it accessible to potential participants worldwide.
