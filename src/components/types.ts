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
  year: number;
  month: number;
  firstDay: number;
  daysInMonth: number;
};

type Images = string[];

type Calendar = Game[][];

export type { Game, Calendar, Images, DefaultDate };
