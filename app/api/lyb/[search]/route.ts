import { NextResponse } from 'next/server'

export async function GET(
	request: Request,
	{ params }: { params: { search: string } }
) {
	const { search } = params
	const apiUrl = process.env.NEXT_PUBLIC_API_URL

	if (!apiUrl) {
		return new NextResponse('API URL not defined', { status: 500 })
	}

	const response = await fetch(apiUrl + `&tags=${search}`, {
		next: { revalidate: 30 },
	})

	if (!response.ok) {
		return new NextResponse('Error', { status: 500 })
	}

	const data = await response.json()

	return NextResponse.json({ data })
}
