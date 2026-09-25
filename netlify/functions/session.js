exports.handler = async (event) => {
  try {
    const cookies = event.headers.cookie || '';
    const sessionCookie = cookies.split(';').find(c => c.trim().startsWith('admin_session='));
    
    if (!sessionCookie) {
      return {
        statusCode: 200,
        body: JSON.stringify({ authenticated: false })
      };
    }

    const sessionValue = sessionCookie.split('=')[1];
    const [username, timestamp, secret] = sessionValue.split('|');
    const SESSION_SECRET = process.env.SESSION_SECRET || 'default-secret-change-me';

    // Validate the session
    if (!username || !secret || secret !== SESSION_SECRET) {
      return {
        statusCode: 200,
        body: JSON.stringify({ authenticated: false })
      };
    }

    // Check if session is expired (24 hours)
    const sessionAge = Date.now() - parseInt(timestamp);
    if (sessionAge > 86400000) { // 24 hours
      return {
        statusCode: 200,
        headers: {
          'Set-Cookie': 'admin_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0'
        },
        body: JSON.stringify({ authenticated: false })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        authenticated: true,
        user: { username }
      })
    };
  } catch (error) {
    console.error('Session check error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ authenticated: false, error: 'Server error' })
    };
  }
};