import { format } from "date-fns";

const MessageBox = ({ message, currentUser }) => {
  // const [photoDownloaded, setPhotoDownloaded] = useState(false);

  // const handlePhotoClick = () => {
  //   // Check if photo has already been downloaded to avoid repeated downloads
  //   if (!photoDownloaded) {
  //     const link = document.createElement("a");
  //     link.href = message.photo;
  //     link.download = "photo"; // Set desired filename here
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     setPhotoDownloaded(true);
  //   }
  // };

  const handleOpen = () => {
    // Create a link to download the photo
    const link = document.createElement("a");
    link.href = message.photo;
    link.download = "photo";
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
    }, 1500);
  };

  return message?.sender?._id !== currentUser._id ? (
    <div className="message-box">
      <img
        src={message?.sender?.imageUrls || "/images/chatf/person.png"}
        alt="img"
        className="message-profilePhoto"
      />
      <div className="message-info">
        <p className="text-small-bold">
          {message?.sender?.FirstName} {message?.sender?.LastName} &#160; &#183;
          &#160; {format(new Date(message?.createdAt), "p")}
        </p>

        {message?.text ? (
          <p className="message-text">{message?.text}</p>
        ) : (
          <img
            src={message?.photo}
            alt="message"
            className="message-photo"
            onClick={handleOpen}
          />
        )}
      </div>
    </div>
  ) : (
    <div className="message-box justify-end">
      <div className="message-info items-end">
        <p className="text-small-bold">
          {format(new Date(message?.createdAt), "p")}
        </p>

        {message?.text ? (
          <p className="message-text-sender">{message?.text}</p>
        ) : (
          <img src={message?.photo} alt="message" className="message-photo" />
        )}
      </div>
    </div>
  );
};

export default MessageBox;
