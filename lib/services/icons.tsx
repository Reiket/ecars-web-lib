import {
  MdEmail,
  MdOutlineEmail,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import {FaCheck, FaTwitter} from 'react-icons/fa6';
import {IoIosClose, IoLogoWhatsapp} from 'react-icons/io';
import {FaFacebookF, FaGoogle, FaLinkedin, FaYoutube} from 'react-icons/fa';
import {AiFillHeart, AiFillInstagram, AiOutlineHeart} from 'react-icons/ai';
import {RiAccountCircleLine, RiPriceTag3Line} from 'react-icons/ri';
import {IoEye, IoEyeOff} from 'react-icons/io5';
import {GoQuestion} from 'react-icons/go';
import {CiCalendar} from 'react-icons/ci';
import {BiLinkAlt} from 'react-icons/bi';

export const Icons = Object.freeze({
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
  Google: FaGoogle,
  Calendar: CiCalendar,
  Linkedin: FaLinkedin,
  Link: BiLinkAlt,
  TagLine: RiPriceTag3Line,
  Loader: () => (
    <svg
      className="lp"
      viewBox="0 0 128 128"
      width="128px"
      height="128px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="grad1"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#000"
          />
          <stop
            offset="100%"
            stopColor="#fff"
          />
        </linearGradient>
        <mask id="mask1">
          <rect
            x="0"
            y="0"
            width="128"
            height="128"
            fill="url(#grad1)"
          />
        </mask>
      </defs>
      <g
        fill="none"
        strokeLinecap="round"
        strokeWidth="16"
      >
        <circle
          className="lp__ring"
          r="56"
          cx="64"
          cy="64"
          stroke="#ddd"
        />
        <g stroke="hsl(183,90%,40%)">
          <polyline
            className="lp__fall-line"
            points="64,8 64,120"
          />
          <polyline
            className="lp__fall-line lp__fall-line--delay1"
            points="64,8 64,120"
          />
          <polyline
            className="lp__fall-line lp__fall-line--delay2"
            points="64,8 64,120"
          />
          <polyline
            className="lp__fall-line lp__fall-line--delay3"
            points="64,8 64,120"
          />
          <polyline
            className="lp__fall-line lp__fall-line--delay4"
            points="64,8 64,120"
          />
          <circle
            className="lp__drops"
            r="56"
            cx="64"
            cy="64"
            transform="rotate(90,64,64)"
          />
          <circle
            className="lp__worm"
            r="56"
            cx="64"
            cy="64"
            transform="rotate(-90,64,64)"
          />
        </g>
        <g
          stroke="hsl(93,90%,40%)"
          mask="url(#mask1)"
        >
          <polyline
            className="lp__fall-line"
            points="64,8 64,120"
          />
          <polyline
            className="lp__fall-line lp__fall-line--delay1"
            points="64,8 64,120"
          />
          <polyline
            className="lp__fall-line lp__fall-line--delay2"
            points="64,8 64,120"
          />
          <polyline
            className="lp__fall-line lp__fall-line--delay3"
            points="64,8 64,120"
          />
          <polyline
            className="lp__fall-line lp__fall-line--delay4"
            points="64,8 64,120"
          />
          <circle
            className="lp__drops"
            r="56"
            cx="64"
            cy="64"
            transform="rotate(90,64,64)"
          />
          <circle
            className="lp__worm"
            r="56"
            cx="64"
            cy="64"
            transform="rotate(-90,64,64)"
          />
        </g>
      </g>
    </svg>
  ),
});

export type IconsType = (typeof Icons)[keyof typeof Icons];
