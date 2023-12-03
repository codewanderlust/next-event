import { useQuery } from "@tanstack/react-query";
import { motion as m, useIsPresent } from "framer-motion";
import { useDeleteFavorite } from "./useDeleteFavorite";
import { getFavorites } from "../../services/apiFavorites";
import { formatDate } from "../../utils/helpers";
import { useUser } from "../aunthentication/useUser";

function Favorites() {
  const isPresent = useIsPresent();
  const { user } = useUser();
  const userId = user?.id;
  const {
    isLoading,
    data: favorites,
    // error,
  } = useQuery({
    queryKey: ["favorites", userId],
    queryFn: () => getFavorites(userId), // pass a function to queryFn
  });

  const { isDeleting, deleteFavorite } = useDeleteFavorite();

  if (isLoading || isDeleting) return <p>Loading...</p>;
  if (!favorites.length)
    return (
      <div className="mx-auto flex max-w-4xl items-center justify-center p-6">
        You have not added any favorites.
      </div>
    );
  return (
    <>
      <ul className="mx-auto max-w-6xl p-6">
        <h2 className="m-2 text-center text-xl font-bold">Favorites</h2>
        {favorites?.map((item, i) => (
          <li
            key={i}
            className="my-2 flex w-full flex-col justify-start border border-stone-500 p-6 sm:relative sm:flex-row"
          >
            <img
              src={item.image}
              alt={item.eventName}
              className="h-[150px] w-[150px] rounded-md"
            />

            <div className="w-full overflow-hidden pl-2">
              <div className="flex w-full flex-col items-center justify-between sm:flex-row">
                <p className="flex items-center justify-between text-[16px] font-semibold underline sm:w-[400px]">
                  {item.eventName}
                </p>
                <div className="text-lg font-bold">
                  <p>{formatDate(item.date)}</p>
                </div>
              </div>
              <p className="mt-2 font-semibold">NEW</p>
              <div className="mt-2 text-sm">
                <a
                  href={item.ticketing}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer text-blue-500 underline"
                >
                  Grab Tickets
                </a>
              </div>

              <div className="mt-2 text-sm sm:absolute sm:bottom-0 sm:right-0 sm:p-4">
                <button
                  className="border-none bg-none text-sm text-blue-500 hover:text-blue-600 hover:underline"
                  onClick={() => deleteFavorite(item.favoriteId)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
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

export default Favorites;
