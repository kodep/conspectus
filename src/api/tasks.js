export function createTask(data) {
  return new Promise((resolve) => {
    const id = Date.now() + Math.random().toString()
    return resolve({
        taskName: data['New meeting'],
        id: id.substr(-5)
    });
  })
}

