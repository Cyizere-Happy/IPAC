import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'overview',
  title: 'Overview',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
