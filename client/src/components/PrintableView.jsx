// import { useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Box, Button } from '@mui/material';
// import ReactToPrint from 'react-to-print';
// import CharacterSheet from './CharacterSheet';

// const PrintableView = () => {
//   const sheetRef = useRef();
//   const { state } = useLocation();
//   const character = state?.character;

//   if (!character) {
//     return <Box p={4}>No character data available.</Box>;
//   }

//   return (
//     <Box sx={{ mt: 4, textAlign: 'center' }}>
//       <CharacterSheet ref={sheetRef} character={character} />

//       <ReactToPrint
//         trigger={() => (
//           <Button variant="outlined" size="large" sx={{ mt: 3 }}>
//             Download / Print Character Sheet
//           </Button>
//         )}
//         content={() => sheetRef.current}
//       />
//     </Box>
//   );
// };

// export default PrintableView;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterSheet from './CharacterSheet';

const PrintableView = () => {
    const { state } = useLocation();
    const character = state?.character;

    useEffect(() => {
        // Give the page time to render before triggering print
        const timeout = setTimeout(() => {
            window.print();
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    if (!character) return <div>No character data available.</div>;

    return <CharacterSheet character={character} />;
};

export default PrintableView;