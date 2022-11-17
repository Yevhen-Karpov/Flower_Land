import { createAction } from "@reduxjs/toolkit";

export const deleteCollectionRequest = createAction(
  "collections/deleteCollectionRequest"
);
export const deleteCollectionSuccess = createAction(
  "collections/deleteCollectionSuccess"
);
export const deleteCollectionError = createAction(
  "collections/deleteCollectionError"
);
