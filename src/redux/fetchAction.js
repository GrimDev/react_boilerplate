export default async (route, params, dispatch, loading, success, failure) => {
  try {
    dispatch(loading());
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const res = await fetch(`${route}`, {
      cache: 'default',
      credentials: 'same-origin',
      headers,
      ...params,
    });
    const response = await res.json();
    if (res.status !== 200 || response.error) {
      dispatch(failure(response));
      return;
    }
    dispatch(success(response));
  } catch (err) {
    dispatch(failure(err));
  }
};
