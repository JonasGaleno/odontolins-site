const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const GTMLoaderNoScript = ({ consent }: { consent: boolean }) => {
    if (!GTM_ID) {
        return null;
    }

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
