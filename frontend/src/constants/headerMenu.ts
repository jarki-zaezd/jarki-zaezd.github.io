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
    items: [
      {
        title: 'Training Calendar',
        link: publicUrls.segments,
        requireSub: false,
      },
      {
        title: 'My Activities',
        link: publicUrls.segments,
        requireSub: false,
      },
      {
        title: 'Training Log',
        link: publicUrls.routes,
        requireSub: false,
      },
      {
        title: 'Training Plans',
        link: publicUrls.goals,
        requireSub: true,
      },
      {
        title: 'Power Curve',
        link: publicUrls.heatmaps,
        requireSub: true,
      },
      {
        title: 'Fitness & Freshness',
        link: publicUrls.heatmaps,
        requireSub: true,
      },
    ],
  },
  {
    menuTitle: 'Explore',
    items: [
      {
        title: 'Segment Explore',
        link: publicUrls.segments,
        requireSub: false,
      },
      {
        title: 'Segment Search',
        link: publicUrls.segments,
        requireSub: false,
      },
      {
        title: 'Athlete Search',
        link: publicUrls.routes,
        requireSub: false,
      },
      {
        title: 'Clubs',
        link: publicUrls.goals,
        requireSub: true,
      },
      {
        title: 'Apps',
        link: publicUrls.heatmaps,
        requireSub: true,
      },
      {
        title: 'Create a Route',
        link: publicUrls.heatmaps,
        requireSub: true,
      },
      {
        title: 'Subscriber Perks',
        link: publicUrls.heatmaps,
        requireSub: true,
      },
    ],
  },
  {
    menuTitle: 'Challenges',
    link: publicUrls.challenges,
  },
];
