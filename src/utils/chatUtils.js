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
    'kinh tế',

    // Chapter 2 (VN/EN) – explicit allow terms
    'hàng hóa', 'hang hoa',
    'tiền tệ', 'tien te',
    'dịch vụ', 'dich vu',
    'thị trường', 'thi truong',
    'kinh tế thị trường', 'market economy',
    'quan hệ trao đổi', 'quan he trao doi',
    'giá cả', 'gia ca', 'giá trị', 'gia tri',
    'marx', 'mac'

  ];
};

// Helper: explicit allow for Chapter 2 topics (VN/EN)
export const isChapter2Topic = (text) => {
  if (!text) return false;
  const lower = text.toLowerCase();
  const simpleNormalize = (s) => s
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd');
  const norm = simpleNormalize(lower);
  const patterns = [
    /\b(hang hoa|hàng hóa)\b/i,
    /\b(tien te|tiền tệ)\b/i,
    /\b(dich vu|dịch vụ)\b/i,
    /\b(thi truong|thị trường)\b/i,
    /\b(kinh te thi truong|market economy)\b/i,
    /\b(quan he trao doi|quan hệ trao đổi)\b/i,
    /\b(money|service|services|market|exchange relations)\b/i,
    /\b(marx|mac)\b/i
  ];
  return patterns.some((re) => re.test(norm) || re.test(lower));
};

// Nới lỏng điều kiện: chỉ chặn các câu hoàn toàn ngoài phạm vi (ví dụ: nấu ăn, bóng đá, giá cổ phiếu) để tránh chặn nhầm.
export const isPhilosophyRelated = (text) => {
  if (!text || !text.trim()) return false;
  const lower = text.toLowerCase();

  // Normalization: bỏ dấu cơ bản (chỉ cần cho vài phụ âm/nguyên âm chính)
  const simpleNormalize = (s) => s
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd');
  const norm = simpleNormalize(lower);

  // Rộng hơn: nếu có bất kỳ thuật ngữ triết học hoặc các cặp phổ biến (duy vật, duy tâm...) -> true
  const coreIndicators = [
    'triết', 'philo', 'duy vật', 'duy tam', 'dialectical', 'materialism', 'idealism',
    'hegel', 'marx', 'lenin', 'khong tu', 'lao tu', 'plato', 'aristotle', 'kant', 'nietzsche',
    'dao duc', 'ton tai', 'chan ly', 'y nghia', 'giai thoat', 'y thuc', 'tu do', 'logic', 'ontology', 'epistemology',
    'ethics', 'aesthetics', 'metaphysics', 'phenomenology', 'existentialism', 'utilitarianism',
    'postmodernism', 'structuralism', 'deconstruction', 'critical theory', 'feminism',
    'buddhism', 'confucianism', 'taoism', 'nho giao', 'dao giao', 'phap gia',
    'chinh tri', 'chinh phu', 'kinh te', 'van hoa', 'xa hoi', 'giao duc',
    'socrates', 'plato', 'aristotle', 'descartes', 'spinoza', 'hobbes', 'locke', 'hume',
    'kant', 'hegel', 'nietzsche', 'wittgenstein', 'husserl', 'heidegger',
    'sartre', 'camus', 'rawls', 'foucault', 'derrida',
    'existentialism', 'phenomenology', 'structuralism', 'post-structuralism',
    'postmodernism', 'critical theory', 'feminist philosophy', 'queer theory',
    'environmental philosophy', 'philosophy of technology', 'philosophy of mind'
  ];
  const matchedCore = coreIndicators.some(k => norm.includes(simpleNormalize(k)));

  // Chapter 2 allowlist (both accented and normalized variants)
  const chapter2Allow = isChapter2Topic(text);

  // Giữ lại bộ từ khóa chi tiết cũ như 1 lớp bổ sung
  const hasFromFullList = getPhilosophyKeywords().some(k => lower.includes(k));

  // Bộ nhận diện rõ ràng ngoài phạm vi (một số ví dụ thông dụng)
  const offTopicPatterns = [
    /bong(\s|)da/, /bong(\s|)ro/, /bida/, /game\b/, /free fire/, /liên quân/,
    /nấu ăn/, /công thức.*(món|ăn|nấu)/, /giảm cân/, /thời trang/, /make ?up/,
    /giá (vàng|usd|bitcoin|btc|eth)/, /chứng khoán/, /tỷ giá/, /kèo bóng/, /soi kèo/,
    /mã nguồn phần mềm/, /lập trình/, /code this/, /hacker/, /crack/, /bypass/
  ];
  const isOffTopic = offTopicPatterns.some(r => r.test(norm));

  // Nếu có dấu hỏi về khái niệm trừu tượng chung chung → ưu tiên trả lời (ví dụ: “khác biệt giữa…”, “ý nghĩa…”)
  const structuralCue = /(khac biet|khác biệt|la gi|là gì|tai sao|tại sao|so sanh|so sánh|y nghia|ý nghĩa)/.test(norm);

  // Logic quyết định:
  // 1. Nếu rõ ràng off-topic → false
  if (isOffTopic) return false;
  // 2. Nếu khớp core hoặc full list hoặc structural cue hoặc chapter2Allow → true
  if (matchedCore || hasFromFullList || structuralCue || chapter2Allow) return true;
  // 3. fallback: cho phép các câu chào để AI tự hướng người dùng
  const greetings = ['xin chao','chao','hello','hi','hey'];
  if (greetings.some(g => norm.includes(g))) return true;
  // 4. Mặc định cho true để tránh chặn nhầm (chuyển sang soft filtering ở tầng cao hơn nếu cần)
  return true;
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