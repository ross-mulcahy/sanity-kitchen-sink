export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60354da7e3f9931693270bda',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oishjk18',
                  apiId: 'c992675f-4802-4e0e-a2d2-a4bf32f27f38'
                },
                {
                  buildHookId: '60354da717e47b12bb8fc687',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5vp8qo5v',
                  apiId: 'f49160ea-e2dd-426b-8525-221230ca8dca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ross-mulcahy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5vp8qo5v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
