import { ExpenseAttachedFileInput, ExpenseType } from '../../../lib/graphql/types/v2/graphql';

export interface ExpenseItemFormValues {
  id?: string;
  incurredAt: Date;
  description: string;
  amount: number;
  url?: string;
  __isNew?: boolean;
}

/**
 * The values of the expense form, as stored by formik in `values`.
 * /!\ This object is not complete, we'll progressively add fields as we migrate the expense flow to TypeScript.
 */
export interface ExpenseFormValues {
  type: ExpenseType;
  description: string;
  longDescription: string;
  items: ExpenseItemFormValues[];
  attachedFiles: ExpenseAttachedFileInput[];
  payee: { id: string; name: string; type: string };
  privateMessage: string;
  invoiceInfo: string;
  currency: string;
  payeeLocation: { address: string; country: string };
  draft: Omit<ExpenseFormValues, 'draft'>;
}
