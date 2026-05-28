---
title: Backend
slug: testing/backend
sidebar:
  order: 2
---

# Backend Testing with Laravel

Our Laravel backend tests cover unit tests, feature tests, and Pest tests. Here's what each one is, when to use it, and how to write it.

## Why Backend Testing Matters

Catching bugs in production is expensive. Catching them in tests is not. Backend testing in Laravel helps you verify that your code works correctly, keeps regressions from slipping through, and makes refactoring much less stressful.

## Unit Tests

Unit tests focus on a single function or small piece of logic in isolation. Put them in the `tests/Unit` directory.

Here's an example that tests a discount calculation:

```php
// Example of a simple unit test in Laravel
public function test_discount_for_product()
{
  $product = Product::factory()->create(); // generate a fake product
  $discounted_price = CalculateDiscount::run($product->price, $product->discount);
  $result = $product->price - ($product->price * ($product->discount/100));
  $this->assertEquals($result, $discounted_price);
}
```

### Feature Tests

Feature tests check how different parts of the app work together. They're useful for testing full request/response cycles. Put them in the `tests/Feature` directory.

```php
// Example of a simple feature test in Laravel
public function test_admin_can_view_patients_index()
{
    $this
        ->loginAs(Role::ADMIN)
        ->get(route('patients.index'))
        ->assertStatus(200)
        ->assertSessionHasNoErrors();
}
```

### Pest Tests

[Pest](https://pestphp.com/) is a testing framework built on top of PHPUnit. It uses a cleaner, more readable syntax. Install it with:

```bash
composer require pestphp/pest --dev
```

Pest tests live alongside your unit and feature tests. Here's the same feature test written in Pest:

```php
// Pest Test example
it('allows admin to view patients index', function () {
    $this
      ->loginAs(Role::ADMIN)
      ->get(route('patients.index'))
      ->assertStatus(200)
      ->assertSessionHasNoErrors();
}
```

The behavior is identical — it's just easier to read at a glance.