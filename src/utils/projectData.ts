export const projects = [
    {
        id: '0',
        name: 'MOJobs Mobile App',
        slug: 'mo-jobs',
        siteUrl: '/projects/mo-jobs',
        image: {
            src: '/images/mo-jobs-landing.jpg',
            alt: 'A preview of the MOJobs mobile app.',
        },
        inProgress: true,
        helpWanted: true,
        repos: [
            {
                name: 'motherhood-reclaimed-website',
            },
        ],
        repoName: 'motherhood-reclaimed-website',
        description:
            'An easy, free phone app for finding nearby job postings relative' + ' to your location or home address.',
        skillsNeeded: ['Development', 'Project Management'],
        links: [
            {
                label: 'https://github.com/Open-SGF/portal-to-work-client',
                url: 'https://github.com/Open-SGF/portal-to-work-client',
            },
            {
                label: 'https://github.com/Open-SGF/portal-to-work-api',
                url: 'https://github.com/Open-SGF/portal-to-work-api',
            },
        ],
        toolsUsed: ['Fastify', 'PostgreSQL', 'Typescript', 'TypeORM', 'Vue', 'Ionic'],
        clientIssue: 'People without cars should have an easier time finding close' + ' jobs.',
        ourSolution: 'Make a free, easy mobile app that shows jobs nearby by foot, or' + ' by bus route.',
    },
    {
        id: '1',
        name: 'Motherhood Reclaimed',
        slug: 'motherhood-reclaimed',
        siteUrl: '/projects/motherhood-reclaimed',
        image: {
            src: '/images/motherhood-reclaimed-landing.jpg',
            alt: 'A preview of motherhoodreclaimed.org',
        },
        inProgress: false,
        helpWanted: false,
        repos: [
            {
                name: 'portal-to-work-api',
            },
            {
                name: 'portal-to-work-client',
            },
        ],
        description: 'A website for an organization focused on reunited children with' + ' their mothers.',
        skillsNeeded: [],
        links: [
            {
                label: 'https://www.motherhoodreclaimed.org/',
                url: 'https://www.motherhoodreclaimed.org/',
            },
            {
                label: 'https://github.com/Open-SGF/motherhood-reclaimed-website',
                url: 'https://github.com/Open-SGF/motherhood-reclaimed-website',
            },
        ],
        toolsUsed: ['CraftCMS', 'Node', 'MySQL'],
        clientIssue: 'Client needed a website to help share their mission to' + ' potential partners',
        ourSolution:
            'We worked with them to come up with a design they liked and' +
            ' then launched their website with a CMS so they could edit the' +
            ' content as needed.',
    },
];
