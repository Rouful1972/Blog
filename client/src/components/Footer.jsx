    // Footer.js
    import React from "react";
    const Footer = () => {
        return (
            <footer style={styles.footer}>
                <div>
                    <p>© {new Date().getFullYear()} Rafew Technology. All Rights Reserved.</p>
                    <p>
                        <a href="/privacy-policy" style={styles.link}>
                            Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a href="/terms-of-service" style={styles.link}>
                            Terms of Service
                        </a>
                    </p>
                </div>
            </footer>
        );
    };

    const styles = {
        footer: {
            backgroundColor: "#333",
            color: "#fff",
            textAlign: "center",
            padding: "20px 0",
            position: "fixed",
            bottom: 0,
            width: "100%",
        },
        link: {
            color: "#4caf50",
            textDecoration: "none",
        },
    };

    export default Footer;


