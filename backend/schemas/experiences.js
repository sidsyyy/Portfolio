const work = {
    name:'work',
    title:'Work',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'fromDate',
            title: 'from',
            type: 'date'
        },
        {  
            name: 'isWorking',
            title: 'Are you currently working here?',
            type: 'boolean'
        },
        {
            name: 'toDate',
            title: 'to',
            type: 'date'
        }
    ]
}



export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[
                work
            ]
        },
    ]
}