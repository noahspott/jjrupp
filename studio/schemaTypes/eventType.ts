import {defineType, defineField} from 'sanity'
import {CalendarIcon} from '@sanity/icons'
import moment from 'moment-timezone'
import slugify from 'slugify'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'venue',
    }),

    defineField({
      name: 'eventTime',
      title: 'Date & Time',
      type: 'eventTime',
    }),

    defineField({
      name: 'isTimeVisible',
      title: 'Should the start time be shown on the website?',
      type: 'boolean',
      description:
        "Click this if you want the time to be displayed for this event on the website. Leave unchecked if you don't know the time.",
    }),

    defineField({
      name: 'slug',
      title: 'Event Slug',
      type: 'slug',
      description: 'Ex. jjrupp.com/slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: async (doc: any) => {
          const venueName = doc.venue?.name ? slugify(doc.venue.name) : null

          const eventTime = doc.eventTime
          const startDate = eventTime.startDate
          const timeZone = eventTime.timeZone
          const formattedDate = moment.tz(startDate, timeZone).format('MMM-D-YYYY')

          return `${venueName ? `-${venueName}-` : '-'}${formattedDate}`
        },
        slugify: (input: string) => {
          console.log('input', input)
          console.log('slugify(input)', slugify(input))
          return slugify(input)
        },
      },
    }),

    defineField({
      name: 'info',
      title: 'Info',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'ticketSaleUrl',
      title: 'Ticket Sale URL',
      type: 'string',
      description: 'If this is a free event, leave blank.',
      validation: (Rule) =>
        Rule.custom((url) => {
          try {
            if (!url) return true
            new URL(url)
            return true
          } catch {
            return 'Must be a valid URL'
          }
        }),
    }),
  ],
  preview: {
    select: {
      venue: 'venue',
      eventTime: 'eventTime',
    },
    prepare: ({venue, eventTime}) => {
      let subtitle = 'No date added yet'

      if (eventTime) {
        const {startDate, timeZone} = eventTime
        const formattedDate = eventTime
          ? moment.tz(startDate, timeZone).format('MMM D, YYYY')
          : 'No date added yet.'

        subtitle = formattedDate
      }

      return {
        title: venue.name,
        subtitle: subtitle,
      }
    },
  },
  icon: CalendarIcon,
})
