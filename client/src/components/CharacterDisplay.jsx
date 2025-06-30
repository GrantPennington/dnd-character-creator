const CharacterDisplay = ({ character }) => {
  if (!character) return null;

  return (
    <div>
      <h2>{character.name}</h2>
      <p><strong>Race:</strong> {character.race}</p>
      <p><strong>Class:</strong> {character.class}</p>
      <p><strong>Alignment:</strong> {character.alignment}</p>
      <p><strong>Backstory:</strong> {character.backstory}</p>
      <p><strong>Appearance:</strong> {character.appearance}</p>
      <p><strong>Personality Traits:</strong> {character.personalityTraits}</p>
      <p><strong>Ideals:</strong> {character.ideals}</p>
      <p><strong>Bonds:</strong> {character.bonds}</p>
      <p><strong>Flaws:</strong> {character.flaws}</p>

      <h3>Stats</h3>
      <ul>
        {Object.entries(character.stats).map(([stat, value]) => (
          <li key={stat}>
            {stat.charAt(0).toUpperCase() + stat.slice(1)}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDisplay;