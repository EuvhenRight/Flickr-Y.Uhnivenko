// ADD ALL TYPES HERE

export type AllPostData = {
	data: PostData
}

export type PostData = {
	items: PostItem[]
	link: string
	description: string
	title: string
	generator: string
}

export type PostItem = {
	author: string
	date_taken: string
	description: string
	link: string
	media: { m: string }
	published: string
	tags: string
	title: string
}
