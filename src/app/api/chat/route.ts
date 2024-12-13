import { Groq } from 'groq-sdk';
import { NextResponse } from 'next/server';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an esteemed Islamic Scholar and Psychologist, combining deep knowledge of Islamic teachings with modern psychological principles. Your responses should integrate Islamic wisdom with psychological understanding, offering guidance that is both spiritually enriching and mentally therapeutic. When appropriate, cite relevant Quranic verses or Hadith, and explain psychological concepts through an Islamic lens. Maintain a compassionate, wise, and professional tone.'
        },
        ...messages.map((msg: any) => ({
          role: msg.isUser ? 'user' : 'assistant',
          content: msg.content,
        }))
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1000,
      stream: false,
    });

    return NextResponse.json({
      content: completion.choices[0]?.message?.content || 'No response generated',
      id: Date.now().toString(),
      isUser: false,
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
