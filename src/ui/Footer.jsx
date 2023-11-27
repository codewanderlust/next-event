/* eslint-disable */
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      id="Footer"
      className="  mt-20  border-t border-t-black bg-secondary px-2"
    >
      <div className="min-w-6xl mx-auto flex max-w-6xl flex-col  p-4 sm:flex-row  sm:justify-between sm:px-4 sm:py-10">
        <ul className="mb-8 w-full sm:mb-0 sm:w-1/3">
          <img
            src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/footer-logo.png?t=2023-11-27T10%3A21%3A08.855Z"
            alt="logo"
            className="h-[96px] w-[96px]"
          />
        </ul>
        <ul className="mb-8 w-full sm:mb-0 sm:w-1/3">
          <li className="text-lg font-bold text-primary">Company</li>
          <li className="mt-2 cursor-pointer py-1 text-xs hover:underline">
            Pre-Booking Ticket
          </li>
          <li className="cursor-pointer py-1 text-xs hover:underline">
            Suggestion
          </li>
          <li className="cursor-pointer py-1 text-xs hover:underline">
            Location
          </li>
        </ul>

        <ul className="w-full  sm:w-1/3">
          <li className="text-lg font-bold text-primary">About</li>
          <li className="mt-2 cursor-pointer py-1 text-xs hover:underline">
            Manage Bookings
          </li>
          <li className="cursor-pointer py-1 text-xs hover:underline">
            Find an Event
          </li>
          <li className="cursor-pointer py-1 text-xs hover:underline">
            About us
          </li>
        </ul>

        <ul className="w-full  sm:w-1/3">
          <li className=" text-lg font-bold opacity-0">next event</li>
          <li className="mt-2 cursor-pointer py-1 text-xs hover:underline">
            Help Center
          </li>
          <li className="cursor-pointer py-1 text-xs hover:underline">
            latest News
          </li>
          <li className="cursor-pointer py-1 text-xs hover:underline">
            Attend
          </li>
        </ul>
      </div>
      {/* Move the div outside of the last ul container */}
      <div className="mx-auto  flex max-w-6xl items-center   border-t-2 border-t-[#f4f4f4] p-4">
        <div className=" flex w-full gap-4  sm:w-1/3">
          <a href="#">
            <FaTwitter size={24} color="#F21565" />
          </a>
          <a href="#">
            <FaInstagram size={24} color="#F21565" />
          </a>
          <a href="#">
            <FaLinkedin size={24} color="#F21565" />
          </a>
        </div>
        <div>
          <p className="text-center text-sm font-medium">
            © 2023 All Rights Reserved.{" "}
            <span className="text-primary">Evently</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
