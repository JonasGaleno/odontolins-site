const GTM_ID = "GTM-P5H3N5L";

const GTMLoaderNoScript = ({ consent }: { consent: boolean }) => {
    return (
        consent && (
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>
        )
    );
};

export default GTMLoaderNoScript;
