export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '60e3f7b9650c2e0f656e0544',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-gcpfck1d',
                  apiId: '3c2b7b30-e050-4dda-b740-4ba5fb5d08fa'
                },
                {
                  buildHookId: '60e3f7ba650c2e0cf66e04f6',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-jz7acmym',
                  apiId: 'b1e869a9-ab1a-49c3-9900-d7695d0030e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tymwer/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-jz7acmym.netlify.app', category: 'apps'}
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
