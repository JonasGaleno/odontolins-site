import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const GTMLoader = ({ consent }: { consent: boolean }) => {
    if (!GTM_ID) {
        console.warn("GTM ID não configurado. Verifique a variável de ambiente NEXT_PUBLIC_GTM_ID");
        return null;
    }

    return (
        consent && (
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push(
                        {'gtm.start': new Date().getTime(),event:'gtm.js'}
                        );var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${GTM_ID}');
                    `,
                }}
            />
        )
    );
};

export default GTMLoader;
