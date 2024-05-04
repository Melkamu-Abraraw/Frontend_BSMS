"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/app/globals.css";
import { GroupOutlined } from "@mui/icons-material";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "@/components/ChatComp/Loader";
import TopBar from "@/components/ChatComp/TopBar";
import { CldUploadButton } from "next-cloudinary";
import BottomBar from "@/components/ChatComp/BottomBar";

const GroupInfo = () => {
  const [loading, setLoading] = useState(true);
  const [chat, setChat] = useState({});

  const { chatId } = useParams();

  const getChatDetails = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/Chat/getChatDetails/${chatId}`
      );
      const data = await res.json();
      setChat(data);
      setLoading(false);
      reset({
        name: data?.name,
        groupPhoto: data?.groupPhoto,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (chatId) {
      getChatDetails();
    }
  }, [chatId]);

  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { error },
  } = useForm();

  const uploadPhoto = (result) => {
    setValue("groupPhoto", result?.info?.secure_url);
  };

  const router = useRouter();

  const updateGroupChat = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3001/api/Chat/updateGroupChatInfo/${chatId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      setLoading(false);

      if (res.ok) {
        router.push(`/dashboard/broker/conversation/RootChat/chats/${chatId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className={`${inter.className} bg-blue-2`}>
      <TopBar />
      <div className="profile-page">
        <h1 className="text-heading3-bold">Edit Group Info</h1>

        <form className="edit-profile" onSubmit={handleSubmit(updateGroupChat)}>
          <div className="input">
            <input
              {...register("name", {
                required: "Group chat name is required",
              })}
              type="text"
              placeholder="Group chat name"
              className="input-field"
            />
            <GroupOutlined sx={{ color: "#737373" }} />
          </div>
          {error?.name && <p className="text-red-500">{error.name.message}</p>}

          <div className="flex items-center justify-between">
            <img
              src={watch("groupPhoto") || "/images/chatf/group.png"}
              alt="profile"
              className="w-40 h-40 rounded-full"
            />
            <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={uploadPhoto}
              uploadPreset="iptanjx7"
            >
              <p className="text-body-bold">Upload new photo</p>
            </CldUploadButton>
          </div>

          <div className="flex flex-wrap gap-3">
            {chat?.members?.map((member, index) => (
              <p className="selected-contact" key={index}>
                {member.username}
              </p>
            ))}
          </div>

          <button className="btn" type="submit">
            Save
          </button>
        </form>
      </div>
      <BottomBar />
    </div>
  );
};

export default GroupInfo;
