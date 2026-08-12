/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_WEB3FORMS_DEMO_ACCESS_KEY: string;
	readonly VITE_WEB3FORMS_SUPPORT_ACCESS_KEY: string;
	readonly VITE_WEB3FORMS_SALES_ACCESS_KEY: string;
	readonly VITE_WEB3FORMS_PARTNER_ACCESS_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
