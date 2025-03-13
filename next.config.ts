import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev"
import type { Config as SvgrConfig } from "@svgr/core"
import type { NextConfig } from "next"
import type { TurboLoaderItem } from "next/dist/server/config-shared"
import type { Configuration as WebpackConfig } from "webpack"

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises -- https://github.com/cloudflare/workers-sdk/issues/7665
    setupDevPlatform()
}

const svgrTestRegex = /src\/components\/svg\/.*\.svg$/
const svgrConfig: SvgrConfig = {
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
    webpack(config: WebpackConfig) {
        if (!config.module?.rules) return config
        config.module.rules.forEach((rule) => {
            if (typeof rule !== "object" || rule === null) return
            // svgrの対象にするファイルをnext/imageの対象から外す
            if (rule.loader === "next-image-loader") rule.exclude = svgrTestRegex
        })
        config.module.rules.push({
            test: svgrTestRegex,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: svgrConfig,
                },
            ],
        })
        return config
    },
    experimental: {
        turbo: {
            rules: {
                "*.svg": {
                    loaders: [
                        {
                            loader: "@svgr/webpack",
                            options: svgrConfig as Extract<
                                TurboLoaderItem,
                                { options: unknown }
                            >["options"],
                        },
                    ],
                    as: "*.js",
                },
            },
        },
    },
}

export default nextConfig
