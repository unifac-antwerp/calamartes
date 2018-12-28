export default (url: string): string => url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]
