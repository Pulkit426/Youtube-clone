import { randomIdGenerator } from "./helper";

const generateComment = () => ({
  id: randomIdGenerator(),
  name: "Pulkit Agrawal",
  text: "Lorem ipsum dolor it em",
  replies: [],
});

export const commentsData = [
  {
    ...generateComment(),
    replies: [
      {
        ...generateComment(),
        replies: [generateComment()],
      },
      {
        ...generateComment(),
        replies: [
          {
            ...generateComment(),
            replies: [
              {
                ...generateComment(),
                replies: [generateComment()],
              },
            ],
          },
        ],
      },
    ],
  },
  ...Array.from({ length: 2 }, () => generateComment()),
  {
    ...generateComment(),
    replies: [
      {
        ...generateComment(),
        replies: [
          {
            ...generateComment(),
            replies: [
              {
                ...generateComment(),
                replies: [
                  {
                    ...generateComment(),
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  ...Array.from({ length: 1 }, () => generateComment()),
];
