import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [selectedQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...selectedQuery, searchText })
          }
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...selectedQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
        <GameHeading gameQuery={selectedQuery}></GameHeading>
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={selectedQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...selectedQuery, platform })
            }
          ></PlatformSelector>
          <SortSelector
            sortOrder={selectedQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...selectedQuery, sortOrder })
            }
          ></SortSelector>
        </HStack>
        </Box>
        <GameGrid gameQuery={selectedQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
