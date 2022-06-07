import { Tag } from "./tag";

export interface Case {
  name: string;
  url: string;
  language: string;
  tags: Tag[];
  image: string;
  description: string;
  content: string;
  company: string;
  start: Date;
  end: Date;
}
