import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Us
          </h1>
        </div>
      </div>
      <hr className="my-8" />

      {/* Sahil */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/sahilAvatar.jpeg" alt={siteConfig.author1} />
            <AvatarFallback>SSS</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author1}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
        I’m Sahil Shenoy, a final-year Computer Science Engineering student at VIT Bhopal, specializing in Cloud Computing and Automation. My academic journey has provided me with a solid foundation in core computer science subjects, and I’ve honed my skills in data structures, algorithms, and system design. I’m particularly passionate about cloud infrastructure and security, and have explored technologies like containerization and edge computing. I thrive on learning and staying up-to-date with the latest advancements in the cloud landscape, continually pushing myself to grow in this ever-evolving field.
        </p>
      </div>
    <br/>
    <br/>
      {/* Dhwani */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/dhwaniAvatar.jpeg" alt={siteConfig.author2} />
            <AvatarFallback>DB</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author2}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
            I’m Dhwani Budhiraja, a final-year Computer Science Engineering student at VIT Bhopal, specializing in Artificial Intelligence and Machine Learning. I have a strong foundation in core computer science subjects and have developed advanced skills in data structures, algorithms, Neural Networks & system design. My passion for AI/ML drives me to explore cutting-edge fields like Deep Learning, Fuzzy Logic, and Natural Language Processing. I’m dedicated to constantly expanding my expertise and applying innovative AI solutions to real-world challenges.
        </p>
      </div>
    </div>
  );
}