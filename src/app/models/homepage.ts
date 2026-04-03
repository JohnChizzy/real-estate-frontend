export interface TestimonialInterface {
  id: number | string;
  name: string;
  role: string;
  title: string;
  content: string;
  stars: number;
  location: string;
  imageUrl: string;
}

export interface FaqInterface {
  id: number | string;
  question: string;
  content: string;
}