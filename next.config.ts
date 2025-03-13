import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev"
import type { Config as SvgrConfig } from "@svgr/core"
import type { NextConfig } from "next"
import type { TurboLoaderItem } from "next/dist/server/config-shared"

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises -- https://github.com/cloudflare/workers-sdk/issues/7665
    setupDevPlatform()
}

const svgrConfig: SvgrConfig & Extract<TurboLoaderItem, { options: unknown }>["options"] = {
    svgo: true,
    svgoConfig: {
        plugins: [
            {
                name: "removeUnknownsAndDefaults",
                params: { keepAriaAttrs: true, keepRoleAttr: true },
            },
        ],
    },
}
const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            rules: {
                "*.svg": {
                    loaders: [
                        {
                            loader: "@svgr/webpack",
                            options: svgrConfig,
                        },
                    ],
                    as: "*.js",
                },
            },
        },
    },
}

export default nextConfig
