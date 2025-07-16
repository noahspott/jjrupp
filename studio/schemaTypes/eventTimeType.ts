import {defineField, defineType} from 'sanity'
import moment from 'moment-timezone'
import EventTimeInput from '../components/EventTimeInput'

export default defineType({
  name: 'eventTime',
  title: 'Date & Time',
  type: 'object',
  fields: [
    defineField({
      name: 'timeZone',
      title: 'Time Zone',
      type: 'string',
      initialValue: 'America/New_York',
      options: {
        list: moment.tz
          .names()
          .filter(
            (tz) => tz.toLowerCase().includes('america/') || tz.toLowerCase().includes('us/'),
          ),
      },
      description: 'The time zone of the event.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date & Time',
      type: 'datetime',
      description: 'The start date of the event.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'utcStartDate',
      title: 'UTC Start Date',
      type: 'datetime',
      hidden: true,
    }),
  ],
  components: {
    input: EventTimeInput,
  },
})
