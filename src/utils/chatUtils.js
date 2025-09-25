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
    'siêu hình học', 'metaphysics', 'nhận thức luận', 'epistemology',
    'đạo đức học', 'ethics', 'mỹ học', 'aesthetics', 'logic',
    'triết học chính trị', 'philosophy of science', 'philosophy of mind',
    'philosophy of language', 'philosophy of technology',
    'thí nghiệm tưởng tượng', 'thought experiment', 'occam', 'principle of charity',
    'fallacy', 'paradox', 'dilemma', 'cogito', 'existentialism',
    
    // Triết học Mác-Lênin
    'mác-lênin', 'marx', 'lenin', 'engels',
    'chủ nghĩa duy vật lịch sử', 'dialectical materialism', 'historical materialism',
    'đấu tranh giai cấp', 'giá trị thặng dư', 'tư liệu sản xuất',
    'lực lượng sản xuất', 'quan hệ sản xuất', 'tha hoá', 'alienation',
    'cơ sở hạ tầng', 'thượng tầng kiến trúc', 'chuyên chính vô sản',
    'chủ nghĩa xã hội khoa học', 'chủ nghĩa cộng sản',
    'cách mạng vô sản', 'proletarian revolution', 'chủ nghĩa tư bản',
    'capitalism', 'chủ nghĩa phong kiến', 'feudalism', 'chủ nghĩa nô lệ',
    
    // Triết học phương Tây
    'socrates', 'plato', 'aristotle', 'epicurus', 'stoicism',
    'descartes', 'spinoza', 'leibniz', 'hobbes', 'locke', 'berkeley', 'hume',
    'kant', 'hegel', 'schopenhauer', 'nietzsche',
    'frege', 'russell', 'wittgenstein', 'husserl', 'heidegger',
    'sartre', 'camus', 'merleau-ponty',
    'rawls', 'nozick', 'habermas', 'foucault', 'derrida',
    'deconstruction', 'structuralism', 'post-structuralism', 'postmodernism',
    'pragmatism', 'logical positivism', 'analytic philosophy', 'continental philosophy',
    'utilitarianism', 'existentialism', 'phenomenology', 'critical theory',
    
    // Triết học phương Đông
    'khổng tử', 'mạnh tử', 'tuân tử', 'lão tử', 'trang tử', 'mặc tử', 'hàn phi tử',
    'nho giáo', 'đạo giáo', 'pháp gia', 'tân nho giáo',
    'phật giáo', 'thiền', 'zen', 'yin yang', 'đạo đức kinh', 'luận ngữ', 'trung dung', 'đại học',
    'vedanta', 'advaita', 'samkhya', 'yoga', 'nyaya', 'vaisheshika', 'madhyamaka', 'yogachara',
    'nagarjuna', 'shankara', 'chanakya', 'kautilya',
    'confucianism', 'taoism', 'buddhism', 'shinto', 'jainism', 'sikhism',
    
    // Các ngành triết học
    'đạo đức học', 'ethics', 'thẩm mỹ học', 'aesthetics', 'logic',
    'nhận thức luận', 'epistemology', 'bản thể luận', 'ontology',
    'triết học chính trị', 'triết học giáo dục', 'triết học khoa học',
    'triết học tôn giáo', 'triết học ngôn ngữ', 'triết học tâm trí',
    'avicenna', 'ibn sina', 'averroes', 'ibn rushd', 'al-farabi', 'al-ghazali',
    'kalam', 'augustine', 'anselm', 'aquinas', 'ockham', 'scholasticism',
    'renaissance', 'enlightenment', 'romanticism', 'transcendentalism',
    'positivism', 'materialism', 'idealism', 'dualism', 'monism',
    'determinism', 'free will', 'compatibilism', 'incompatibilism',
    'utilitarianism', 'deontology', 'virtue ethics', 'contractarianism',

    // Triết học hiện đại và đương đại
    'existentialism', 'phenomenology', 'structuralism', 'post-structuralism',
    'postmodernism', 'critical theory', 'feminist philosophy', 'queer theory',
    'environmental philosophy', 'philosophy of technology', 'philosophy of mind',
    'artificial intelligence', 'consciousness', 'qualia', 'mind-body problem',
    'simulation hypothesis', 'transhumanism', 'cybernetics',

    // Triết học tôn giáo
    'thần học', 'theology', 'triết học tôn giáo', 'philosophy of religion',
    'existence of god', 'problem of evil', 'faith and reason', 'miracles',
    'afterlife', 'soul', 'spirit', 'divine command theory', 'natural theology',
    'apologetics', 'agnosticism', 'atheism', 'pantheism', 'deism',
    'propositional logic', 'predicate logic', 'modal logic', 'temporal logic',
    'deontic logic', 'fuzzy logic', 'intuitionistic logic', 'many-valued logic',
    'syllogism', 'modus ponens', 'modus tollens', 'tautology', 'contradiction',
    'logical fallacies',

    // Triết học nhận thức
    'justified true belief', 'gettier', 'skepticism', 'foundationalism',
    'coherentism', 'reliabilism', 'internalism', 'externalism',
    'a priori', 'a posteriori', 'analytic', 'synthetic', 'bayesianism',
    'testimony', 'perception', 'evidence', 'memory', 'introspection',
    'rationalism', 'empiricism', 'constructivism', 'pragmatism',
    'virtue epistemology',

    // ngụy biện phổ biến
    'ad hominem', 'straw man', 'slippery slope', 'appeal to authority',
    'red herring', 'hasty generalization', 'begging the question', 'false dilemma',
    'post hoc', 'non sequitur', 'tu quoque',
    
    // Khái niệm triết học cơ bản
    'tồn tại', 'existence', 'thực tại', 'reality', 'chân lý', 'truth',
    'giá trị', 'value', 'ý nghĩa', 'meaning', 'tự do', 'freedom',
    'công lý', 'justice', 'hạnh phúc', 'happiness', 'đức hạnh', 'virtue',
    'linh hồn', 'soul', 'tâm trí', 'mind', 'ý thức', 'consciousness',
    'vô thức', 'unconscious', 'lý tính', 'reason', 'cảm tính', 'emotion',
    
    // Triết học Việt Nam
    'hồ chí minh', 'tư tưởng hồ chí minh', 'nguyễn trãi', 'trần nhân tông',
    'thiền trúc lâm', 'trúc lâm yên tử', 'lê quý đôn', 'phan bội châu',
    'phan chu trinh', 'trần đức thảo', 'trần văn giàu', 'nho học việt nam',
    'văn hóa việt nam', 'tuyên ngôn độc lập', 'bản tuyên ngôn độc lập',
    'đạo đức cách mạng', 'chủ nghĩa yêu nước', 'chủ nghĩa xã hội ở việt nam',
    'triết học phương đông', 'triết học phương tây', 'triết học hiện đại','đảng cộng sản việt nam',
    'chủ nghĩa mác-lênin ở việt nam', 'đấu tranh giai cấp ở việt nam',
    'cách mạng việt nam', 'xã hội việt nam', 'lịch sử việt nam',
    'văn hóa việt nam', 'giáo dục việt nam', 'kinh tế việt nam',
    'chính trị việt nam', 'xã hội học việt nam', 'triết học việt nam',
    'nguyễn ái quốc', 'hồ chí minh và triết học mác-lênin',
    'hồ chí minh và chủ nghĩa mác-lênin', 'hồ chí minh và đấu tranh giai cấp',
    'hồ chí minh và cách mạng việt nam', 'hồ chí minh và xã hội việt nam',
    'đảng cộng sản',

    // Thêm các từ khóa khác nếu cần
    'tồn tại', 'existence', 'thực tại', 'reality', 'chân lý', 'truth',
    'giá trị', 'value', 'ý nghĩa', 'meaning', 'tự do', 'freedom',
    'công lý', 'justice', 'hạnh phúc', 'happiness', 'đức hạnh', 'virtue',
    'linh hồn', 'soul', 'tâm trí', 'mind', 'ý thức', 'consciousness',
    'vô thức', 'unconscious', 'lý tính', 'reason', 'cảm tính', 'emotion',
    'kinh tế chính trị', 'political economy', 'lịch sử triết học', 'history of philosophy',
    'triết học pháp luật', 'philosophy of law', 'triết học lịch sử', 'philosophy of history',
    'triết học ngôn ngữ', 'philosophy of language', 'triết học tâm trí', 'philosophy of mind',
    'triết học công nghệ', 'philosophy of technology',
    'triết học giáo dục', 'philosophy of education', 'triết học khoa học', 'philosophy of science',
    'triết học nghệ thuật', 'philosophy of art', 'triết học tôn giáo', 'philosophy of religion',
    'kinh tế'

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