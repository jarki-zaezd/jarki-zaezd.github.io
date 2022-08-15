import { publicUrls } from '../config';

type UrlKeys = keyof typeof publicUrls;
type UrlValues = typeof publicUrls[UrlKeys];

export interface ItemProps {
  title: string;
  link: UrlValues;
  requireSub: boolean;
}

export interface ItemsProps {
  menuTitle: string;
  link?: UrlValues;
  items?: ItemProps[];
}

export const headerMenuItems: ItemsProps[] = [
  {
    menuTitle: 'Dashboard',
    items: [
      {
        title: 'Activity Feed',
        link: publicUrls.dashboard,
        requireSub: false,
      },
      {
        title: 'My Segments',
        link: publicUrls.segments,
        requireSub: false,
      },
      {
        title: 'My Routes',
        link: publicUrls.routes,
        requireSub: false,
      },
      {
        title: 'My Goals',
        link: publicUrls.goals,
        requireSub: true,
      },
      {
        title: 'Heatmaps',
        link: publicUrls.heatmaps,
        requireSub: true,
      },
    ],
  },
  {
    menuTitle: 'Training',
  },
  {
    menuTitle: 'Explore',
  },
  {
    menuTitle: 'Challenges',
    link: publicUrls.challenges,
  },
];
