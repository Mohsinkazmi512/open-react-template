// import admin from 'firebase-admin'; // Import the Firebase Admin SDK

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function getUserCount() {
  // const adminConfig = require('../../../firebase-config.ts');
  const admin = require('firebase-admin');
  admin.initializeApp({
    credential: admin.credential.cert({
  projectId: "spark-ai-7695a",
  privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDHxPEP+5DM+qOf\nDsajC06jXGcfcuFqhVO8A1imiXHJ5Zdh5HHg3lL66bYgTmezqhvnabL56BhDyEyK\nPBG60Q4m/+pTvipVYKaSbF4dhzo/TKP5OBQ2tiytmvyN2UDr6sCogsAXkZ41fDqs\nskxAjU/d6lmSQUUyri4xLCUTQu9iAc1nrhuFmX0mJEUGaxFNhWbuJ37cMwCMu16C\niPOGmuu1bp3UOGy9MLYnwYS2jW39Sqn7kcNStvBwPNfJ2xu3IrD2xAc04hcNfHao\n039vQvHGy6rmlhDPuhGDYN4tg+6BbEhsCySznihPRsnIQw1r59afJlx7OcSLykJu\n1PfJPBpRAgMBAAECggEABXAe/8hhULMh8Rp93cJZCaliRUDjUfr/JIcSyrXDGzPc\nwxVs5CopKBtkkcyQlhtzVwFRlevzfSTesISiFuvJ7tXYkx8CGADhh+rbRQKBW2fC\nru4P3s1mufMWHOZlFgb156Bnijy0idAv6LORz9AI9ImElq6gK5kCOORyvet8iLZn\nfgxFIwjPg/hb+C28PemAuzYY0RWPCmmOKxeHn2+PSvHzl/ZNJHioXrp6NInYnkrB\nmcIf4Ox6ueKvd4MRWda8ofOo0L6qgM9Q3uDXQGvvZ4A+eDUkyYbME3Uz/hguHBjj\nMKjQY9wm0xTD4qRy82BLRttH/Q0vcPmutvfkgfNeAQKBgQD17ICohmG9Mym6KVwW\nLFegmQlGMzQzOG25MxgJIjvFzNj2zraY/pMFzEUvdGyYAwcGShv/YFk2Qw0yzOqo\n77YQSJ9HTljy0+sGYlKrsXQPQP34PelbpE0MmsZ5d+4wrF6186RS9bFqPK6JEhkV\nhrViCky6ywA28spsgS+4+0j0KQKBgQDP9FLgJ7ER6vX1jHSEXTKPs2u0wnvqCHNy\nIdoj8Ir0L5S20ZN2XDSHHjvpfT3xgmPMX2sy3RO7jyLSl42ZGzbkT/eUyw79RMly\n1Jt/wfFZa3NMbHYJKcN2PDjkz2PGZv2aSMKB3ETAeovF9mcoIrj2bOCvapp8pFFj\nCWWbhsr56QKBgAP2a5xLjgeea220fOdej4rm7F9VM+IfZqU1TY3YH15wjo5rhkWw\n1G2jfPnmxlkss1BGoWzcAJP/QJcw9hcCxcw9X1Omz4gaIg9YRjy9/0C/q1f0p23y\nl8s8MzaB2DSwklYcNumfS9yKXcWXpQ/Tu9h4kgPwgXBhOSHGcx5n7iUBAoGBAKiQ\nUHlYUyTGA1dl4bDFZs2qzzx3hUAgV4wFOrB1M/1ZcD98w/5mIUIBVOkf1w0j90db\ndSaGo48eKEjyBho8QBNzaqmWq3DKyEwnYGB/0eX8vjoNlOQ6kTEPAcMfBK53H0xn\nfBsNdEFdVF1ELTwQYUOG393xGIa+HyabIFygN3m5AoGBAJhB7ElYrxmnJyaexdTQ\nfLJoc+TwTLuMkPvE646peES3lTRjMpnYPJRlr3GhTGRWrEDRv4p9KfDsilpBB14w\npMZSPnHmRfF3cjrhj6YU1bUuenNJdg91WDy81Bpi13zn5QGIxLKNa6dYkjng4abN\n1EveJvXn6f+eswXDEO+YpEwt\n-----END PRIVATE KEY-----\n",
  clientEmail: "spark-ai-7695a@appspot.gserviceaccount.com"
    })
  });

  // Access Firestore
  const db = admin.firestore();
  const usersRef = db.collection('users');

  // Fetch data from the "users" collection
  const querySnapshot = await usersRef.get();

  // Get the number of documents in the "users" collection
  const count = querySnapshot.size;
  return count;
}
