export const fetcher = async (resource: string, init?: RequestInit) => {
  try {
    const response = await fetch(resource, init);

    if (!response.ok) throw new Error(response.statusText);

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message, {
        cause: error,
      });
    }
  }
};
