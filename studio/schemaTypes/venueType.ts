import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'venue',
  title: 'Venue',
  type: 'object',
  fields: [
    // VENUE - NAME
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the venue for the event.',
      validation: (Rule) => Rule.required(),
    }),

    // VENUE - ADDRESS
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      description: 'The address of the event venue.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
