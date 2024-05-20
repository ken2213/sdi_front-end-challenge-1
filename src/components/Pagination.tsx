import React from 'react'
import { 
    Pagination, 
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from './ui/pagination'

const PaginationSection = () => {
    return (
        <section className='absolute bottom-0 pb-4'>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">8</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">9</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">10</PaginationLink>
                    </PaginationItem>

                    <PaginationItem className=' bg-toyota-red text-white'>
                        <PaginationLink href="#">11</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">12</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">13</PaginationLink>
                    </PaginationItem>
                    
                    <PaginationItem>
                        <PaginationLink href="#">14</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">56</PaginationLink>
                    </PaginationItem>
                    
                    <PaginationItem>
                        <PaginationLink href="#">57</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    )
}

export default PaginationSection