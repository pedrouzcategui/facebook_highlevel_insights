declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FACEBOOK_APP_CLIENT_ID: string;
      FACEBOOK_APP_CLIENT_SECRET: string;
      LONG_LIVED_FACEBOOK_ACCESS_TOKEN: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
