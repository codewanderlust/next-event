import React from "react";
import { motion as m, useIsPresent } from "framer-motion";
import { useUser } from "../features/aunthentication/useUser";
import { useLogout } from "../features/aunthentication/useLogout";
import { Spinner } from "@chakra-ui/react";
import { useDeleteUser } from "../features/aunthentication/useDelete";

export default function UserProfile() {
  const { user } = useUser();
  const id = user?.id;
  const { logout, isLoading } = useLogout();
  const isPresent = useIsPresent();

  const { deleteUser, isLoading: isDeleting } = useDeleteUser();

  const handleDelete = () => {
    // Fetch the current user before deleting

    deleteUser(id); // Assuming deleteApi expects a user ID
  };

  return (
    <>
      <div className="ml-auto mr-auto max-w-[1536px] pl-[0.75rem] pr-[0.75rem]">
        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-6">
          <p className="text-sm sm:text-xl ">
            User ID: <span className="font-bold">{user?.id}</span>
          </p>
          <p className="text-sm sm:text-xl ">
            Account Email: <span className="font-bold">{user?.email}</span>
          </p>
          <button
            disabled={isLoading}
            onClick={logout}
            className="sign-out-btn self-start"
          >
            {isLoading ? <Spinner size="sm" color="white" /> : "Sign Out"}
          </button>

          <h2 className="mt-8 text-center text-xl font-bold uppercase sm:text-3xl md:text-5xl">
            Get in Touch
          </h2>
          <div className="mx-auto my-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 sm:my-8 md:my-12"></div>
          <p className="text-sm sm:text-lg">
            Need help with your account? Reach via your favorite channel and
            we'll respond in 24 hours or less.
          </p>
          <ul className="text-sm sm:text-lg">
            <li>• Email hello@nextevent.io</li>
            <li>
              • DM via Twitter{" "}
              <a
                href="https://twitter.com/royjumah"
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                @nextevent
              </a>
            </li>
          </ul>
          <h2 className="mt-8 text-center text-xl font-bold uppercase sm:text-3xl md:text-5xl">
            Danger Zone
          </h2>

          <div className="mx-auto my-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 sm:my-8 md:my-12"></div>
          <p className="text-sm sm:text-lg">
            Use this button to delete your account and wipe all data from our
            servers forever.
          </p>
          <button
            className="self-start border-none text-blue-600"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete User"}
          </button>
        </div>
      </div>
      <m.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1.25, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1.25, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed inset-0 z-[99999] bg-secondary "
      />
    </>
  );
}
