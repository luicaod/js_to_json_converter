const fs = require('fs');
const path = require('path');
const { personagemList } = require('./data/database.js');

function convertToJson() {
    try {
        // Group by obra
        const groupedData = personagemList.reduce((acc, character) => {
            const { obra } = character;
            
            if (!acc[obra]) {
                acc[obra] = {
                    nome: obra,
                    personagens: []
                };
            }
            
            // Remove obra from character object
            const { obra: _, ...characterData } = character;
            acc[obra].personagens.push(characterData);
            
            return acc;
        }, {});

        // Convert to array
        const finalData = Object.values(groupedData);
        
        // Convert to JSON
        const jsonData = JSON.stringify(finalData, null, 2);
        
        // Define output path
        const outputPath = path.join(__dirname, 'output', 'result.json');
        
        // Write JSON file
        fs.writeFileSync(outputPath, jsonData);
        
        console.log('Success converting to JSON!');
        console.log(`Total obras: ${finalData.length}`);
    } catch (error) {
        console.error('Conversion error:', error);
    }
}

convertToJson();