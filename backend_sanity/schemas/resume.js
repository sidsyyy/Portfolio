// import Rule  from "@sanity/validation";

export default {
    name: 'allResume',
    title: 'Resume',
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