---
title: "Laravel - Search through Models using traits"
description: "A simple way to search through models using traits"
published: 2024/5/8
slug: "how-to-search-through-models-using-traits-in-laravel"
---

Searching through models is one of the important function when developing application. I will show you how to create simple yet powerful search through model using traits. Here's a step-by-step guide on how to achieve this:

1. Create `traits` folder

2. Create `Searchable.php`

You need to create file named `Searchable.php` under `traits` folder

```php
<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

trait Searchable
{
    public function scopeSearch($query, $search, array $searchable = null)
    {
        $search = trim($search); // Clean up white space
        $fields = $searchable ?: $this->searchable ?: [];

        return $query->where(function (Builder $query) use ($search, $fields) {
            foreach ($fields as $key => $field) {
                if (Str::contains($field, '.')) {
                    [$relationship, $relationshipField] = explode('.', $field);
                    $query->orWhereHas($relationship, function ($query) use ($relationshipField, $search) {
                        $query->where($relationshipField, 'like', "%$search%");
                    });
                } else {
                    $query->orWhere($field, 'like', "%$search%");
                }
            }
        })->latest();
    }
}
```

3. Use `Searchable` in Model

To use Searchable through model, you need to use the `searchable` traits and add `protected array $searchable = []` to search specific column. In addition, you may use dot notation to search the relationship.

```php
<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
   use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

   //  Searchable traits
   use Searchable;

   protected $guarded = [];

   protected $hidden = [
      'password',
      'remember_token',
   ];

   protected $casts = [
      'email_verified_at' => 'datetime',
      'password' => 'hashed',
   ];

   // List of searchable columns
   // Dot notation for relationships
   protected array $searchable = [
      'name',
      'email',

      // relationship.column,
   ];
}
```

4. Search through model

```php
User::search('Nathaniel')
   ->paginate();
```

### Conclusion

This practice provides a flexible that enables you to customize how you search models, and even define custom search aspects, such as searching an relationship.
