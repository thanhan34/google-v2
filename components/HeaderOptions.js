import { SearchIcon, PhotographIcon, PlayIcon, NewspaperIcon, DotsVerticalIcon, MapIcon } from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
    return (
        <div className="flex  w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
            {/* Left */}
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images" />
                <HeaderOption Icon={PlayIcon} title="Videos" />
                <HeaderOption Icon={NewspaperIcon} title="News" />
                <HeaderOption Icon={MapIcon} title="Maps" />
                <HeaderOption Icon={DotsVerticalIcon} title="More" />
            </div>
            {/* Right */}
            <div className="flex space-x-4">
                <p className="link">Tools</p>
                <p className="link">Settings</p>
            </div>
        </div>
    )
}

export default HeaderOptions
