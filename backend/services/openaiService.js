const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateCharacterWithOpenAI = async ({ race, charClass, theme, alignment, role }) => {
    const prompt = `
You are a Dungeons & Dragons character generator assistant. Using the following character description, generate a D&D 5e character in JSON format.

Details:
- Race: ${race}
- Class: ${charClass}
- Theme: ${theme}
- Alignment: ${alignment}
- Party Role: ${role}

Respond ONLY with a valid JSON object with the following structure (no preamble or explanation):

{
  "name": "Generated character name",
  "race": "...",
  "class": "...",
  "alignment": "...",
  "backstory": "...",
  "appearance": "...",
  "personalityTraits": "...",
  "ideals": "...",
  "bonds": "...",
  "flaws": "...",
  "stats": {
    "strength": 0,
    "dexterity": 0,
    "constitution": 0,
    "intelligence": 0,
    "wisdom": 0,
    "charisma": 0
  }
}
`;

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // gpt-4
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
    });

    const raw = completion.choices[0].message.content.trim();

    // Try to parse JSON safely
    try {
        // Match first JSON block if OpenAI adds extra text
        const jsonMatch = raw.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('No JSON object found');

        const cleanedJson = jsonMatch[0];
        const character = JSON.parse(cleanedJson);

        return character;
    } catch (err) {
        console.error('❌ Failed to parse OpenAI JSON response:\n', raw);
        throw new Error('OpenAI did not return valid JSON.');
    }
};

module.exports = { generateCharacterWithOpenAI };