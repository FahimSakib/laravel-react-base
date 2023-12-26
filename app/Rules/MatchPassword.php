<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Hash;

class MatchPassword implements ValidationRule
{
    private $storedPassword;

    public function __construct($storedPassword)
    {
        $this->storedPassword = $storedPassword;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!Hash::check($value, $this->storedPassword)) {
            $fail('The :attribute does not match.');
        }
    }
}
