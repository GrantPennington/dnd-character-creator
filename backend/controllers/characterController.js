const { generateCharacterWithOpenAI } = require('../services/openaiService');

const generateCharacter = async (req, res) => {
    try {
        const { race, charClass, theme, alignment, role } = req.body;

        const character = await generateCharacterWithOpenAI({
            race,
            charClass,
            theme,
            alignment,
            role
        });

        res.json({ result: character });
    } catch(err) {
        console.error('Error in generateCharacter:', err.message);
        res.status(500).json({
            error: 'Character generation failed. Please try again or tweak your inputs.',
        });
    }
}

module.exports = { generateCharacter }