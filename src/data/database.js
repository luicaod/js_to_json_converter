const fs = require('fs');
const path = require('path');

const personagemList = [];

function parsePersonagensFromText() {
    const content = fs.readFileSync(__filename, 'utf8');
    console.log('Content loaded:', content.substring(0, 100) + '...');

    // Split by double newline and comment marker
    const blocks = content.split(/\n\s*\/\/ /);
    console.log('Block count:', blocks.length);

    blocks.forEach((block, index) => {
        if (!block.trim()) return;
        
        // Get first line as obra name
        const lines = block.split('\n');
        const obra = lines[0].trim();
        console.log(`\nProcessing: ${obra}`);

        // Find all character pushes
        const personagens = block.match(/push\("([^"]+)"\)/g);
        
        if (personagens) {
            console.log(`Found ${personagens.length} characters`);
            
            const personagemData = personagens.map(p => 
                p.match(/push\("([^"]+)"\)/)[1]
            );
            
            console.log('First character:', personagemData[0]);
            adicionaPersonagemList(personagemData, obra);
        }
    });

    console.log('\nTotal characters:', personagemList.length);
}

function adicionaPersonagemList(personagemListTemp, obra) {
    personagemListTemp.forEach(personagemTemp => {
        const [nome, sexo, variacaoList, numeroReferencia] = personagemTemp.split(", ");
        
        // Handle empty arrays and validate JSON
        let parsedVariacaoList = [];
        try {
            if (variacaoList && variacaoList !== "[]") {
                parsedVariacaoList = JSON.parse(variacaoList);
            }
        } catch (error) {
            console.error(`Error parsing variacaoList for ${nome}:`, error);
            return; // Skip this character
        }

        personagemList.push({
            nome,
            sexo,
            variacaoList: parsedVariacaoList,
            obra,
            numeroReferencia
        });
    });
}

parsePersonagensFromText();

module.exports = {
    personagemList
};

// Initialize
parsePersonagensFromText();

async function preencheDatabase() {
    // Obras
    obraList.push("Tower of God");
    obraList.push("Pokémon");
    obraList.push("Akame ga Kill");
    obraList.push("Darling in the FranXX");
    obraList.push("Dr. Stone");
    obraList.push("Dumbbell Nan Kilo Moteru");
    obraList.push("One-Punch Man");
    obraList.push("Jujutsu Kaisen");
    obraList.push("Kaguya-sama wa Kokurasetai");
    obraList.push("Kanojo, Okarishimasu");
    obraList.push("Kimetsu no Yaiba");
    obraList.push("Kobayashi-san Chi no Maid Dragon");
    obraList.push("Kono Subarashii Sekai ni Shukufuku wo");
    obraList.push("One Punch-Man");
    obraList.push("ReZero kara Hajimeru Isekai Seikatsu");
    obraList.push("Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai");
    obraList.push("Shingeki no Kyojin");
    obraList.push("Sono Bisque Doll wa Koi wo Suru");
    obraList.push("Tate no Yuusha no Nariagari");
    obraList.push("Cyberpunk Edgerunners");
    obraList.push("Ijiranaide, Nagatoro-san");
    obraList.push("Boku no Hero Academia");
    obraList.push("Chainsaw Man");
    obraList.push("One Piece");
    obraList.push("Dororo");
    obraList.push("Baldur's Gate 3");
    obraList.push("NieR Automata");
    obraList.push("Stellar Blade");
    obraList.push("League of Legends");
    obraList.push("Valorant");
    obraList.push("Overwatch");
    obraList.push("Final Fantasy");
    obraList.push("Stardew Valley");
    obraList.push("Resident Evil");
    obraList.push("Cyberpunk 2077");
    obraList.push("Street Fighter");
    obraList.push("Cross Code");

    await obraList.sort(function(a, b) {
        return a.localeCompare(b);
    });

    // Personagens
    // Ordem das imagens: ícone, corpo todo, anime, manga, fanart, character sheet

    let personagemListTemp = [];

    // Tower of God
    personagemListTemp = [];
    personagemListTemp.push("Anak Zahard, F, [], 6");
    personagemListTemp.push("Androssi Zahard, F, [], 5");
    personagemListTemp.push("Hwa Ryun, F, [], 8");
    personagemListTemp.push("Yeon Yihwa, F, [], 4");
    personagemListTemp.push("Yuri Zahard, F, [], 6");
    personagemListTemp.push("Xia Xia, F, [], 6");
    
    personagemListTemp.push("Khun Ran, M, [], 4");
    personagemListTemp.push("Khun Aguero Agnis, M, [], 6");
    personagemListTemp.push("Twenty-Fifth Baam, M, [\"Prologue\",\"Jyu Viole Grace\",\"Season 3\",\"Masters\"], 9");
    personagemListTemp.push("White Hoaqin, M, [], 4");

    await adicionaPersonagemList(personagemListTemp, "Tower of God");

    // Pokémon
    personagemListTemp = [];
    personagemListTemp.push("Misty, F, [\"Anime\",\"FireRed & LeafGreen\",\"HeartGold & SoulSilver\",\"Let's Go Pikachu! & Let's Go Eevee!\"], 6");
    personagemListTemp.push("Erika, F, [\"FireRed & LeafGreen\",\"HeartGold & SoulSilver\",\"Let's Go Pikachu! & Let's Go Eevee!\"], 4");
    personagemListTemp.push("Sabrina, F, [\"FireRed & LeafGreen\",\"HeartGold & SoulSilver\",\"Let's Go Pikachu! & Let's Go Eevee!\"], 3");
    personagemListTemp.push("Whitney, F, [], 1");
    personagemListTemp.push("Jasmine, F, [], 1");
    personagemListTemp.push("Clair, F, [], 1");
    personagemListTemp.push("Karen, F, [], 2");
    personagemListTemp.push("May, F, [\"Ruby & Sapphire\",\"Emerald\",\"Omega Ruby & Alpha Sapphire\",\"Contest outfit\",\"Masters\"], 9");
    personagemListTemp.push("Roxanne, F, [\"Ruby & Sapphire\",\"Omega Ruby & Alpha Sapphire\",\"Masters\"], 4");
    personagemListTemp.push("Phoebe, F, [\"Omega Ruby & Alpha Sapphire\",\"Masters\"], 3");
    personagemListTemp.push("Courtney, F, [], 2");
    personagemListTemp.push("Shelly, F, [], 2");
    personagemListTemp.push("Leaf, F, [\"FireRed & LeafGreen\",\"Let's Go Pikachu! & Let's Go Eevee!\",\"Masters\"], 4");
    personagemListTemp.push("Dawn, F, [\"Diamond & Pearl\",\"Platinum\",\"Masters\"], 7");
    personagemListTemp.push("Gardenia, F, [\"Diamond & Pearl\",\"Masters\"], 3");
    personagemListTemp.push("Cynthia, F, [\"Diamond & Pearl\",\"Masters\"], 7");
    personagemListTemp.push("Lyra, F, [\"HeartGold & SoulSilver\",\"Masters!\"], 3");
    personagemListTemp.push("Hilda, F, [\"Black & White\",\"Masters\"], 5");
    personagemListTemp.push("Professor Juniper, F, [], 1");
    personagemListTemp.push("Elesa, F, [\"Black & White\",\"Black & White 2\",\"Masters\"], 4");
    personagemListTemp.push("Skyla, F, [], 2");
    personagemListTemp.push("Iris, F, [\"Black & White\",\"Black & White 2\"], 4");
    personagemListTemp.push("Rosa, F, [\"Black & White\",\"Contest\",\"Masters\"], 6");
    personagemListTemp.push("Serena, F, [\"XY\",\"Masters\"], 8");
    personagemListTemp.push("Shauna, F, [\"XY\",\"Masters\"], 3");
    personagemListTemp.push("Viola, F, [\"XY\",\"Masters\"], 4");
    personagemListTemp.push("Korrina, F, [\"XY\",\"Masters\"], 3");
    personagemListTemp.push("Valerie, F, [], 2");
    personagemListTemp.push("Diantha, F, [\"XY\",\"Masters\"], 4");
    personagemListTemp.push("Kali, F, [], 2");
    personagemListTemp.push("Linnea, F, [], 2");
    personagemListTemp.push("Blossom, F, [], 2");
    personagemListTemp.push("Zinnia, F, [], 2");
    personagemListTemp.push("Selene, F, [\"Sun & Moon\",\"Ultra Sun & Ultra moon\"], 4");
    personagemListTemp.push("Lillie, F, [\"Sun & Moon\",\"Masters\"], 8");
    personagemListTemp.push("Mallow, F, [], 2");
    personagemListTemp.push("Acerola, F, [\"Sun & Moon\",\"Masters\"], 4");
    personagemListTemp.push("Mina, F, [\"Sun & Moon\",\"Masters\"], 4");
    personagemListTemp.push("Olivia, F, [], 2");
    personagemListTemp.push("Lusamine, F, [\"Sun & Moon\",\"Masters\"], 3");
    personagemListTemp.push("Elaine, F, [], 2");
    personagemListTemp.push("Gloria, F, [], 5");
    personagemListTemp.push("Marnie, F, [], 5");
    personagemListTemp.push("Sonia, F, [], 3");
    personagemListTemp.push("Nessa, F, [], 5");
    personagemListTemp.push("Bea, F, [], 3");
    personagemListTemp.push("Juliana, F, [], 4");
    personagemListTemp.push("Nemona, F, [], 3");

    personagemListTemp.push("Red, M, [], 8");
    personagemListTemp.push("Blue, M, [], 7");
    personagemListTemp.push("Ethan, M, [], 3");
    personagemListTemp.push("Brendan, M, [], 7");
    personagemListTemp.push("Wallace, M, [], 4");
    personagemListTemp.push("Steven Stone, M, [], 4");
    personagemListTemp.push("Lucas, M, [], 3");
    personagemListTemp.push("Hilbert, M, [], 2");
    personagemListTemp.push("Nate, M, [], 2");
    personagemListTemp.push("Elio, M, [], 4");
    personagemListTemp.push("Gladion, M, [], 2");
    personagemListTemp.push("Victor, M, [], 4");
    personagemListTemp.push("Ash, M, [], 7");

    await adicionaPersonagemList(personagemListTemp, "Pokémon");

    // Akame ga Kill
    personagemListTemp = [];
    personagemListTemp.push("Akame, F, [], 3");
    personagemListTemp.push("Mine, F, [], 1");
    personagemListTemp.push("Esdeath, F, [], 2");

    await adicionaPersonagemList(personagemListTemp, "Akame ga Kill");

    // Darling in the FranXX
    personagemListTemp = [];
    personagemListTemp.push("Zero Two, F, [], 2");
    personagemListTemp.push("001, F, [], 2");

    await adicionaPersonagemList(personagemListTemp, "Darling in the FranXX");
    
    // Dr. Stone
    personagemListTemp = [];
    personagemListTemp.push("Kohaku, F, [], 2");
    personagemListTemp.push("Ruri, F, [], 1");
    personagemListTemp.push("Yuzuriha, F, [], 3");

    personagemListTemp.push("Senku Ishigami, M, [], 3");
    personagemListTemp.push("Gen Asagiri, M, [], 3");
    personagemListTemp.push("Tsukasa Shishio, M, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Dr. Stone");

    // Dumbbell Nan Kilo Moteru
    personagemListTemp = [];
    personagemListTemp.push("Soryuin Akemi, F, [], 2");
    personagemListTemp.push("Sakura Hibiki, F, [], 3");
    personagemListTemp.push("Gina Boyd, F, [], 2");
    personagemListTemp.push("Uehara Ayaka, F, [], 2");

    await adicionaPersonagemList(personagemListTemp, "Dumbbell Nan Kilo Moteru");

    // Jujutsu Kaisen
    personagemListTemp = [];
    personagemListTemp.push("Shoko Ieiri, F, [], 4");
    personagemListTemp.push("Akari Nitta, F, [], 1");
    personagemListTemp.push("Nobara Kugisaki, F, [], 4");
    personagemListTemp.push("Maki Zenin, F, [], 5");
    personagemListTemp.push("Utahime Iori, F, [], 3");
    personagemListTemp.push("Mai Zenin, F, [], 2");
    personagemListTemp.push("Kasumi Miwa, F, [], 2");
    personagemListTemp.push("Mei Mei, F, [], 3");
    personagemListTemp.push("Yuki Tsukumo, F, [], 3");
    personagemListTemp.push("Riko Amanai, F, [], 2");
    personagemListTemp.push("Yorozu, F, [], 4");
    personagemListTemp.push("Takako Uro, F, [], 1");

    personagemListTemp.push("Satoru Gojo, M, [], 3");
    personagemListTemp.push("Yuji Itadori, M, [], 4");
    personagemListTemp.push("Megumi Fushiguro, M, [], 2");
    personagemListTemp.push("Yuta Okkotsu, M, [], 3");
    personagemListTemp.push("Noritoshi Kamo, M, [], 4");
    personagemListTemp.push("Kento Nanami, M, [], 3");
    personagemListTemp.push("Hajime Kashimo, M, [], 3");
    personagemListTemp.push("Hiromi Higuruma, M, [], 3");
    personagemListTemp.push("Mahito, M, [], 2");
    personagemListTemp.push("Choso, M, [], 2");
    personagemListTemp.push("Suguru Geto, M, [], 2");
    personagemListTemp.push("Ryoumei Sukuna, M, [], 7");
    personagemListTemp.push("Toji Fushiguro, M, [0], 3");

    await adicionaPersonagemList(personagemListTemp, "Jujutsu Kaisen");

    // Kaguya-sama wa Kokurasetai
    personagemListTemp = [];
    personagemListTemp.push("Kaguya Shinomiya, F, [], 1");
    personagemListTemp.push("Chika Fujiwara, F, [], 1");
    personagemListTemp.push("Ai Hayasaka, F, [], 1");
    
    await adicionaPersonagemList(personagemListTemp, "Kaguya-sama wa Kokurasetai");

    // Kanojo, Okarishimasu 
    personagemListTemp = [];
    personagemListTemp.push("Chizuru Ichinose, F, [], 1");
    personagemListTemp.push("Ruka Sarashina, F, [], 1");
    personagemListTemp.push("Sumi, F, [], 1");
    personagemListTemp.push("Mami Nanami, F, [], 1");

    await adicionaPersonagemList(personagemListTemp, "Kanojo, Okarishimasu");

    // Kimetsu no Yaiba 
    personagemListTemp = [];
    personagemListTemp.push("Mitsuri Kanroji, F, [], 3");
    personagemListTemp.push("Shinobu Kocho, F, [], 4");
    personagemListTemp.push("Kanae Kocho, F, [], 2");
    personagemListTemp.push("Kanao Tsuyuri, F, [], 5");
    personagemListTemp.push("Aoi Kanzaki, F, [], 2");
    personagemListTemp.push("Nezuko Kamado, F, [], 5");
    personagemListTemp.push("Tamayo, F, [], 1");
    personagemListTemp.push("Daki, F, [], 3");
    personagemListTemp.push("Makomo, F, [], 2");
    personagemListTemp.push("Ruka Rengoku, F, [], 1");
    personagemListTemp.push("Makio, F, [], 2");
    personagemListTemp.push("Suma, F, [], 4");

    personagemListTemp.push("Giyu Tomioka, M, [], 4");
    personagemListTemp.push("Muichiro Tokito, M, [], 2");
    personagemListTemp.push("Kyojuro Rengoku, M, [], 2");
    personagemListTemp.push("Tengen Uzui, M, [], 4");
    personagemListTemp.push("Tanjiro Kamado, M, [], 8");
    personagemListTemp.push("Zenitsu Agatsuma, M, [], 3");
    personagemListTemp.push("Inosuke Hashibira, M, [], 3");
    personagemListTemp.push("Yoriichi Tsugikuni, M, [], 3");
    personagemListTemp.push("Kokushibo, M, [], 4");
    personagemListTemp.push("Akaza, M, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Kimetsu no Yaiba");

    // Kobayashi-san Chi no Maid Dragon 
    personagemListTemp = [];
    personagemListTemp.push("Quetzalcoatl, F, [], 2");
    personagemListTemp.push("Tohru, F, [], 3");
    personagemListTemp.push("Elma, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Kobayashi-san Chi no Maid Dragon");

    // Kono Subarashii Sekai ni Shukufuku wo
    personagemListTemp = [];
    personagemListTemp.push("Aqua, F, [], 3");
    personagemListTemp.push("Megumin, F, [], 2");
    personagemListTemp.push("Darkness, F, [], 2");
    personagemListTemp.push("Yunyun, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Kono Subarashii Sekai ni Shukufuku wo");

    // One-Punch Man
    personagemListTemp = [];
    personagemListTemp.push("Tatsumaki, F, [], 3");
    personagemListTemp.push("Fubuki, F, [], 2");
    personagemListTemp.push("Mizuki, F, [], 2");
    personagemListTemp.push("Do-S, F, [], 2");

    personagemListTemp.push("Atomic Samurai, M, [], 2");
    personagemListTemp.push("Genos, M, [], 4");
    personagemListTemp.push("Garou, M, [], 4");

    await adicionaPersonagemList(personagemListTemp, "One-Punch Man");
    
    // ReZero kara Hajimeru Isekai Seikatsu 
    personagemListTemp = [];
    personagemListTemp.push("Emilia, F, [], 3");
    personagemListTemp.push("Ram, F, [], 3");
    personagemListTemp.push("Rem, F, [], 3");
    personagemListTemp.push("Echidna, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "ReZero kara Hajimeru Isekai Seikatsu");
    
    // Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
    personagemListTemp = [];
    personagemListTemp.push("Mai Sakurajima, F, [], 1");
    personagemListTemp.push("Rio Futaba, F, [], 1");
    personagemListTemp.push("Tomoe Koga, F, [], 2");
    personagemListTemp.push("Nodoka Toyohama, F, [], 1");

    await adicionaPersonagemList(personagemListTemp, "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai");
    
    // Shingeki no Kyojin 
    personagemListTemp = [];
    personagemListTemp.push("Mikasa Ackerman, F, [], 4");
    personagemListTemp.push("Ymir, F, [], 1");
    personagemListTemp.push("Historia Reiss, F, [], 3");
    personagemListTemp.push("Sasha Blouse, F, [], 3");
    personagemListTemp.push("Pieck Finger, F, [], 2");

    personagemListTemp.push("Levi Ackerman, M, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Shingeki no Kyojin");
    
    // Sono Bisque Doll wa Koi wo Suru
    personagemListTemp = [];
    personagemListTemp.push("Marin Kitagawa, F, [], 2");
    personagemListTemp.push("Sajuna Inui, F, [], 1");

    await adicionaPersonagemList(personagemListTemp, "Sono Bisque Doll wa Koi wo Suru");
    
    // Tate no Yuusha no Nariagari
    personagemListTemp = [];
    personagemListTemp.push("Raphtalia, F, [], 3");
    personagemListTemp.push("Melty Q Melromarc, F, [], 2");
    personagemListTemp.push("Filo, F, [], 2");
    personagemListTemp.push("Sadeena, F, [], 2");
    personagemListTemp.push("Shildina, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Tate no Yuusha no Nariagari");
    
    // Cyberpunk Edgerunners 
    personagemListTemp = [];
    personagemListTemp.push("Lucyna Kushinada, F, [], 1");
    personagemListTemp.push("Rebecca, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Cyberpunk Edgerunners");
    
    // Ijiranaide, Nagatoro-san
    personagemListTemp = [];
    personagemListTemp.push("Hayase Nagatoro, F, [], 6");
    personagemListTemp.push("Maki Gamou, F, [], 4");
    personagemListTemp.push("Yoshi, F, [], 4");
    personagemListTemp.push("Sakura, F, [], 4");
    personagemListTemp.push("Sana Sunomiya, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Ijiranaide, Nagatoro-san");
    
    // Boku no Hero Academia
    personagemListTemp = [];

    personagemListTemp.push("Midnight, F, [], 6");
    personagemListTemp.push("Mina Ashido, F, [], 3");
    personagemListTemp.push("Ochaco Uraraka, F, [], 3");
    personagemListTemp.push("Kyoka Jiro, F, [], 3");
    personagemListTemp.push("Momo Yaoyorozu, F, [], 6");
    personagemListTemp.push("Yui Kodai, F, [], 3");
    personagemListTemp.push("Mei Hatsume, F, [], 0");
    personagemListTemp.push("Nejire Hado, F, [], 6");
    personagemListTemp.push("Camie Utsushimi, F, [], 3");
    personagemListTemp.push("Saiko Intelli, F, [], 2");
    personagemListTemp.push("Mirko, F, [], 4");
    personagemListTemp.push("Mt. Lady, F, [], 4");
    personagemListTemp.push("Mandalay, F, [], 4");
    personagemListTemp.push("Pixie-Bob, F, [], 4");
    personagemListTemp.push("Nana Shimura, F, [], 1");
    personagemListTemp.push("Himiko Toga, F, [], 4");

    personagemListTemp.push("Izuku Midoriya, M, [], 9");
    personagemListTemp.push("Katsuki Bakugo, M, [], 5");
    personagemListTemp.push("Shoto Todoroki, M, [], 7");
    personagemListTemp.push("Eraser Head, M, [], 4");
    personagemListTemp.push("Hawks, M, [], 4");
    personagemListTemp.push("Dabi, M, [], 5");
    personagemListTemp.push("Overhaul, M, [], 1");

    await adicionaPersonagemList(personagemListTemp, "Boku no Hero Academia");
    
    // Chainsaw Man
    personagemListTemp = [];
    personagemListTemp.push("Power, F, [], 3");
    personagemListTemp.push("Kobeni Higashiyama, F, [], 3");
    personagemListTemp.push("Himeno, F, [], 2");
    personagemListTemp.push("Makima, F, [], 3");
    personagemListTemp.push("Reze, F, [], 1");
    personagemListTemp.push("Asa Mitaka, F, [], 2");

    personagemListTemp.push("Aki Hayakawa, M, [], 2");

    await adicionaPersonagemList(personagemListTemp, "Chainsaw Man");
    
    // One Piece
    personagemListTemp = [];
    personagemListTemp.push("Yamato, F, [], 2");
    personagemListTemp.push("Robin, F, [], 3");
    personagemListTemp.push("Boa Hancock, F, [], 6");
    personagemListTemp.push("Nami, F, [], 5");

    await adicionaPersonagemList(personagemListTemp, "One Piece");
    
    // Dororo
    personagemListTemp = [];
    personagemListTemp.push("Mio, F, [], 2");
    personagemListTemp.push("Nui No Kata, F, [], 1");
    personagemListTemp.push("Dororo, F, [], 3");

    personagemListTemp.push("Hyakkimaru, M, [], 4");

    await adicionaPersonagemList(personagemListTemp, "Dororo");
    
    // Baldur's Gate 3
    personagemListTemp = [];
    personagemListTemp.push("Shadowheart, F, [], 10");
    personagemListTemp.push("Minthara, F, [], 5");
    personagemListTemp.push("Mizora, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Baldur's Gate 3");
    
    // NieR Automata
    personagemListTemp = [];
    personagemListTemp.push("2B, F, [], 8");
    personagemListTemp.push("A2, F, [], 7");
    personagemListTemp.push("Commander White, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "NieR Automata");
    
    // League of Legends
    personagemListTemp = [];
    personagemListTemp.push("Ahri, F, [], 27");
    personagemListTemp.push("Akali, F, [], 21");
    personagemListTemp.push("Ashe, F, [], 24");
    personagemListTemp.push("Briar, F, [], 3");
    personagemListTemp.push("Caitlyn, F, [], 17");
    personagemListTemp.push("Diana, F, [], 12");
    personagemListTemp.push("Fiora, F, [], 12");
    personagemListTemp.push("Gwen, F, [], 6");
    personagemListTemp.push("Irelia, F, [], 25");
    personagemListTemp.push("Kai sa, F, [], 12");
    personagemListTemp.push("Karma, F, [], 18");
    personagemListTemp.push("Katarina, F, [], 24");
    personagemListTemp.push("LeBlanc, F, [], 12");
    personagemListTemp.push("Leona, F, [], 15");
    personagemListTemp.push("Lux, F, [], 15");
    personagemListTemp.push("Miss Fortune, F, [], 33");
    personagemListTemp.push("Morgana, F, [], 23");
    personagemListTemp.push("Nidalee, F, [], 12");
    personagemListTemp.push("Nilah, F, [], 6");
    personagemListTemp.push("Qiyana, F, [], 12");
    personagemListTemp.push("Quinn, F, [], 6");
    personagemListTemp.push("Rell, F, [], 6");
    personagemListTemp.push("Riven, F, [], 15");
    personagemListTemp.push("Seraphine, F, [], 12");
    personagemListTemp.push("Sivir, F, [], 15");  
    personagemListTemp.push("Sona, F, [], 15");
    personagemListTemp.push("Xayah, F, [], 12");
    personagemListTemp.push("Zeri, F, [], 6");

    personagemListTemp.push("Aphelios, M, [], 6");
    personagemListTemp.push("Ezreal, M, [], 9");
    personagemListTemp.push("Hwei, M, [], 3");
    personagemListTemp.push("Kayn, M, [], 6");
    personagemListTemp.push("Sett, M, [], 9");
    personagemListTemp.push("Sylas, M, [], 6");
    personagemListTemp.push("Viego, M, [], 6");
    personagemListTemp.push("Yasuo, M, [], 15");
    personagemListTemp.push("Yone, M, [], 9");

    await adicionaPersonagemList(personagemListTemp, "League of Legends");

    // Valorant
    personagemListTemp = [];
    personagemListTemp.push("Sage, F, [], 3");
    personagemListTemp.push("Viper, F, [], 3");
    personagemListTemp.push("Reyna, F, [], 3");
    personagemListTemp.push("Jett, F, [], 3");
    personagemListTemp.push("Neon, F, [], 3");
    personagemListTemp.push("Fade, F, [], 3");
    personagemListTemp.push("DeadLock, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Valorant");
    
    // Overwatch
    personagemListTemp = [];
    personagemListTemp.push("Ashe, F, [], 5");
    personagemListTemp.push("D.Va, F, [], 2");
    personagemListTemp.push("Juno, F, [], 3");
    personagemListTemp.push("Kiriko, F, [], 5");
    personagemListTemp.push("Widowmaker, F, [], 3");

    await adicionaPersonagemList(personagemListTemp, "Overwatch");
    
    // Final Fantasy
    personagemListTemp = [];
    personagemListTemp.push("Tifa Lockhart, F, [], 9");

    await adicionaPersonagemList(personagemListTemp, "Final Fantasy");
    
    // Stardew Valley
    personagemListTemp = [];
    personagemListTemp.push("Abigail, F, [], 3");
    personagemListTemp.push("Emily, F, [], 3");
    personagemListTemp.push("Haley, F, [], 3");
    personagemListTemp.push("Leah, F, [], 3");
    personagemListTemp.push("Penny, F, [], 4");
    personagemListTemp.push("Caroline, F, [], 3");
    personagemListTemp.push("Robin, F, [], 3");
    personagemListTemp.push("Sandy, F, [], 1");

    await adicionaPersonagemList(personagemListTemp, "Stardew Valley");
    
    // Resident Evil
    personagemListTemp = [];
    personagemListTemp.push("Ada Wong, F, [], 7");
    personagemListTemp.push("Claire Redfield, F, [], 2");
    personagemListTemp.push("Helena Harper, F, [], 2");
    personagemListTemp.push("Jill Valentine, F, [], 10");
    personagemListTemp.push("Ashley Graham, F, [], 2");
    personagemListTemp.push("Sheva Alomar, F, [], 4");

    personagemListTemp.push("Leon Kennedy, M, [], 12");

    await adicionaPersonagemList(personagemListTemp, "Resident Evil");
    
    // Cyberpunk 2077
    personagemListTemp = [];
    personagemListTemp.push("Panam, F, [], 2");

    await adicionaPersonagemList(personagemListTemp, "Cyberpunk 2077");
    
    // Street Fighter
    personagemListTemp = [];
    personagemListTemp.push("Chun-Li, F, [], 9");
    personagemListTemp.push("Cammy, F, [], 7");
    personagemListTemp.push("Juri Han, F, [], 10");

    await adicionaPersonagemList(personagemListTemp, "Street Fighter");
    
    // Cross Code
    personagemListTemp = [];
    personagemListTemp.push("Lea, F, [], 2");
    personagemListTemp.push("Emilienator, F, [], 2");
    personagemListTemp.push("Shizuka, F, [], 2");

    await adicionaPersonagemList(personagemListTemp, "Cross Code");
    
    // Exemplo
    // personagemListTemp = [];
    // personagemListTemp.push("NOME, SEXO, [VARIACAO], NUMERO_REFERENCIA");

    // await adicionaPersonagemList(personagemListTemp, "OBRA");

    await personagemList.sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
    });  
}

/*
    LINKS ÚTEIS
        League of Legends
            https://www.leagueoflegends.com/en-us/champions/ - Splash arts
            https://modelviewer.lol/champions - Modelos em 3D

        Valorant
            https://valorant.fandom.com/wiki/Reyna - Wiki
            https://www.kingdomarchives.com/agentmodels - Modelos em 3D
        
        Overwath 
            https://overwatch.fandom.com/wiki/Ashe - Wiki
            https://overwatch.fandom.com/wiki/Ashe/Cosmetics - Wiki das Skins
            ashe poolside overwatch concept art - Pesquisa no Google

        Final Fantasy
            https://finalfantasy.fandom.com/wiki/Tifa_Lockhart - Wiki

        Stardew Valley
            https://stardewvalleywiki.com/Category:Abigail_images - Wiki
            haley stardew valley sprites - Pesquina no Google

        Resident Evil
            https://residentevil.fandom.com/wiki/Resident_Evil_Wiki - Wiki

        Street Fighter
            https://streetfighter.fandom.com/wiki/Street_Fighter_Wiki - Wiki

        Cross Code
            https://crosscode.fandom.com/wiki/Lea
*/