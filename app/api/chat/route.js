import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    try {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        const prompt = `
        Here are some student reviews for various professors:

        Professor: Dr. Emily Parker, Subject: Physics, Rating: 4/5
        Review: "Dr. Parker is knowledgeable and approachable, but her lectures can be a bit fast-paced."

        Professor: Professor John Smith, Subject: Mathematics, Rating: 5/5
        Review: "Excellent professor! Clear explanations and very helpful during office hours."

        Professor: Dr. Karen Lee, Subject: Biology, Rating: 3/5
        Review: "Good professor, but the exams are difficult and often cover material not discussed in class."

        Professor: Professor Mark Johnson, Subject: Computer Science, Rating: 4/5
        Review: "Great professor with a lot of industry experience. Assignments are challenging but fair."

        Professor: Dr. Susan Davis, Subject: Chemistry, Rating: 2/5
        Review: "Dr. Davis knows her stuff, but she doesn't engage well with students. Lectures can be boring."
        
        Professor: Professor Michael Brown, Subject: History, Rating: 5/5
        Review: "Fantastic lecturer! Makes history come alive with engaging stories and discussions."

        Professor: Dr. Linda White, Subject: Psychology, Rating: 4/5
        Review: "Interesting classes and helpful feedback on assignments. Sometimes unclear on expectations."

        Professor: Professor James Wilson, Subject: Economics, Rating: 3/5
        Review: "Knows the material well, but his teaching style is dry and hard to follow."

        Professor: Dr. Maria Gonzalez, Subject: Sociology, Rating: 5/5
        Review: "Dr. Gonzalez is amazing! Very passionate about the subject and always willing to help."

        Professor: Professor Robert Green, Subject: Political Science, Rating: 4/5
        Review: "Engaging lecturer with a wealth of knowledge. Assignments are tough but rewarding."

        Professor: Dr. Angela Harris, Subject: English Literature, Rating: 5/5
        Review: "Wonderful professor! Encourages deep thinking and offers great feedback on papers."

        Professor: Professor Charles Robinson, Subject: Philosophy, Rating: 3/5
        Review: "Interesting ideas, but often goes off on tangents. Not the most organized lectures."

        Professor: Dr. Jessica Moore, Subject: Art History, Rating: 4/5
        Review: "Dr. Moore is very knowledgeable and passionate about art, but her lectures can be a bit dry."

        Professor: Professor Daniel Clark, Subject: Mechanical Engineering, Rating: 4/5
        Review: "Challenging but fair. Professor Clark has a lot of practical experience and shares real-world examples."

        Professor: Dr. Sarah Taylor, Subject: Environmental Science, Rating: 5/5
        Review: "Dr. Taylor is an excellent teacher. Very supportive and makes the subject matter interesting."

        Professor: Professor Richard Martinez, Subject: Business Management, Rating: 3/5
        Review: "Good professor, but his lectures can be a bit repetitive. Assignments are straightforward."

        Professor: Dr. Patricia Anderson, Subject: Chemistry, Rating: 4/5
        Review: "Dr. Anderson is a solid professor. Clear explanations, but her exams are tough."

        Professor: Professor Thomas Baker, Subject: Anthropology, Rating: 4/5
        Review: "Engaging and insightful. Professor Baker makes anthropology fascinating with his real-life examples."

        Professor: Dr. Rebecca Hall, Subject: Music Theory, Rating: 5/5
        Review: "Fantastic professor! Dr. Hall makes complex concepts easy to understand and offers great support."

        Professor: Professor Steven Wright, Subject: Physics, Rating: 2/5
        Review: "Knows the material, but his lectures are hard to follow. Not very approachable outside of class."

        Please provide an analysis or summary based on these reviews.
        `;

        // Generate content using the prompt
        const result = await model.generateContent(prompt);
        const response = result.response;
        const output = response.candidates[0].content.parts[0].text;

        return NextResponse.json({ output: output });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
