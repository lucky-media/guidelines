---
title: PR Example
slug: version-control/pr-example
sidebar:
  order: 4
---

# Ticket Example: `Ordering`

Here's a step-by-step breakdown of how to handle a ticket called `Ordering`.

The client's requirements:

- Users can fill out a form to place an order.
- The form collects product/service, quantity, size, color, and other relevant info.
- Users can submit the form.
- Client-side validation checks that required fields are filled and formatted correctly.
- Server-side validation checks the data against business rules.
- Invalid data or failed submissions show error messages.
- A successful submission sends an order confirmation to the client.
- Users can check their order status and track progress.

Based on those requirements, here are the tasks:

1. **Task: Build the order form**
   - Design the form with fields for product/service, quantity, size, color, and anything else needed.

2. **Task: Implement form submission**
   - Set up the submission flow so order data gets sent to the server.

3. **Task: Add form validation**
   - Client-side: check required fields and format.
   - Server-side: validate against business rules.
   - Show error messages when validation fails.

4. **Task: Order confirmation message**
   - Show a confirmation message after a successful submission.

5. **Task: Order tracking**
   - Add a section where users can view their order status.
   - Fetch order data from the database or relevant system.

Once all tasks are done, users can place an order, see validation errors if something's wrong, get a confirmation when it goes through, and track their order status.
