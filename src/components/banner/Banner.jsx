import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import { banner0, banner1, banner2, banner3, banner4, banner5 } from './imports'
import './banner.css'

const BgElement = Element.BgElement;

const Banner = () => {
    return(
        <BannerAnim prefixCls="banner-user" autoPlay>
            <Element prefixCls="banner-user-elem" key="0">
                <BgElement className="bg" style={{ backgroundImage: `url(${banner1})`, backgroundRepeat: "no-repeat", backgroundSize: 800 }} />
            </Element>
            <Element prefixCls="banner-user-elem" key="1">
                <BgElement className="bg" style={{ backgroundImage: `url(${banner2})`, backgroundRepeat: "no-repeat", backgroundSize: 800 }} />
            </Element>
            <Element prefixCls="banner-user-elem" key="2">
                <BgElement className="bg" style={{ backgroundImage: `url(${banner3})`, backgroundRepeat: "no-repeat", backgroundSize: 800 }} />
            </Element>
            <Element prefixCls="banner-user-elem" key="3">
                <BgElement className="bg" style={{ backgroundImage: `url(${banner4})`, backgroundRepeat: "no-repeat", backgroundSize: 800 }} />
            </Element>
            <Element prefixCls="banner-user-elem" key="4">
                <BgElement className="bg" style={{ backgroundImage: `url(${banner5})`, backgroundRepeat: "no-repeat", backgroundSize: 800 }} />
            </Element>
            <Element prefixCls="banner-user-elem" key="5">
                <BgElement className="bg" style={{ backgroundImage: `url(${banner0})`, backgroundRepeat: "no-repeat", backgroundSize: 800 }} />
            </Element>
        </BannerAnim>
    )
}

export default Banner