import useGenres from "../hooks/useGenre";
import { HStack, List, ListItem, Image, Button, Heading } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreCardContainer from "./GenreCardContainer";
import GenreCardSkeleton from "./GenreCardSkeleton";
import { Genre } from "../hooks/useGenre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;
  return (
    <>
    <Heading paddingY={4} fontSize='4xl'>Genres</Heading>
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreCardContainer key={skeleton}>
            <GenreCardSkeleton></GenreCardSkeleton>
          </GenreCardContainer>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              objectFit='cover'
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              textAlign="left"
              whiteSpace="normal"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
