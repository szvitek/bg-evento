import 'server-only';
import prisma from './db';
import { capitalize } from './utils';
import { notFound } from 'next/navigation';
import { unstable_cache } from 'next/cache';

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const condition =
    city === 'all'
      ? undefined
      : {
          where: {
            city: capitalize(city),
          },
        };
  const totalCount = await prisma.eventoEvent.count(condition);

  return {
    events,
    totalCount,
  };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
