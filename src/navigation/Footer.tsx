import { MotionHover } from '@/components/common';
import { FaCopyright, FaFacebook, FaLinkedin, FaRegCopyright, FaXTwitter } from 'react-icons/fa6';

import { SOCIAL_LINKS } from '@/constants';

function Footer() {

    return(
        <div className="relative z-50">
            <footer className="">
                <div className="bg-card w-full py-10 flex items-center justify-center">
                    <div className="w-10/12 flex items-center">
                        <div className="flex-1">
                            <h1 className="font-bold text-3xl">About Me</h1>
                            <p className="font-semibold text-muted w-9/12">
                                When you partner with me, you don&apos;t waste your time or your money on 
                                theory, philosophy, or the same old cliches. I&apos;ve been a No. 1 salesperson 
                                nationally, I&apos;ve owned four businesses, and I&apos;ve had spectacular 
                                success as a coach and consultant. Very rarely will you find all three of 
                                those components in one individual - someone who has done it personally, 
                                taught others, and helped them successfully implement it. 
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 flex-1 items-end">
                            <h1 className="font-bold text-3xl">Follow Me</h1>
                            <div className="flex gap-5 text-3xl">
                                <MotionHover>
                                    <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </MotionHover>
                                <MotionHover>
                                    <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter />
                                    </a>
                                </MotionHover>
                                <MotionHover>
                                    <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook />
                                    </a>
                                </MotionHover>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-background w-full flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-1 items-center text-md text-muted pt-3 pb-5">
                        <p className="flex items-center gap-1 font-semibold">Copyright <FaRegCopyright /> {new Date().getFullYear()} Kelly Riggs | All Rights Reserved</p>
                        <p className="flex items-center gap-1 w-8/12 text-center">
                            The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except 
                            with the prior written permission of Kelly S. Riggs
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;