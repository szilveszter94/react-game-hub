import {Card, CardBody, Skeleton, SkeletonText} from '@chakra-ui/react'

const GenreCardSkeleton = () => {
  return (
    <Card height='40px' width='180px'>
        <Skeleton></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GenreCardSkeleton