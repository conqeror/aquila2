import createPersistedState from "use-persisted-state";
const useAuthTokenState = createPersistedState("authToken");

export const useAuthToken = () => {
  const [token, setToken] = useAuthTokenState<string>("");

  return {
    token,
    setToken,
  };
};
