import { RouteObject } from "react-router-dom";
import { FeatureMetadata } from "@/types/FeatureMetadata";
import { VersionConfig } from "@/types/VersionConfig";

const FeatureE  = {
    id: 'FeatureE',
    name: 'Feature E',
    enabled: true, // Feature flag to enable/disable the entire feature
    routes: [{
        path: '/feature-e',
        async lazy() {
            let { FeatureA } = await import("./pages/FeatureA");
            return { Component: FeatureA };
        },
    }] as RouteObject[],
    versions: [
        {
            version: '1.0.0',
            components: {
                FeatureAComponent1: true,
                FeatureAComponent2: false,
            },
        },
        {
            version: '1.1.0',
            components: {
                FeatureAComponent1: true,
                FeatureAComponent2: true,
            },
        },
    ] as VersionConfig[],
    activeVersion: '1.1.2', // Set the active version for A/B testing or staging
} satisfies FeatureMetadata;

export default FeatureE;