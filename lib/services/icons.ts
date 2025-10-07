import {
  MdEmail,
  MdOutlineEmail,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import {FaCheck, FaTwitter} from 'react-icons/fa6';
import {IoIosClose, IoLogoWhatsapp} from 'react-icons/io';
import {FaFacebookF, FaYoutube} from 'react-icons/fa';
import {AiFillHeart, AiFillInstagram, AiOutlineHeart} from 'react-icons/ai';
import {RiAccountCircleLine} from 'react-icons/ri';
import {IoEye, IoEyeOff} from 'react-icons/io5';
import {GoQuestion} from 'react-icons/go';

export const Icons = {
  ArrowNarrowRight: MdOutlineKeyboardArrowRight,
  ArrowNarrowLeft: MdOutlineKeyboardArrowLeft,
  ArrowNarrowDown: MdOutlineKeyboardArrowDown,
  Check: FaCheck,
  Close: IoIosClose,
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  Youtube: FaYoutube,
  Instagram: AiFillInstagram,
  Whatsapp: IoLogoWhatsapp,
  Email: MdEmail,
  Favorite: AiOutlineHeart,
  FavoriteSolid: AiFillHeart,
  Account: RiAccountCircleLine,
  OpenEye: IoEye,
  CloseEye: IoEyeOff,
  EmailOutline: MdOutlineEmail,
  CircleQuestion: GoQuestion,
};
