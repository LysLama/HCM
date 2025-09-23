// Utility functions for ChatBot
export const formatPhilosophyResponse = (text) => {
  // Định dạng văn bản phản hồi để dễ đọc hơn
  return text
    .replace(/\n\n/g, '\n') // Loại bỏ dòng trống thừa
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Chuyển **text** thành bold
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // Chuyển *text* thành italic
    .trim();
};

export const getPhilosophyKeywords = () => {
  return [
    // Triết học tổng quát
    'triết học', 'philosophy', 'tư tưởng', 'lý thuyết', 'học thuyết',
    'thế giới quan', 'nhân sinh quan', 'phương pháp luận',
    
    // Triết học Mác-Lênin
    'Mác-Lênin', 'Marx', 'Lenin', 'đấu tranh giai cấp', 'chủ nghĩa duy vật',
    'biện chứng', 'giai cấp', 'tư liệu sản xuất', 'lao động', 'giá trị thặng dư',
    'cách mạng', 'tư bản', 'công nhân', 'cộng sản', 'xã hội chủ nghĩa',
    'thượng tầng kiến trúc', 'cơ sở hạ tầng', 'ý thức xã hội',
    
    // Triết học phương Tây
    'Socrates', 'Plato', 'Aristotle', 'Kant', 'Hegel', 'Nietzsche',
    'Descartes', 'Hume', 'Locke', 'Berkeley', 'Spinoza', 'Leibniz',
    'chủ nghĩa duy tâm', 'chủ nghĩa thực chứng', 'hiện tượng học',
    'hiện sinh', 'thực tồn', 'hậu hiện đại', 'cấu trúc', 'giải cấu trúc',
    
    // Triết học phương Đông
    'Khổng Tử', 'Lão Tử', 'Mạnh Tử', 'Trang Tử', 'Phật giáo', 'Đạo giáo',
    'Nho giáo', 'Phật', 'Buddha', 'thiền', 'zen', 'yin yang', 'đạo đức kinh',
    'luận ngữ', 'trung dung', 'đại học',
    
    // Các ngành triết học
    'đạo đức học', 'ethics', 'thẩm mỹ học', 'aesthetics', 'logic',
    'nhận thức luận', 'epistemology', 'bản thể luận', 'ontology',
    'triết học chính trị', 'triết học giáo dục', 'triết học khoa học',
    'triết học tôn giáo', 'triết học ngôn ngữ', 'triết học tâm trí',
    
    // Khái niệm triết học cơ bản
    'tồn tại', 'existence', 'thực tại', 'reality', 'chân lý', 'truth',
    'giá trị', 'value', 'ý nghĩa', 'meaning', 'tự do', 'freedom',
    'công lý', 'justice', 'hạnh phúc', 'happiness', 'đức hạnh', 'virtue',
    'linh hồn', 'soul', 'tâm trí', 'mind', 'ý thức', 'consciousness',
    'vô thức', 'unconscious', 'lý tính', 'reason', 'cảm tính', 'emotion',
    
    // Triết học Việt Nam
    'Hồ Chí Minh', 'Nguyễn Trãi', 'Trần Nhân Tông', 'thiền trúc lâm',
    'nho học Việt Nam', 'tư tưởng Hồ Chí Minh', 'văn hóa Việt Nam'
  ];
};

export const isPhilosophyRelated = (text) => {
  const keywords = getPhilosophyKeywords();
  const lowerText = text.toLowerCase();
  
  // Cho phép các câu chào hỏi và giới thiệu cơ bản
  const greetingKeywords = [
    'xin chào', 'chào', 'hello', 'hi', 'hey',
    'bạn là ai', 'bạn có thể', 'giới thiệu',
    'tên bạn', 'làm gì được', 'giúp gì được',
    'cảm ơn', 'thank', 'tạm biệt', 'bye',
    'như thế nào', 'ra sao', 'thế nào'
  ];
  
  const hasGreeting = greetingKeywords.some(keyword => lowerText.includes(keyword));
  const hasPhilosophy = keywords.some(keyword => lowerText.includes(keyword));
  
  // Cho phép nếu có từ khóa triết học HOẶC là câu chào hỏi
  return hasPhilosophy || hasGreeting;
};

export const getWelcomeMessages = () => {
  const messages = [
    "Xin chào! Tôi là trợ lý AI chuyên về triết học. Tôi có thể thảo luận về triết học phương Đông, phương Tây, Mác-Lênin và nhiều trường phái khác. Bạn muốn khám phá chủ đề triết học nào?",
    "Chào bạn! Tôi ở đây để giúp bạn tìm hiểu về thế giới triết học rộng lớn - từ Socrates, Khổng Tử đến các triết gia hiện đại. Hãy đặt câu hỏi về bất kỳ chủ đề triết học nào!",
    "Hello! Chào mừng đến với cuộc hành trình khám phá triết học! Tôi có thể thảo luận về đạo đức, tồn tại, chân lý, và nhiều vấn đề triết học khác. Bạn quan tâm đến điều gì?"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

export const getSampleQuestions = () => {
  return [
    "Triết học là gì?",
    "Đạo đức học nghiên cứu về gì?",
    "Khác biệt giữa duy vật và duy tâm?",
    "Tư tưởng Khổng Tử về đạo đức?",
    "Ý nghĩa của cuộc sống?",
    "Chân lý tuyệt đối hay tương đối?",
    "Tự do ý chí có tồn tại không?"
  ];
};