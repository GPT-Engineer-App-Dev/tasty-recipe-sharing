import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, LinkBox, LinkOverlay } from "@chakra-ui/react";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "/images/spaghetti-carbonara.jpg",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    title: "Chicken Tikka Masala",
    image: "/images/chicken-tikka-masala.jpg",
    description: "Chunks of roasted marinated chicken in a spiced curry sauce.",
  },
  {
    title: "Beef Stroganoff",
    image: "/images/beef-stroganoff.jpg",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Recipe Sharing</Heading>
        <Text fontSize="xl">Discover and share your favorite recipes with the world.</Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} width="100%">
          {recipes.map((recipe, index) => (
            <LinkBox as="article" key={index} p="5" borderWidth="1px" rounded="md">
              <Box>
                <Image src={recipe.image} alt={recipe.title} borderRadius="md" />
                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Heading size="md" my="2">
                      <LinkOverlay href="#">{recipe.title}</LinkOverlay>
                    </Heading>
                  </Box>
                  <Text mt="2" color="gray.500">
                    {recipe.description}
                  </Text>
                </Box>
              </Box>
            </LinkBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;