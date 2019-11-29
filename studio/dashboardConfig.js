export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5de186458180f2ce61960520',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ituymo4w',
                  apiId: '77756344-df1c-4b53-a3e7-d7bf205ce0cb'
                },
                {
                  buildHookId: '5de186451738f66b68b9c3c9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9sahkcjp',
                  apiId: 'b6bf49bf-db27-4292-a54f-1a64ec8c97fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zacklerner/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9sahkcjp.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
