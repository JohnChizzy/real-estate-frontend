import React from 'react';
import { Flex, Skeleton } from '@chakra-ui/react';
import { v4 as uuidV4 } from 'uuid';

interface TableLoaderProps {
  noOfRows?: number;
  noOfColumns?: number;
  height?: string;
};
const SkeletonTableLoaders = ({ noOfColumns = 6, noOfRows = 8, height= "40px" }: TableLoaderProps) => {
  return (
    <Flex>
      {new Array(noOfColumns).fill(0).map(() => (
        <Flex flex={1} flexDirection="column" key={uuidV4()}>
          {new Array(noOfRows).fill(0).map(() => (
            <Skeleton key={uuidV4()} height={height} width={'90%'} mx="auto" my={'10px'} />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default SkeletonTableLoaders;
