// Test file để kiểm tra API Gemini thông qua Vite Proxy (/api/gemini/<model>)
const DEFAULT_MODEL = 'gemini-1.5-flash-8b-latest';

export const testGeminiAPI = async (model = DEFAULT_MODEL, text = "Xin chào, bạn có thể giới thiệu về triết học Mác-Lênin không?") => {
  try {
    const response = await fetch(`/api/gemini/${model}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Success Response:', data);
    
    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Test API Error:', error);
    return null;
  }
};

// Test function có thể gọi từ browser console
window.testChatAPI = testGeminiAPI;