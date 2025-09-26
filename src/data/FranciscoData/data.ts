import { FaLinkedinIn } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"
import { IconType } from "react-icons"

interface FooterLink {
  id: number
  name: string
  link: string
  icon: IconType
}

const franciscoImage = "/assets/Images/pfps/Francisco.jpg"
const franciscoName = "Francisco"
const franciscoShortName = "Francisco"
const franciscoBio = "Engineer + Marketer + Manager"
const franciscoAbout = `
  <p>
    Tech wizard, pixel assassin, status quo saboteur.
  </p>
  <p>
    My days ignite with reading fantasy stories, rogue ideas, and screen epics. Turbocharged by cappuccinos and sunny doggo walks. Bogotá-based. 🇨🇴
  </p>`

const franciscoLink = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/franciscoahm",
    icon: FaLinkedinIn,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/frvnkhvrt",
    icon: FaGithub,
  },
]

const franciscoContact =
  ""
const franciscoContactLink = [
  {
    id: 1,
    name: "Email",
    link: "mailto:franciscohm@icloud.com",
    icon: MdOutlineMail,
  },
 {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/franciscoahm",
    icon: FaLinkedinIn,
  },
]

const franciscoFooterLink: FooterLink[] = [
  // Add your footer links here
]

export {
  franciscoImage,
  franciscoBio,
  franciscoContact,
  franciscoContactLink,
  franciscoName,
  franciscoShortName,
  franciscoAbout,
  franciscoLink,
  franciscoFooterLink,
}
