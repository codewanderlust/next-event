import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { useUser } from "./useUser";
import { Link } from "react-router-dom";

function UserAvatar() {
  const { user } = useUser();
  console.log({ user });
  // Adjust the size of the avatar by setting the 'size' prop
  const avatarSize = "md"; // You can use "sm", "md", "lg", etc.
  return (
    <Link to="/dashboard">
      <Wrap>
        <WrapItem>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size={avatarSize}
          />
        </WrapItem>
      </Wrap>
    </Link>
  );
}

export default UserAvatar;
