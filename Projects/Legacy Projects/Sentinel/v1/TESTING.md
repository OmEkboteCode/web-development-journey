# 🧪 Sentinel Prototype 0 - Testing Checklist

Version: Prototype 0

---

## Submit Project

### Test 1
Input valid creator, title and description.

Expected:
- Project submitted successfully.
- Status is "Submitted".
- Submission stored in array.

Status:
✅ Pass

---

### Test 2
Leave creator name empty.

Expected:
- Program asks again.

Status:
✅ Pass

---

### Test 3
Leave title empty.

Expected:
- Program asks again.

Status:
✅ Pass

---

### Test 4
Leave description empty.

Expected:
- Program asks again.

Status:
✅ Pass

---

## Review Submission

### Test 5
Review an existing submission.

Expected:
- Review object created.
- Status updated.
- Success message displayed.

Status:
✅ Pass

---

### Test 6
Choose invalid submission number.

Expected:
- Program asks again.

Status:
✅ Pass

---

### Test 7
Enter invalid decision.

Expected:
- Program keeps asking until a valid decision is entered.

Status:
✅ Pass

---

### Test 8
Leave reviewer name empty.

Expected:
- Program asks again.

Status:
✅ Pass

---

### Test 9
Leave comment empty.

Expected:
- Program asks again.

Status:
✅ Pass

---

## View All Submissions

### Test 10
View a reviewed submission.

Expected:
- Displays:
  - Title
  - Description
  - Status
  - Reviewer
  - Decision
  - Comment

Status:
✅ Pass

---

### Test 11
View a submission that has not been reviewed.

Expected:
- Displays:
  "Not Reviewed Yet"

Status:
✅ Pass

---

## Menu

### Test 12
Enter an invalid menu option.

Expected:
- "Feature not implemented yet."

Status:
✅ Pass

---

## Known Failing Tests

### Test 13
Enter "abc" instead of a submission number.

Expected:
- Should ask again.

Current Result:
❌ Fails

Reason:
parseInt() returns NaN.

Planned Fix:
Version 1

---

### Test 14
Review the same submission twice.

Expected:
- Should prevent second review.

Current Result:
❌ Fails

Planned Fix:
Version 1