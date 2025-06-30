import React, { forwardRef } from 'react';
import {
  Box,
  Grid,
  Typography,
  Divider,
  Paper,
} from '@mui/material';
import SheetSection from './atoms/SheetSection';
import StatBox from './atoms/StatBox';

const CharacterSheet = forwardRef(({ character }, ref) => {
    if (!character) return null;

    const {
        name,
        race,
        class: charClass,
        alignment,
        appearance,
        backstory,
        personalityTraits,
        ideals,
        bonds,
        flaws,
        stats,
        portraitUrl,
    } = character;

    return (
        <div ref={ref} style={{ p: 4, maxWidth: '900px', width: '100%', mx: 'auto', fontFamily: 'serif', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={2}>
            {/* Portrait and Basic Info */}
            <Grid item xs={12} sm={4}>
            {portraitUrl && (
                <Box sx={{ textAlign: 'center' }}>
                <img
                    src={portraitUrl}
                    alt="Character portrait"
                    style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
                />
                </Box>
            )}
            </Grid>

            <Grid item xs={12} sm={8}>
            <Typography variant="h3" sx={{ mb: 1 }}>
                {name}
            </Typography>
            <Typography variant="h6">
                {race} {charClass} — {alignment}
            </Typography>
            </Grid>

            <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Stats */}
            <Grid item xs={12} sm={6}>
            <SheetSection title="Ability Scores">
                <Grid container spacing={1}>
                {Object.entries(stats).map(([stat, value]) => (
                    <Grid item xs={4} key={stat}>
                    <StatBox label={stat.toUpperCase()} value={value} />
                    </Grid>
                ))}
                </Grid>
            </SheetSection>
            </Grid>

            <Grid item xs={12} sm={6}>
            <SheetSection title="Personality">
                <Typography><strong>Traits:</strong> {personalityTraits}</Typography>
                <Typography><strong>Ideals:</strong> {ideals}</Typography>
                <Typography><strong>Bonds:</strong> {bonds}</Typography>
                <Typography><strong>Flaws:</strong> {flaws}</Typography>
            </SheetSection>
            </Grid>

            {/* Appearance */}
            <Grid item xs={12}>
            <SheetSection title="Appearance">
                <Typography>{appearance}</Typography>
            </SheetSection>
            </Grid>

            {/* Backstory */}
            <Grid item xs={12}>
            <SheetSection title="Backstory">
                <Typography>{backstory}</Typography>
            </SheetSection>
            </Grid>
        </Grid>
        </div>
    );
});

export default CharacterSheet;