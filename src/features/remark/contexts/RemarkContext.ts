import {createContext} from 'react';

export interface RemarkContextValue {
  remark?: Remark;
  setRemark: (remark: Remark) => void;
  error?: Error | string;
}

export const RemarkContext = createContext<RemarkContextValue | undefined>(
  undefined
);
