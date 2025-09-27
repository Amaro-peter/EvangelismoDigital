export interface Section {
  subtitle?: string;
  paragraph: string;
}

export interface Article {
  title: string;
  imgArticle: string;
  imgMainCoverPage?: string;
  text: Section[];
  chamado: {
    title: string;
    description: string;
  };
}