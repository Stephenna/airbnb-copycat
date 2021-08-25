export default {
    name: 'review',
    title: 'Review',
    type: 'object',
    fields: [
        {
            name: 'reviewTitle',
            title: 'Review Title',
            type: 'string'
        },
        {
        name: 'reviewDescription',
        title: 'Review Description',
        type: 'string',
        },
        {
            name: 'traveller',
            title: 'Traveller',
            type: 'reference',
            to: [{ type: 'person'}]
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'string',
            options: {
                list: [
                    {title: '5 stars', value: '5-stars'},
                    {title: '4 Stars', value: '4-stars',},
                    {title: '3 stars', value: '3-stars'},
                    {title: '2 stars', value: '2-stars'},
                    {title: '1 stars', value: '1-stars'}
                ]
            }
        
        },
    ]
}