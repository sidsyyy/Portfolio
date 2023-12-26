// import Rule  from "@sanity/validation";

export default {
    title: 'Resume',
    name: 'allResume',
    type: 'document',
    fields: [
        {
          name: "resume",
          title: "Resume",
          type: "file",
          validation: (Rule) => Rule.required().assetRequired(),
          options: {
            storeOriginalFilename: true,
          },
        }
    ]
}