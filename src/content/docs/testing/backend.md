---
title: Backend
slug: testing/backend
sidebar:
  order: 2
---

# Backend Testing with Laravel: Building on a Foundation of Trust

Our Laravel backend testing ensures our projects run like well-oiled machines. We dive into unit tests, feature tests, and Pest tests, providing you with a robust backend that won't let you down.

## Importance of Backend Testing in Laravel

In the digital realm, trust is paramount. Backend testing in Laravel safeguards our applications, ensuring optimal performance, scalability, and overall reliability. Catching issues early allows us to deliver exceptional digital solutions that bolster trust and confidence.

## Unit, Feature, and Pest Tests in Laravel

### Unit Tests

Unit tests focus on small pieces of code or individual functions. They help us maintain code integrity and verify that tiny components work as intended. Create unit tests within the `tests/Unit` directory. Let's say we have a specific functionality where we calculate the discount for a specific product.

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

Feature tests check how different parts of an application interact. They are invaluable for ensuring that our software functions cohesively. Create feature tests within the `tests/Feature` directory.

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

Pest is a testing framework built on top of PHPUnit, offering a cleaner syntax and ease of use. Install Pest using Composer:

```bash
composer require pestphp/pest --dev
```

Once installed, Pest tests can be created alongside unit and feature tests. Pest tests are cleaner and more readable.

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
