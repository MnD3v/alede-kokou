import React from 'react';

export const servicesData = [
    {
        slug: "accompagnement",
        title: "Accompagnement",
        subtitle: "Couples & Fiancés",
        description: "Un suivi personnalisé pour bâtir des fondations solides. Que vous soyez en chemin vers le mariage ou désireux de renforcer votre union, nous vous offrons des outils concrets et une écoute bienveillante.",
        fullDescription: (
            <div className="space-y-4">
                <p>
                    L'accompagnement des couples et des fiancés est au cœur de notre mission. Nous croyons que le mariage est une institution précieuse qui mérite d'être chérie et protégée.
                </p>
                <p>
                    Notre approche comprend :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Des sessions de conseil prénuptial pour préparer les futurs mariés aux réalités de la vie commune.</li>
                    <li>Un suivi pour les couples mariés traversant des périodes de turbulences ou souhaitant simplement approfondir leur intimité.</li>
                    <li>Des ateliers thématiques sur la communication, la gestion des conflits et la vision commune.</li>
                </ul>
                <p>
                    Nous offrons un espace sécurisé et confidentiel où chaque couple peut s'exprimer librement et trouver des solutions adaptées à sa situation unique.
                </p>
            </div>
        ),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        )
    },
    {
        slug: "formation",
        title: "Formation",
        subtitle: "Leadership & Croissance",
        description: "Des programmes conçus pour équiper les leaders de demain. Approfondissez vos connaissances bibliques et développez vos compétences pour servir avec excellence et intégrité.",
        fullDescription: (
            <div className="space-y-4">
                <p>
                    Le leadership chrétien exige à la fois un caractère éprouvé et des compétences solides. Nos programmes de formation visent à développer ces deux aspects chez les leaders actuels et en devenir.
                </p>
                <p>
                    Nos modules couvrent :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Les fondements du leadership serviteur selon le modèle biblique.</li>
                    <li>L'éthique et l'intégrité dans le ministère et la vie professionnelle.</li>
                    <li>La gestion d'équipe, la prise de parole en public et la planification stratégique.</li>
                </ul>
                <p>
                    Que vous soyez responsable d'église, leader associatif ou cadre en entreprise, nos formations vous donneront les clés pour influencer positivement votre entourage.
                </p>
            </div>
        ),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
        )
    },
    {
        slug: "assistance",
        title: "Assistance",
        subtitle: "Soutien & Entraide",
        description: "Une main tendue dans les moments difficiles. Nous proposons une assistance spirituelle et morale pour traverser les épreuves de la vie avec espérance et dignité.",
        fullDescription: (
            <div className="space-y-4">
                <p>
                    La vie nous confronte parfois à des défis qui semblent insurmontables. Notre service d'assistance est là pour vous rappeler que vous n'êtes pas seul.
                </p>
                <p>
                    Nous proposons :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Une écoute active et compassionnelle pour ceux qui traversent le deuil, la maladie ou la dépression.</li>
                    <li>Un accompagnement spirituel par la prière et l'encouragement biblique.</li>
                    <li>Une orientation vers des ressources spécialisées si nécessaire.</li>
                </ul>
                <p>
                    Notre objectif est de vous aider à retrouver l'espérance et la force nécessaire pour avancer, un pas après l'autre.
                </p>
            </div>
        ),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
        )
    },
    {
        slug: "ressources",
        title: "Ressources",
        subtitle: "Articles & Médias",
        description: "Nourrissez votre réflexion avec nos articles, études et contenus multimédias. Des ressources accessibles pour approfondir votre foi au quotidien.",
        fullDescription: (
            <div className="space-y-4">
                <p>
                    La connaissance est une clé de la croissance spirituelle. Nous mettons à votre disposition une variété de ressources pour vous édifier.
                </p>
                <p>
                    Vous y trouverez :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Des articles de blog sur des sujets d'actualité et de vie pratique.</li>
                    <li>Des enregistrements audio et vidéo de prédications et d'enseignements.</li>
                    <li>Des recommandations de lectures pour approfondir votre compréhension de la foi.</li>
                </ul>
                <p>
                    Explorez notre bibliothèque numérique et laissez-vous inspirer pour votre marche quotidienne.
                </p>
            </div>
        ),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>
        )
    }
];
