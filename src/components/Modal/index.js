import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { stateLogger } from "../../utils/stateLogger";
import Backdrop from "../Backdrop/index";

import supabase from "../../services/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, type }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSendingMagicLink, setIsSendingMagicLink] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  useEffect(() => {
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  }, [email]);

  async function handleSignIn() {
    try {
      setIsSendingMagicLink(true); // Set loading state to true
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: "http://localhost:3000",
        },
      });
      // Handle the response as needed
      setMagicLinkSent(true); // Set magic link sent state to true
    } finally {
      setIsSendingMagicLink(false); // Set loading state to false, whether success or failure
    }
  }

  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <Backdrop onClick={handleClose}>
      {type === "dropIn" && (
        <motion.div
          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          className="modal gray-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText
            text="Login"
            email={email}
            setEmail={setEmail}
            handleSignIn={handleSignIn}
            isEmailValid={isEmailValid}
            isSendingMagicLink={isSendingMagicLink}
            magicLinkSent={magicLinkSent}
          />
          <ModalButton onClick={handleClose} label="esc" />
        </motion.div>
      )}
    </Backdrop>
  );
};

const ModalText = ({
  text,
  email,
  setEmail,
  handleSignIn,
  isEmailValid,
  isSendingMagicLink,
  magicLinkSent,
}) => (
  <div className="modal-text flex flex-col gap-2">
    <h2 className="text-[2rem] font-[700] capitalize tracking-[1px]">{text}</h2>
    <h3>With magic email link:</h3>
    <div className="space-y-4">
      <div>
        <p className="block text-sm font-medium leading-6 ">Email</p>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="input touched"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>

      {magicLinkSent && (
        <p className="text-green-500">Magic signin link sent to {email}</p>
      )}

      <div>
        <button
          onClick={() => handleSignIn()}
          type="button"
          className={`btn text-xs tracking-wide ${
            isEmailValid ? "" : "disabled"
          }`}
          disabled={isSendingMagicLink || magicLinkSent} // Disable the button when sending the magic link or already sent
        >
          {isSendingMagicLink ? "Sending..." : magicLinkSent ? "Sent" : "Send"}
        </button>
      </div>
    </div>

    <p>Or with account:</p>
    <Auth
      onlyThirdPartyProviders
      supabaseClient={supabase}
      providers={["google", "github"]}
      appearance={{ theme: ThemeSupa }}
    />
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <kbd className="esc" onClick={onClick}>
    {label}
  </kbd>
);

export default Modal;
