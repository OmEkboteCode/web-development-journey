# Shopping Cart V2 - Testing

## Project
Shopping Cart V2

## Version
2.0

---

# Test Cases

## Menu

### Test 1
Input:
```
1
```

Expected:
```
Open Add Product
```

Result:
✅ Passed

---

### Test 2
Input:
```
5
```

Expected:
```
Exit application
```

Result:
✅ Passed

---

### Test 3
Input:
```
10
```

Expected:
```
Invalid Option
```

Result:
✅ Passed

---

## Add Product

### Test 1

Input:
```
Product: Apple
Stars: 5
```

Expected:
```
Product added successfully
```

Result:
✅ Passed

---

### Test 2

Input:
```
Empty product name
```

Expected:
```
Ask user again
```

Result:
✅ Passed

---

### Test 3

Input:
```
Stars: 7
```

Expected:
```
Ask user again
```

Result:
✅ Passed

---

## View Cart

### Test 1

Condition:
```
Empty cart
```

Expected:
```
Cart is empty
```

Result:
✅ Passed

---

### Test 2

Condition:
```
Cart contains products
```

Expected:
```
Display all products
```

Result:
✅ Passed

---

## Remove Product

### Test 1

Condition:
```
Empty cart
```

Expected:
```
Cart is empty
```

Result:
✅ Passed

---

### Test 2

Condition:
```
Remove valid product
```

Expected:
```
Product removed successfully
```

Result:
✅ Passed

---

### Test 3

Condition:
```
Invalid product number
```

Expected:
```
Ask user again
```

Result:
✅ Passed

---

## Checkout

### Test 1

Condition:
```
Empty cart
```

Expected:
```
Cart is empty
```

Result:
✅ Passed

---

### Test 2

Condition:
```
Cart contains products
```

Expected:
- Display all products
- Calculate total
- Thank user
- Empty cart

Result:
✅ Passed

---

# Overall Result

| Feature | Status |
|---------|--------|
| Menu | ✅ Passed |
| Add Product | ✅ Passed |
| View Cart | ✅ Passed |
| Remove Product | ✅ Passed |
| Checkout | ✅ Passed |

---

## Conclusion

Shopping Cart V2 successfully meets all planned Module 6 objectives.

The project demonstrates practical use of:
- Functions
- Arrays of Objects
- Loops
- Conditionals
- Input Validation
- Modular program design