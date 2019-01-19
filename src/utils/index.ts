export const getInstagramPostUrl = (id: string) => `https://www.instagram.com/p/${id}/`

export const cleanUrl = (url: string): string => url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]
