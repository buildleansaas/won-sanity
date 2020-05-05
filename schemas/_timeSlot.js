export const timeslot = {
  title: "Time Slot",
  name: "timeslot",
  type: "object",
  fields: [
    {
      title: "What day?",
      name: "day",
      type: "string",
    },
    {
      title: "When does it start and end?",
      name: "startTime",
      type: "string",
    },
    {
      name: "location",
      title: "Where is it located",
      type: "reference",
      to: { type: "location" },
    },
    {
      title: "Additional Comments",
      name: "endTime",
      type: "string",
    },
  ],
};
