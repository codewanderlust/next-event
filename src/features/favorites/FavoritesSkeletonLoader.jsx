import { Box, Skeleton } from "@chakra-ui/react";

export default function FavoritesSkeletonLoader() {
  return (
    <Box className="mx-auto flex max-w-4xl flex-col  gap-4  p-6">
      {[1, 2].map((index) => (
        <div key={index} className="overflow-hidden">
          <Skeleton
            height="200px"
            width="1200px"
            startColor="gray.900" // Darker start color
            endColor="gray.800"
          />
        </div>
      ))}
    </Box>
  );
}
