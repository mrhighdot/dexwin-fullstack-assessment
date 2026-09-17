const BASE_URL = '/api';

async function request(path, options?) {
  const res = await fetch(`${BASE_URL}${path}`, options);
  return res.json();
}

export async function getProjects() {
  return await request('/projects');
}

export async function getTasks(projectId) {
  return await request(`/projects/${projectId}/tasks`);
}

export async function updateTaskStatus(taskId, status) {
  return await request(`/tasks/${taskId}/status?status=${status}`, { method: 'PUT' });
}

export async function createTask(projectId, task) {
  return await request(`/projects/${projectId}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
}
