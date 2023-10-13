import { ProjectItemProps } from '@/components/main/ProjectSection';

export const getProjects = function (): ProjectItemProps[] {
  let projects: ProjectItemProps[] = [
    {
      projectTitle: 'Omar\'s Project 1',
      projectData: {
        liveURL: 'https://omarproject1.vercel.app',
        githubURL: 'https://github.com/omarhamad/project1',
        relatedLinks: [
          {
            label: 'Figma',
            link: 'https://www.figma.com/file/omarproject1',
          },
        ],
      },
      description: [
        'Description of Omar\'s Project 1.',
        'Additional details about the project.',
      ],
      tech: [
        'Tech1',
        'Tech2',
        'Tech3',
      ],
      category: ['Category1'],
      status: 'Status1',
    },
    {
      projectTitle: 'Omar\'s Project 2',
      projectData: {
        liveURL: 'https://omarproject2.vercel.app',
        githubURL: 'https://github.com/omarhamad/project2',
        relatedLinks: [
          {
            label: 'Figma',
            link: 'https://www.figma.com/file/omarproject2',
          },
        ],
      },
      description: [
        'Description of Omar\'s Project 2.',
        'Additional details about the project.',
      ],
      tech: ['Tech1', 'Tech2', 'Tech3'],
      category: ['Category1'],
      status: 'Status1',
    },
    // Add more projects as needed
  ];

  return projects.reverse();
};
