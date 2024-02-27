import { z } from 'zod'

export const Thing = z.object({
    additionalType: z.string().optional(), // TODO
    alternateName: z.string().optional(),
    description: z.string().optional(), // TODO
    disambiguatingDescription: z.string().optional(),
    identifier: z.string().optional(), // TODO
    image: z.string().optional(), // TODO
    mainEntityOfPage: z.string().optional(), // TODO
    name: z.string().optional(),
    potentialAction: z.string().optional(), // TODO
    sameAs: z.string().optional(), // TODO
    subjectOf: z.string().optional(), // TODO
    url: z.string().url().optional(),
})

export const NutritionInformation = Thing.extend({
    calories: z.number().optional(),
    carbohydrateContent: z.number().optional(),
    cholesterolContent: z.number().optional(),
    fatContent: z.number().optional(),
    fiberContent: z.number().optional(),
    proteinContent: z.number().optional(),
    saturatedFatContent: z.number().optional(),
    servingSize: z.number().optional(),
    sodiumContent: z.number().optional(),
    sugarContent: z.number().optional(),
    transFatContent: z.number().optional(),
    unsaturatedFatConten: z.number().optional(),
})

export const CreativeWork = z.object({})

export const RestrictedDiet = z.enum([
    "DiabeticDiet",
    "GlutenFreeDiet",
    "HalalDiet",
    "HinduDiet",
    "KosherDiet",
    "LowCalorieDiet",
    "LowFatDiet",
    "LowLactoseDiet",
    "LowSaltDiet",
    "VeganDiet",
    "VegetarianDiet",
])

export const Recipe = z.object({
    cookTime: z.number().optional(), // TODO
    cookingMethod: z.string().optional(), // TODO
    nutrition: NutritionInformation,
    recipeCategory: z.string().optional(), // TODO: Should be array I believe
    recipeCuisine: z.string().optional(), // TODO: Should be array
    recipeIngredient: z.string().optional(), // TODO: Unsure how this is used. I think it's for single ingredient recipes which is weird.
    recipeInstructions: CreativeWork,
    recipeYield: z.number().optional(),
    suitableForDiet: RestrictedDiet,
    //TODO: HowTo properties needs to be extracted
    estimatedCost: z.string().optional(),
    performTime: z.number().optional(),
    prepTime: z.number().optional(),
    step: z.string().optional(),    //TODO: Single step recipe?
    supply: z.string().optional(),
    tool: z.string().optional(),
    totalTime: z.string().optional(),
    yield: z.string().optional(),
    //TODO: CreativeWork properties needs to be extracted, big 'ol nightmare I'll have to deal with this later
    about: z.string().optional(),
    abstract: z.string().optional(),
    accessMode: z.string().optional(),
    accessModeSufficient: z.string().optional(),
    accessibilityAPI: z.string().optional(),
    accessibilityControl: z.string().optional(),
    accessibilityFeature: z.string().optional(),
    accessibilityHazard: z.string().optional(),
    accessibilitySummary: z.string().optional(),
    accountablePerson: z.string().optional(),
    acquireLicensePage: z.string().optional(),
    aggregateRating: z.string().optional(),
    alternativeHeadline: z.string().optional(),
    archivedAt: z.string().optional(),
    assesses: z.string().optional(),
    associatedMedia: z.string().optional(),
    audience: z.string().optional(),
    audio: z.string().optional(),
    author: z.string().optional(),
    award: z.string().optional(),
    character: z.string().optional(),
    citation: z.string().optional(),
    comment: z.string().optional(),
    commentCount: z.string().optional(),
    conditionsOfAccess: z.string().optional(),
    contentLocation: z.string().optional(),
    contentRating: z.string().optional(),
    contentReferenceTime: z.string().optional(),
    contributor: z.string().optional(),
    copyrightHolder: z.string().optional(),
    copyrightNotice: z.string().optional(),
    copyrightYear: z.string().optional(),
    correction: z.string().optional(),
    countryOfOrigin: z.string().optional(),
    creativeWorkStatus: z.string().optional(),
    creator: z.string().optional(),
    creditText: z.string().optional(),
    dateCreated: z.string().optional(),
    dateModified: z.string().optional(),
    datePublished: z.string().optional(),
    digitalSourceType: z.string().optional(),
    discussionUrl: z.string().optional(),
    editEIDR: z.string().optional(),
    editor: z.string().optional(),
    educationalAlignment: z.string().optional(),
    educationalLevel: z.string().optional(),
    educationalUse: z.string().optional(),
    encoding: z.string().optional(),
    encodingFormat: z.string().optional(),
    exampleOfWork: z.string().optional(),
    expires: z.string().optional(),
    funder: z.string().optional(),
    funding: z.string().optional(),
    genre: z.string().optional(),
    hasPart: z.string().optional(),
    headline: z.string().optional(),
    inLanguage: z.string().optional(),
    interactionStatistic: z.string().optional(),
    interactivityType: z.string().optional(),
    interpretedAsClaim: z.string().optional(),
    isAccessibleForFree: z.string().optional(),
    isBasedOn: z.string().optional(),
    isFamilyFriendly: z.string().optional(),
    isPartOf: z.string().optional(),
    keywords: z.string().optional(),
    learningResourceType: z.string().optional(),
    license: z.string().optional(),
    locationCreated: z.string().optional(),
    mainEntity: z.string().optional(),
    maintainer: z.string().optional(),
    material: z.string().optional(),
    materialExtent: z.string().optional(),
    mentions: z.string().optional(),
    offers: z.string().optional(),
    pattern: z.string().optional(),
    position: z.string().optional(),
    producer: z.string().optional(),
    provider: z.string().optional(),
    publication: z.string().optional(),
    publisher: z.string().optional(),
    publisherImprint: z.string().optional(),
    publishingPrinciples: z.string().optional(),
    recordedAt: z.string().optional(),
    releasedEvent: z.string().optional(),
    review: z.string().optional(),
    schemaVersion: z.string().optional(),
    sdDatePublished: z.string().optional(),
    sdLicense: z.string().optional(),
    sdPublisher: z.string().optional(),
    size: z.string().optional(),
    sourceOrganization: z.string().optional(),
    spatial: z.string().optional(),
    spatialCoverage: z.string().optional(),
    sponsor: z.string().optional(),
    teaches: z.string().optional(),
    temporal: z.string().optional(),
    temporalCoverage: z.string().optional(),
    text: z.string().optional(),
    thumbnail: z.string().optional(),
    thumbnailUrl: z.string().optional(),
    timeRequired: z.string().optional(),
    translationOfWork: z.string().optional(),
    translator: z.string().optional(),
    typicalAgeRange: z.string().optional(),
    usageInfo: z.string().optional(),
    version: z.string().optional(),
    video: z.string().optional(),
    workExample: z.string().optional(),
    workTranslation: z.string().optional(),
})