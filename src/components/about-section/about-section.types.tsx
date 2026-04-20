export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  age: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
  longBio: string;
  profileImage: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface AboutSectionProps {
  personal: PersonalInfo;
  skills: Skill[];
}
