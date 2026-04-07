import { NextResponse } from 'next/server';

export async function GET(request) {
  // FreeCodeCamp Requirement: Return JSON with ipaddress, language, and software
  
  // Extracting headers
  const headers = request.headers;
  
  // IP Extraction: Handle potential proxying (X-Forwarded-For)
  const ipAddress = headers.get('x-forwarded-for') || request.ip || '127.0.0.1';
  
  // Preferred Language
  const language = headers.get('accept-language') || 'en-US';
  
  // Software (User-Agent)
  const software = headers.get('user-agent') || 'Unknown';

  return NextResponse.json({
    ipaddress: ipAddress.split(',')[0],
    language: language,
    software: software
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  });
}
