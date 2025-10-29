export interface Sponsor {
  name: string;
  logo: string;
  contribution?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "ACM SIGSOFT",
    logo: "/images/sponsors/sigsoft.png",
    contribution: "$10,000"
  },
  {
    name: "Novation City",
    logo: "/images/sponsors/novationCity.png",
    contribution: "Event hosting and local arrangements"
  },
  {
    name: "ÉTS Montreal",
    logo: "/images/sponsors/6079_0_21483_9052_ecole-de-technologie-superieure-ets-logo.jpg",
    contribution: "IT support (zoom, etc.), organizer affiliation"
  },
  {
    name: "NVIDIA",
    logo: "/images/sponsors/nvidia.png"
  },
  {
    name: "LARODEC",
    logo: "/images/sponsors/larodec_theme_logo.png"
  },
  {
    name: "MedTech",
    logo: "/images/sponsors/MEDTECH-LOGO.png"
  },
  {
    name: "ISSAT",
    logo: "/images/sponsors/304770883_445470980957335_8439243636787994723_n.jpg"
  },
  {
    name: "Africa Tech",
    logo: "/images/sponsors/465403518_968069545353885_9198211332521103769_n.jpg"
  }
];
