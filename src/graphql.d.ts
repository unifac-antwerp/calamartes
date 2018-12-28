export type Maybe<T> = T | null

export interface SitePageConnectionSort {
  fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[]

  order?: SitePageConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>

  internalComponentName?: Maybe<
    SitePageConnectionInternalComponentNameQueryString
  >

  path?: Maybe<SitePageConnectionPathQueryString_2>

  component?: Maybe<SitePageConnectionComponentQueryString>

  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>

  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>

  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>

  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>

  id?: Maybe<SitePageConnectionIdQueryString_2>

  internal?: Maybe<SitePageConnectionInternalInputObject_2>
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>

  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>

  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>

  pluginOptions?: Maybe<SitePageConnectionPluginCreatorPluginOptionsInputObject>

  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>

  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginFilepathQueryString
  >

  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>

  parent?: Maybe<SitePageConnectionPluginCreatorParentQueryString>

  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  repositoryName?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsRepositoryNameQueryString
  >

  accessToken?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString
  >

  lang?: Maybe<SitePageConnectionPluginCreatorPluginOptionsLangQueryString>

  username?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsUsernameQueryString
  >

  access_token?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString_2
  >

  instagram_id?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsInstagramIdQueryString
  >

  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>

  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>

  short_name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString
  >

  start_url?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString
  >

  background_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString
  >

  theme_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString
  >

  display?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString
  >

  icon?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIconQueryString>

  env?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvInputObject>

  pathCheck?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsRepositoryNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsLangQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsUsernameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsInstagramIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvInputObject {
  production?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvProductionInputObject
  >

  branch_deploy?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployInputObject
  >

  deploy_preview?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewInputObject
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionInputObject {
  policy?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyQueryList
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyInputObject
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyInputObject {
  userAgent?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyUserAgentQueryString
  >

  disallow?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyDisallowQueryList
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployInputObject {
  policy?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyQueryList
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyInputObject
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyInputObject {
  userAgent?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyUserAgentQueryString
  >

  disallow?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyDisallowQueryList
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewInputObject {
  policy?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyQueryList
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyInputObject
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyInputObject {
  userAgent?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString
  >

  disallow?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyDisallowQueryList
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>

  description?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
  >

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>

  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>

  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>

  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>

  dependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
  >

  devDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
  >

  peerDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
  >

  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
  >

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
  >

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
  >

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: Maybe<
    SitePageConnectionPluginCreatorInternalContentDigestQueryString
  >

  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>

  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>

  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>

  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionSort {
  fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[]

  order?: SitePluginConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>

  id?: Maybe<SitePluginConnectionIdQueryString_2>

  name?: Maybe<SitePluginConnectionNameQueryString_2>

  version?: Maybe<SitePluginConnectionVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>

  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>

  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>

  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>

  internal?: Maybe<SitePluginConnectionInternalInputObject_2>
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  repositoryName?: Maybe<
    SitePluginConnectionPluginOptionsRepositoryNameQueryString_2
  >

  accessToken?: Maybe<SitePluginConnectionPluginOptionsAccessTokenQueryString_3>

  lang?: Maybe<SitePluginConnectionPluginOptionsLangQueryString_2>

  username?: Maybe<SitePluginConnectionPluginOptionsUsernameQueryString_2>

  access_token?: Maybe<
    SitePluginConnectionPluginOptionsAccessTokenQueryString_4
  >

  instagram_id?: Maybe<
    SitePluginConnectionPluginOptionsInstagramIdQueryString_2
  >

  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>

  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>

  short_name?: Maybe<SitePluginConnectionPluginOptionsShortNameQueryString_2>

  start_url?: Maybe<SitePluginConnectionPluginOptionsStartUrlQueryString_2>

  background_color?: Maybe<
    SitePluginConnectionPluginOptionsBackgroundColorQueryString_2
  >

  theme_color?: Maybe<SitePluginConnectionPluginOptionsThemeColorQueryString_2>

  display?: Maybe<SitePluginConnectionPluginOptionsDisplayQueryString_2>

  icon?: Maybe<SitePluginConnectionPluginOptionsIconQueryString_2>

  env?: Maybe<SitePluginConnectionPluginOptionsEnvInputObject_2>

  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>
}

export interface SitePluginConnectionPluginOptionsRepositoryNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsAccessTokenQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsUsernameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsAccessTokenQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsInstagramIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsIconQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvInputObject_2 {
  production?: Maybe<
    SitePluginConnectionPluginOptionsEnvProductionInputObject_2
  >

  branch_deploy?: Maybe<
    SitePluginConnectionPluginOptionsEnvBranchDeployInputObject_2
  >

  deploy_preview?: Maybe<
    SitePluginConnectionPluginOptionsEnvDeployPreviewInputObject_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvProductionInputObject_2 {
  policy?: Maybe<
    SitePluginConnectionPluginOptionsEnvProductionPolicyQueryList_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvProductionPolicyQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPluginOptionsEnvProductionPolicyInputObject_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvProductionPolicyInputObject_2 {
  userAgent?: Maybe<
    SitePluginConnectionPluginOptionsEnvProductionPolicyUserAgentQueryString_2
  >

  disallow?: Maybe<
    SitePluginConnectionPluginOptionsEnvProductionPolicyDisallowQueryList_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvProductionPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvProductionPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployInputObject_2 {
  policy?: Maybe<
    SitePluginConnectionPluginOptionsEnvBranchDeployPolicyQueryList_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployPolicyQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPluginOptionsEnvBranchDeployPolicyInputObject_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployPolicyInputObject_2 {
  userAgent?: Maybe<
    SitePluginConnectionPluginOptionsEnvBranchDeployPolicyUserAgentQueryString_2
  >

  disallow?: Maybe<
    SitePluginConnectionPluginOptionsEnvBranchDeployPolicyDisallowQueryList_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewInputObject_2 {
  policy?: Maybe<
    SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyQueryList_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyInputObject_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyInputObject_2 {
  userAgent?: Maybe<
    SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString_2
  >

  disallow?: Maybe<
    SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyDisallowQueryList_2
  >
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>

  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>

  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>

  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>

  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>

  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>

  devDependencies?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesQueryList_2
  >

  peerDependencies?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
  >

  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>

  version?: Maybe<
    SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
  >
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDevDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>

  version?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
  >
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
  >
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2>

  version?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
  >
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>

  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>

  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionSort {
  fields: (Maybe<PrismicHomepageConnectionSortByFieldsEnum>)[]

  order?: PrismicHomepageConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterPrismicHomepage {
  type?: Maybe<PrismicHomepageConnectionTypeQueryString_2>

  href?: Maybe<PrismicHomepageConnectionHrefQueryString_2>

  first_publication_date?: Maybe<
    PrismicHomepageConnectionFirstPublicationDateQueryString_2
  >

  last_publication_date?: Maybe<
    PrismicHomepageConnectionLastPublicationDateQueryString_2
  >

  slugs?: Maybe<PrismicHomepageConnectionSlugsQueryList_2>

  lang?: Maybe<PrismicHomepageConnectionLangQueryString_2>

  data?: Maybe<PrismicHomepageConnectionDataInputObject_2>

  prismicId?: Maybe<PrismicHomepageConnectionPrismicIdQueryString_2>

  id?: Maybe<PrismicHomepageConnectionIdQueryString_2>

  internal?: Maybe<PrismicHomepageConnectionInternalInputObject_2>

  dataString?: Maybe<PrismicHomepageConnectionDataStringQueryString_2>
}

export interface PrismicHomepageConnectionTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataInputObject_2 {
  title?: Maybe<PrismicHomepageConnectionDataTitleQueryString_2>

  test?: Maybe<PrismicHomepageConnectionDataTestQueryString_2>
}

export interface PrismicHomepageConnectionDataTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataTestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionInternalInputObject_2 {
  type?: Maybe<PrismicHomepageConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<
    PrismicHomepageConnectionInternalContentDigestQueryString_2
  >

  owner?: Maybe<PrismicHomepageConnectionInternalOwnerQueryString_2>
}

export interface PrismicHomepageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSort {
  fields: (Maybe<FileConnectionSortByFieldsEnum>)[]

  order?: FileConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: Maybe<FileConnectionIdQueryString_2>

  internal?: Maybe<FileConnectionInternalInputObject_2>

  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>

  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>

  extension?: Maybe<FileConnectionExtensionQueryString_2>

  size?: Maybe<FileConnectionSizeQueryInteger_2>

  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>

  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>

  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>

  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>

  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>

  root?: Maybe<FileConnectionRootQueryString_2>

  dir?: Maybe<FileConnectionDirQueryString_2>

  base?: Maybe<FileConnectionBaseQueryString_2>

  ext?: Maybe<FileConnectionExtQueryString_2>

  name?: Maybe<FileConnectionNameQueryString_2>

  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>

  dev?: Maybe<FileConnectionDevQueryInteger_2>

  mode?: Maybe<FileConnectionModeQueryInteger_2>

  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>

  uid?: Maybe<FileConnectionUidQueryInteger_2>

  gid?: Maybe<FileConnectionGidQueryInteger_2>

  rdev?: Maybe<FileConnectionRdevQueryInteger_2>

  blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>

  ino?: Maybe<FileConnectionInoQueryInteger_2>

  blocks?: Maybe<FileConnectionBlocksQueryInteger_2>

  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>

  atime?: Maybe<FileConnectionAtimeQueryString_2>

  mtime?: Maybe<FileConnectionMtimeQueryString_2>

  ctime?: Maybe<FileConnectionCtimeQueryString_2>

  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>

  publicURL?: Maybe<PublicUrlQueryString_4>
}

export interface FileConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>

  type?: Maybe<FileConnectionInternalTypeQueryString_2>

  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>

  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>

  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PublicUrlQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DuotoneGradient {
  highlight?: Maybe<string>

  shadow?: Maybe<string>

  opacity?: Maybe<number>
}

export interface Potrace {
  turnPolicy?: Maybe<PotraceTurnPolicy>

  turdSize?: Maybe<number>

  alphaMax?: Maybe<number>

  optCurve?: Maybe<boolean>

  optTolerance?: Maybe<number>

  threshold?: Maybe<number>

  blackOnWhite?: Maybe<boolean>

  color?: Maybe<string>

  background?: Maybe<string>
}

export interface ImageSharpConnectionSort {
  fields: (Maybe<ImageSharpConnectionSortByFieldsEnum>)[]

  order?: ImageSharpConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterImageSharp {
  id?: Maybe<ImageSharpConnectionIdQueryString_2>

  internal?: Maybe<ImageSharpConnectionInternalInputObject_2>

  fixed?: Maybe<FixedTypeName_4>

  resolutions?: Maybe<ResolutionsTypeName_4>

  fluid?: Maybe<FluidTypeName_4>

  sizes?: Maybe<SizesTypeName_4>

  original?: Maybe<OriginalTypeName_4>

  resize?: Maybe<ResizeTypeName_4>
}

export interface ImageSharpConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpConnectionInternalContentDigestQueryString_2>

  type?: Maybe<ImageSharpConnectionInternalTypeQueryString_2>

  owner?: Maybe<ImageSharpConnectionInternalOwnerQueryString_2>
}

export interface ImageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTypeName_4 {
  base64?: Maybe<FixedBase64QueryString_4>

  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>

  width?: Maybe<FixedWidthQueryFloat_4>

  height?: Maybe<FixedHeightQueryFloat_4>

  src?: Maybe<FixedSrcQueryString_4>

  srcSet?: Maybe<FixedSrcSetQueryString_4>

  srcWebp?: Maybe<FixedSrcWebpQueryString_4>

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>

  originalName?: Maybe<FixedOriginalNameQueryString_4>
}

export interface FixedBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedWidthQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedHeightQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTypeName_4 {
  base64?: Maybe<ResolutionsBase64QueryString_4>

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>

  width?: Maybe<ResolutionsWidthQueryFloat_4>

  height?: Maybe<ResolutionsHeightQueryFloat_4>

  src?: Maybe<ResolutionsSrcQueryString_4>

  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>

  originalName?: Maybe<ResolutionsOriginalNameQueryString_4>
}

export interface ResolutionsBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsWidthQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsHeightQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTypeName_4 {
  base64?: Maybe<FluidBase64QueryString_4>

  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>

  src?: Maybe<FluidSrcQueryString_4>

  srcSet?: Maybe<FluidSrcSetQueryString_4>

  srcWebp?: Maybe<FluidSrcWebpQueryString_4>

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>

  sizes?: Maybe<FluidSizesQueryString_4>

  originalImg?: Maybe<FluidOriginalImgQueryString_4>

  originalName?: Maybe<FluidOriginalNameQueryString_4>

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_4>

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_4>
}

export interface FluidBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSizesQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalImgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidPresentationWidthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidPresentationHeightQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesTypeName_4 {
  base64?: Maybe<SizesBase64QueryString_4>

  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>

  src?: Maybe<SizesSrcQueryString_4>

  srcSet?: Maybe<SizesSrcSetQueryString_4>

  srcWebp?: Maybe<SizesSrcWebpQueryString_4>

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>

  sizes?: Maybe<SizesSizesQueryString_4>

  originalImg?: Maybe<SizesOriginalImgQueryString_4>

  originalName?: Maybe<SizesOriginalNameQueryString_4>

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_4>

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_4>
}

export interface SizesBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSizesQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalImgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesPresentationWidthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesPresentationHeightQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalTypeName_4 {
  width?: Maybe<OriginalWidthQueryFloat_4>

  height?: Maybe<OriginalHeightQueryFloat_4>

  src?: Maybe<OriginalSrcQueryString_4>
}

export interface OriginalWidthQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalHeightQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTypeName_4 {
  src?: Maybe<ResizeSrcQueryString_4>

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>

  width?: Maybe<ResizeWidthQueryInt_4>

  height?: Maybe<ResizeHeightQueryInt_4>

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>

  originalName?: Maybe<ResizeOriginalNameQueryString_4>
}

export interface ResizeSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeWidthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeHeightQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionSort {
  fields: (Maybe<PrismicPartnerConnectionSortByFieldsEnum>)[]

  order?: PrismicPartnerConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterPrismicPartner {
  type?: Maybe<PrismicPartnerConnectionTypeQueryString_2>

  href?: Maybe<PrismicPartnerConnectionHrefQueryString_2>

  first_publication_date?: Maybe<
    PrismicPartnerConnectionFirstPublicationDateQueryString_2
  >

  last_publication_date?: Maybe<
    PrismicPartnerConnectionLastPublicationDateQueryString_2
  >

  slugs?: Maybe<PrismicPartnerConnectionSlugsQueryList_2>

  lang?: Maybe<PrismicPartnerConnectionLangQueryString_2>

  data?: Maybe<PrismicPartnerConnectionDataInputObject_2>

  prismicId?: Maybe<PrismicPartnerConnectionPrismicIdQueryString_2>

  id?: Maybe<PrismicPartnerConnectionIdQueryString_2>

  internal?: Maybe<PrismicPartnerConnectionInternalInputObject_2>

  dataString?: Maybe<PrismicPartnerConnectionDataStringQueryString_2>
}

export interface PrismicPartnerConnectionTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataInputObject_2 {
  name?: Maybe<PrismicPartnerConnectionDataNameQueryString_2>

  image?: Maybe<PrismicPartnerConnectionDataImageInputObject_2>

  type?: Maybe<PrismicPartnerConnectionDataTypeQueryString_2>

  link?: Maybe<PrismicPartnerConnectionDataLinkInputObject_2>

  importance?: Maybe<PrismicPartnerConnectionDataImportanceQueryInteger_2>

  description?: Maybe<PrismicPartnerConnectionDataDescriptionQueryString_2>
}

export interface PrismicPartnerConnectionDataNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageInputObject_2 {
  dimensions?: Maybe<PrismicPartnerConnectionDataImageDimensionsInputObject_2>

  alt?: Maybe<PrismicPartnerConnectionDataImageAltQueryString_2>

  copyright?: Maybe<PrismicPartnerConnectionDataImageCopyrightQueryString_2>

  url?: Maybe<PrismicPartnerConnectionDataImageUrlQueryString_2>

  localFile?: Maybe<PrismicPartnerConnectionDataImageLocalFileInputObject_2>
}

export interface PrismicPartnerConnectionDataImageDimensionsInputObject_2 {
  width?: Maybe<PrismicPartnerConnectionDataImageDimensionsWidthQueryInteger_2>

  height?: Maybe<
    PrismicPartnerConnectionDataImageDimensionsHeightQueryInteger_2
  >
}

export interface PrismicPartnerConnectionDataImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInputObject_2 {
  id?: Maybe<PrismicPartnerConnectionDataImageLocalFileIdQueryString_2>

  children?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileChildrenQueryList_2
  >

  parent?: Maybe<PrismicPartnerConnectionDataImageLocalFileParentQueryString_2>

  internal?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileInternalInputObject_2
  >

  sourceInstanceName?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileSourceInstanceNameQueryString_2
  >

  absolutePath?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileAbsolutePathQueryString_2
  >

  relativePath?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileRelativePathQueryString_2
  >

  extension?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileExtensionQueryString_2
  >

  size?: Maybe<PrismicPartnerConnectionDataImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<
    PrismicPartnerConnectionDataImageLocalFilePrettySizeQueryString_2
  >

  modifiedTime?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileModifiedTimeQueryString_2
  >

  accessTime?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileAccessTimeQueryString_2
  >

  changeTime?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileChangeTimeQueryString_2
  >

  birthTime?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileBirthTimeQueryString_2
  >

  root?: Maybe<PrismicPartnerConnectionDataImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicPartnerConnectionDataImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicPartnerConnectionDataImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicPartnerConnectionDataImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicPartnerConnectionDataImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileRelativeDirectoryQueryString_2
  >

  dev?: Maybe<PrismicPartnerConnectionDataImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicPartnerConnectionDataImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicPartnerConnectionDataImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicPartnerConnectionDataImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicPartnerConnectionDataImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicPartnerConnectionDataImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileBlksizeQueryInteger_2
  >

  ino?: Maybe<PrismicPartnerConnectionDataImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicPartnerConnectionDataImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicPartnerConnectionDataImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicPartnerConnectionDataImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicPartnerConnectionDataImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileBirthtimeMsQueryFloat_2
  >

  atime?: Maybe<PrismicPartnerConnectionDataImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicPartnerConnectionDataImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicPartnerConnectionDataImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileBirthtimeQueryString_2
  >
}

export interface PrismicPartnerConnectionDataImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileInternalContentDigestQueryString_2
  >

  type?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileInternalTypeQueryString_2
  >

  mediaType?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileInternalMediaTypeQueryString_2
  >

  description?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileInternalDescriptionQueryString_2
  >

  owner?: Maybe<
    PrismicPartnerConnectionDataImageLocalFileInternalOwnerQueryString_2
  >
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkInputObject_2 {
  link_type?: Maybe<PrismicPartnerConnectionDataLinkLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnerConnectionDataLinkUrlQueryString_2>

  target?: Maybe<PrismicPartnerConnectionDataLinkTargetQueryString_2>

  raw?: Maybe<PrismicPartnerConnectionDataLinkRawInputObject_2>
}

export interface PrismicPartnerConnectionDataLinkLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkRawInputObject_2 {
  link_type?: Maybe<PrismicPartnerConnectionDataLinkRawLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnerConnectionDataLinkRawUrlQueryString_2>

  target?: Maybe<PrismicPartnerConnectionDataLinkRawTargetQueryString_2>
}

export interface PrismicPartnerConnectionDataLinkRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkRawTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImportanceQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionInternalInputObject_2 {
  type?: Maybe<PrismicPartnerConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<
    PrismicPartnerConnectionInternalContentDigestQueryString_2
  >

  owner?: Maybe<PrismicPartnerConnectionInternalOwnerQueryString_2>
}

export interface PrismicPartnerConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionSort {
  fields: (Maybe<InstaNodeConnectionSortByFieldsEnum>)[]

  order?: InstaNodeConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterInstaNode {
  id?: Maybe<InstaNodeConnectionIdQueryString_2>

  internal?: Maybe<InstaNodeConnectionInternalInputObject_2>

  likes?: Maybe<InstaNodeConnectionLikesQueryInteger_2>

  thumbnails?: Maybe<InstaNodeConnectionThumbnailsQueryList_2>

  original?: Maybe<InstaNodeConnectionOriginalQueryString_2>

  timestamp?: Maybe<InstaNodeConnectionTimestampQueryInteger_2>

  dimensions?: Maybe<InstaNodeConnectionDimensionsInputObject_2>

  localFile?: Maybe<InstaNodeConnectionLocalFileInputObject_2>

  comments?: Maybe<InstaNodeConnectionCommentsQueryInteger_2>
}

export interface InstaNodeConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionInternalInputObject_2 {
  type?: Maybe<InstaNodeConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<InstaNodeConnectionInternalContentDigestQueryString_2>

  owner?: Maybe<InstaNodeConnectionInternalOwnerQueryString_2>
}

export interface InstaNodeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLikesQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionThumbnailsQueryList_2 {
  elemMatch?: Maybe<InstaNodeConnectionThumbnailsInputObject_2>
}

export interface InstaNodeConnectionThumbnailsInputObject_2 {
  src?: Maybe<InstaNodeConnectionThumbnailsSrcQueryString_2>

  config_width?: Maybe<InstaNodeConnectionThumbnailsConfigWidthQueryInteger_2>

  config_height?: Maybe<InstaNodeConnectionThumbnailsConfigHeightQueryInteger_2>
}

export interface InstaNodeConnectionThumbnailsSrcQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionThumbnailsConfigWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionThumbnailsConfigHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionOriginalQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionTimestampQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionDimensionsInputObject_2 {
  height?: Maybe<InstaNodeConnectionDimensionsHeightQueryInteger_2>

  width?: Maybe<InstaNodeConnectionDimensionsWidthQueryInteger_2>
}

export interface InstaNodeConnectionDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileInputObject_2 {
  id?: Maybe<InstaNodeConnectionLocalFileIdQueryString_2>

  children?: Maybe<InstaNodeConnectionLocalFileChildrenQueryList_2>

  parent?: Maybe<InstaNodeConnectionLocalFileParentQueryString_2>

  internal?: Maybe<InstaNodeConnectionLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<
    InstaNodeConnectionLocalFileSourceInstanceNameQueryString_2
  >

  absolutePath?: Maybe<InstaNodeConnectionLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<InstaNodeConnectionLocalFileRelativePathQueryString_2>

  extension?: Maybe<InstaNodeConnectionLocalFileExtensionQueryString_2>

  size?: Maybe<InstaNodeConnectionLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<InstaNodeConnectionLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<InstaNodeConnectionLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<InstaNodeConnectionLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<InstaNodeConnectionLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<InstaNodeConnectionLocalFileBirthTimeQueryString_2>

  root?: Maybe<InstaNodeConnectionLocalFileRootQueryString_2>

  dir?: Maybe<InstaNodeConnectionLocalFileDirQueryString_2>

  base?: Maybe<InstaNodeConnectionLocalFileBaseQueryString_2>

  ext?: Maybe<InstaNodeConnectionLocalFileExtQueryString_2>

  name?: Maybe<InstaNodeConnectionLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<
    InstaNodeConnectionLocalFileRelativeDirectoryQueryString_2
  >

  dev?: Maybe<InstaNodeConnectionLocalFileDevQueryInteger_2>

  mode?: Maybe<InstaNodeConnectionLocalFileModeQueryInteger_2>

  nlink?: Maybe<InstaNodeConnectionLocalFileNlinkQueryInteger_2>

  uid?: Maybe<InstaNodeConnectionLocalFileUidQueryInteger_2>

  gid?: Maybe<InstaNodeConnectionLocalFileGidQueryInteger_2>

  rdev?: Maybe<InstaNodeConnectionLocalFileRdevQueryInteger_2>

  blksize?: Maybe<InstaNodeConnectionLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<InstaNodeConnectionLocalFileInoQueryInteger_2>

  blocks?: Maybe<InstaNodeConnectionLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<InstaNodeConnectionLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<InstaNodeConnectionLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<InstaNodeConnectionLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<InstaNodeConnectionLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<InstaNodeConnectionLocalFileAtimeQueryString_2>

  mtime?: Maybe<InstaNodeConnectionLocalFileMtimeQueryString_2>

  ctime?: Maybe<InstaNodeConnectionLocalFileCtimeQueryString_2>

  birthtime?: Maybe<InstaNodeConnectionLocalFileBirthtimeQueryString_2>
}

export interface InstaNodeConnectionLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<
    InstaNodeConnectionLocalFileInternalContentDigestQueryString_2
  >

  type?: Maybe<InstaNodeConnectionLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<InstaNodeConnectionLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<
    InstaNodeConnectionLocalFileInternalDescriptionQueryString_2
  >

  owner?: Maybe<InstaNodeConnectionLocalFileInternalOwnerQueryString_2>
}

export interface InstaNodeConnectionLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionCommentsQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionSort {
  fields: (Maybe<DirectoryConnectionSortByFieldsEnum>)[]

  order?: DirectoryConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: Maybe<DirectoryConnectionIdQueryString_2>

  internal?: Maybe<DirectoryConnectionInternalInputObject_2>

  sourceInstanceName?: Maybe<DirectoryConnectionSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>

  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>

  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>

  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>

  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>

  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>

  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>

  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>

  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>

  root?: Maybe<DirectoryConnectionRootQueryString_2>

  dir?: Maybe<DirectoryConnectionDirQueryString_2>

  base?: Maybe<DirectoryConnectionBaseQueryString_2>

  ext?: Maybe<DirectoryConnectionExtQueryString_2>

  name?: Maybe<DirectoryConnectionNameQueryString_2>

  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>

  dev?: Maybe<DirectoryConnectionDevQueryInteger_2>

  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>

  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>

  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>

  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>

  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>

  blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>

  ino?: Maybe<DirectoryConnectionInoQueryInteger_2>

  blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>

  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>

  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>

  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>

  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>

  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>

  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>

  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>

  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalComponentNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentChunkNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInputObject {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>

  id?: Maybe<SitePagePluginCreatorIdQueryString>

  name?: Maybe<SitePagePluginCreatorNameQueryString>

  version?: Maybe<SitePagePluginCreatorVersionQueryString>

  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>

  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>

  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>

  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>

  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>

  parent?: Maybe<SitePagePluginCreatorParentQueryString>

  internal?: Maybe<SitePagePluginCreatorInternalInputObject>
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  repositoryName?: Maybe<
    SitePagePluginCreatorPluginOptionsRepositoryNameQueryString
  >

  accessToken?: Maybe<SitePagePluginCreatorPluginOptionsAccessTokenQueryString>

  lang?: Maybe<SitePagePluginCreatorPluginOptionsLangQueryString>

  username?: Maybe<SitePagePluginCreatorPluginOptionsUsernameQueryString>

  access_token?: Maybe<
    SitePagePluginCreatorPluginOptionsAccessTokenQueryString_2
  >

  instagram_id?: Maybe<SitePagePluginCreatorPluginOptionsInstagramIdQueryString>

  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>

  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>

  short_name?: Maybe<SitePagePluginCreatorPluginOptionsShortNameQueryString>

  start_url?: Maybe<SitePagePluginCreatorPluginOptionsStartUrlQueryString>

  background_color?: Maybe<
    SitePagePluginCreatorPluginOptionsBackgroundColorQueryString
  >

  theme_color?: Maybe<SitePagePluginCreatorPluginOptionsThemeColorQueryString>

  display?: Maybe<SitePagePluginCreatorPluginOptionsDisplayQueryString>

  icon?: Maybe<SitePagePluginCreatorPluginOptionsIconQueryString>

  env?: Maybe<SitePagePluginCreatorPluginOptionsEnvInputObject>

  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>
}

export interface SitePagePluginCreatorPluginOptionsRepositoryNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsLangQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsUsernameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsAccessTokenQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsInstagramIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsIconQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvInputObject {
  production?: Maybe<SitePagePluginCreatorPluginOptionsEnvProductionInputObject>

  branch_deploy?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvBranchDeployInputObject
  >

  deploy_preview?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvDeployPreviewInputObject
  >
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionInputObject {
  policy?: Maybe<SitePagePluginCreatorPluginOptionsEnvProductionPolicyQueryList>
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionPolicyQueryList {
  elemMatch?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvProductionPolicyInputObject
  >
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionPolicyInputObject {
  userAgent?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvProductionPolicyUserAgentQueryString
  >

  disallow?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvProductionPolicyDisallowQueryList
  >
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployInputObject {
  policy?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyQueryList
  >
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyQueryList {
  elemMatch?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyInputObject
  >
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyInputObject {
  userAgent?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyUserAgentQueryString
  >

  disallow?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyDisallowQueryList
  >
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewInputObject {
  policy?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyQueryList
  >
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyQueryList {
  elemMatch?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyInputObject
  >
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyInputObject {
  userAgent?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString
  >

  disallow?: Maybe<
    SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyDisallowQueryList
  >
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>

  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>

  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>

  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>

  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>

  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>

  devDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesQueryList
  >

  peerDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
  >

  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
  >
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
  >
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>

  version?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>

  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>

  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalInputObject_2 {
  type?: Maybe<SitePageInternalTypeQueryString_2>

  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>

  description?: Maybe<SitePageInternalDescriptionQueryString>

  owner?: Maybe<SitePageInternalOwnerQueryString_2>
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsInputObject_2 {
  repositoryName?: Maybe<SitePluginPluginOptionsRepositoryNameQueryString_2>

  accessToken?: Maybe<SitePluginPluginOptionsAccessTokenQueryString_3>

  lang?: Maybe<SitePluginPluginOptionsLangQueryString_2>

  username?: Maybe<SitePluginPluginOptionsUsernameQueryString_2>

  access_token?: Maybe<SitePluginPluginOptionsAccessTokenQueryString_4>

  instagram_id?: Maybe<SitePluginPluginOptionsInstagramIdQueryString_2>

  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>

  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>

  short_name?: Maybe<SitePluginPluginOptionsShortNameQueryString_2>

  start_url?: Maybe<SitePluginPluginOptionsStartUrlQueryString_2>

  background_color?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_2>

  theme_color?: Maybe<SitePluginPluginOptionsThemeColorQueryString_2>

  display?: Maybe<SitePluginPluginOptionsDisplayQueryString_2>

  icon?: Maybe<SitePluginPluginOptionsIconQueryString_2>

  env?: Maybe<SitePluginPluginOptionsEnvInputObject_2>

  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>
}

export interface SitePluginPluginOptionsRepositoryNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsAccessTokenQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsUsernameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsAccessTokenQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsInstagramIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsIconQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvInputObject_2 {
  production?: Maybe<SitePluginPluginOptionsEnvProductionInputObject_2>

  branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranchDeployInputObject_2>

  deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeployPreviewInputObject_2>
}

export interface SitePluginPluginOptionsEnvProductionInputObject_2 {
  policy?: Maybe<SitePluginPluginOptionsEnvProductionPolicyQueryList_2>
}

export interface SitePluginPluginOptionsEnvProductionPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvProductionPolicyInputObject_2>
}

export interface SitePluginPluginOptionsEnvProductionPolicyInputObject_2 {
  userAgent?: Maybe<
    SitePluginPluginOptionsEnvProductionPolicyUserAgentQueryString_2
  >

  disallow?: Maybe<
    SitePluginPluginOptionsEnvProductionPolicyDisallowQueryList_2
  >
}

export interface SitePluginPluginOptionsEnvProductionPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvProductionPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvBranchDeployInputObject_2 {
  policy?: Maybe<SitePluginPluginOptionsEnvBranchDeployPolicyQueryList_2>
}

export interface SitePluginPluginOptionsEnvBranchDeployPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvBranchDeployPolicyInputObject_2>
}

export interface SitePluginPluginOptionsEnvBranchDeployPolicyInputObject_2 {
  userAgent?: Maybe<
    SitePluginPluginOptionsEnvBranchDeployPolicyUserAgentQueryString_2
  >

  disallow?: Maybe<
    SitePluginPluginOptionsEnvBranchDeployPolicyDisallowQueryList_2
  >
}

export interface SitePluginPluginOptionsEnvBranchDeployPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvBranchDeployPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvDeployPreviewInputObject_2 {
  policy?: Maybe<SitePluginPluginOptionsEnvDeployPreviewPolicyQueryList_2>
}

export interface SitePluginPluginOptionsEnvDeployPreviewPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvDeployPreviewPolicyInputObject_2>
}

export interface SitePluginPluginOptionsEnvDeployPreviewPolicyInputObject_2 {
  userAgent?: Maybe<
    SitePluginPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString_2
  >

  disallow?: Maybe<
    SitePluginPluginOptionsEnvDeployPreviewPolicyDisallowQueryList_2
  >
}

export interface SitePluginPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvDeployPreviewPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>

  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>

  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>

  main?: Maybe<SitePluginPackageJsonMainQueryString_2>

  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>

  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>

  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>

  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>

  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>

  type?: Maybe<SitePluginInternalTypeQueryString_2>

  owner?: Maybe<SitePluginInternalOwnerQueryString_2>
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataInputObject_2 {
  title?: Maybe<SiteSiteMetadataTitleQueryString_2>

  description?: Maybe<SiteSiteMetadataDescriptionQueryString_2>

  author?: Maybe<SiteSiteMetadataAuthorQueryString_2>
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePortQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteHostQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePathPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SiteBuildTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalInputObject_2 {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>

  type?: Maybe<SiteInternalTypeQueryString_2>

  owner?: Maybe<SiteInternalOwnerQueryString_2>
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataInputObject_2 {
  title?: Maybe<PrismicHomepageDataTitleQueryString_2>

  test?: Maybe<PrismicHomepageDataTestQueryString_2>
}

export interface PrismicHomepageDataTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataTestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepagePrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageInternalInputObject_2 {
  type?: Maybe<PrismicHomepageInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicHomepageInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicHomepageInternalOwnerQueryString_2>
}

export interface PrismicHomepageInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalInputObject_2 {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>

  type?: Maybe<FileInternalTypeQueryString_2>

  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>

  description?: Maybe<FileInternalDescriptionQueryString_2>

  owner?: Maybe<FileInternalOwnerQueryString_2>
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PublicUrlQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpInternalContentDigestQueryString_2>

  type?: Maybe<ImageSharpInternalTypeQueryString_2>

  owner?: Maybe<ImageSharpInternalOwnerQueryString_2>
}

export interface ImageSharpInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTypeName_3 {
  base64?: Maybe<FixedBase64QueryString_3>

  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>

  width?: Maybe<FixedWidthQueryFloat_3>

  height?: Maybe<FixedHeightQueryFloat_3>

  src?: Maybe<FixedSrcQueryString_3>

  srcSet?: Maybe<FixedSrcSetQueryString_3>

  srcWebp?: Maybe<FixedSrcWebpQueryString_3>

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>

  originalName?: Maybe<FixedOriginalNameQueryString_3>
}

export interface FixedBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedWidthQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedHeightQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTypeName_3 {
  base64?: Maybe<ResolutionsBase64QueryString_3>

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>

  width?: Maybe<ResolutionsWidthQueryFloat_3>

  height?: Maybe<ResolutionsHeightQueryFloat_3>

  src?: Maybe<ResolutionsSrcQueryString_3>

  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>

  originalName?: Maybe<ResolutionsOriginalNameQueryString_3>
}

export interface ResolutionsBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsWidthQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsHeightQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTypeName_3 {
  base64?: Maybe<FluidBase64QueryString_3>

  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>

  src?: Maybe<FluidSrcQueryString_3>

  srcSet?: Maybe<FluidSrcSetQueryString_3>

  srcWebp?: Maybe<FluidSrcWebpQueryString_3>

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>

  sizes?: Maybe<FluidSizesQueryString_3>

  originalImg?: Maybe<FluidOriginalImgQueryString_3>

  originalName?: Maybe<FluidOriginalNameQueryString_3>

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_3>

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_3>
}

export interface FluidBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSizesQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalImgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidPresentationWidthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidPresentationHeightQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesTypeName_3 {
  base64?: Maybe<SizesBase64QueryString_3>

  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>

  src?: Maybe<SizesSrcQueryString_3>

  srcSet?: Maybe<SizesSrcSetQueryString_3>

  srcWebp?: Maybe<SizesSrcWebpQueryString_3>

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>

  sizes?: Maybe<SizesSizesQueryString_3>

  originalImg?: Maybe<SizesOriginalImgQueryString_3>

  originalName?: Maybe<SizesOriginalNameQueryString_3>

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_3>

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_3>
}

export interface SizesBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSizesQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalImgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesPresentationWidthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesPresentationHeightQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalTypeName_3 {
  width?: Maybe<OriginalWidthQueryFloat_3>

  height?: Maybe<OriginalHeightQueryFloat_3>

  src?: Maybe<OriginalSrcQueryString_3>
}

export interface OriginalWidthQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalHeightQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTypeName_3 {
  src?: Maybe<ResizeSrcQueryString_3>

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>

  width?: Maybe<ResizeWidthQueryInt_3>

  height?: Maybe<ResizeHeightQueryInt_3>

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>

  originalName?: Maybe<ResizeOriginalNameQueryString_3>
}

export interface ResizeSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeWidthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeHeightQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataInputObject_2 {
  name?: Maybe<PrismicPartnerDataNameQueryString_2>

  image?: Maybe<PrismicPartnerDataImageInputObject_2>

  type?: Maybe<PrismicPartnerDataTypeQueryString_2>

  link?: Maybe<PrismicPartnerDataLinkInputObject_2>

  importance?: Maybe<PrismicPartnerDataImportanceQueryInteger_2>

  description?: Maybe<PrismicPartnerDataDescriptionQueryString_2>
}

export interface PrismicPartnerDataNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageInputObject_2 {
  dimensions?: Maybe<PrismicPartnerDataImageDimensionsInputObject_2>

  alt?: Maybe<PrismicPartnerDataImageAltQueryString_2>

  copyright?: Maybe<PrismicPartnerDataImageCopyrightQueryString_2>

  url?: Maybe<PrismicPartnerDataImageUrlQueryString_2>

  localFile?: Maybe<PrismicPartnerDataImageLocalFileInputObject_2>
}

export interface PrismicPartnerDataImageDimensionsInputObject_2 {
  width?: Maybe<PrismicPartnerDataImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicPartnerDataImageDimensionsHeightQueryInteger_2>
}

export interface PrismicPartnerDataImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInputObject_2 {
  id?: Maybe<PrismicPartnerDataImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicPartnerDataImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicPartnerDataImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicPartnerDataImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<
    PrismicPartnerDataImageLocalFileSourceInstanceNameQueryString_2
  >

  absolutePath?: Maybe<
    PrismicPartnerDataImageLocalFileAbsolutePathQueryString_2
  >

  relativePath?: Maybe<
    PrismicPartnerDataImageLocalFileRelativePathQueryString_2
  >

  extension?: Maybe<PrismicPartnerDataImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicPartnerDataImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicPartnerDataImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<
    PrismicPartnerDataImageLocalFileModifiedTimeQueryString_2
  >

  accessTime?: Maybe<PrismicPartnerDataImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicPartnerDataImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicPartnerDataImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicPartnerDataImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicPartnerDataImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicPartnerDataImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicPartnerDataImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicPartnerDataImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<
    PrismicPartnerDataImageLocalFileRelativeDirectoryQueryString_2
  >

  dev?: Maybe<PrismicPartnerDataImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicPartnerDataImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicPartnerDataImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicPartnerDataImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicPartnerDataImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicPartnerDataImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicPartnerDataImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicPartnerDataImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicPartnerDataImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicPartnerDataImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicPartnerDataImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicPartnerDataImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicPartnerDataImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicPartnerDataImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicPartnerDataImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicPartnerDataImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicPartnerDataImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicPartnerDataImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<
    PrismicPartnerDataImageLocalFileInternalContentDigestQueryString_2
  >

  type?: Maybe<PrismicPartnerDataImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<
    PrismicPartnerDataImageLocalFileInternalMediaTypeQueryString_2
  >

  description?: Maybe<
    PrismicPartnerDataImageLocalFileInternalDescriptionQueryString_2
  >

  owner?: Maybe<PrismicPartnerDataImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicPartnerDataImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkInputObject_2 {
  link_type?: Maybe<PrismicPartnerDataLinkLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnerDataLinkUrlQueryString_2>

  target?: Maybe<PrismicPartnerDataLinkTargetQueryString_2>

  raw?: Maybe<PrismicPartnerDataLinkRawInputObject_2>
}

export interface PrismicPartnerDataLinkLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkRawInputObject_2 {
  link_type?: Maybe<PrismicPartnerDataLinkRawLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnerDataLinkRawUrlQueryString_2>

  target?: Maybe<PrismicPartnerDataLinkRawTargetQueryString_2>
}

export interface PrismicPartnerDataLinkRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkRawTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImportanceQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerInternalInputObject_2 {
  type?: Maybe<PrismicPartnerInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicPartnerInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicPartnerInternalOwnerQueryString_2>
}

export interface PrismicPartnerInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeInternalInputObject_2 {
  type?: Maybe<InstaNodeInternalTypeQueryString_2>

  contentDigest?: Maybe<InstaNodeInternalContentDigestQueryString_2>

  owner?: Maybe<InstaNodeInternalOwnerQueryString_2>
}

export interface InstaNodeInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLikesQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeThumbnailsQueryList_2 {
  elemMatch?: Maybe<InstaNodeThumbnailsInputObject_2>
}

export interface InstaNodeThumbnailsInputObject_2 {
  src?: Maybe<InstaNodeThumbnailsSrcQueryString_2>

  config_width?: Maybe<InstaNodeThumbnailsConfigWidthQueryInteger_2>

  config_height?: Maybe<InstaNodeThumbnailsConfigHeightQueryInteger_2>
}

export interface InstaNodeThumbnailsSrcQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeThumbnailsConfigWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeThumbnailsConfigHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeOriginalQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeTimestampQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeDimensionsInputObject_2 {
  height?: Maybe<InstaNodeDimensionsHeightQueryInteger_2>

  width?: Maybe<InstaNodeDimensionsWidthQueryInteger_2>
}

export interface InstaNodeDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileInputObject_2 {
  id?: Maybe<InstaNodeLocalFileIdQueryString_2>

  children?: Maybe<InstaNodeLocalFileChildrenQueryList_2>

  parent?: Maybe<InstaNodeLocalFileParentQueryString_2>

  internal?: Maybe<InstaNodeLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<InstaNodeLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<InstaNodeLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<InstaNodeLocalFileRelativePathQueryString_2>

  extension?: Maybe<InstaNodeLocalFileExtensionQueryString_2>

  size?: Maybe<InstaNodeLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<InstaNodeLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<InstaNodeLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<InstaNodeLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<InstaNodeLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<InstaNodeLocalFileBirthTimeQueryString_2>

  root?: Maybe<InstaNodeLocalFileRootQueryString_2>

  dir?: Maybe<InstaNodeLocalFileDirQueryString_2>

  base?: Maybe<InstaNodeLocalFileBaseQueryString_2>

  ext?: Maybe<InstaNodeLocalFileExtQueryString_2>

  name?: Maybe<InstaNodeLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<InstaNodeLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<InstaNodeLocalFileDevQueryInteger_2>

  mode?: Maybe<InstaNodeLocalFileModeQueryInteger_2>

  nlink?: Maybe<InstaNodeLocalFileNlinkQueryInteger_2>

  uid?: Maybe<InstaNodeLocalFileUidQueryInteger_2>

  gid?: Maybe<InstaNodeLocalFileGidQueryInteger_2>

  rdev?: Maybe<InstaNodeLocalFileRdevQueryInteger_2>

  blksize?: Maybe<InstaNodeLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<InstaNodeLocalFileInoQueryInteger_2>

  blocks?: Maybe<InstaNodeLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<InstaNodeLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<InstaNodeLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<InstaNodeLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<InstaNodeLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<InstaNodeLocalFileAtimeQueryString_2>

  mtime?: Maybe<InstaNodeLocalFileMtimeQueryString_2>

  ctime?: Maybe<InstaNodeLocalFileCtimeQueryString_2>

  birthtime?: Maybe<InstaNodeLocalFileBirthtimeQueryString_2>
}

export interface InstaNodeLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<InstaNodeLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<InstaNodeLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<InstaNodeLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<InstaNodeLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<InstaNodeLocalFileInternalOwnerQueryString_2>
}

export interface InstaNodeLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeCommentsQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>

  type?: Maybe<DirectoryInternalTypeQueryString_2>

  description?: Maybe<DirectoryInternalDescriptionQueryString_2>

  owner?: Maybe<DirectoryInternalOwnerQueryString_2>
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectorySizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePageDistinctEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageGroupEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsUsername = 'pluginOptions___username',
  PluginOptionsAccessToken = 'pluginOptions___access_token',
  PluginOptionsInstagramId = 'pluginOptions___instagram_id',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsEnvProduction = 'pluginOptions___env___production',
  PluginOptionsEnvBranchDeploy = 'pluginOptions___env___branch_deploy',
  PluginOptionsEnvDeployPreview = 'pluginOptions___env___deploy_preview',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePluginDistinctEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsUsername = 'pluginOptions___username',
  PluginOptionsAccessToken = 'pluginOptions___access_token',
  PluginOptionsInstagramId = 'pluginOptions___instagram_id',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsEnvProduction = 'pluginOptions___env___production',
  PluginOptionsEnvBranchDeploy = 'pluginOptions___env___branch_deploy',
  PluginOptionsEnvDeployPreview = 'pluginOptions___env___deploy_preview',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsUsername = 'pluginOptions___username',
  PluginOptionsAccessToken = 'pluginOptions___access_token',
  PluginOptionsInstagramId = 'pluginOptions___instagram_id',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsEnvProduction = 'pluginOptions___env___production',
  PluginOptionsEnvBranchDeploy = 'pluginOptions___env___branch_deploy',
  PluginOptionsEnvDeployPreview = 'pluginOptions___env___deploy_preview',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum PrismicHomepageConnectionSortByFieldsEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataTitle = 'data___title',
  DataTest = 'data___test',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicHomepageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PrismicHomepageDistinctEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataTitle = 'data___title',
  DataTest = 'data___test',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicHomepageGroupEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataTitle = 'data___title',
  DataTest = 'data___test',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum FileConnectionSortByFieldsEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum FileDistinctEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum FileGroupEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum ImageSharpConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
}

export enum ImageSharpConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ImageSharpDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum ImageSharpGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum PrismicPartnerConnectionSortByFieldsEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataName = 'data___name',
  DataImageDimensions = 'data___image___dimensions',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageUrl = 'data___image___url',
  DataImageLocalFileNode = 'data___image___localFile___NODE',
  DataType = 'data___type',
  DataLinkLinkType = 'data___link___link_type',
  DataLinkUrl = 'data___link___url',
  DataLinkTarget = 'data___link___target',
  DataLinkRaw = 'data___link___raw',
  DataImportance = 'data___importance',
  DataDescription = 'data___description',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicPartnerConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PrismicPartnerDistinctEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataName = 'data___name',
  DataImageDimensions = 'data___image___dimensions',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageUrl = 'data___image___url',
  DataImageLocalFileNode = 'data___image___localFile___NODE',
  DataType = 'data___type',
  DataLinkLinkType = 'data___link___link_type',
  DataLinkUrl = 'data___link___url',
  DataLinkTarget = 'data___link___target',
  DataLinkRaw = 'data___link___raw',
  DataImportance = 'data___importance',
  DataDescription = 'data___description',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicPartnerGroupEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataName = 'data___name',
  DataImageDimensions = 'data___image___dimensions',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageUrl = 'data___image___url',
  DataImageLocalFileNode = 'data___image___localFile___NODE',
  DataType = 'data___type',
  DataLinkLinkType = 'data___link___link_type',
  DataLinkUrl = 'data___link___url',
  DataLinkTarget = 'data___link___target',
  DataLinkRaw = 'data___link___raw',
  DataImportance = 'data___importance',
  DataDescription = 'data___description',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum InstaNodeConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  Likes = 'likes',
  Thumbnails = 'thumbnails',
  Original = 'original',
  Timestamp = 'timestamp',
  DimensionsHeight = 'dimensions___height',
  DimensionsWidth = 'dimensions___width',
  LocalFileNode = 'localFile___NODE',
  Comments = 'comments',
}

export enum InstaNodeConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum InstaNodeDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  Likes = 'likes',
  Thumbnails = 'thumbnails',
  Original = 'original',
  Timestamp = 'timestamp',
  DimensionsHeight = 'dimensions___height',
  DimensionsWidth = 'dimensions___width',
  LocalFileNode = 'localFile___NODE',
  Comments = 'comments',
}

export enum InstaNodeGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  Likes = 'likes',
  Thumbnails = 'thumbnails',
  Original = 'original',
  Timestamp = 'timestamp',
  DimensionsHeight = 'dimensions___height',
  DimensionsWidth = 'dimensions___width',
  LocalFileNode = 'localFile___NODE',
  Comments = 'comments',
}

export enum DirectoryConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum DirectoryDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>
  /** Connection to all PrismicHomepage nodes */
  allPrismicHomepage?: Maybe<PrismicHomepageConnection>
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>
  /** Connection to all ImageSharp nodes */
  allImageSharp?: Maybe<ImageSharpConnection>
  /** Connection to all PrismicPartner nodes */
  allPrismicPartner?: Maybe<PrismicPartnerConnection>
  /** Connection to all InstaNode nodes */
  allInstaNode?: Maybe<InstaNodeConnection>
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>

  sitePage?: Maybe<SitePage>

  sitePlugin?: Maybe<SitePlugin>

  site?: Maybe<Site>

  prismicHomepage?: Maybe<PrismicHomepage>

  file?: Maybe<File>

  imageSharp?: Maybe<ImageSharp>

  prismicPartner?: Maybe<PrismicPartner>

  instaNode?: Maybe<InstaNode>

  directory?: Maybe<Directory>
}

/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<SitePageGroupConnectionConnection>)[]>
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean
}

/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>
  /** The next edge in the connection */
  next?: Maybe<SitePage>
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>
}

/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  jsonName?: Maybe<string>

  internalComponentName?: Maybe<string>

  path?: Maybe<string>

  component?: Maybe<string>

  componentChunkName?: Maybe<string>

  pluginCreator?: Maybe<SitePlugin>

  pluginCreatorId?: Maybe<string>

  componentPath?: Maybe<string>

  internal?: Maybe<Internal_10>
}

/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  resolve?: Maybe<string>

  name?: Maybe<string>

  version?: Maybe<string>

  pluginOptions?: Maybe<PluginOptions_2>

  nodeAPIs?: Maybe<(Maybe<string>)[]>

  ssrAPIs?: Maybe<(Maybe<string>)[]>

  pluginFilepath?: Maybe<string>

  packageJson?: Maybe<PackageJson_2>

  internal?: Maybe<Internal_11>
}

export interface PluginOptions_2 {
  repositoryName?: Maybe<string>

  accessToken?: Maybe<string>

  lang?: Maybe<string>

  username?: Maybe<string>

  access_token?: Maybe<string>

  instagram_id?: Maybe<string>

  name?: Maybe<string>

  path?: Maybe<string>

  short_name?: Maybe<string>

  start_url?: Maybe<string>

  background_color?: Maybe<string>

  theme_color?: Maybe<string>

  display?: Maybe<string>

  icon?: Maybe<string>

  env?: Maybe<Env_2>

  pathCheck?: Maybe<boolean>
}

export interface Env_2 {
  production?: Maybe<Production_2>

  branch_deploy?: Maybe<BranchDeploy_2>

  deploy_preview?: Maybe<DeployPreview_2>
}

export interface Production_2 {
  policy?: Maybe<(Maybe<Policy_4>)[]>
}

export interface Policy_4 {
  userAgent?: Maybe<string>

  disallow?: Maybe<(Maybe<string>)[]>
}

export interface BranchDeploy_2 {
  policy?: Maybe<(Maybe<Policy_5>)[]>
}

export interface Policy_5 {
  userAgent?: Maybe<string>

  disallow?: Maybe<(Maybe<string>)[]>
}

export interface DeployPreview_2 {
  policy?: Maybe<(Maybe<Policy_6>)[]>
}

export interface Policy_6 {
  userAgent?: Maybe<string>

  disallow?: Maybe<(Maybe<string>)[]>
}

export interface PackageJson_2 {
  name?: Maybe<string>

  description?: Maybe<string>

  version?: Maybe<string>

  main?: Maybe<string>

  author?: Maybe<string>

  license?: Maybe<string>

  dependencies?: Maybe<(Maybe<Dependencies_2>)[]>

  devDependencies?: Maybe<(Maybe<DevDependencies_2>)[]>

  peerDependencies?: Maybe<(Maybe<PeerDependencies_2>)[]>

  keywords?: Maybe<(Maybe<string>)[]>
}

export interface Dependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface DevDependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface PeerDependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface Internal_11 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

export interface Internal_10 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>
  /** The next edge in the connection */
  next?: Maybe<SitePage>
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>
}

/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<SitePluginGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>
}

/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>
}

/** A connection to a list of items. */
export interface PrismicHomepageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicHomepageEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<PrismicHomepageGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface PrismicHomepageEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicHomepage>
  /** The next edge in the connection */
  next?: Maybe<PrismicHomepage>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicHomepage>
}

/** Node of type PrismicHomepage */
export interface PrismicHomepage extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  type?: Maybe<string>

  href?: Maybe<string>

  first_publication_date?: Maybe<Date>

  last_publication_date?: Maybe<Date>

  slugs?: Maybe<(Maybe<string>)[]>

  lang?: Maybe<string>

  data?: Maybe<Data_3>

  prismicId?: Maybe<string>

  internal?: Maybe<Internal_12>

  dataString?: Maybe<string>
}

export interface Data_3 {
  title?: Maybe<string>

  test?: Maybe<string>
}

export interface Internal_12 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface PrismicHomepageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicHomepageGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface PrismicHomepageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicHomepage>
  /** The next edge in the connection */
  next?: Maybe<PrismicHomepage>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicHomepage>
}

/** A connection to a list of items. */
export interface FileConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<FileGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface FileEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>
  /** The next edge in the connection */
  next?: Maybe<File>
  /** The previous edge in the connection */
  previous?: Maybe<File>
}

/** Node of type File */
export interface File extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>
  /** The child of this node of type imageSharp */
  childImageSharp?: Maybe<ImageSharp>

  internal?: Maybe<Internal_13>

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  blksize?: Maybe<number>

  ino?: Maybe<number>

  blocks?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  birthtimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>

  birthtime?: Maybe<Date>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<string>
}

/** Node of type ImageSharp */
export interface ImageSharp extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_14>

  fixed?: Maybe<ImageSharpFixed>

  resolutions?: Maybe<ImageSharpResolutions>

  fluid?: Maybe<ImageSharpFluid>

  sizes?: Maybe<ImageSharpSizes>

  original?: Maybe<ImageSharpOriginal>

  resize?: Maybe<ImageSharpResize>
}

export interface Internal_14 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

export interface ImageSharpFixed {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  originalName?: Maybe<string>
}

export interface ImageSharpResolutions {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  originalName?: Maybe<string>
}

export interface ImageSharpFluid {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  sizes?: Maybe<string>

  originalImg?: Maybe<string>

  originalName?: Maybe<string>

  presentationWidth?: Maybe<number>

  presentationHeight?: Maybe<number>
}

export interface ImageSharpSizes {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  sizes?: Maybe<string>

  originalImg?: Maybe<string>

  originalName?: Maybe<string>

  presentationWidth?: Maybe<number>

  presentationHeight?: Maybe<number>
}

export interface ImageSharpOriginal {
  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>
}

export interface ImageSharpResize {
  src?: Maybe<string>

  tracedSVG?: Maybe<string>

  width?: Maybe<number>

  height?: Maybe<number>

  aspectRatio?: Maybe<number>

  originalName?: Maybe<string>
}

export interface Internal_13 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  mediaType?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>
  /** The next edge in the connection */
  next?: Maybe<File>
  /** The previous edge in the connection */
  previous?: Maybe<File>
}

/** A connection to a list of items. */
export interface ImageSharpConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<ImageSharpGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface ImageSharpEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>
}

/** A connection to a list of items. */
export interface ImageSharpGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface ImageSharpGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>
}

/** A connection to a list of items. */
export interface PrismicPartnerConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicPartnerEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<PrismicPartnerGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface PrismicPartnerEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicPartner>
  /** The next edge in the connection */
  next?: Maybe<PrismicPartner>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicPartner>
}

/** Node of type PrismicPartner */
export interface PrismicPartner extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  type?: Maybe<string>

  href?: Maybe<string>

  first_publication_date?: Maybe<Date>

  last_publication_date?: Maybe<Date>

  slugs?: Maybe<(Maybe<string>)[]>

  lang?: Maybe<string>

  data?: Maybe<Data_4>

  prismicId?: Maybe<string>

  internal?: Maybe<Internal_15>

  dataString?: Maybe<string>
}

export interface Data_4 {
  name?: Maybe<string>

  image?: Maybe<Image_2>

  type?: Maybe<string>

  link?: Maybe<Link_2>

  importance?: Maybe<number>

  description?: Maybe<string>
}

export interface Image_2 {
  dimensions?: Maybe<Dimensions_3>

  alt?: Maybe<string>

  copyright?: Maybe<string>

  url?: Maybe<string>

  localFile?: Maybe<File>
}

export interface Dimensions_3 {
  width?: Maybe<number>

  height?: Maybe<number>
}

export interface Link_2 {
  link_type?: Maybe<string>

  url?: Maybe<string>

  target?: Maybe<string>

  raw?: Maybe<Raw_2>
}

export interface Raw_2 {
  link_type?: Maybe<string>

  url?: Maybe<string>

  target?: Maybe<string>
}

export interface Internal_15 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface PrismicPartnerGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicPartnerGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface PrismicPartnerGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicPartner>
  /** The next edge in the connection */
  next?: Maybe<PrismicPartner>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicPartner>
}

/** A connection to a list of items. */
export interface InstaNodeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<InstaNodeEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<InstaNodeGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface InstaNodeEdge {
  /** The item at the end of the edge */
  node?: Maybe<InstaNode>
  /** The next edge in the connection */
  next?: Maybe<InstaNode>
  /** The previous edge in the connection */
  previous?: Maybe<InstaNode>
}

/** Node of type InstaNode */
export interface InstaNode extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_16>

  likes?: Maybe<number>

  thumbnails?: Maybe<(Maybe<Thumbnails_2>)[]>

  original?: Maybe<string>

  timestamp?: Maybe<number>

  dimensions?: Maybe<Dimensions_4>

  localFile?: Maybe<File>

  comments?: Maybe<number>
}

export interface Internal_16 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>
}

export interface Thumbnails_2 {
  src?: Maybe<string>

  config_width?: Maybe<number>

  config_height?: Maybe<number>
}

export interface Dimensions_4 {
  height?: Maybe<number>

  width?: Maybe<number>
}

/** A connection to a list of items. */
export interface InstaNodeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<InstaNodeGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface InstaNodeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<InstaNode>
  /** The next edge in the connection */
  next?: Maybe<InstaNode>
  /** The previous edge in the connection */
  previous?: Maybe<InstaNode>
}

/** A connection to a list of items. */
export interface DirectoryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<DirectoryGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface DirectoryEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>
  /** The next edge in the connection */
  next?: Maybe<Directory>
  /** The previous edge in the connection */
  previous?: Maybe<Directory>
}

/** Node of type Directory */
export interface Directory extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_17>

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  blksize?: Maybe<number>

  ino?: Maybe<number>

  blocks?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  birthtimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>

  birthtime?: Maybe<Date>
}

export interface Internal_17 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>
  /** The next edge in the connection */
  next?: Maybe<Directory>
  /** The previous edge in the connection */
  previous?: Maybe<Directory>
}

/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  siteMetadata?: Maybe<SiteMetadata_2>

  port?: Maybe<Date>

  host?: Maybe<string>

  pathPrefix?: Maybe<string>

  polyfill?: Maybe<boolean>

  buildTime?: Maybe<Date>

  internal?: Maybe<Internal_18>
}

export interface SiteMetadata_2 {
  title?: Maybe<string>

  description?: Maybe<string>

  author?: Maybe<string>
}

export interface Internal_18 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

// ====================================================
// Arguments
// ====================================================

export interface AllSitePageQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<SitePageConnectionSort>

  filter?: Maybe<FilterSitePage>
}
export interface AllSitePluginQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<SitePluginConnectionSort>

  filter?: Maybe<FilterSitePlugin>
}
export interface AllPrismicHomepageQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<PrismicHomepageConnectionSort>

  filter?: Maybe<FilterPrismicHomepage>
}
export interface AllFileQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<FileConnectionSort>

  filter?: Maybe<FilterFile>
}
export interface AllImageSharpQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<ImageSharpConnectionSort>

  filter?: Maybe<FilterImageSharp>
}
export interface AllPrismicPartnerQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<PrismicPartnerConnectionSort>

  filter?: Maybe<FilterPrismicPartner>
}
export interface AllInstaNodeQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<InstaNodeConnectionSort>

  filter?: Maybe<FilterInstaNode>
}
export interface AllDirectoryQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<DirectoryConnectionSort>

  filter?: Maybe<FilterDirectory>
}
export interface SitePageQueryArgs {
  jsonName?: Maybe<SitePageJsonNameQueryString>

  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>

  path?: Maybe<SitePagePathQueryString_2>

  component?: Maybe<SitePageComponentQueryString>

  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>

  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>

  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>

  componentPath?: Maybe<SitePageComponentPathQueryString>

  id?: Maybe<SitePageIdQueryString_2>

  internal?: Maybe<SitePageInternalInputObject_2>
}
export interface SitePluginQueryArgs {
  resolve?: Maybe<SitePluginResolveQueryString_2>

  id?: Maybe<SitePluginIdQueryString_2>

  name?: Maybe<SitePluginNameQueryString_2>

  version?: Maybe<SitePluginVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>

  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>

  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>

  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>

  internal?: Maybe<SitePluginInternalInputObject_2>
}
export interface SiteQueryArgs {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>

  port?: Maybe<SitePortQueryString_2>

  host?: Maybe<SiteHostQueryString_2>

  pathPrefix?: Maybe<SitePathPrefixQueryString_2>

  polyfill?: Maybe<SitePolyfillQueryBoolean_2>

  buildTime?: Maybe<SiteBuildTimeQueryString_2>

  id?: Maybe<SiteIdQueryString_2>

  internal?: Maybe<SiteInternalInputObject_2>
}
export interface PrismicHomepageQueryArgs {
  type?: Maybe<PrismicHomepageTypeQueryString_2>

  href?: Maybe<PrismicHomepageHrefQueryString_2>

  first_publication_date?: Maybe<
    PrismicHomepageFirstPublicationDateQueryString_2
  >

  last_publication_date?: Maybe<PrismicHomepageLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicHomepageSlugsQueryList_2>

  lang?: Maybe<PrismicHomepageLangQueryString_2>

  data?: Maybe<PrismicHomepageDataInputObject_2>

  prismicId?: Maybe<PrismicHomepagePrismicIdQueryString_2>

  id?: Maybe<PrismicHomepageIdQueryString_2>

  internal?: Maybe<PrismicHomepageInternalInputObject_2>

  dataString?: Maybe<PrismicHomepageDataStringQueryString_2>
}
export interface FileQueryArgs {
  id?: Maybe<FileIdQueryString_2>

  internal?: Maybe<FileInternalInputObject_2>

  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<FileAbsolutePathQueryString_2>

  relativePath?: Maybe<FileRelativePathQueryString_2>

  extension?: Maybe<FileExtensionQueryString_2>

  size?: Maybe<FileSizeQueryInteger_2>

  prettySize?: Maybe<FilePrettySizeQueryString_2>

  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>

  accessTime?: Maybe<FileAccessTimeQueryString_2>

  changeTime?: Maybe<FileChangeTimeQueryString_2>

  birthTime?: Maybe<FileBirthTimeQueryString_2>

  root?: Maybe<FileRootQueryString_2>

  dir?: Maybe<FileDirQueryString_2>

  base?: Maybe<FileBaseQueryString_2>

  ext?: Maybe<FileExtQueryString_2>

  name?: Maybe<FileNameQueryString_2>

  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>

  dev?: Maybe<FileDevQueryInteger_2>

  mode?: Maybe<FileModeQueryInteger_2>

  nlink?: Maybe<FileNlinkQueryInteger_2>

  uid?: Maybe<FileUidQueryInteger_2>

  gid?: Maybe<FileGidQueryInteger_2>

  rdev?: Maybe<FileRdevQueryInteger_2>

  blksize?: Maybe<FileBlksizeQueryInteger_2>

  ino?: Maybe<FileInoQueryInteger_2>

  blocks?: Maybe<FileBlocksQueryInteger_2>

  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>

  atime?: Maybe<FileAtimeQueryString_2>

  mtime?: Maybe<FileMtimeQueryString_2>

  ctime?: Maybe<FileCtimeQueryString_2>

  birthtime?: Maybe<FileBirthtimeQueryString_2>

  publicURL?: Maybe<PublicUrlQueryString_3>
}
export interface ImageSharpQueryArgs {
  id?: Maybe<ImageSharpIdQueryString_2>

  internal?: Maybe<ImageSharpInternalInputObject_2>

  fixed?: Maybe<FixedTypeName_3>

  resolutions?: Maybe<ResolutionsTypeName_3>

  fluid?: Maybe<FluidTypeName_3>

  sizes?: Maybe<SizesTypeName_3>

  original?: Maybe<OriginalTypeName_3>

  resize?: Maybe<ResizeTypeName_3>
}
export interface PrismicPartnerQueryArgs {
  type?: Maybe<PrismicPartnerTypeQueryString_2>

  href?: Maybe<PrismicPartnerHrefQueryString_2>

  first_publication_date?: Maybe<
    PrismicPartnerFirstPublicationDateQueryString_2
  >

  last_publication_date?: Maybe<PrismicPartnerLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicPartnerSlugsQueryList_2>

  lang?: Maybe<PrismicPartnerLangQueryString_2>

  data?: Maybe<PrismicPartnerDataInputObject_2>

  prismicId?: Maybe<PrismicPartnerPrismicIdQueryString_2>

  id?: Maybe<PrismicPartnerIdQueryString_2>

  internal?: Maybe<PrismicPartnerInternalInputObject_2>

  dataString?: Maybe<PrismicPartnerDataStringQueryString_2>
}
export interface InstaNodeQueryArgs {
  id?: Maybe<InstaNodeIdQueryString_2>

  internal?: Maybe<InstaNodeInternalInputObject_2>

  likes?: Maybe<InstaNodeLikesQueryInteger_2>

  thumbnails?: Maybe<InstaNodeThumbnailsQueryList_2>

  original?: Maybe<InstaNodeOriginalQueryString_2>

  timestamp?: Maybe<InstaNodeTimestampQueryInteger_2>

  dimensions?: Maybe<InstaNodeDimensionsInputObject_2>

  localFile?: Maybe<InstaNodeLocalFileInputObject_2>

  comments?: Maybe<InstaNodeCommentsQueryInteger_2>
}
export interface DirectoryQueryArgs {
  id?: Maybe<DirectoryIdQueryString_2>

  internal?: Maybe<DirectoryInternalInputObject_2>

  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>

  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>

  relativePath?: Maybe<DirectoryRelativePathQueryString_2>

  extension?: Maybe<DirectoryExtensionQueryString_2>

  size?: Maybe<DirectorySizeQueryInteger_2>

  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>

  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>

  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>

  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>

  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>

  root?: Maybe<DirectoryRootQueryString_2>

  dir?: Maybe<DirectoryDirQueryString_2>

  base?: Maybe<DirectoryBaseQueryString_2>

  ext?: Maybe<DirectoryExtQueryString_2>

  name?: Maybe<DirectoryNameQueryString_2>

  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>

  dev?: Maybe<DirectoryDevQueryInteger_2>

  mode?: Maybe<DirectoryModeQueryInteger_2>

  nlink?: Maybe<DirectoryNlinkQueryInteger_2>

  uid?: Maybe<DirectoryUidQueryInteger_2>

  gid?: Maybe<DirectoryGidQueryInteger_2>

  rdev?: Maybe<DirectoryRdevQueryInteger_2>

  blksize?: Maybe<DirectoryBlksizeQueryInteger_2>

  ino?: Maybe<DirectoryInoQueryInteger_2>

  blocks?: Maybe<DirectoryBlocksQueryInteger_2>

  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>

  atime?: Maybe<DirectoryAtimeQueryString_2>

  mtime?: Maybe<DirectoryMtimeQueryString_2>

  ctime?: Maybe<DirectoryCtimeQueryString_2>

  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>
}
export interface DistinctSitePageConnectionArgs {
  field?: Maybe<SitePageDistinctEnum>
}
export interface GroupSitePageConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<SitePageGroupEnum>
}
export interface DistinctSitePluginConnectionArgs {
  field?: Maybe<SitePluginDistinctEnum>
}
export interface GroupSitePluginConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<SitePluginGroupEnum>
}
export interface DistinctPrismicHomepageConnectionArgs {
  field?: Maybe<PrismicHomepageDistinctEnum>
}
export interface GroupPrismicHomepageConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<PrismicHomepageGroupEnum>
}
export interface FirstPublicationDatePrismicHomepageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface LastPublicationDatePrismicHomepageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctFileConnectionArgs {
  field?: Maybe<FileDistinctEnum>
}
export interface GroupFileConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<FileGroupEnum>
}
export interface ModifiedTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface FixedImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  jpegProgressive?: boolean

  grayscale?: Maybe<boolean>

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>
}
export interface ResolutionsImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  jpegProgressive?: boolean

  grayscale?: Maybe<boolean>

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>
}
export interface FluidImageSharpArgs {
  maxWidth?: Maybe<number>

  maxHeight?: Maybe<number>

  grayscale?: Maybe<boolean>

  jpegProgressive?: boolean

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>

  sizes?: Maybe<string>
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[]
}
export interface SizesImageSharpArgs {
  maxWidth?: Maybe<number>

  maxHeight?: Maybe<number>

  grayscale?: Maybe<boolean>

  jpegProgressive?: boolean

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>

  sizes?: Maybe<string>
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[]
}
export interface ResizeImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  quality?: number

  jpegProgressive?: boolean

  pngCompressionLevel?: number

  grayscale?: Maybe<boolean>

  duotone?: Maybe<DuotoneGradient>

  base64?: Maybe<boolean>

  traceSVG?: Maybe<Potrace>

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>
}
export interface DistinctImageSharpConnectionArgs {
  field?: Maybe<ImageSharpDistinctEnum>
}
export interface GroupImageSharpConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<ImageSharpGroupEnum>
}
export interface DistinctPrismicPartnerConnectionArgs {
  field?: Maybe<PrismicPartnerDistinctEnum>
}
export interface GroupPrismicPartnerConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<PrismicPartnerGroupEnum>
}
export interface FirstPublicationDatePrismicPartnerArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface LastPublicationDatePrismicPartnerArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctInstaNodeConnectionArgs {
  field?: Maybe<InstaNodeDistinctEnum>
}
export interface GroupInstaNodeConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<InstaNodeGroupEnum>
}
export interface DistinctDirectoryConnectionArgs {
  field?: Maybe<DirectoryDistinctEnum>
}
export interface GroupDirectoryConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<DirectoryGroupEnum>
}
export interface ModifiedTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
