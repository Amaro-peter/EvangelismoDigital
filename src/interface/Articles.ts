export interface Section {
  subtitle?: string;
  paragraph: string;
}

export interface Article {
  title: string;
  imgArticle: string;
  imgMainCoverPage?: string;
  imgAlt?: string;
  text: Section[];
  chamado: {
    title: string;
    description: string;
  };
  datePublished?: Date;
  dateModified?: Date;
  author?: string;   
}