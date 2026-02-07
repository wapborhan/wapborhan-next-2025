export type ProjectType = {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
  underDevelopment?: boolean;
};