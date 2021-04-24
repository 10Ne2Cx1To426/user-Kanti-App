import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";

export const UseAuth = () => {
  const history = useHistory();

  const [loading, setLoadng] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoadng(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => {
          alert("ログインできません");
        })
        .finally(() => setLoadng(false));
    },
    [history]
  );

  return { login, loading };
};
