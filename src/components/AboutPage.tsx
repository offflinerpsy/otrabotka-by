import { OilProcessingSection } from "./OilProcessingSection";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  return <OilProcessingSection />;
};

export default AboutPage;
