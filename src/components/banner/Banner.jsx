import 'rc-banner-anim/assets/index.css';
import BannerAnim, { Element } from 'rc-banner-anim';
import banner0 from '../../assets/banners/banner0.png';
import banner1 from '../../assets/banners/banner1.png';
import banner2 from '../../assets/banners/banner2.png';
import banner3 from '../../assets/banners/banner3.png';
import banner4 from '../../assets/banners/banner4.png';
import banner5 from '../../assets/banners/banner5.png';
import banner6 from '../../assets/banners/banner6.png';
import banner7 from '../../assets/banners/banner7.png';
import banner8 from '../../assets/banners/banner8.png';
import banner9 from '../../assets/banners/banner9.png';
import banner10 from '../../assets/banners/banner10.png';
import banner11 from '../../assets/banners/banner11.png';
import './banner.css';

const BgElement = Element.BgElement;

const Banner = () => {
    return(
        <div>
            <BannerAnim prefixCls="banner-user" autoPlay>
                <Element prefixCls="banner-user-elem" key="0">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner1})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="1">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner2})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="2">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner3})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="3">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner4})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="4">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner5})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="5">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner6})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="6">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner7})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="7">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner8})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="8">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner9})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="9">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner10})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="10">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner11})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>

                <Element prefixCls="banner-user-elem" key="11">
                    <BgElement 
                    className="bg" 
                    style={{ 
                        backgroundImage: `url(${banner0})`, 
                        backgroundRepeat: "no-repeat" 
                        }} />
                </Element>
            </BannerAnim>
        </div>
        
    )
}

export default Banner