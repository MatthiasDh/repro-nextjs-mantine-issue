import { PropsWithChildren } from "react";

/**
 * Authentication guard to protect certain routes client-side from being shown to a user with insufficient permissions
 */

const AuthGuard = ({ children }: PropsWithChildren<{}>) => {
  return children;
};

export default AuthGuard;
