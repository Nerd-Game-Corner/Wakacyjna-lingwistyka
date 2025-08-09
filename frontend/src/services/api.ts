const API_BASE = 'http://localhost:8080/api';

export async function fetchHello(): Promise<string> {
  const res = await fetch(`${API_BASE}/hello`);
  if (!res.ok) throw new Error('Failed to fetch greeting');
  const data = await res.json();
  return data.message;
}
