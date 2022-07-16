import React from "react";
import { IconFacebook } from "../components/Icons/IconFacebook";
import { IconTwitter } from "../components/Icons/IconTwitter";
import { IconLinkedin } from "../components/Icons/IconLinkedin";
import styles from "./styles/AppFooter.module.scss";

export const AppFooter = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contacts}>
        <div className={styles.contentContainer}>
          <span className={styles.titleBig}>Contacts</span>
          <p className={styles.text}>
            2019 Rootz Foundation.
            <br /> All rights reserved
          </p>
        </div>
      </div>
      <div className={styles.headquarters}>
        <div className={styles.contentContainer}>
          <span className={styles.title}>Headquarters</span>
          <p className={styles.text}>
            1234 Taliban
            <br />
            Los Angeles, La 1234567
            <br />
            (123) 456-7890
          </p>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.contentContainer}>
          <span className={styles.title}>Social media</span>
          <div className={styles.socialMediaIcons}>
            <SocialLink href="twitter.com">
              <IconTwitter />
            </SocialLink>
            <SocialLink href="facebook.com">
              <IconFacebook />
            </SocialLink>
            <SocialLink href="linkedin.com">
              <IconLinkedin />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

type Props = React.PropsWithChildren<{
  href: string;
}>;

const SocialLink = ({ href, children }: Props) => {
  return (
    <a href={href} rel="noopener noreferrer" target={"_blank"}>
      {children}
    </a>
  );
};
