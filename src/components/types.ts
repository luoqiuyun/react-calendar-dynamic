type Game = {
  id: string;
  launchDate: string;
  title: string;
  summary: string;
  imageFilenameThumb: string;
  imageFilenameFull: string;
  learnMoreLink: string;
  purchaseLink: string;
  dom?: number;
  prevMonth?: boolean;
};

type DefaultDate = {
  days: number;
  firstDay: number;
  month: number;
  year: number;
};

type Images = string[];

type Calendar = Game[][];

export type { Game, Calendar, Images, DefaultDate };
