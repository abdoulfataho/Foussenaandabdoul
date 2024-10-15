const poems = [
    {
        title: "My Love for Foussena",
        content: "Foussena, your smile lights up my world,\nYour laughter fills my heart,\nWith you, I'm complete,\nNever to part.",
        titleFr: "Mon Amour pour Foussena",
        contentFr: "Foussena, ton sourire illumine mon monde,\nTon rire remplit mon cœur,\nAvec toi, je suis complet,\nJamais nous ne nous séparerons.",
        author: "Abdoul"
    },
    {
        title: "Forever and Always, Foussena",
        content: "In your eyes, Foussena, I see my future,\nIn your hands, I place my trust,\nOur love, a beautiful adventure,\nForever and always, just us.",
        titleFr: "Pour Toujours et à Jamais, Foussena",
        contentFr: "Dans tes yeux, Foussena, je vois mon avenir,\nEntre tes mains, je place ma confiance,\nNotre amour, une belle aventure,\nPour toujours et à jamais, rien que nous deux.",
        author: "Abdoul"
    },
    {
        title: "Starry Nights with Foussena",
        content: "Under the starry sky we lay,\nFoussena, you make my heart sway,\nWith every twinkle in your eyes,\nOur love reaches new highs.",
        titleFr: "Nuits Étoilées avec Foussena",
        contentFr: "Sous le ciel étoilé nous nous allongeons,\nFoussena, tu fais chavirer mon cœur,\nAvec chaque étincelle dans tes yeux,\nNotre amour atteint de nouveaux sommets.",
        author: "Abdoul"
    },
    {
        title: "Dance of Love",
        content: "With Foussena, life's a dance,\nEach step, a loving glance,\nHand in hand, heart to heart,\nOur love, a beautiful art.",
        titleFr: "La Danse de l'Amour",
        contentFr: "Avec Foussena, la vie est une danse,\nChaque pas, un regard amoureux,\nMain dans la main, cœur à cœur,\nNotre amour, un bel art.",
        author: "Abdoul"
    },
    // ... Add more poems here, up to 1000
];

function createPoemCard(poem, language) {
    const title = language === 'en' ? poem.title : poem.titleFr;
    const content = language === 'en' ? poem.content : poem.contentFr;
    return `
        <h2 class="poem-title">${title}</h2>
        <p class="poem-content">${content.replace(/\n/g, '<br>')}</p>
        <p class="poem-author">- ${poem.author}</p>
    `;
}

function displayRandomPoem() {
    const englishContainer = document.getElementById('english-poem');
    const frenchContainer = document.getElementById('french-poem');

    const randomPoem = poems[Math.floor(Math.random() * poems.length)];

    englishContainer.innerHTML = createPoemCard(randomPoem, 'en');
    frenchContainer.innerHTML = createPoemCard(randomPoem, 'fr');

    englishContainer.classList.remove('fade-in');
    frenchContainer.classList.remove('fade-in');

    void englishContainer.offsetWidth; // Trigger reflow
    void frenchContainer.offsetWidth; // Trigger reflow

    englishContainer.classList.add('fade-in');
    frenchContainer.classList.add('fade-in');
}

// Display initial poem
displayRandomPoem();

// Change poem every 30 seconds
setInterval(displayRandomPoem, 30000);
