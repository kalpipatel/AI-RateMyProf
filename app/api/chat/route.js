import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    try {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_GOOGLE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        const prompt = `
        your purpose is to give simple reviews about a professor when asked.
        `;

        // Generate content using the prompt
        const result = await model.generateContent(prompt);
        const response = result.response;
        let output = response.candidates[0].content.parts[0].text;

        output = output.replace(/\n/g, ' ').trim();

        return new NextResponse(output, {
            headers: { 'Content-Type': 'text/plain' },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}