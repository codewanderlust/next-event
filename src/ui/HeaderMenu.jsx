import { useEffect, useState } from "react";
import { GiLoveHowl } from "react-icons/gi";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { BiLoaderCircle } from "react-icons/bi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import { useUser } from "../features/aunthentication/useUser";
import UserAvatar from "../features/aunthentication/userAvatar";
import SearchBar from "./SearchBar";
import debounce from "debounce";
import { getEventsByCity } from "../services/apiEvents";
import { Link } from "react-router-dom";

function HeaderLinks({ open }) {
  const apiKey = "L9HuAjIoaLApydg4RShNzSl4kSv6mynE";
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // The index of the highlighted item
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose: clearQuerySearch } = useDisclosure();

  const { user } = useUser();
  const userId = user?.id;

  function handleFavorites() {
    if (user && userId) {
      navigate("/favorites");
    } else {
      open();
    }
  }

  const handleSearchCity = debounce(async (e) => {
    const searchTerm = e.target.value.trim();

    if (searchTerm === "") {
      setItems([]);
      return;
    }

    setIsSearching(true);

    try {
      const res = await getEventsByCity(apiKey, searchTerm);
      if (res) {
        setItems(res.slice(0, 10));
        setActiveIndex(0);
        setIsSearching(false);
      } else {
        setItems([]);
        setIsSearching(false);
      }
    } catch (error) {
      console.log(error);
      setIsSearching(false);
    }
  }, 500);
  console.log({ items });

  const onClose = () => {
    clearQuerySearch(); // Call the original onClose function
    setItems([]); // Clear the search results
  };

  //set the active index to the first item when the items array changes
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && items.length > 0) {
      e.preventDefault(); // Prevent default enter key action
      const activeItem = items[activeIndex];
      if (activeItem && activeItem.id) {
        navigate(`/event/${activeItem.id}`);
        onClose(); // Close the modal
      }
    }
  };

  //set the active index to the first item when the items array changes
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [items.length, activeIndex, navigate]); // Include 'navigate' in the dependencies array

  const handleItemClick = (item) => {
    onClose(); // This will close the modal
    // Optional: Navigate to the item's detail page
    navigate(`/event/${item.id}`);
  };

  return (
    <>
      <ul className="flex items-center gap-[32px] text-lg tracking-wide">
        <SearchBar onOpen={onOpen} />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="query-modal" maxW="800px" maxH="600px">
            <ModalBody className=" overflow-y-scroll">
              <form className="relative">
                <input
                  className="input "
                  name="Search"
                  type="text"
                  placeholder="search event by city"
                  onChange={handleSearchCity}
                />
                {isSearching ? (
                  <BiLoaderCircle
                    className="absolute bottom-0 right-0 top-0 mr-2 mt-4 animate-spin text-stone-600"
                    size={22}
                  />
                ) : null}
              </form>
              {!items.length > 0 ? (
                <div className="results">
                  <p className="h-full min-h-[200px] pt-2 text-center text-xs text-slate-200 sm:text-sm">
                    No results yet
                  </p>
                </div>
              ) : (
                items.map((item, i) => (
                  <div
                    onClick={() => handleItemClick(item)}
                    className="results"
                    key={i}
                    onMouseEnter={() => handleMouseEnter(i)}
                  >
                    <div
                      className={`hit text-slate-200 ${
                        activeIndex === i ? "active" : ""
                      }`}
                    >
                      <h2 className="hit-title">{item.name}</h2>
                    </div>
                  </div>
                ))
              )}
            </ModalBody>
            <ModalFooter className="query-modal-footer  ">
              <div className="space-x-1">
                <kbd>↩</kbd> <span className="kbd-text">select</span>
              </div>
              <div className="space-x-1">
                <kbd>↑</kbd>
                <kbd>↓</kbd> <span className="kbd-text">navigate</span>
              </div>
              <div className="space-x-1">
                <kbd>esc</kbd>
                <span className="kbd-text">leave</span>
              </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <GiLoveHowl
          size={24}
          color="#7908AE"
          strokeWidth={1}
          onClick={handleFavorites}
          className="cursor-pointer"
        />

        {user && userId ? (
          <UserAvatar /> // Render the avatar if the user is logged in
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              open();
            }}
            className="cursor-pointer rounded-2xl bg-secondary px-3 py-1  text-[16px] font-semibold text-[#f4f4f4]"
          >
            Login
          </motion.button>
        )}
      </ul>
    </>
  );
}

export default HeaderLinks;
