export default {
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint'
        },
        {
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    {title: 'House', value: 'house'},
                    {title: 'Apartment', value: 'apartment'},
                    {title: 'Bed and Breakfast', value: 'bed-and-breakfast'},
                    {title: 'Hotel', value: 'hotel'},
                    {title: 'Room', value: 'room'},
                ],
                layout: 'radio',
            }
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'images',
            title: 'Images',
            type: 'image',
            type: 'array',
            of: [{type: 'propertyImage'}]
        },
        {
            name: 'pricePerNight',
            title: 'Price Per Night',
            type: 'number',
        },
        {
            name: 'bedroom',
            title: 'Bedroom',
            type: 'number',
        },
        {
            name: 'bed',
            title: 'Bed',
            type: 'number',
        },
        {
            name: 'guest',
            title: 'Guest',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            }
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'host',
            title: 'Host',
            type: 'host'
        },
        {
            name: 'reviews',
            title: 'Reviews',
            type: 'array', 
            of: [{type: 'review'}]
        }
     
    ]
}