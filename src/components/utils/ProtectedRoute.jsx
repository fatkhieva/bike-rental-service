import { Navigate, useLocation } from "react-router-dom";
import {
  selectUser,
  fetchCurrentUser,
} from "../../reducers/current-user-slice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { AppLocalStore } from "../../utils/app-local-store";

export const Protected = ({ element }) => {
  const [isChecking, setIsChecking] = useState(true);
  const location = useLocation();
  const userState = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = AppLocalStore.getToken();

    if (!userState.isLoggedIn && token) {
      dispatch(fetchCurrentUser()).then(() => {
        setIsChecking(false);
      });
    } else {
      setIsChecking(false);
    }
  }, [userState.isLoggedIn, dispatch]);

  const loginChecked = userState.isLoggedIn ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  return isChecking ? <div>Проверка пользователя...</div> : loginChecked;
};
