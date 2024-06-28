export interface Blog {
  id?: number;
  title: string;
  author: string;
  content: string;
  date: string;
  image: string;
}

export interface BlogModule {
  metadata: Omit<Blog, 'id'>;
  default: React.ComponentType;
}

export interface BlogWithComponent extends Blog {
  component: React.ComponentType;
}
