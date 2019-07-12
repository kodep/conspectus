export function sendLoginRequest(data) {
  console.log('email, password', data)
  const { email, password } = data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@mail.com' && password === 'test') {
        return resolve(true);
      }
      else {
        return reject('Incorrect login or password');
      }
    }, 1000);
  })
}
