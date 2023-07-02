// src/projects.ts

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

const projects: Project[] = [
    {
        title: 'Aedes Aegypti Lifespan Extension',
        description: 'Designed and implemented a system to extend the lifespan of Aedes Aegypti mosquitoes using CRISPR/Cas9 gene editing.',
        imageUrl: 'https://i.ibb.co/QKSTMj6/dummy.png',
        projectUrl: 'https://labs.mcdb.ucsb.edu/montell/craig/',
    },
    {
        title: 'ResearchRadar',
        description: 'AI startup that helps researchers stay up to date with the latest research in their field.',
        imageUrl: 'https://via.placeholder.com/300',
        projectUrl: 'https://research-radar.com',
    },
    {
        title: "MagicMirrorUS",
        description: 'Founded and ran a company designing and producing custom Linux based smart mirrors.',
        imageUrl: 'https://via.placeholder.com/300',
        projectUrl: 'https://magicmirror.us',
    }
    // Add more project objects here
];

export default projects;
