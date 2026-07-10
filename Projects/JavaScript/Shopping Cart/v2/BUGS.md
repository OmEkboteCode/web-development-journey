# Shopping Cart V2 - Bugs & Limitations

## Project
Shopping Cart V2

## Version
2.0

---

## Known Bugs

### 1. Non-numeric menu input
**Status:** Open

If the user enters text instead of a number in the main menu, `parseInt()` returns `NaN`. The program falls into the default case and displays "Invalid Option."

**Impact:**
Low

---

### 2. Non-numeric star input
**Status:** Open

If the user enters text when asked for the quality stars, `parseInt()` returns `NaN`.

The validation loop does not explicitly check for `NaN`.

**Impact:**
Medium

---

### 3. Non-numeric remove product input
**Status:** Open

If text is entered while selecting a product to remove, `parseInt()` returns `NaN`.

The validation does not explicitly check for `NaN`.

**Impact:**
Medium

---

## Current Limitations

- Price is always calculated as:
  ```
  stars × 100
  ```

- Duplicate product names are allowed.

- Products cannot be edited after being added.

- Checkout immediately clears the cart.

- No quantity support.

- Data is lost when the program exits.

---

## Future Improvements

- Better input validation.
- Quantity support.
- Custom product prices.
- Search products.
- Edit products.
- Local Storage (V3+).
- Graphical interface using the DOM.