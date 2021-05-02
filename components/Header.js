import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

function Header() {
    const router = useRouter()
    const searchInputRef = useRef(null)
    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if (!term) return
        router.push(`/search?term=${term}`)

    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex items-center w-full p-6">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />
                <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border rounded-full shadow-lg boder-gray-200">
                    <input
                        type="text"
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none"
                    />
                    <XIcon className="text-gray-500 transition duration-100 transform cursor-pointer h-7 sm:mr-3 hover:scale-125" onClick={() => (searchInputRef.current.value = "")} />
                    <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
                    <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
                    <button type="submit" onClick={search} hidden> Search</button>
                </form>
                <Avatar url="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.6435-9/172674233_10219188711817403_681016986696588621_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dnb21LM3ViEAX9-PO38&_nc_ht=scontent.fbne6-1.fna&oh=8f61f5ef78896e8dec98274ec5369197&oe=60AF79AE"
                    className="ml-auto" />
            </div>
            {/* Header Options */}
            <HeaderOptions />
        </header>
    )
}

export default Header
