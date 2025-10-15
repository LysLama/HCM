// Utility to load and slice content sections from the raw source_data.txt
// Uses Vite's ?raw import to load text content at build time

import raw from '../data/source_data.txt?raw';

const markers = {
  moneyStart: '23. Tiền tệ',
  servicesStart: '4. Dịch vụ',
  iiMarketStart: 'II- THỊ TRƯỜNG VÀ NỀN KINH TẾ THỊ TRƯỜNG',
  marketConceptsStart: '1. Khái niệm, phân loại và vai trò của thị trường',
  marketEconomyStart: '2. Nền kinh tế thị trường',
};

function sliceBetween(startToken, endToken) {
  const startIdx = raw.indexOf(startToken);
  if (startIdx === -1) return '';
  const afterStart = startIdx;
  const endIdx = endToken ? raw.indexOf(endToken, afterStart) : -1;
  if (endIdx === -1) return raw.slice(afterStart).trim();
  return raw.slice(afterStart, endIdx).trim();
}

export function getMoneySection() {
  return sliceBetween(markers.moneyStart, markers.servicesStart);
}

export function getServicesExchangeSection() {
  return sliceBetween(markers.servicesStart, markers.iiMarketStart);
}

export function getMarketConceptsSection() {
  // Ensure we start inside the II section even if file structure changes
  const iiSection = sliceBetween(markers.iiMarketStart, null);
  const startIdx = iiSection.indexOf(markers.marketConceptsStart);
  if (startIdx === -1) return '';
  const endIdx = iiSection.indexOf(markers.marketEconomyStart, startIdx);
  if (endIdx === -1) return iiSection.slice(startIdx).trim();
  return iiSection.slice(startIdx, endIdx).trim();
}

export function getMarketEconomySection() {
  // From the start of marketEconomyStart to end of file
  const iiSection = sliceBetween(markers.iiMarketStart, null);
  const startIdx = iiSection.indexOf(markers.marketEconomyStart);
  if (startIdx === -1) return '';
  return iiSection.slice(startIdx).trim();
}

export function getAllRaw() {
  return raw;
}

// Helper to convert plain text to simple paragraph blocks while preserving lists
export default {
  getMoneySection,
  getServicesExchangeSection,
  getMarketConceptsSection,
  getMarketEconomySection,
  getAllRaw,
};
