function Avatar({ url, className }) {
    return (
        <img loading="lazy"
            src={url}
            alt="profile pic"
            className={`rounded-full h-10 cursor-pointer duration-150 transform hover:scale-110 ${className}`}
        >

        </img>
    )
}

export default Avatar
