import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { BarLoader } from "react-spinners";

const WriteLayout = ({children}) => {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div>
            <Link
                href={"/dashboard"}
                className="flex items-center text-sm text-green-600 hover:text-green-700 cursor-pointer"
            >
            <ChevronLeft className="h-4 w-4"/> Dashboard
            </Link>
        </div>
        <Suspense fallback={<BarLoader color="green" width={"100%"}/>}>
            {children}
        </Suspense>
      </div>
    )
  }
  
export default WriteLayout