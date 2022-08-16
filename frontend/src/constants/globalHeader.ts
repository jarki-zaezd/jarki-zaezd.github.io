import { Either } from '../types';
import { publicUrls, UrlValues } from '../config';

export interface DropdownItemProps {
  title: string;
  link: UrlValues;
  requireSub: boolean;
}

interface MenuItemBasics {
  menuTitle: string;
}

export interface DropdownMenuItem extends MenuItemBasics {
  items: DropdownItemProps[];
}

export interface LinkMenuItem extends MenuItemBasics {
  link: UrlValues;
}

export type MenuItemProps = Either<DropdownMenuItem, LinkMenuItem>;

const globalHeaderItems: MenuItemProps[] = [
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

export const filterPremiumAndNormalItems = (items: DropdownItemProps[]) => {
  return items.reduce<{
    premiumItems: DropdownItemProps[],
    normalItems: DropdownItemProps[]
  }>((accum, current) => {
    const listName = current.requireSub ? 'premiumItems' : 'normalItems';
    return { ...accum, [listName]: [...accum[listName], current] };
  }, { premiumItems: [], normalItems: [] });
};

export default globalHeaderItems;
