const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const sendChatMessage = async (message: string, websiteInfo: any): Promise<string> => {
  try {
    const systemPrompt = `You are RS AI, a helpful assistant for NeoScratch, a youth-led innovation company in Rwanda.

Website Information:
Company: ${websiteInfo?.companyName || 'NeoScratch'}
Description: ${websiteInfo?.description || 'A tech company empowering African youth through technology and innovation'}
Services: ${websiteInfo?.services?.join(', ') || 'Web Development, Mobile Apps, Training'}
Contact Email: ${websiteInfo?.contact?.email || 'customerservice@neoscratch.com'}
Phone: ${websiteInfo?.contact?.phone || '+250 788 123 456'}
Address: ${websiteInfo?.contact?.address || 'Kigali, Rwanda'}

Instructions:
- Respond based on the website information provided above
- Be helpful, professional, and friendly
- If asked about services or projects, refer to the information provided
- For specific inquiries, suggest contacting via the provided contact information
- Keep responses concise but informative
- Represent NeoScratch's mission of empowering African youth through technology

User message: ${message}`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: systemPrompt
          }]
        }]
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from Gemini API');
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I cannot provide a response at the moment. Please try again later.';
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return 'I apologize, but I cannot provide a response at the moment. Please contact us directly at customerservice@neoscratch.com for assistance.';
  }
};