// Test multiple Gemini models để tìm model khả dụng (qua Vite proxy)
const MODELS_TO_TEST = [
  'gemini-1.5-flash-8b-latest',
  'gemini-1.5-flash-8b',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-2.5-flash',
  'gemini-1.5-pro'
];

export const findWorkingModel = async () => {
  console.log('🔍 Testing available Gemini models...');
  
  for (const model of MODELS_TO_TEST) {
    try {
  const url = `/api/gemini/${model}`;
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