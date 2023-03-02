import React from "react";
import Home from "./Components/Home";
import SignUp from "./Components/Screens/SignUp";
import SignIn from "./Components/Screens/SignIn";
import ForgotPassword from "./Components/Screens/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessengerState from "./Context/MessengerState";
import GroupChatScreen from "./Components/Screens/GroupChatScreen";
import PersonalChatScreen from "./Components/Screens/PersonalChatScreen";
import ChatScreen from "./Components/Screens/WelcomeChatScreen";
import EmptyChatScreen from "./Components/Screens/EmptyChatScreen";
import ProfileModal from "./Components/Modals/ProfileModal";
import InviteModal from "./Components/Modals/InviteModal";
import MediaPreview from "./Components/Modals/MediaPreview";
import UserProfile from "./Components/Modals/UserProfile";

function App() {
  return (
    <MessengerState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home ele={<ChatScreen />} />} />
          <Route
            path="/chat-group"
            element={<Home ele={<GroupChatScreen />} />}
          />
          <Route
            path="/chat-direct"
            element={<Home ele={<PersonalChatScreen />} />}
          />
          <Route
            path="/chat-empty"
            element={<Home ele={<EmptyChatScreen />} />}
          />
        </Routes>
        <ProfileModal />
        <InviteModal />
        <MediaPreview />
        <UserProfile />
      </BrowserRouter>
    </MessengerState>
  );
}

export default App;
