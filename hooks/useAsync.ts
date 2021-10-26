import { useEffect, useReducer, useState } from "react";

type AsyncResult =
  | {
      error: null;
      loading: true;
      data: null;
    }
  | {
      error: null;
      loading: false;
      data: unknown;
    }
  | {
      error: Error;
      loading: false;
      data: null;
    };

type State = {
  error: Error | null;
  loading: boolean;
  data: unknown | null;
};

type Action = {
  type: "error";
};

function reducer(state: State, action: Partial<State>): State {
  if (action.error) {
    return {
      data: null,
      error: action.error,
      loading: false,
    };
  } else if (action.loading) {
    return {
      data: null,
      error: null,
      loading: true,
    };
  } else {
    return {
      data: action.data,
      error: null,
      loading: false,
    };
  }
}

export function useAsync(endpoint: string) {
  const [state, dispatch] = useReducer(reducer, { data: null, error: null, loading: true });

  useEffect(() => {
    fetch(`/api/${endpoint}`)
      .then((res) => {
        dispatch({ data: res });
      })
      .catch((err) => {
        dispatch({ error: err });
      });
  }, [endpoint]);

  return state;
}
