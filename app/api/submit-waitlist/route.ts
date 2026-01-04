import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const airtableApiKey = process.env.AIRTABLE_API_KEY
    const airtableBaseId = process.env.AIRTABLE_BASE_ID
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME

    if (!airtableApiKey || !airtableBaseId || !airtableTableName) {
      console.error('Missing Airtable configuration')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const encodedTableName = encodeURIComponent(airtableTableName)
    const response = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${encodedTableName}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Airtable error:', errorData)
      return NextResponse.json(
        { error: 'Failed to submit to Airtable' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Submit error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

