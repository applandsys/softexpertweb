import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/admin')) {
    const isLoginPage = pathname === '/admin/login';
    const hasSession = request.cookies.has('admin_session');

    // If trying to access admin pages without a session, redirect to login
    if (!hasSession && !isLoginPage) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    // If trying to access login page WITH a session, redirect to dashboard
    if (hasSession && isLoginPage) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/admin'],
};
