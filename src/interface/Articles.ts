export interface Section {
  subtitle?: string;
  paragraph: string;
}

export interface Article {
  title: string;
  imgpath?: string;
  text: Section[];
  chamado: {
    title: string;
    description: string;
  };
}