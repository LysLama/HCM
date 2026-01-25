import sourceQuiz from '../../SourceQuizEn.txt?raw';

const isSectionHeader = (line) => /^\d+(?:\.\d+)+\.\s+/.test(line);
const isMarkdownHeader = (line) => /^#{1,6}\s+/.test(line);

const normalizeLine = (line) => {
  let text = line
    .replace(/\u0000/g, '')
    .replace(/^[\uFEFF\u200B\u200C\u200D\u2060]+/, '')
    .replace(/[\u200B\u200C\u200D\u2060]+/g, '')
    .replace(/\u00A0/g, ' ')
    .trim();
  if (text.startsWith('**') && text.endsWith('**')) {
    text = text.slice(2, -2).trim();
  }
  return text;
};

const parseQuizSource = (raw) => {
  const normalizedRaw = raw
    .replace(/\u0000/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');
  const lines = normalizedRaw.split('\n');
  const questions = [];
  let current = null;

  const pushCurrent = () => {
    if (current && current.question && current.options.length) {
      questions.push(current);
    }
  };

  for (const rawLine of lines) {
    const line = normalizeLine(rawLine);
    if (!line) continue;
    if (line === '---') continue;
    if (isMarkdownHeader(line)) continue;
    if (isSectionHeader(line)) continue;

    const questionMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (questionMatch) {
      pushCurrent();
      current = {
        question: questionMatch[2].trim(),
        options: [],
        correctAnswer: '',
        explanation: ''
      };
      continue;
    }

    const cleaned = line.replace(/^\*\s*/, '');
    const optionMatch = cleaned.match(/^([A-D])\.\s*(.+)$/);
    if (optionMatch && current) {
      const optionText = optionMatch[2].trim();
      current.options.push(optionText);
      if (line.startsWith('*')) {
        current.correctAnswer = optionText;
      }
    }
  }

  pushCurrent();
  return questions;
};

export const quizDataEn = parseQuizSource(sourceQuiz);
