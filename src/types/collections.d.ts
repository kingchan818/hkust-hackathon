export declare type NFTMetadataOwner = {
    metadata: NFTMetadata;
    owner: string;
};

export declare type NFTMetadata = z.output<typeof CommonNFTOutput>;

export declare const CommonNFTOutput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
}, {
    id: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<any, z.ZodTypeDef, any>]>, import("ethers").BigNumber, any>;
    uri: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    external_url: z.ZodOptional<z.ZodString>;
}>, {
    animation_url: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_url?: string | undefined;
    animation_url?: string | undefined;
    name: string;
    id: import("ethers").BigNumber;
    uri: string;
}, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_url?: string | undefined;
    id?: any;
    animation_url?: string | undefined;
    name: string;
    uri: string;
}>;