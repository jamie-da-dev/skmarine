import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import styles from "./Emails";

interface UserConfirmationProps {
  name: string;
}

const UserConfirmation = ({ name }: UserConfirmationProps) => (
  <Html lang="en">
    <Head>
      <Font
        fontFamily="Bebas Neue"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>Your Inquiry Has Been Received - SK Marine NZ</Preview>
    <Body style={styles.main}>
      <Container style={styles.container}>
        <Section style={styles.headerSection}>
          <a href="https://www.skmarine.co.nz">
            <img
              src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724999087/logo_g5xnj4.png"
              alt="SK Marine NZ Logo"
              style={styles.logo}
            />
          </a>
        </Section>
        <Text style={styles.bodyText}>Hi {name},</Text>
        <Text style={styles.bodyText}>
          I appreciate your interest in my services. This email is to confirm
          that I have received your message. I will review your inquiry and
          respond as soon as possible. I am committed to providing you with
          top-quality outboard services and look forward to assisting you.
        </Text>
        <Text style={styles.bodyText}>
          If you have any urgent questions, please feel free to contact me at{" "}
          <a href="mailto:skmarinenz@gmail.com" style={styles.link}>
            skmarinenz@gmail.com
          </a>{" "}
          or call me at{" "}
          <a href="tel:+64212165501" style={styles.link}>
            021-216-5501
          </a>
          .
        </Text>
        <Text style={styles.signature}>
          Best regards,
          <br />
          Jack Shin
          <br />
          SK Marine NZ
        </Text>
      </Container>
    </Body>
  </Html>
);

export default UserConfirmation;
