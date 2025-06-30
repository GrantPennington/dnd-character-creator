const { generateCharacterWithOpenAI, generateImageWithOpenAI, regenerateFieldWithOpenAI } = require('../services/openaiService');

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
        //res.json({ result: { ...character, portraitUrl: '' } });
    } catch (error) {
        console.error('Error in generateCharacter:', error.message);
        res.status(500).json({
            error: 'Character generation failed. Please try again.',
        });
    }
};

const regenerateField = async (req, res) => {
    const { field, character } = req.body;

    if (!field || !character) {
        return res.status(400).json({ error: 'Field and character are required.' });
    }

    try {
        const newValue = await regenerateFieldWithOpenAI(field, character);
        res.json({ result: newValue });
    } catch (error) {
        console.error('Error regenerating field:', error);
        res.status(500).json({ error: 'Failed to regenerate field.' });
    }
};

module.exports = { generateCharacter, regenerateField };