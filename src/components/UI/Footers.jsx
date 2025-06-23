import footerContact from "../../api/footerApi.json"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

export const Footers = () => {

    const iconMap = {
        MdPlace,
        IoCallSharp,
        TbMailPlus
    };
    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {
                    footerContact.map((item, index) => {
                        const {title, details } = item
                        const Icon = iconMap[item.icon]; // convert string to component

                        return (
                            <div className="footer-contact" key={index}>
                                <div className="icon">
                                    {Icon && <Icon size={24}style={{ color: "blue" }}/>}
                                </div>
                                <div className="footer-contact-text">

                                    <p>{title}</p>
                                    <p>{details}</p>

                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols">
                        <div className="copyright-text">
                              &copy; {new Date().getFullYear()} Kodyfier. All rights reserved.

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}