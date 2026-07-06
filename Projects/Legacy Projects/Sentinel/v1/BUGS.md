# 🐞 Sentinel Prototype 0 - Known Bugs & Limitations

Version: Prototype 0

This file documents the known bugs and limitations discovered during development. These will be addressed in future versions.

---

## 1. parseInt() Validation

### Problem

Entering text such as:

abc

when selecting a submission number causes invalid behavior because `parseInt("abc")` returns `NaN`.

### Planned Fix

Create a reusable number validation function in Version 1 (Functions Module).

Priority: High

---

## 2. Already Reviewed Submissions Can Be Reviewed Again

### Problem

A submission that already contains a review can still be selected and reviewed again.

### Planned Fix

Before starting the review process, check whether the submission already contains a review.

If it does:

"This submission has already been reviewed."

Priority: High

---

## 3. Repeated Validation Code

### Problem

Creator name, reviewer name, title, description and comments all repeat nearly identical validation code.

### Planned Fix

Refactor using reusable validation functions.

Example:

- validateName()
- validateText()
- validateDecision()

Priority: Medium

---

## 4. Menu Repetition

### Problem

The menu and prompts are manually written.

### Planned Fix

Move repeated logic into reusable functions.

Priority: Low

---

## 5. Anonymous Review System Not Implemented

### Current

Creator names are stored and visible.

### Planned

Reviewers should only see anonymous identities.

Example:

Anonymous-001

Anonymous-002

Priority: Medium

---

## 6. No Authentication

### Current

Anyone can type any creator or reviewer name.

### Planned

Implement login and user accounts.

Creator and reviewer names should automatically come from the logged-in account.

Priority: Future

---

## 7. No Review Lock

### Current

A reviewer can review their own submission.

### Planned

Prevent self-review after authentication is implemented.

Priority: Future

---

## 8. No Review History

### Current

Each submission stores only one review.

### Planned

Support multiple reviewers and review history.

Priority: Future

---

## 9. Status System is Basic

### Current

Status is replaced directly with:

- APPROVE
- REJECT
- FURTHER REVIEW NEEDED

### Planned

Expand workflow:

Submitted

↓

Under Review

↓

Approved / Rejected / Further Review Needed

Priority: Future

---

## 10. No Search or Filtering

### Current

Users manually browse submissions.

### Planned

Add search by:

- Title
- Status
- Creator
- Reviewer

Priority: Future

---

## Notes

Prototype 0 intentionally focuses on learning JavaScript objects, arrays, loops, validation and workflow design.

Many advanced features have been intentionally postponed to keep the prototype small and manageable.