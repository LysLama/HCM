// Utility functions for ChatBot
export const formatPhilosophyResponse = (text) => {
  // Định dạng văn bản phản hồi để dễ đọc hơn
  return text
    .replace(/\n\n/g, '\n') // Loại bỏ dòng trống thừa
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Chuyển **text** thành bold
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // Chuyển *text* thành italic
    .trim();
};

export const buildChatSystemPrompt = ({ lang = 'vi' } = {}) => {
  // Chủ đích: thay vì "khóa keyword", dùng hệ thống tính cách + quy tắc trả lời ngắn.
  // - Cho phép hỏi ngoài lề, nhưng trả lời ngắn và kéo về chủ đề website.
  // - Giới hạn độ dài đầu ra để tránh UI bị ngập.
  if (lang === 'en') {
    return [
      'You are an AI learning assistant for the website “Ho Chi Minh Thought on Great National Solidarity”.',
      'Tone: respectful, helpful, concise, structured.',
      'Default: answer in ENGLISH unless the user writes Vietnamese.',
      'Length rule: keep answers short (prefer bullets). If the answer would be long, provide a brief summary and ask what part to expand.',
      'If the user asks off-topic: answer briefly, then suggest a related angle back to the website topic.',
      'Avoid hallucinating sources. If unsure, say you are unsure and suggest where to look (official documents, reputable press, academic sources).'
    ].join('\n');
  }
  return [
    'Bạn là trợ lý AI học tập của website “Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân tộc”.',
    'Phong cách: tôn trọng, rõ ràng, súc tích, ưu tiên gạch đầu dòng và ví dụ ngắn.',
    'Mặc định trả lời bằng TIẾNG VIỆT (trừ khi người dùng viết tiếng Anh).',
    'Quy tắc độ dài: trả lời ngắn gọn. Nếu vấn đề dài, hãy tóm tắt trước rồi hỏi người dùng muốn đào sâu phần nào.',
    'Nếu người dùng hỏi ngoài lề: vẫn trả lời ngắn, sau đó gợi ý một liên hệ/quay lại chủ đề đại đoàn kết.',
    'Không bịa nguồn. Nếu không chắc, nói rõ và gợi ý nguồn tra cứu phù hợp (văn kiện, cơ quan nhà nước, báo chí uy tín, tài liệu học thuật).'
  ].join('\n');
};

export const getWelcomeMessages = () => {
  const messages = [
    "Xin chào! Tôi là trợ lý AI của website Tư tưởng Hồ Chí Minh. Bạn muốn tìm hiểu về đại đoàn kết toàn dân tộc, vai trò chiến lược, lực lượng – nền tảng hay phương pháp vận động đoàn kết?",
    "Chào bạn! Tôi có thể giúp tóm tắt và giải thích các nội dung về đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh (vai trò, mục tiêu, lực lượng, nền tảng, mặt trận…).",
    "Hello! I can help you explore Ho Chi Minh Thought on great national solidarity: strategic role, primary task, forces, foundations, and the united front."
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

export const getSampleQuestions = () => {
  return [
    "Vì sao đại đoàn kết toàn dân tộc là vấn đề chiến lược của cách mạng Việt Nam?",
    "Trong tư tưởng Hồ Chí Minh, nhiệm vụ hàng đầu của cách mạng Việt Nam là gì?",
    "Những lực lượng nào cấu thành khối đại đoàn kết toàn dân tộc?",
    "Nền tảng và hạt nhân của khối đại đoàn kết là gì?",
    "Vai trò của Mặt trận Dân tộc thống nhất/Mặt trận Tổ quốc trong đại đoàn kết?",
    "Phương pháp xây dựng khối đại đoàn kết theo tư tưởng Hồ Chí Minh?",
    "How can great national solidarity be applied today?"
  ];
};

const normalizeText = (text = '') =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const greetingKeywords = [
  'xin chao', 'chao', 'hello', 'hi', 'hey', 'cam on', 'thanks', 'thank you', 'tam biet', 'bye'
];

const topicKeywords = [
  // Core philosophy
  'triet hoc', 'philosophy', 'dao duc', 'ethics', 'nhan thuc', 'epistemology',
  'ton tai', 'ontology', 'logic', 'luan ly', 'my hoc', 'aesthetics',
  // Schools & thinkers
  'socates', 'socrates', 'plato', 'aristotle', 'kant', 'hegel', 'nietzsche',
  'khong tu', 'lao tu', 'phat giao', 'phat', 'dao', 'nho giao',
  'marx', 'mác', 'lenin', 'mác lenin', 'engels',
  // Ho Chi Minh thought theme
  'ho chi minh', 'hcm', 'dai doan ket', 'doan ket toan dan',
  'mat tran', 'to quoc', 'dan toc', 'luc luong', 'nen tang', 'phuong phap', 'vai tro',
  // English keywords for the same theme
  'great national unity', 'great national solidarity', 'national unity', 'national solidarity',
  'unity', 'solidarity', 'united front', 'front', 'ho chi minh thought', 'ho chi minh'
];

export const isGreeting = (message = '') => {
  const normalized = normalizeText(message);
  if (!normalized) return false;
  const words = normalized.split(' ');
  return greetingKeywords.some(keyword => words.includes(normalizeText(keyword)));
};

export const isOnTopic = (message = '') => {
  const normalized = normalizeText(message);
  if (!normalized) return false;
  return topicKeywords.some(keyword => normalized.includes(normalizeText(keyword)));
};

export const detectLanguage = (message = '') => {
  const hasVietnamese = /[àáạảãăằắặẳẵâầấậẩẫèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(message);
  if (hasVietnamese) return 'vi';
  const englishIndicators = /(what|why|how|explain|compare|philosophy|dialectic|materialism|hegel|marx|unity|solidarity|apply|today|locality|smart|city)/i.test(message);
  return englishIndicators ? 'en' : 'vi';
};