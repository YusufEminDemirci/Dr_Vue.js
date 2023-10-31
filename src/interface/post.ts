export interface Post {
  id: number;
  title: string;
  date: string;
  url: string;
  categories: PostCategory[];
}

export interface PostCategory {
  id: number;
  title: string;
}
