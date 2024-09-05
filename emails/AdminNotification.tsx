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

interface AdminNotificationProps {
  name: string;
  message: string;
  subject: string;
}

const AdminNotification = ({
  name,
  message,
  subject,
}: AdminNotificationProps) => (
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
    <Preview>New Message Received - SK MARINE NZ</Preview>
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
        <Text style={styles.bodyText}>
          You have received a new message from
        </Text>
        <Text style={styles.bodyText}>{name}</Text>
        <Section style={styles.messageContainer}>
          <Text style={styles.messageText}>{subject}</Text>
          <Text style={styles.messageText}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default AdminNotification;
