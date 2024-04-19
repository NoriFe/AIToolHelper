import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";



export const navItems = [
  { label: "Features", href: "#" },
  { label: "Tools", href: "#" },  
  
];

export const ais = [
  { title: 'ChatGPT', description: 'Experience the power of conversational AI with ChatGPT, a cutting-edge chatbot powered by OpenAI.', image: 'chatgpt.jpg', link: '/chatgpt' },
  { title: 'Stepsize AI', description: '', image: 'stylegan.jpg', link: '/stylegan' },
  { title: 'Cody AI', description: 'Discover BERT (Bidirectional Encoder Representations from Transformers), a pre-trained natural language processing model that has revolutionized various NLP tasks.', image: 'bert.jpg', link: '/bert' },
  { title: 'Tabnine', description: 'Learn about YOLO (You Only Look Once), an object detection algorithm that achieves high accuracy and real-time performance.', image: 'yolo.jpg', link: '/yolo' },
  { title: 'Mutable AI', description: 'Get introduced to GPT-3, one of the largest and most powerful language models that can perform a wide range of natural language understanding tasks.', image: 'gpt3.jpg', link: '/gpt3' },
  { title: 'Bugasura', description: 'Explore AlphaGo, an AI program developed by DeepMind that became the first computer Go program to defeat a human professional Go player.', image: 'alphago.jpg', link: '/alphago' },
  { title: 'OpenAI Gym', description: 'Discover OpenAI Gym, a toolkit for developing and comparing reinforcement learning algorithms.', image: 'openai-gym.jpg', link: '/openai-gym' },
  { title: 'OpenCV', description: 'Learn about CycleGAN, a technique for image-to-image translation using deep learning.', image: 'cyclegan.jpg', link: '/cyclegan' },
  { title: 'TensorFlow', description: 'Dive into TensorFlow, an open-source machine learning framework developed by Google for building and training ML models.', image: 'tensorflow.jpg', link: '/tensorflow' },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Adaptive Learning Environment",
    description:
      "Create an adaptive learning environment tailored to the individual needs of each student.",
  },
  {
    icon: <Fingerprint />,
    text: "Accessible Communication Tools",
    description:
      "Facilitate communication with accessible tools designed for students with special needs.",
  },
  {
    icon: <ShieldHalf />,
    text: "Inclusive Curriculum Resources",
    description:
      "Access a wide range of inclusive curriculum resources to support diverse learning needs.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Progress Tracking",
    description:
      "Track students' progress in real-time to provide timely support and intervention.",
  },
  {
    icon: <PlugZap />,
    text: "Parent-Teacher Collaboration",
    description:
      "Enable seamless collaboration between parents and teachers to support student learning.",
  },
  {
    icon: <GlobeLock />,
    text: "Secure Data Management",
    description:
      "Ensure the security and privacy of student data with robust data management practices.",
  },
];

export const checklistItems = [
  {
    title: "Personalized Learning Plans",
    description:
      "Tailor learning plans to meet the unique needs and abilities of each student.",
  },
  {
    title: "Accessible Technology Integration",
    description:
      "Integrate accessible technology tools to enhance learning experiences for students with special needs.",
  },
  {
    title: "Individualized Support Services",
    description:
      "Provide individualized support services to address the specific challenges faced by each student.",
  },
  {
    title: "Collaborative Problem-Solving",
    description:
      "Engage in collaborative problem-solving with students, parents, and other stakeholders to address educational challenges.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "£0",
    features: [
      "Adaptive Learning Environment",
      "Basic Support Services",
      "Limited Access to Curriculum Resources",
      "Limited Progress Tracking",
    ],
  },
  {
    title: "Standard",
    price: "£50",
    features: [
      "Adaptive Learning Environment",
      "Standard Support Services",
      "Access to Full Curriculum Resources",
      "Real-Time Progress Tracking",
    ],
  },
  {
    title: "Premium",
    price: "£100",
    features: [
      "Adaptive Learning Environment",
      "Premium Support Services",
      "Access to Full Curriculum Resources",
      "Real-Time Progress Tracking",
      "Dedicated Parent-Teacher Collaboration Portal",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Accessibility Guidelines" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Job Opportunities" },
  { href: "#", text: "Volunteer Opportunities" },
];
