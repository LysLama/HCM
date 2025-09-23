// Test multiple Gemini models để tìm model khả dụng
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const MODELS_TO_TEST = [
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-1.5-pro-latest',
  'gemini-1.5-pro',
  'gemini-pro',
  'gemini-1.0-pro-latest',
  'gemini-1.0-pro'
];

export const findWorkingModel = async () => {
  console.log('🔍 Testing available Gemini models...');
  
  for (const model of MODELS_TO_TEST) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      console.log(`Testing model: ${model}`);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: "Hello, this is a test message."
            }]
          }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Model ${model} works!`, data);
        return { model, url, success: true };
      } else {
        const error = await response.text();
        console.log(`❌ Model ${model} failed:`, response.status, error);
      }
    } catch (error) {
      console.log(`❌ Model ${model} error:`, error.message);
    }
  }
  
  return { success: false, message: 'No working model found' };
};

// Test function để gọi từ browser console
window.findWorkingGeminiModel = findWorkingModel;