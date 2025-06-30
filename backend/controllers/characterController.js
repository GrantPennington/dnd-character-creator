const { generateCharacterWithOpenAI, generateImageWithOpenAI } = require('../services/openaiService');

const generateCharacter = async (req, res) => {
    try {
        const { race, charClass, theme, alignment, role } = req.body;

        const character = await generateCharacterWithOpenAI({
            race,
            charClass,
            theme,
            alignment,
            role,
        });

        const portraitUrl = await generateImageWithOpenAI(character);

        res.json({ result: { ...character, portraitUrl } });
    } catch (error) {
        console.error('Error in generateCharacter:', error.message);
        res.status(500).json({
            error: 'Character generation failed. Please try again.',
        });
    }
};

module.exports = { generateCharacter };