export type ConceptVariant = {
  name: "Bare PCB" | "Assembled PCB" | "Complete Kit";
  priceLabel: string;
  includes: string;
};

export type ConceptProduct = {
  slug: string;
  name: string;
  creator: string;
  category: string;
  useCase: string;
  revision: string;
  boardCode: string;
  accent: "green" | "copper" | "cream";
  highlights: string[];
  specs: { label: string; value: string }[];
  variants: ConceptVariant[];
};

export const conceptProducts: ConceptProduct[] = [
  {
    slug: "plantbrain-mini",
    name: "PlantBrain Mini",
    creator: "@ArunElectronics",
    category: "IoT / Agriculture",
    useCase: "ESP32 smart irrigation controller for compact grow systems.",
    revision: "REV 3.2",
    boardCode: "PBM-032",
    accent: "green",
    highlights: ["ESP32", "4× soil sensor inputs", "Wi‑Fi", "USB‑C"],
    specs: [
      { label: "MCU", value: "ESP32" },
      { label: "Input", value: "12 V DC" },
      { label: "Sensors", value: "4 channels" },
      { label: "Board", value: "72 × 48 mm" },
    ],
    variants: [
      { name: "Bare PCB", priceLabel: "₹449", includes: "Fabricated board only" },
      { name: "Assembled PCB", priceLabel: "₹1,499", includes: "PCB + populated components" },
      { name: "Complete Kit", priceLabel: "₹1,949", includes: "Assembled PCB + cables + terminal accessories" },
    ],
  },
  {
    slug: "robodrive-4",
    name: "RoboDrive 4",
    creator: "@MotionLab",
    category: "Robotics",
    useCase: "Compact four-channel motor controller for student robots.",
    revision: "REV 1.4",
    boardCode: "RBD-014",
    accent: "copper",
    highlights: ["4 channels", "12–24 V", "Encoder headers", "I²C"],
    specs: [
      { label: "Channels", value: "4" },
      { label: "Motor input", value: "12–24 V" },
      { label: "Control", value: "I²C / PWM" },
      { label: "Board", value: "82 × 55 mm" },
    ],
    variants: [
      { name: "Bare PCB", priceLabel: "₹599", includes: "Fabricated board only" },
      { name: "Assembled PCB", priceLabel: "₹2,199", includes: "PCB + populated components" },
      { name: "Complete Kit", priceLabel: "₹2,649", includes: "Assembled PCB + terminal block kit" },
    ],
  },
  {
    slug: "airsense-node",
    name: "AirSense Node",
    creator: "@OpenAtmos",
    category: "Sensors",
    useCase: "Environmental sensor node for classrooms and small labs.",
    revision: "REV 2.0",
    boardCode: "ASN-020",
    accent: "cream",
    highlights: ["CO₂-ready", "Temp / RH", "USB‑C", "ESP32-C3"],
    specs: [
      { label: "MCU", value: "ESP32-C3" },
      { label: "Input", value: "5 V USB‑C" },
      { label: "Bus", value: "I²C" },
      { label: "Board", value: "58 × 42 mm" },
    ],
    variants: [
      { name: "Bare PCB", priceLabel: "₹399", includes: "Fabricated board only" },
      { name: "Assembled PCB", priceLabel: "₹1,299", includes: "PCB + populated components" },
      { name: "Complete Kit", priceLabel: "₹1,699", includes: "Assembled board + enclosure hardware" },
    ],
  },
  {
    slug: "usb-scope-mini",
    name: "USB Scope Mini",
    creator: "@BenchPocket",
    category: "Test equipment",
    useCase: "Pocket diagnostic acquisition board for basic embedded debugging.",
    revision: "REV 1.1",
    boardCode: "USM-011",
    accent: "green",
    highlights: ["USB‑C", "2 channels", "ESD protection", "Open firmware"],
    specs: [
      { label: "Channels", value: "2" },
      { label: "Interface", value: "USB 2.0" },
      { label: "Input", value: "5 V USB" },
      { label: "Board", value: "64 × 36 mm" },
    ],
    variants: [
      { name: "Bare PCB", priceLabel: "₹349", includes: "Fabricated board only" },
      { name: "Assembled PCB", priceLabel: "₹1,249", includes: "PCB + populated components" },
      { name: "Complete Kit", priceLabel: "₹1,749", includes: "Assembled board + leads + case hardware" },
    ],
  },
  {
    slug: "powerguard",
    name: "PowerGuard",
    creator: "@VoltWorks",
    category: "Power",
    useCase: "USB‑C voltage and current monitoring board for bench setups.",
    revision: "REV 0.9",
    boardCode: "PWG-009",
    accent: "copper",
    highlights: ["USB‑C", "PD pass-through", "Current sense", "OLED header"],
    specs: [
      { label: "Input", value: "USB‑C PD" },
      { label: "Sense", value: "Voltage / current" },
      { label: "Header", value: "I²C" },
      { label: "Board", value: "70 × 32 mm" },
    ],
    variants: [
      { name: "Bare PCB", priceLabel: "₹449", includes: "Fabricated board only" },
      { name: "Assembled PCB", priceLabel: "₹1,599", includes: "PCB + populated components" },
      { name: "Complete Kit", priceLabel: "₹2,099", includes: "Assembled board + display + leads" },
    ],
  },
];
