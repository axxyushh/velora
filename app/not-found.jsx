import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] px-4 text-center'>
        <h1 className='text-6xl font-bold gradient-title mb-4 animate-bounce'>404</h1>
        <h2 className='text-2xl font-semibold mb-4 animate-pulse'>Page not found</h2>
        <p className='text-gray-600 mb-8'>Lost in thought? This page doesn&apos;t exist.</p>
        <Link href={"/"} className=''>
            <Button className="" variant="journal">
                Back to My Journal <ChevronRight className='h-5 w-5'/>
            </Button>
        </Link>
    </div>
  )
}

export default NotFound