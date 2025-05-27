# Yummy UI

## TODO
- [x] Deploy to vercel
- [x] Connect DB
- [ ] Start mocking an app
- [ ] Dynamic pages 

## User Actions API

The application provides a set of server actions for managing customer data. These functions are located in `userActions.ts` and can be imported and used in client components.

### Available Actions

#### `addUser(phone: string)`

Adds a new user to the database with the provided phone number.

**Parameters:**
- `phone` (string): A 9-digit phone number

**Returns:**
- Object with:
  - `success` (boolean): Whether the operation was successful
  - `message` (string): Success message (if successful)
  - `error` (string): Error message (if unsuccessful)

**Example:**
```typescript
import { addUser } from "../../userActions";

// In an async function or component:
const result = await addUser("509322734");
if (result.success) {
  console.log(result.message); // "User added successfully."
} else {
  console.error(result.error); // Error message
}
```

#### `getUser(phone: string)`

Retrieves a user by their phone number.

**Parameters:**
- `phone` (string): The user's phone number

**Returns:**
- Object with:
  - `success` (boolean): Whether the operation was successful
  - `data` (object | null): User data if found, null otherwise
  - `error` (string): Error message (if unsuccessful)

**Example:**
```typescript
import { getUser } from "../../userActions";

// In an async function or component:
const result = await getUser("509322734");
if (result.success && result.data) {
  console.log(result.data); // User data
} else {
  console.log("User not found or error occurred");
}
```

#### `deleteUser(phone: string)`

Deletes a user by their phone number.

**Parameters:**
- `phone` (string): The user's phone number

**Returns:**
- Object with:
  - `success` (boolean): Whether the operation was successful
  - `message` (string): Success message (if successful)
  - `error` (string): Error message (if unsuccessful)

**Example:**
```typescript
import { deleteUser } from "../../userActions";

// In an async function or component:
const result = await deleteUser("509322734");
if (result.success) {
  console.log(result.message); // "User deleted successfully."
} else {
  console.error(result.error); // Error message
}
```

## Implementation Notes

- All user actions include error handling and input validation
- Phone numbers are validated to ensure they are 9-digit numbers
- The system checks for duplicate phone numbers when adding users
- All actions return standardized response objects with success/error information
