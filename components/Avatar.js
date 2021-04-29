function Avatar({ url }) {
    return (
        <img loading="lazy"
            src={url}
            alt="profile pic"
            className="rounded-full h-10 cursor-pointer duration-150 transform hover:scale-110"
        >

        </img>
    )
}

export default Avatar
