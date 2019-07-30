export function sendLoginRequest(data) {
  const { email, password } = data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@mail.com' && password === 'test') {
        return resolve({
          user: {
            email: 'test@mail.com',
            username: 'Vasay'
          }
        });
      }
      else {
        return reject('Incorrect login or password');
      }
    }, 500);
  })
}
