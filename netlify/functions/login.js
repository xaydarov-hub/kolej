exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { username, password } = JSON.parse(event.body);

    // Get credentials from environment variables
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const SESSION_SECRET = process.env.SESSION_SECRET || 'default-secret-change-me';

    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
      console.error('Admin credentials not set in environment variables');
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Server configuration error' })
      };
    }

    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Set session cookie
      return {
        statusCode: 200,
        headers: {
          'Set-Cookie': `admin_session=${username}|${Date.now()}|${SESSION_SECRET}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          success: true, 
          message: 'Login successful',
          user: { username: ADMIN_USERNAME }
        })
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid credentials' })
      };
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error' })
    };
  }
};