# Ticket Example: `Order`

Let's take a look how we will split up into smaller PR-s an `Order` ticket.

Here is a list of requirements that we have from the client:

- User should be able to fill out a form to place an order.
- Order form should include details such as product or service being ordered, quantity, size, color, and any other relevant details.
- User should be able to submit the order form.
- Order form data should be validated on the client-side to ensure that required fields are filled and conform to expected formats.
- Order form data should be validated on the server-side using input validation to ensure that required fields are filled and conform to business rules and constraints.
- Appropriate error messages should be displayed if the user enters invalid data or if the order submission fails.
- User should receive an order confirmation message after submitting a valid order.
- User should be able to view their order status and tracking information.

Based on the given requirements, the following tasks can be identified:

1. **Task: Create the order form**

   - Create a user-friendly form that enables users to place an order for a product or service
   - Add fields for product or service being ordered, quantity, size, color, and any other relevant details

2. **Task: Implement form submission**
   - Implement the form submission process so users can submit their orders
   - Configure the form submission to send the order data to a server-side script for processing
3. **Task: Validate the order form**

   - Validate the form data on the client-side to ensure that required fields are filled out and formatted properly.
   - Validate the form data on the server-side using input validation to ensure that required fields are filled out and conform to business rules and constraints.
   - Display appropriate error messages if the user enters invalid data, or if there are any issues with the order submission.

4. **Task: Order confirmation message**

   - Implement a message that confirms to the user that their order has been successfully submitted

5. **Task: Implement order tracking**
   - Create a section where users can view updates on their order status and tracking information.
   - Configure the order tracking feature to retrieve data from a database or other data system.

Each of the above tasks would need to be completed in order for the user to be able to fill out an order form, validate it, and receive confirmation of their order, as well as being able to track the status of their order at any time.
