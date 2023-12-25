const snippets = [
  {
    id: "1",
    title: "Overwrite laravel eloquent builder.",
    description:
      "Overwriting builder query in laravel model to set some defaule conditions",
    snippets: [
      {
        language: "php",
        description:
          "The boot method in a Laravel Eloquent model is automatically called when the model is booted. By overriding this method, you can customize the query builder instance before any queries are executed.",
        code: `class User extends Model
{
    protected $table = 'users';

    protected static function boot()
    {
        parent::boot();

        // Add a global scope to apply default conditions
        static::addGlobalScope('active', function ($builder) {
            $builder->where('status', 'active');
        });
    }
}`,
      },
      {
        language: "php",
        description: "Usage",
        code: `// Example usage of the User model
$activeUsers = User::get(); // Retrieves only active users
$allUsers = User::withoutGlobalScope('active')->get(); // Retrieves all users without the default condition
`,
      },
    ],
    tags: ["laravel", "eloquent"],
  },
  {
    id: "2",
    title: "Find max value from a hashmap in rust.",
    description: "Finding max value from a hasmap",
    snippets: [
      {
        language: "rust",
        description: "codeeeeeeee",
        code: "code 1",
      },
      {
        language: "rust",
        description: "codeeeeeeee",
        code: "code 2",
      },
      {
        language: "rust",
        description: "codeeeeeeee",
        code: "code 3",
      },
    ],
    tags: ["hashmap", "rust"],
  },
  {
    id: "3",
    title: "Convert hashmap into vector.",
    description: "Convert a hasmap into a vector in rust",
    snippets: [
      {
        language: "rust",
        description: "codeeeeeeee",
        code: "code 1",
      },
      {
        language: "rust",
        description: "codeeeeeeee",
        code: "code 2",
      },
      {
        language: "rust",
        description: "codeeeeeeee",
        code: "code 3",
      },
    ],
    tags: ["hashmap", "rust", "vector"],
  },
]

export default snippets
