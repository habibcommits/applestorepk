export function getAdminToken(): string | null {
  return localStorage.getItem("adminToken");
}

export function setAdminToken(password: string) {
  localStorage.setItem("adminToken", password);
}

export function clearAdminToken() {
  localStorage.removeItem("adminToken");
}

export async function adminApiRequest(
  method: string,
  url: string,
  data?: any
): Promise<any> {
  const token = getAdminToken();
  
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    credentials: "include",
  };

  if (data !== undefined) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (response.status === 401) {
    clearAdminToken();
    window.location.href = "/admin";
    throw new Error("Unauthorized");
  }

  if (response.status === 204) {
    return null;
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Request failed: ${response.statusText}`);
  }

  return response.json();
}

export function adminQueryFn({ queryKey }: { queryKey: readonly string[] }): Promise<any> {
  return adminApiRequest("GET", queryKey[0] as string);
}
