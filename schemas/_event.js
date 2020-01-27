import { location } from "./_location"

export const event = {
    title: "Events",
    name: "event",
    type: "document",
    fields: [
        {
            title: "Active",
            name: "active",
            type: "boolean",
            layout: "true"
        },
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Description",
            name: "description",
            type: "text",
        },
        {
            name: "location",
            title: "Location",
            type: "reference",
            to: { type: "location" },
        },
        {
            title: "Google Doc",
            description: "On the Google Doc for the Event, click Share. View Only, for Anyone who has the link (Not just Won Buddhism Organisation Folk)",
            name: "moreInfo",
            type: "url"
        },
        {
            title: 'When does the Event start?',
            name: 'eventBegin',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }
        },
        {
            title: 'When does the Event end?',
            name: 'eventEnd',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }
        }
    ]
}